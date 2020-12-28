const { Owner } = require("../models");

const ownerdata = [
  {
    id: 2,
    username: "John Smith",
    email: "johnSmith@gmail.com",
    password: "passwordABC",
  },
  {
    id: 2,
    username: "Peggy Rawlings",
    email: "prowlings234@yahoo.com",
    password: "password123",
  },
  {
    id: 2,
    username: "Casey Jones",
    email: "rrengineer@railroad.com",
    password: "chugchug7",
  },
];
const seedOwner = () => Owner.bulkCreate(ownerdata);

module.exports = seedOwner;
