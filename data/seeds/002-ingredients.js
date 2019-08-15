exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "slice(s) of bread" },
        { id: 2, name: "tbsp of peanut butter" },

        { id: 3, name: "tbsp of mayo" },
        { id: 4, name: "tbsp of mustard" },
        { id: 5, name: "slice(s) of ham" },
        { id: 6, name: "leaf(s) of lettuce" },
        { id: 7, name: "tomato(s)" },

        { id: 8, name: "tostado shell(s)" },
        { id: 9, name: "oz(s) of cheese" },
        { id: 10, name: "tbsp of salsa" }
      ]);
    });
};
