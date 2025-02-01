// console.log('Index js is running')
require('dotenv').config()
const express = require('express')
const app = express()
const {router}=require('./Router/routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api/mail',router)

const port=process.env.PORT

app.listen(port,()=>{
    console.log('Server Listening on Port',port)
})