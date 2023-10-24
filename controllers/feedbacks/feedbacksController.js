const { Feedbacks, Recipes, Users } = require('../../models');
const { faker } = require('@faker-js/faker');

// bulk feedbacks
const bulkFeedbacks = async (req, res, next) => {
  try {
    const recipes = await Recipes.find();

    for (const recipe of recipes) {
      const feedbackLength = faker.number.int({ min: 1, max: 150 });

      const usersArray = [];
      const usedUserIds = new Set();
      const feedbacks = [];

      while (usersArray.length < feedbackLength) {
        const user = await Users.findOne({ _id: { $ne: recipe.user_id } });

        if (user && !usedUserIds.has(user._id)) {
          const feedback = await Feedbacks.create({
            user_id: user._id,
            foodItem: recipe._id,
            foodItemType: 'Recipes',
            comment: faker.lorem.sentence(),
            rating: faker.number.int({ min: 1, max: 5 }),
          });

          feedbacks.push(feedback._id);

          usersArray.push(user);
          usedUserIds.add(user._id);
        }
      }

      recipe.feedbacks = feedbacks;
      await recipe.save();
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
  bulkFeedbacks,
};
