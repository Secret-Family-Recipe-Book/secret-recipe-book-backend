exports.seed = function (knex) {

  return knex("categories")
    .del()
    .then(function () {
      return knex("categories").insert([
        { category_name: "breakfast" },
        { category_name: "lunch" },
        { category_name: "dinner" },
        { category_name: "dessert" },
        { category_name: "snack" },
        { category_name: "beverage"}
      ]);
    });
};
