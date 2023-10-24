const chalk = require('chalk');
const cuisinesController = require('./cuisines/cuisinesController');
const feedbacksController = require('./feedbacks/feedbacksController');
const ingredientsController = require('./ingredients/ingredientsController');
const mealsController = require('./meals/mealsController');
const preferencesController = require('./preferences/preferencesController');
const recipesController = require('./recipes/recipesController');
const usersController = require('./users/usersController');
const adminController = require('./admin/adminController');

const seed = async (req, res, next) => {
  try {
    console.log(chalk.yellow('Seeding in progress...'));
    console.log();

    // seed admin
    console.log(chalk.yellow('Seeding: Admins collection'));
    const adminId = await adminController.create();
    console.log(chalk.green('Seeded: Admins collection'));
    console.log();

    // seed users
    console.log(chalk.yellow('Seeding: Users collection'));
    await usersController.bulkUsers();
    console.log(chalk.green('Seeded: Users collection'));
    console.log();

    // seed cuisines
    console.log(chalk.yellow('Seeding: Cuisines collection'));
    await cuisinesController.bulkCuisines();
    console.log(chalk.green('Seeded: Cuisines collection'));
    console.log();

    // seed ingredients
    console.log(chalk.yellow('Seeding: Ingredients collection'));
    await ingredientsController.bulkIngredients(adminId);
    console.log(chalk.green('Seeded: Ingredients collection'));
    console.log();

    // seed preferences
    console.log(chalk.yellow('Seeding: Preferences collection'));
    await preferencesController.bulkPreferences(adminId);
    console.log(chalk.green('Seeded: Preferences collection'));
    console.log();

    // seed mealtypes
    console.log(chalk.yellow('Seeding: MealTypes collection'));
    await mealsController.bulkMealTypes();
    console.log(chalk.green('Seeded: MealTypes collection'));
    console.log();

    // seed recipes
    console.log(chalk.yellow('Seeding: Recipes collection'));
    await recipesController.bulkRecipes();
    console.log(chalk.green('Seeded: Recipes collection'));
    console.log();

    // seed feedbacks
    console.log(chalk.yellow('Seeding: Feedbacks collection'));
    await feedbacksController.bulkFeedbacks();
    console.log(chalk.green('Seeded: Feedbacks collection'));
    console.log();

    console.log(chalk.green('Seeding completed successfully!'));

    return res.status(200).json({
      message: 'Seeding completed successfully',
      status: 'success',
      data: [],
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
  cuisinesController,
  feedbacksController,
  ingredientsController,
  mealsController,
  preferencesController,
  recipesController,
  usersController,
  adminController,
  seed,
};
