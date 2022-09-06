const express = require('express')
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const cors = require("cors")



dotenv.config();

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true},
  ()=>console.log("connect to db")
)
// connect to db

const path = require('path')
const app = express()
const port = 3000


//app.use(express.static(path.join(__dirname,'public')))






// Import routes
const userRoutes = require("./routes/user")
// Import routes
const usertypeRoutes = require("./routes/usertype")

// Middlewaress
app.use(express.json())
app.use(cors())

// route Middlewares
 app.use("/api/users",userRoutes)

 app.use("/api/userstype",usertypeRoutes)

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'screen/login.html'))
}) 

app.get('/about', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'index.html'))
  })
  app.get('/public', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'screen/dashboard.html'))
  })
  app.get('/userlist', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'screen/userlist.html'))
  })
  app.get('/agentuserlist', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'screen/agentuserlist.html'))
  })
  app.get('/brokeruserlist', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'screen/brokeruserlist.html'))
  })
  app.get('/builderuserlist', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'screen/builderuserlist.html'))
  })
  app.get('/vendorsuserlist', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'screen/vendorsuserlist.html'))
  })
  app.get('/visitoruserlist', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'screen/visitoruserlist.html'))
  })
  app.get('/dist/img', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'dist/img'))
  })
  app.get('/dist/img/user2-160x160.jpg', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'dist/img/user2-160x160.jpg'))
  })

  app.get('/dist/img/user3-128x128.jpg', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'dist/img/user3-128x128.jpg'))
  })

  app.get('/dist/img/user4-128x128.jpg', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'dist/img/user4-128x128.jpg'))
  })

  
  app.get('/bower_components/Ionicons/css/ionicons.min.css', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/Ionicons/css/ionicons.min.css'))
  })

  app.get('/bower_components/chart.js/Chart.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/chart.js/Chart.js'))
  })

  app.get('/dist/css/skins/_all-skins.min.css', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'dist/css/skins/_all-skins.min.css'))
  })

  app.get('/bower_components/morris.js/morris.css', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/morris.js/morris.css'))
  })

  
  app.get('/bower_components/jvectormap/jquery-jvectormap.css', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/jvectormap/jquery-jvectormap.css'))
  })

  app.get('/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css'))
  })

  app.get('/bower_components/bootstrap-daterangepicker/daterangepicker.css', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/bootstrap-daterangepicker/daterangepicker.css'))
  })

  
  app.get('/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'))
  })

    
  app.get('/bower_components/jquery/dist/jquery.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/jquery/dist/jquery.min.js'))
  })
  
  app.get('/bower_components/jquery-ui/jquery-ui.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/jquery-ui/jquery-ui.min.js'))
  })

  app.get('/bower_components/bootstrap/dist/js/bootstrap.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/bootstrap/dist/js/bootstrap.min.js'))
  })



    
  app.get('/bower_components/raphael/raphael.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/raphael/raphael.min.js'))
  })

  app.get('/bower_components/morris.js/morris.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/morris.js/morris.min.js'))
  })


  app.get('/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/jquery-sparkline/dist/jquery.sparkline.min.js'))
  })

  app.get('/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'plugins/jvectormap/jquery-jvectormap-1.2.2.min.js'))
  })
  app.get('/plugins/jvectormap/jquery-jvectormap-world-mill-en.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'plugins/jvectormap/jquery-jvectormap-world-mill-en.js'))
  })


  app.get('/bower_components/jquery-knob/dist/jquery.knob.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/jquery-knob/dist/jquery.knob.min.js'))
  })

  app.get('/bower_components/moment/min/moment.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/moment/min/moment.min.js'))
  })



  
  app.get('/bower_components/bootstrap-daterangepicker/daterangepicker.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/bootstrap-daterangepicker/daterangepicker.js'))
  })


  
  
  app.get('/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'))
  })
  app.get('/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js'))
  })


  app.get('/bower_components/jquery-slimscroll/jquery.slimscroll.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/jquery-slimscroll/jquery.slimscroll.min.js'))
  })


  
  app.get('/bower_components/fastclick/lib/fastclick.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'bower_components/fastclick/lib/fastclick.js'))
  })

  app.get('/dist/js/adminlte.min.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'dist/js/adminlte.min.js'))
  })

  app.get('/dist/js/pages/dashboard.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'dist/js/pages/dashboard.js'))
  })

  app.get('/dist/js/demo.js', (req, res) => {
    // res.send('Hello World! about')
    res.sendFile(path.join(__dirname, 'dist/js/demo.js'))
  })
  

  app.get('/api',(req,res)=>{
    res.json({"status":true,"message":"this api run succssfully"})
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})