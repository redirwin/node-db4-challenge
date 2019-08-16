const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipe_ingredients as ri")
    .join("ingredients as i", "i.id", "=", "ri.ingredient_id")
    .join("recipes as r", "r.id", "=", "ri.recipe_id")
    .where({ "r.id": id })
    .select("ri.amount", "ri.unit", "i.name");

  /*
    SAME AS:
    select ri.amount, ri.unit, i.name, r.name
    from recipe_ingredients as ri
    join ingredients as i on i.id = ri.ingredient_id 
    join recipes as r on r.id = ri.recipe_id
    where r.id = 2
*/
}

function getInstructions(id) {
  return db("recipes")
    .join("steps", "steps.recipe_id", "=", "recipes.id")
    .where({ "recipes.id": id })
    .select(
      "recipes.id",
      "recipes.name as Recipe",
      "steps.step_number",
      "steps.description as Do This"
    )
    .orderBy("step_number");
}
