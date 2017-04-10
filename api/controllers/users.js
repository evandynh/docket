var User = require('../models/user')

// INDEX
function index(req, res){
  User.find({}, function(err, users){
    if(err) throw err
    res.json(users)
  })
}

// Create
function create(req, res){
  var user = new User(req.body)
  user.save(function(err, user){
    if(err) throw err
    res.json({message: "User successfully created!", user: user})
  })
}

//Update
function update(req, res){
  var id = req.params.id

  User.findById(id, function(err, user){
    if(err) throw err

    if(req.body.username) user.username = req.body.username

    user.save(function(err){
      if(err) throw err
      res.json({message: "User successfully updated", user: user})
    })
  })
}

// Destroy
function destroy(req, res){
  var id = req.params.id

  User.remove({_id: id}, function(err){
    if(err) throw err
    res.json({message: "User was successfully deleted!"})
  })
}

module.exports = {
  index: index,
  create: create,
  update: update,
  destroy: destroy
}
