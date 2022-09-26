require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const { conecction } = require('./config/conecction')

app.use(cors())
app.use(express.json())

app.use("/api", require("./routes"))



const port = 3001
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})


conecction()