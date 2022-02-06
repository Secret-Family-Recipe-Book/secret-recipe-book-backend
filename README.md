Backend base URL : https://secret-recipe-book-backend.herokuapp.com/


|/api/auth                                                                                       |
|Method|Endpoint  |Description        |Request Requirements     |Response             |Protected?|
|------|----------|-------------------|-------------------------|---------------------|----------|
|POST   |/register|Add new user       |username, password, email|message,token,user id|No        |
|POST   |/login   |Login existing user|username, password       |message,token,user id|No        |



|/api/users                                                                                                                                                    |
|Method|Endpoint  |Description             |Request Requirements                                                |Response                           |Protected?|
|------|----------|------------------------|--------------------------------------------------------------------|-----------------------------------|----------|
|GET   |/         |Returns all users       |                                                                    |array of users with id and username|Yes       |
|GET   |/:id      |Returns user matching id|valid user id as param                                              |username and user id               |Yes       |
|PUT   |/:id      |Updates user matching id|valid user id as param, username, password, email (all are optional)|user id, username, email           |Yes       |
|DELETE|/:id      |Deletes existing user   |valid user id as param                                              |message                            |Yes       |



|/api/recipes                                                                                                                                                                                                                                                                                    |
|Method|Endpoint        |Description                 |Request Requirements                                                                                 |Response                                                                                                                  |Protected?|
|------|----------------|----------------------------|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|----------|
|GET   |/               |Returns all recipes         |                                                                                                     |array of recipes with id, recipe_name, recipe_source, description, category_id, user_id, category_name                    |Yes       |
|GET   |/:id            |Returns recipe matching id  |valid recipe id as param                                                                             |recipe with id, recipe_name, recipe_source, description, category_id, user_id, category_name, ingredients, steps          |Yes       |
|GET   |/users/:id      |Returns all recipes for user|valid user id as param                                                                               |array of recipes with id, recipe_name, recipe_source, description, category_id, user_id, category_name, ingredients, steps|Yes       |
|POST  |/users/:id      |Adds new recipe             |valid user id as param, recipe_name, recipe_source, category_id, user_id, desciption(optional)       |recipe with id, recipe_name, recipe_source, description, category_id, user_id, category_name                              |Yes       |
|POST  |/:id/ingredient |Adds new ingredient         |valid user id as param, ingredient_name, recipe_id, quantity, units (optional), step_number          |recipe with id, recipe_name, recipe_source, description, category_id, user_id, category_name, ingredients, steps          |Yes       |
|POST  |/:id/instruction|Adds new instruction step   |valid user id as param, step_number, step_instructions, recipe_id                                    |recipe with id, recipe_name, recipe_source, description, category_id, user_id, category_name                              |Yes       |
|PUT   |/:id            |Updates existing recipe     |valid recipe id as param, recipe_name, recipe_source, category_id, user_id, desciption (all optional)|recipe with id, recipe_name, recipe_source, description, category_id, user_id, category_name, ingredients, steps          |Yes       |
|DELETE|/:id            |Deletes existing recipe     |valid recipe id as param                                                                             |message                                                                                                                   |Yes       |



|/api/ingredients                                                                                                                                                                                                          |
|Method|Endpoint  |Description                   |Request Requirements                                                                                 |Response                                                |Protected?|
|------|----------|------------------------------|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------|----------|
|GET   |/         |Returns all ingredients       |                                                                                                     |array of ingredients with id and username               |Yes       |
|GET   |/:id      |Returns ingredient matching id|valid ingredient id as param                                                                         |ingredient_name, recipe_id, quantity, units, step_number|Yes       |
|PUT   |/:id      |Updates ingredient matching id|valid ingredient id as param, ingredient_name, recipe_id, quantity, units, step_number (all optional)|ingredient_name, recipe_id, quantity, units, step_number|Yes       |
|DELETE|/:id      |Deletes existing ingredient   |valid ingredient id as param                                                                         |message                                                 |Yes       |



|/api/instructions                                                                                                                                                                                      |
|Method|Endpoint  |Description                    |Request Requirements                                                                       |Response                                      |Protected?|
|------|----------|-------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------|----------|
|GET   |/         |Returns all instructions       |                                                                                           |array of users with id and username           |Yes       |
|GET   |/:id      |Returns instruction matching id|valid instruction id as param                                                              |id, step_number, step_instructions, recipe_id |Yes       |
|PUT   |/:id      |Updates instruction matching id|valid instruction id as param, step_number, step_instructions, recipe_id (all are optional)|id, step_number, step_instructions, recipe_id |Yes       |
|DELETE|/:id      |Deletes existing instruction   |valid user id as param                                                                     |message                                       |Yes       |
