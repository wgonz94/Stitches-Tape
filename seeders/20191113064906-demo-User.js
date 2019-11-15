"use strict";

// let Sequelize = require("sequelize");
const faker = require("faker");

let data = [];

for (var i = 0; i < 11; i++) {
  let newUser = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.phoneNumber(),
    isDesigner: faker.random.boolean(),
    createdAt: new Date(),
    updatedAt: new Date()
  };
  data.push(newUser);
}

console.log(data);

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Users", data, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
