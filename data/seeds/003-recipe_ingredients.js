exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        {
          id: 1,
          recipe_id: 1,
          ingredient_id: 1,
          amount: 2,
          unit: "slices"
        },
        {
          id: 2,
          recipe_id: 1,
          ingredient_id: 2,
          amount: 1,
          unit: "tbsp"
        },

        {
          id: 3,
          recipe_id: 2,
          ingredient_id: 3,
          amount: 1,
          unit: "tbsp"
        },
        {
          id: 4,
          recipe_id: 2,
          ingredient_id: 4,
          amount: 0.5,
          unit: "tbsp"
        },
        {
          id: 5,
          recipe_id: 2,
          ingredient_id: 5,
          amount: 1,
          unit: "slice"
        },
        {
          id: 6,
          recipe_id: 2,
          ingredient_id: 6,
          amount: 2,
          unit: "leaves"
        },
        {
          id: 7,
          recipe_id: 2,
          ingredient_id: 7,
          amount: 0.25,
          unit: "small"
        },

        {
          id: 8,
          recipe_id: 3,
          ingredient_id: 8,
          amount: 1,
          unit: "regular"
        },
        {
          id: 9,
          recipe_id: 3,
          ingredient_id: 9,
          amount: 0.5,
          unit: "oz"
        },
        {
          id: 10,
          recipe_id: 3,
          ingredient_id: 10,
          amount: 1,
          unit: "tbsp"
        }
      ]);
    });
};
