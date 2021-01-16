import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@starshop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Jude Law',
    email: 'jude@starshop.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mary Saw',
    email: 'mary@starshop.com',
    password: bcrypt.hashSync('123456', 10),
  }
];

export default users;