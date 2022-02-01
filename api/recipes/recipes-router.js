const router = require("express").Router();
const Recipes = require("./recipes-model.js");
const Ingredients = require("../ingredients/ingredients-model.js");
const Instructions = require("../instructions/instructions-model.js");
const {
  checkUserExists,
  checkRecipeExists,
} = require("../middleware/middleware.js");


router.get("/", (req, res, next) => {
  Recipes.findAll()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(next);
});


router.get("/:id", checkRecipeExists, (req, res, next) => {
  const { id } = req.params;
  Recipes.findById(id)
    .then(recipe => {
      Ingredients.findByRecipeId(recipe.id)
        .then(ingredients => {
          Instructions.findByRecipeId(recipe.id)
            .then(instructions => {
              res.status(200).json({
                ...recipe,
                ingredients: ingredients,
                instructions: instructions,
              });
            })
            .catch(next);
        })
        .catch(next);
    })
    .catch(next);
});


router.put("/:id", checkRecipeExists, (req, res, next) => {
  Recipes.update(req.params.id, req.body)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(next);
});


router.delete("/:id", checkRecipeExists, (req, res, next) => {
  Recipes.remove(req.params.id)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(next);
});


router.get("/users/:id", checkUserExists, (req, res, next) => {
  Recipes.findByUserId(req.params.id)
    .then(recipes => {
      recipes.forEach( recipe => {
        Recipes.findById(recipe.id)
        .then(recipe => {
          Ingredients.findByRecipeId(recipe.id)
            .then(ingredients => {
              Instructions.findByRecipeId(recipe.id)
                .then(instructions => {
                  recipes[recipe.id - 1] = {
                    ...recipe,
                    ingredients: ingredients,
                    instructions: instructions,
                  }});
                })
                .catch(next);
            })
            .catch(next);
        })
        .catch(next);
      res.status(200).json(recipes)
      })
    .catch(next);
});


router.post("/users/:id", checkUserExists, (req, res, next) => {
  const newRecipe = { ...req.body, user_id: req.params.id };
  Recipes.add(newRecipe)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(next);
});


router.post("/:id/ingredient", checkRecipeExists, (req, res, next) => {
  const newIngredient = { ...req.body, recipe_id: req.params.id };
  Ingredients.add(newIngredient)
    .then(ingredient => {
      res.status(201).json(ingredient);
    })
    .catch(next);
});


router.post("/:id/instruction", checkRecipeExists, (req, res, next) => {
  const newInstruction = { ...req.body, recipe_id: req.params.id };
  Instructions.add(newInstruction)
    .then(instruction => {
      res.status(201).json(instruction);
    })
    .catch(next);
});

module.exports = router;
