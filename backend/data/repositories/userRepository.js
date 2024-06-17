// data/repositories/userRepository.js

const User = require('../../models/user');

// Repository method to fetch all users
async function getAll() {
  return await User.findAll();
}

// Repository method to find user by login
async function findByLogin(login) {
  return await User.findOne({ where: { login } });
}

// Repository method to find user by ID
async function findById(id) {
  return await User.findByPk(id);
}

// Repository method to find user by email
async function findByEmail(email) {
  return await User.findOne({ where: { email } });
}

// Repository method to create a new user
async function create(nom, prenom, adresse, ville, codePostal, telephone, email, civilite, login, hashedPassword, pays) {
  try {
    const newUser = await User.create({
      nom,
      prenom,
      adresse,
      ville,
      codepostal: codePostal,
      telephone,
      email,
      civilite,
      login,
      password: hashedPassword,
      pays
    });
    console.log('Created user:', newUser); // Log newUser to check if id is generated
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}



module.exports = {
  getAll,
  findByLogin,
  findByEmail,
  findById,
  create,
};
