const { Preferences } = require('../../models');
const data = [
  {
    name: 'vegetarian',
    description:
      'person who does not eat meat, and sometimes other animal products, especially for moral, religious, or health reasons.',
  },
  {
    name: 'gain weight',
    description:
      'a strategy for increasing the number of calories consumed in order to add weight.',
  },
  {
    name: 'food allergy',
    description:
      "when the body's immune system reacts unusually to specific foods.",
  },
  {
    name: 'diabetic',
    description:
      "healthy-eating plan that's naturally rich in nutrients and low in fat and calories.",
  },
];

const toLowerCase = (str) => str.toLowerCase();

// bulk preferences
const bulkPreferences = async (adminId, req, res, next) => {
  try {
    const uniquePreferences = [];

    for (const preference of data) {
      if (preference.name) {
        const nameLowercase = toLowerCase(preference.name);

        const existingPreference = await Preferences.findOne({
          name: { $regex: new RegExp(`^${nameLowercase}$`, 'i') },
        });

        if (!existingPreference) {
          const uniquePreference = {
            name: preference.name,
            description: preference.description,
            admin_id: adminId,
          };
          uniquePreferences.push(uniquePreference);
        }
      }
    }

    await Preferences.insertMany(uniquePreferences);
  } catch (e) {
    return res.status(500).json({
      message: 'Error occurred while creating the items',
      status: 'error occurred',
      data: [],
    });
  }
};

module.exports = {
  bulkPreferences,
};
