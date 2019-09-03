const express = require("express");

const helpers = require("./model.js");

const router = express.Router();

router.get("/recipes", async (req, res) => {
  try {
    const recipes = await helpers.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to get recipes" });
  }
});

router.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await helpers.getRecipe(id);
    const Ingredient_List = await helpers.getShoppingList(id);
    const Instructions = await helpers.getInstructions(id);
    res.json({ recipe, Ingredient_List, Instructions });
  } catch (err) {
    res.status(500).json({ message: "Failed to get recipes" });
  }
});

router.get("/recipes/:id/shoppingList", async (req, res) => {
  try {
    const list = await helpers.getShoppingList(req.params.id);
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Failed to get shopping list." });
  }
});

router.get("/recipes/:id/instructions", async (req, res) => {
  try {
    const steps = await helpers.getInstructions(req.params.id);
    res.json(steps);
  } catch (err) {
    res.status(500).json({ message: "Failed to get recipe instructions." });
  }
});

router.get("/ingredients/:recipes", async (req, res) => {});

module.exports = router;
