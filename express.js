const express = require('express')
const app = express()
app.use(express.static('ui'))
app.listen(3000, () => console.log('Seamless ERP listening on port 3000!'))