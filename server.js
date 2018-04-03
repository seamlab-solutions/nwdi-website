const express = require('express')
const app = express()
var body_parser = require('body-parser')
var DB = require('./db')

app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }));

var rows = []

app.post('/online-result', function (req, res) {
    DB.execute("SELECT * FROM datacenter WHERE abbrev = '" + req.body.patient_number + "'").then(rows => {
        if(rows.length) {
            DB.execute("SELECT CAST(rendate AS DATE) AS TransactionDate, resultcateg AS ResultCategory, trackno FROM patitem WHERE dcno = '" + rows[0].dcno + "' AND resultcateg <> '(NONE)' GROUP BY rendate, resultcateg, trackno").then(rows => {
                if(rows.length) {
                    res.json(rows)
                }
            })
        } else {
            res.json({status: 'Invalid Login'})
        }
    })
    /*
    DB.execute("SELECT * FROM accesses WHERE code = '" + req.body.patient_number + "'").then(rows => {
        if(rows.length) {
            var accesses = rows[0]
            if(accesses.password == 'password') {
                DB.execute("SELECT * FROM vwPatientResult WHERE dcno = '254339'", 'website').then(rows => {
                    res.json(rows)
                })
            } else {
                res.json({status: 'Invalid Login'})
            }
        }
    })
    */
})
app.get('/online-result/:trackno', function (req, res) {
    DB.execute("SELECT * FROM PatientResult WHERE trackno = '" + req.params.trackno + "'", 'website').then(rows => {
        res.send(rows[0].result);
    })
})

app.use(express.static('ui'))
app.listen(3000, () => console.log('Seamless ERP listening on port 3000!'))