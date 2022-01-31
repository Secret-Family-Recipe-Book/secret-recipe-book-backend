const db = require("../../data/db-config.js");

const findAll = () => {
  return db("recipes as r")
    .join("categories as c", "c.id", "r.category_id")
    .select("*");
};

const findById = (id) => {
  return db("recipes").where("id", id).select("*").first();
};

const findByUserId = (user_id) => {
  return db("recipes").where("user_id", user_id);
};

const add = async (recipe) => {
  const [newRecipe] = await db("recipes").insert(recipe, "*");
  return newRecipe;
};

const update = async (id, recipe) => {
  const [updatedRecipe] = await db("recipes")
    .where("id", id)
    .update(recipe, "*");
  return findByUserId(updatedRecipe.user_id);
};

const remove = async (id) => {
  const [deletedRecipe] = await db("recipes").where("id", id).del("*");
  return `${deletedRecipe.recipe_name} has been deleted`;
};

module.exports = {
  findAll,
  findById,
  findByUserId,
  add,
  update,
  remove,
};
