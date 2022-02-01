const db = require("../../data/dbConfig");

const findAll = () => {
  return db("ingredients");
};

const findById = (id) => {
  return db("ingredients").where("id", id).first();
};

const findByRecipeId = (recipe_id) => {
  return db("ingredients").where("recipe_id", recipe_id);
};

const findByStepId = (step_number) => {
  return db("ingredients").where("step_number", step_number).andWhere("recipe_id", recipe_id);
};

const add = async (ingredient) => {
  const [newIngredient] = await db("ingredients").insert(ingredient, "*");
  return findByRecipeId(newIngredient.recipe_id);
};

const update = async (id, ingredient) => {
  const [updatedIngredient] = await db("ingredients", "*")
    .where("id", id)
    .update(ingredient, "*");
  return findByRecipeId(updatedIngredient.recipe_id);
};

const remove = async (id) => {
  const [deletedIngredient] = await db("ingredients").where("id", id).del("*");
  return `${deletedIngredient.ingredient_name} has been deleted`;
};

module.exports = {
  findAll,
  findById,
  findByRecipeId,
  findByStepId,
  add,
  update,
  remove,
};
