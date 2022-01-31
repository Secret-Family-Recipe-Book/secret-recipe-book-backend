
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: "cereal", recipe_id: 1, quantity: .5 },
        { ingredient_name: "milk", recipe_id: 1, quantity: .5 },
        { ingredient_name: "bread", recipe_id: 2, quantity: .5 },
        { ingredient_name: "bread", recipe_id: 4, quantity: .5 },
        { ingredient_name: "condiment", recipe_id: 4, quantity: .5 },
        { ingredient_name: "canned soup", recipe_id: 3, quantity: .5 },
        { ingredient_name: "mayonnaise", recipe_id: 4, quantity: .5 },
        { ingredient_name: "mustard", recipe_id: 4, quantity: .5 },
        { ingredient_name: "protein", recipe_id: 4, quantity: .5 },
        { ingredient_name: "cheese", recipe_id: 4, quantity: .5 },
        { ingredient_name: "lettuce", recipe_id: 4, quantity: .5 },
        { ingredient_name: "onion", recipe_id: 4, quantity: .5 },
        { ingredient_name: "spaghetti", recipe_id: 5, quantity: .5 },
        { ingredient_name: "pasta sauce", recipe_id: 5, quantity: .5 },
        { ingredient_name: "parmesan cheese", recipe_id: 5, quantity: .5 },
        { ingredient_name: "tortilla chips", recipe_id: 6, quantity: .5 },
        { ingredient_name: "protein", recipe_id: 6, quantity: .5 },
        { ingredient_name: "black beans", recipe_id: 6, quantity: .5 },
        { ingredient_name: "salsa", recipe_id: 6, quantity: .5 },
        { ingredient_name: "sour cream", recipe_id: 6, quantity: .5 },
        { ingredient_name: "guacamole", recipe_id: 6, quantity: .5 },
        { ingredient_name: "cake", recipe_id: 7, quantity: .5 },
        { ingredient_name: "soda", recipe_id: 8, quantity: .5 },
        { ingredient_name: "granola bar", recipe_id: 9, quantity: .5 },
        { ingredient_name: "protein powder", recipe_id: 10, quantity: .5 },
        { ingredient_name: "ice", recipe_id: 10, quantity: .5 },
        { ingredient_name: "water", recipe_id: 10, quantity: .5 },
        { ingredient_name: "fruit", recipe_id: 10, quantity: .5 },
      ]);
    });
};
