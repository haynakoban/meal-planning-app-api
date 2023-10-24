const { Admins } = require('../../models');
const bcryptjs = require('bcryptjs');

const create = async (req, res, next) => {
  try {
    const username = 'admin';
    const password = 'superadmin';

    // Hash the password using bcrypt
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create the admin user in the database
    const adminUser = await Admins.create({
      username,
      password: hashedPassword,
    });

    return adminUser?._id;
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
};
