require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// ROUTERS
const UsersRouter = require("./users/users-router.js");
const AuthRouter = require("./auth/auth-router.js");
const { restricted } = require("./middleware/middleware.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// ENDPOINTS
server.use("/api/auth", AuthRouter);
server.use("/api/users", restricted, UsersRouter);

// CATCH ALL
server.use((err, req, res) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;

