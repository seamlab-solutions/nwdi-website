var Connection = require('tedious').Connection
var Request = require('tedious').Request;

module.exports = class DB {
    static execute(query, connection_name = 'bizbox') {
        return new Promise((resolve, reject) => {
            var config = {
                userName: 'sa',
                password: 's@password1',
                server: '192.168.2.250',
                options: {
                    database: 'Bizbox_HS7'
                }
            }

            if(connection_name == 'website') {
                config.options.database = 'NWL_Website'
            }

            var connection = new Connection(config)
            connection.on('connect', function(err) {
                var request = new Request(query, function(error, rowCount) {
                    if (error) {
                        reject(error)
                    }
                });
    
                request.on('row', function(columns) {
                    let temp_rows = {}
                    columns.forEach(function(column) {
                        temp_rows[column.metadata.colName] = column.value
                    });
                    this.rows.push(temp_rows)
                });
    
                request.on('requestCompleted', function () {
                    resolve(this.rows)
                });
    
                connection.execSql(request)
            });
        })
    }
}