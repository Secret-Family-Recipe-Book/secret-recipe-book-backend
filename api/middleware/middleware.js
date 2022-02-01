const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets/index");

const Users = require("../users/users-model.js");
const Recipes = require("../recipes/recipes-model.js");
const Ingredients = require("../ingredients/ingredients-model.js");
const Instructions = require("../instructions/instructions-model.js");


const checkUniqueUsername = (req, res, next) => {
  let user = req.body;
  
  Users.findByUsername(user.username)
    .then(existingUser => {
      if (existingUser) {
        res.status(401).json("Username already exists");
      } else {
        next();
      }
    })
    .catch(next);
};

const checkUniqueEmail = (req, res, next) => {
  let user = req.body;

  Users.findByEmail(user.email)
    .then(existingUser => {
      if(existingUser) {
        res.status(401).json("Email already exists");
      } else {
        next()
      }
    })
    .catch(next)
}

const checkRegistrationFields = (req, res, next) => {
  let user = req.body;
  if (!user.username || !user.password || !user.email) {
    res.status(401).json("All fields are required!");
  } else {
    next();
  }
};


const checkIfUsernameExists = (req, res, next) => {
  
  Users.findByUsername(req.body.username)
    .then(savedUser => {
      if (savedUser) {
        next();
      } else {
        res.status(401).json("Invalid credentials");
      }
    })
    .catch(next);
};


const makeToken = (user) => {
  const payload = {
    subject: user.user_id,
    username: user.username,
    email: user.email,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, JWT_SECRET, options);
};


const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json("A token is required");
  } else {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(403).json("Token is invalid " + err.message);
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  }
};


const checkUserExists = (req, res, next) => {
  
  Users.findById(req.params.id)
    .then(user => {
      if (!user) {
        res.json({ message: "user does not exist" });
      } else {
        next();
      }
    })
    .catch(next);
};


const checkRecipeExists = (req, res, next) => {
  
  Recipes.findById(req.params.id)
    .then(recipe => {
      if (!recipe) {
        res.json({ message: "Can not find recipe" });
      } else {
        next();
      }
    })
    .catch(next);
};


const checkInstructionExists = (req, res, next) => {
  
  Instructions.findById(req.params.id)
    .then(instruction => {
      if (!instruction) {
        res.json({ message: "that step cannot be found" });
      } else {
        next();
      }
    })
    .catch(next);
};


const checkIngredientExists = (req, res, next) => {
  
  Ingredients.findById(req.params.id)
    .then(ingredient => {
      if (!ingredient) {
        res.json({ message: "that ingredient cannot be found" });
      } else {
        next();
      }
    })
    .catch(next);
};

module.exports = {
  checkRegistrationFields,
  checkUniqueUsername,
  checkUniqueEmail,
  checkIfUsernameExists,
  makeToken,
  restricted,
  checkUserExists,
  checkRecipeExists,
  checkInstructionExists,
  checkIngredientExists,
};
