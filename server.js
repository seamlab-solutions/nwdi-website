const express = require('express')
const app = express()
var body_parser = require('body-parser')
var DB = require('./db')

app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }));

var rows = []

app.post('/online-result', function (req, res) {
    let patient_number = req.body.patient_number;

    DB.execute("SELECT dcno FROM datacenter WHERE abbrev IN (';" + patient_number.replace('-', '=') + "?', '" + patient_number + "')").then(rows => {
        if(rows.length) {
            DB.execute("SELECT * FROM patinv WHERE dcno = '" + rows[0].dcno + "' AND pattranno='" + req.body.transaction_number + "'").then(rows => {
                if(rows.length) {
                    DB.execute("SELECT CAST(rendate AS DATE) AS TransactionDate, resultcateg AS ResultCategory, trackno FROM patitem WHERE dcno = '" + rows[0].dcno + "' AND resultcateg <> '(NONE)' GROUP BY rendate, resultcateg, trackno").then(rows => {
                        if(rows.length) {
                            res.json(rows)
                        } else {
                            res.json({status: 'Invalid Login'})
                        }
                    })
                } else {
                    res.json({status: 'Invalid Login'})
                }
            })
        } else {
            res.json({status: 'Invalid Login'})
        }
    })
})

app.get('/online-result/:trackno', function (req, res) {
    DB.execute("SELECT * FROM PatientResult WHERE trackno = '" + req.params.trackno + "'", 'website').then(rows => {
        res.send(rows[0].result);
    })
})

app.use(express.static('ui'))

var https = require('https');
var http = require('http');
var fs = require('fs');

var options = {
    pfx: fs.readFileSync('./nwdi.pfx'),
    passphrase: 'P@sst0SSL'
};


var listener = https.createServer(options, app).listen(443, function () {
    console.log('Express HTTPS server listening on port ' + listener.address().port);
})

http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);