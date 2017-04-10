var mongoose  = require('mongoose'),
    Picture   = require('./user')

// =========================================================================
// ========== Challenge Schema ===============================================
// =========================================================================

var Challenge = mongoose.Schema({
  title: String,
  points: Number,
  pictures: {
    type: mongoose.Schema.ObjectId,
    ref: 'Picture'
  }
})

module.exports = mongoose.model('Challenge', Challenge)
