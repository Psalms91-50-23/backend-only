
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, from: 'mom', to: 'andrew', task: 'clean your room', hint: '', completed: false},
        {id: 2, from: 'anonymous', to: 'rachel',task: 'make sure your brother cleans his room', hint: 'tall and handsome, gives you pocket money', completed: false},
        {id: 3, from: 'anonymous', to: 'mom',task: 'remember to buy me boots for rugby', hint: 'complainer', completed: false},
        
      ]);
    });
};


