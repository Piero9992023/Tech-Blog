const { User } = require('../models');

const userData =
[
  {
    "username": "Piero2023",
    "email": "chiryto05@hotmail.com",
    "password": "Piero2005"
  },
  {
    "username": "Jakub999",
    "email": "Jakub@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "Michelle123",
    "email": "michelle@gmail.com",
    "password": "Michelle123"
  },
  {
    "username": "Christian",
    "email": "rodriguez@yahoo.com",
    "password": "Awesome123"
  },
  {
    "username": "Willy123",
    "email": "willyus@gmail.com",
    "password": "Willy1964"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;