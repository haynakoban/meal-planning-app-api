const { Users } = require('../../models');
const bcryptjs = require('bcryptjs');
const { faker } = require('@faker-js/faker');

const bulkUsers = async (req, res, next) => {
  try {
    const existingFullNames = [];
    const existingEmails = [];
    const existingUsernames = [];

    for (let i = 0; i < 200; i++) {
      const fullname = generateUniqueFullName(existingFullNames);
      existingFullNames.push(fullname);

      const email = generateUniqueEmailFromFullName(fullname, existingEmails);
      existingEmails.push(email);

      const { username, password } =
        generateUniqueUsernameAndPasswordFromFullName(
          fullname,
          existingUsernames
        );

      existingUsernames.push(username);

      const hashedPassword = await bcryptjs.hash(password, 10);

      await Users.create({
        fullname,
        username,
        email,
        bio: null,
        password: hashedPassword,
      });
    }
  } catch (e) {
    return res.status(500).json({
      message: 'Error occurred while creating the items',
      status: 'error occurred',
      data: [],
    });
  }
};

const generateUniqueFullName = (existingFullNames) => {
  let fullName;
  do {
    fullName = faker.person.fullName();
  } while (existingFullNames.includes(fullName));
  return fullName;
};

const generateUniqueEmailFromFullName = (fullName, existingEmails) => {
  let email;
  do {
    email = `${fullName.replace(/\s+/g, '.')}@example.com`;
  } while (existingEmails.includes(email));
  return email.toLowerCase();
};

const generateUniqueUsernameAndPasswordFromFullName = (
  fullName,
  existingUsernames
) => {
  let username;
  let password;

  do {
    username = `${fullName
      .replace(/\s+/g, '_')
      .toLowerCase()}${faker.number.int(999)}`;
    password = `${fullName.replace(/\s+/g, '').toLowerCase()}123`;
  } while (existingUsernames.includes(username));

  return { username, password };
};

module.exports = {
  bulkUsers,
};
