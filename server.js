const express = require('express')
const app = express()
const port = 3000
const drinks = require('./models/drinks')
const food = require('./models/food')



app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})
// app.get('/drinks', (req, res) => {
//     res.send(drinks)
// })
app.get("/drinks", (req, res) => {
    res.render('drinks_index.ejs', {
        drinks, food
    });
});

app.get("/drinks/:id", (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
    });
});
app.get("/food/:id", (req, res) => {
    res.render('food_show.ejs', {
        food: food[req.params.id],
    });
});
app.listen(port)
console.log('up and running in port', port)