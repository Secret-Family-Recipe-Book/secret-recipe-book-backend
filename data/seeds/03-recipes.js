exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "cereal",
          recipe_source: "Dad",
          category_id: 1,
          user_id: 1,
        },
        {
          recipe_name: "toast",
          recipe_source: "Mom",
          category_id: 1,
          user_id: 2,
        },
        {
          recipe_name: "soup",
          recipe_source: "Grandmother",
          category_id: 2,
          user_id: 3,
        },
        {
          recipe_name: "sandwich",
          recipe_source: "Mom",
          category_id: 2,
          user_id: 1,
        },
        {
          recipe_name: "spaghetti",
          recipe_source: "Mom",
          category_id: 3,
          user_id: 2,
        },
        {
          recipe_name: "nachos",
          recipe_source: "Pops",
          category_id: 3,
          user_id: 3,
        },
        {
          recipe_name: "cake",
          recipe_source: "Mom",
          category_id: 4,
          user_id: 1,
        },
        {
          recipe_name: "soda",
          recipe_source: "Mom",
          category_id: 4,
          user_id: 2,
        },
        {
          recipe_name: "granola bar",
          recipe_source: "Uncle Ralph",
          category_id: 5,
          user_id: 3,
        },
        {
          recipe_name: "protein shake",
          recipe_source: "Mom",
          category_id: 5,
          user_id: 1,
        },
      ]);
    });
};
