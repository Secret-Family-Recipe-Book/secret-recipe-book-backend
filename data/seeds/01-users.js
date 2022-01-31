const bcrypt = require("bcryptjs")

const password = "12345"

const hash = bcrypt.hashSync(password, 8)
console.log(hash)

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "cBoyardee", password: hash, email: "boyardee@pasta.com"},
        {username: "emerill", password: hash, email: "emerill@bang.com"},
        {username: "gRamsey", password: hash, email: "gordon@fired.com"}
      ]);
    });
};
