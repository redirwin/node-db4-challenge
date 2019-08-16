const express = require("express");

const Recipes = require("./model.js");

const router = express.Router();

router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to get recipes" });
  }
});

router.get("/recipes/:id/shoppingList", async (req, res) => {});

router.get("/recipes/:id/instructions", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipes.getInstructions(id);
    res.json(recipe.instructions);
  } catch (err) {
    res.status(500).json({ message: "Failed to get recipe instructions." });
  }
});

router.get("/ingredients/:recipes", async (req, res) => {});

module.exports = router;
