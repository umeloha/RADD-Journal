const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

const errorMsg = {"error: ": "Invalid site name"}

app.get('/', (req, res) => {
    try {
        res.statusCode = 200;
        res.send('RADD-Journal!')
    } catch (error) {
        res.statusCode = 404;    
        res.send(error + " " + statusCode + errorMsg)
    }
  
})



//exporting
module.exports = app
