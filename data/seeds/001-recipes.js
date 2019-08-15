exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          name: "Peanut Butter Sandwich",
          instructions:
            "Spread peanut butter between two slices of bread. Cut into four precisely shaped triangles before serving to your child."
        },
        {
          id: 2,
          name: "Ham Sandwich",
          instructions:
            "Spread mayo and mustard between two slices of bread. Add ham, lettuce, and sliced tomatoes. Throw it in the trash and make a peanut butter sandwich instead."
        },
        {
          id: 3,
          name: "Tostado",
          instructions:
            "Spread warm refried beans on a crunchy corn shell. Add grated cheese, chopped lettuce, diced tomatoes, and salsa. Watch as your child breaks it into tiny bits and spreads the beans all over her face."
        }
      ]);
    });
};
