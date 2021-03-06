const { Pet } = require("../models");

const petdata = [
  {
    id: 1,
    name: "Bingo",
    nickname: "Bingo",
    species: "Dog",
    breed: "Border Collie",
    zip: "12345",
    birthdate: "03/03/2003",
    weight: "58",
    allergies: "none",
    food: "K9 food",
    microchipId: "566789",
  },
  {
    id: 2,
    name: "Panda",
    nickname: "Panda",
    species: "Cat",
    breed: "Siamese",
    zip: "23456",
    birthdate: "04/04/2014",
    weight: "10",
    allergies: "none",
    food: "Caesar",
    microchipId: "999880",
  },
  {
    id: 3,
    name: "Rocko",
    nickname: "R",
    species: "bird",
    breed: "Cockatoo",
    zip: "45678",
    birthdate: "09/09/2019",
    weight: "3",
    allergies: "none",
    food: "seed",
    microchipId: "9998837",
  },
];

const seedPet = () => Pet.bulkCreate(petdata);

module.exports = seedPet;
