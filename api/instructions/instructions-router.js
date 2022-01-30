const router = require("express").Router();
const Instructions = require("./instructions-model.js");
const { checkInstructionExists } = require("../middleware/middleware.js");


router.get("/", (req, res, next) => {
  Instructions.findAll()
    .then((instructions) => {
      res.status(200).json(instructions);
    })
    .catch(next);
});


router.get("/:id", checkInstructionExists, (req, res, next) => {
  Instructions.findById(req.params.id)
    .then((instruction) => {
      res.status(200).json(instruction);
    })
    .catch(next);
});


router.put("/:id", checkInstructionExists, (req, res, next) => {
  Instructions.update(req.params.id, req.body)
    .then((instruction) => {
      res.status(201).json(instruction);
    })
    .catch(next);
});


router.delete("/:id", checkInstructionExists, (req, res, next) => {
  Instructions.remove(req.params.id)
    .then((instruction) => {
      res.status(200).json(instruction);
    })
    .catch(next);
});

module.exports = router;
