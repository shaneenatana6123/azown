const express = require("express")
const connectToMongo = require("./db/connect")
 const cors = require("cors")
connectToMongo()
const app = express()
const port = 5000

app.use(express.json({limit:'50mb'}))
app.use(cors())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/property', require('./routes/property'))
app.use('/api/admin',require('./routes/admin'))
app.use('/api/service',require('./routes/service'))
app.use('/api/leadprop',require('./routes/leadprop'))
app.use('/api/handler',require('./routes/handler'))
app.use('/api/likes',require('./routes/likeprop'))

app.listen(port,()=>{
    console.log(`server is run on ${port}`);
})