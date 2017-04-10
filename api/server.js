var express      = require('express'),
    app          = express(),
    mongoose     = require('mongoose'),
    morgan       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser')

require('dotenv').config()

mongoose.connect('mongodb://localhost/madcap');

// =========================================================================
// ========== MIDDLEWARE ===============================================
// =========================================================================
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));


// =========================================================================
// ========== ROUTES ===============================================
// =========================================================================
var userRoutes = require('./config/routes');

app.use('/users', userRoutes);

// =========================================================================
// ========== PORT ===============================================
// =========================================================================
var port = process.env.PORT || 3000

app.listen(port, function(req, res){
  console.log('Madcap api running on port: ', port)
})
