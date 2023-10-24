const { Meals, MealTypes } = require('../../models');

const dataMealTypes = [
  {
    name: 'dinner',
    description:
      'the main meal of the day, typically eaten in the evening, often consisting of a protein source, vegetables, and starches.',
  },
  {
    name: 'breakfast',
    description:
      'the first meal of the day, usually consumed in the morning, often including items like cereal, eggs, and fruits.',
  },
  {
    name: 'lunch',
    description:
      'a midday meal that varies widely by culture, often featuring sandwiches, salads, or hot dishes.',
  },
  {
    name: 'snacks',
    description:
      'small, quick bites of food consumed between meals to satisfy hunger or cravings.',
  },
  {
    name: 'desserts',
    description:
      'sweet treats typically enjoyed at the end of a meal, such as cakes, cookies, and ice cream.',
  },
  {
    name: 'appetizers',
    description:
      'small dishes or bites served before the main course to stimulate the appetite.',
  },
  {
    name: 'sides',
    description:
      'accompaniments to the main course, often including items like rice, vegetables, or bread.',
  },
  {
    name: 'salads',
    description:
      'a dish typically made of mixed greens, vegetables, and toppings, often served with dressing.',
  },
  {
    name: 'soups',
    description:
      'liquid-based dishes made from broth, vegetables, and sometimes meat or noodles.',
  },
];

const toLowerCase = (str) => str.toLowerCase();

const bulkMealTypes = async (req, res, next) => {
  try {
    const uniqueMealTypes = [];

    for (const mealType of dataMealTypes) {
      if (mealType.name) {
        const nameLowercase = toLowerCase(mealType.name);

        const existingMealType = await MealTypes.findOne({
          name: { $regex: new RegExp(`^${nameLowercase}$`, 'i') },
        });

        if (!existingMealType) {
          uniqueMealTypes.push(mealType);
        }
      }
    }

    await MealTypes.insertMany(uniqueMealTypes);
  } catch (e) {
    return res.status(500).json({
      message: 'Error occurred while creating the items',
      status: 'error occurred',
      data: [],
    });
  }
};

// bulk meals
const bulkMeals = async (req, res, next) => {
  try {
    const result = await Meals.insertMany(req.uniqueData);

    return res.status(201).json({
      message: `${result.length} items inserted successfully`,
      status: 'record created',
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      message: 'Error occurred while creating the items',
      status: 'error occurred',
      data: [],
    });
  }
};

module.exports = {
  bulkMealTypes,
  bulkMeals,
};
