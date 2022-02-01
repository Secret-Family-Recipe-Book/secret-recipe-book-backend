require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// ROUTERS
const UsersRouter = require("./users/users-router.js");
const AuthRouter = require("./auth/auth-router.js");
const RecipeRouter = require("./recipes/recipes-router")
const IngredientRouter = require("./ingredients/ingredients-router")
const InstructionRouter = require("./instructions/instructions-router")
const { restricted } = require("./middleware/middleware.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// ENDPOINTS
server.use("/api/auth", AuthRouter);
server.use("/api/users", restricted, UsersRouter);
server.use("/api/recipes", restricted, RecipeRouter);
server.use("/api/ingredients", restricted, IngredientRouter);
server.use("/api/instructions", restricted, InstructionRouter);

// CATCH ALL
server.use('*', (req, res, next) => {
  next({ status: 404, message: 'not found!' })
})

server.use((err, req, res, next) => { 
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;

