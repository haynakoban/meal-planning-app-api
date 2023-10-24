const { Cuisines } = require('../../models');

const data = [
  {
    name: 'ilocano',
    region: 'ilocos region',
  },
  {
    name: 'kapampangan',
    region: 'central luzon',
  },
  {
    name: 'tagalog',
    region: 'calabarzon and metro manila',
  },
  {
    name: 'bicolano',
    region: 'bicol region',
  },
  {
    name: 'visayan',
    region: 'visayas region',
  },
  {
    name: 'ilonggo',
    region: 'western visayas',
  },
  {
    name: 'cebuano',
    region: 'central visayas',
  },
  {
    name: 'waray',
    region: 'eastern visayas',
  },
  {
    name: 'mindanaoan',
    region: 'mindanao region',
  },
  {
    name: 'muslim filipino',
    region: 'armm (autonomous region in muslim mindanao)',
  },
  {
    name: 'cordilleran',
    region: 'cordillera region',
  },
  {
    name: 'batangas',
    region: 'batangas province',
  },
  {
    name: 'pampanga',
    region: 'pampanga province',
  },
  {
    name: 'other filipino cuisines',
  },
];

const toLowerCase = (str) => str.toLowerCase();

const bulkCuisines = async (req, res, next) => {
  try {
    const uniqueCuisines = [];

    for (const cuisine of data) {
      if (cuisine.name) {
        const nameLowercase = toLowerCase(cuisine.name);

        const existingCuisine = await Cuisines.findOne({
          name: { $regex: new RegExp(`^${nameLowercase}$`, 'i') },
        });

        if (!existingCuisine) {
          uniqueCuisines.push(cuisine);
        }
      }
    }

    await Cuisines.insertMany(uniqueCuisines);
  } catch (e) {
    return res.status(500).json({
      message: 'Error occurred while creating the items',
      status: 'error occurred',
      data: [],
    });
  }
};

module.exports = {
  bulkCuisines,
};
