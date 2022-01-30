const router = require("express").Router();
const Users = require("./users-model.js");
const { checkUserExists } = require("../middleware/middleware.js");

// GET -- all users
router.get("/", (req, res, next) => {
  Users.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

// GET -- user by id
router.get("/:id", checkUserExists, (req, res, next) => {
  Users.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});


// PUT -- update user
router.put("/:id", checkUserExists, (req, res, next) => {
  Users.update(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});
// DEL -- delete user
router.delete("/:id", checkUserExists, (req, res, next) => {
  Users.remove(req.params.id)
    .then((deletedUser) => {
      res.status(200).json(deletedUser);
    })
    .catch(next);
});

module.exports = router;
