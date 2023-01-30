const express = require("express")
const connectToMongo = require("./db/connect")
 const cors = require("cors")
connectToMongo()
const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

// Available Routes
app.use('/auth', require('./routes/auth'))
app.use('/property', require('./routes/property'))
app.use('/admin',require('./routes/admin'))
app.use('/service',require('./routes/service'))
app.use('/leadprop',require('./routes/leadprop'))
app.use('/handler',require('./routes/handler'))

app.listen(port,()=>{
    console.log(`server is run on ${port}`);
})