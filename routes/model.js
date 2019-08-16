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
  // return db("recipe_ingredients as ri")
  // .join("recipes", "ri.recipe_id", "=" "")
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
