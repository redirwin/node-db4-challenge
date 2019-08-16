exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "bread" },
        { id: 2, name: "peanut butter" },

        { id: 3, name: "mayo" },
        { id: 4, name: "mustard" },
        { id: 5, name: "ham" },
        { id: 6, name: "lettuce" },
        { id: 7, name: "tomato(s)" },

        { id: 8, name: "tostado shell(s)" },
        { id: 9, name: "cheese" },
        { id: 10, name: "salsa" }
      ]);
    });
};
