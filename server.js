const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})
app.get('/drinks', (req, res) => {
    res.send(drinks)
})
module.exports = drinks

app.listen(port)
console.log('up and running in port', port)