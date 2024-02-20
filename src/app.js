const express = require('express')
require('./db/mongoose')
const cors = require('cors');
const userRouter = require('./routers/user')
const productRouter = require('./routers/product')

const app = express()

app.use(cors());
app.use(express.json())
app.use(userRouter)
app.use(productRouter)

module.exports = app
