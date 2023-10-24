const {
  Recipes,
  Ingredients,
  MealTypes,
  Preferences,
  Cuisines,
  Users,
} = require('../../models');
const { data } = require('./data');

const bulkRecipes = async (req, res, next) => {
  try {
    for (const bf of data) {
      const userCount = await Users.countDocuments();
      const randomIndexUser = Math.floor(Math.random() * userCount);
      const userId = await Users.findOne().skip(randomIndexUser).select('_id');

      const ingredientsArray = [];
      for (const i of bf['ingredients']) {
        const ingredient = await Ingredients.findOne({
          name: i['ingredients_id'],
        });

        if (ingredient) {
          ingredientsArray.push({
            ...i,
            ingredients_id: ingredient._id,
          });
        }
      }

      const mealTypesArray = [];
      for (const m of bf['meal_types']) {
        const mealtypes = await MealTypes.findOne({
          name: m,
        });

        if (mealtypes) {
          mealTypesArray.push(mealtypes._id);
        }
      }

      const cuisinesArray = [];
      for (const c of bf['cuisines']) {
        const cuisines = await Cuisines.findOne({
          name: c,
        });

        if (cuisines) {
          cuisinesArray.push(cuisines._id);
        }
      }

      const preferencesArray = [];
      for (const p of bf['preferences']) {
        const preferences = await Preferences.findOne({
          name: p,
        });

        if (preferences) {
          preferencesArray.push(preferences._id);
        }
      }

      bf.user_id = userId._id;
      bf.meal_types = mealTypesArray;
      bf.cuisines = cuisinesArray;
      bf.preferences = preferencesArray;
      bf.feedbacks = [];
      bf.ingredients = ingredientsArray;

      await Recipes.create(bf);
    }
  } catch (e) {
    return res.status(500).json({
      message: 'Error occurred while creating the items',
      status: 'error occurred',
      data: [],
    });
  }
};

module.exports = {
  bulkRecipes,
};
