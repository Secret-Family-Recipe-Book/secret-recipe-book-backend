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



module.exports = server;

