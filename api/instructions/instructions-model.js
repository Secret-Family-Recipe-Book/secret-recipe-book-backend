const db = require("../data/db-config.js");

const findAll = () => {
  return db("instructions");
};

const findById = (id) => {
  return db("instructions").where("id", id).first();
};

const findByRecipeId = async (recipe_id) => {
  return db("instructions").where("recipe_id", recipe_id);
};

const add = async (instruction) => {
  const [newInstruction] = await db("instructions").insert(instruction, "*");
  return findByRecipeId(newInstruction.recipe_id);
};

const update = async (id, instruction) => {
  const [updatedInstruction] = await db("instructions")
    .where("id", id)
    .update(instruction, "*");
  return findByRecipeId(updatedInstruction.recipe_id);
};

const remove = async (id) => {
  const [deletedInstruction] = await db("instructions")
    .where("id", id)
    .del("*");
  return ` ${deletedInstruction.step_number} has been deleted`;
};

module.exports = {
  findAll,
  findById,
  findByRecipeId,
  add,
  update,
  remove,
};
