exports.up = function (knex) {
    return knex.schema
      .createTable("users", (tbl) => {
        tbl.increments();
        tbl.string("username", 128).notNullable().unique();
        tbl.string("password", 128).notNullable();
        tbl.string("email", 128).notNullable();
      })
  
      .createTable("categories", (tbl) => {
        tbl.increments();
        tbl.string("category_name").notNullable();
      })
  
      .createTable("recipes", (tbl) => {
        tbl.increments();
        tbl.string("recipe_name", 128).notNullable();
        tbl.string("recipe_source", 256);
        tbl.string("description");
        tbl
          .integer("category_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("categories")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl
          .integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
  
      .createTable("instructions", (tbl) => {
        tbl.increments();
        tbl.integer("step_number").notNullable();
        tbl.string("step_instructions").notNullable();
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        
      })
      
      .createTable("ingredients", (tbl) => {
        tbl.increments();
        tbl.string("ingredient_name").notNullable();
        tbl.decimal("quantity");
        tbl.string("units");
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl
          .integer("step_number")
          .defaultTo(null)
          .unsigned()
          .references("id")
          .inTable("instructions")
          .onUpdate("CASCADE")
          .onDelete("SET DEFAULT")
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("instructions")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("recipes")
      .dropTableIfExists("categories")
      .dropTableIfExists("users");
  };