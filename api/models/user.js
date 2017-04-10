var mongoose  = require('mongoose'),
    bcrypt    = require('bcrypt-nodejs'),
    Challenge = require('./challenge')

// =========================================================================
// ========== Picture Schema ===============================================
// =========================================================================

var Picture = mongoose.Schema({
  url: String,
  description: String,
  challenge: {
    type: mongoose.Schema.ObjectId, ref: 'Challenge'
  }
})

module.exports = mongoose.model('Picture', Picture)

// =========================================================================
// ========== User Schema ===============================================
// =========================================================================

var User = mongoose.Schema({
  username: String,
  local : {
    email        : String,
    password     : String,
  },
  facebook         : {
    id           : String,
    token        : String,
    email        : String,
    name         : String
  },
  points: Number,
  pictures: [Picture]
});

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);
