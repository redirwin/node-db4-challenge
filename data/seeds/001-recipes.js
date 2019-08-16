exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          name: "Peanut Butter Sandwich"
        },
        {
          id: 2,
          name: "Ham Sandwich"
        },
        {
          id: 3,
          name: "Tostado"
        }
      ]);
    });
};
