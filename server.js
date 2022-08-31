const express = express()
const port = 3000
const app = express()


app.get("/fruits/", (req, res) => {
    res.send(fruits)
})


app.listen(3000, () => {
    console.log("listening")
})