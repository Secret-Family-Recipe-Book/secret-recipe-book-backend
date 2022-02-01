const router = require("express").Router();
const Ingredients = require("./ingredients-model.js");
const { checkIngredientExists } = require("../middleware/middleware.js");


router.get("/", (req, res, next) => {
  Ingredients.findAll()
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(next);
});


router.get("/:id", checkIngredientExists, (req, res, next) => {
  Ingredients.findById(req.params.id)
    .then(ingredient => {
      res.status(200).json(ingredient);
    })
    .catch(next);
});

router.put("/:id", checkIngredientExists, (req, res, next) => {
  Ingredients.update(req.params.id, req.body)
    .then(ingredient => {
      res.status(201).json(ingredient);
    })
    .catch(next);
});


router.delete("/:id", checkIngredientExists, (req, res, next) => {
  Ingredients.remove(req.params.id)
    .then(ingredient => {
      res.status(200).json(ingredient);
    })
    .catch(next);
});

module.exports = router;
