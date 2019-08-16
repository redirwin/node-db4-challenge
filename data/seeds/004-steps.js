exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          id: 1,
          recipe_id: 1,
          description: "Spread peanut butter between two slices of bread."
        },
        {
          id: 2,
          recipe_id: 1,
          description: "Cut into four precisely shaped triangles."
        },
        {
          id: 3,
          recipe_id: 1,
          description: "Serve to your spoiled child."
        },

        {
          id: 4,
          recipe_id: 2,
          description: "Spread mayo and mustard between two slices of bread."
        },
        {
          id: 5,
          recipe_id: 2,
          description: "Add ham, lettuce, and sliced tomatoes."
        },
        {
          id: 6,
          recipe_id: 2,
          description: "Throw in trash."
        },
        {
          id: 7,
          recipe_id: 2,
          description: "Make a peanut butter sandwich instead."
        },

        {
          id: 8,
          recipe_id: 3,
          description: "Spread warm refried beans on a crunchy corn shell."
        },
        {
          id: 9,
          recipe_id: 3,
          description:
            "Add grated cheese, chopped lettuce, diced tomatoes, and salsa."
        },
        {
          id: 10,
          recipe_id: 3,
          description:
            "Serve and watch as your child spreads beans all over her face."
        }
      ]);
    });
};
