const router = require('express').Router();
const {checkRequestBody} = require("./auth-middleware");
const { JWT_SECRET, BCRYPT_ROUNDS } = require("../secrets");
const Users = require("../users/users-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post('/register', checkRequestBody, (req, res, next) => {
  let newUser = req.body;

  Users.findByName(newUser.username)
    .then(user => {
      if(user.length === 0){
        const hash = bcrypt.hashSync(newUser.password, BCRYPT_ROUNDS)
        newUser.password = hash

        Users.add(newUser)
          .then(savedUser => {
            res.status(201).json(savedUser)
          })
          .catch(e => {
            res.status(500).json(`Server error: ${e}`)
          }) 
      } else {
        res.status(401).json({message:"username taken"})
      }
    })
    .catch(e => {
      res.status(500).json(`Server error: ${e}`)
    })
});

router.post('/login', checkRequestBody, (req, res) => {
  let { username, password } = req.body
  
  Users.findByName(username)
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = makeToken(user)
        res.status(200).json({ 
          message: `welcome, ${user.username}`,
          token 
        })
      } else {
        res.status(401).json({message: 'invalid credentials' })
      }
    })
    .catch(e => {
      res.status(500).json(`Server error: ${e}`)
    })
});

function makeToken(user){
  const payload = {
    subject: user.id,
    username: user.username,
    role_name: user.role_name
  }
  const options = {
    expiresIn: "1d"
  }
  return jwt.sign(payload,JWT_SECRET,options)
}

module.exports = router;
