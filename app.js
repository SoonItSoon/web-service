const express = require('express')
const app = express()
const port = 4000

function handleListening() {
    console.log(`App Listening at http:/localhost:${port}`)
}

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, handleListening)