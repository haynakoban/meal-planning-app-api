const { Ingredients } = require('../../models');

const data = [
  { name: 'Chicken (Manok)' },
  { name: 'Egg (Itlog)' },
  { name: 'Egg Yolks' },
  { name: 'Salted Eggs (Itlog Maalat)' },
  { name: 'Broccoli (Brokuli)' },
  { name: 'Pandesal' },
  { name: 'Beef Shanks (Buto-buto)' },
  { name: 'Banana (Saging)' },
  { name: 'Radishes (Labanos)' },
  { name: 'Condensed Milk' },
  { name: 'Vanilla Extract' },
  { name: 'Silken Tofu' },
  { name: 'Arnibal Syrup' },
  { name: 'Sago Pearls' },
  { name: 'Salmon' },
  { name: 'Bone Marrow (Buto ng Baka)' },
  { name: 'Potato (Patatas)' },
  { name: 'Spinach (Alugbati)' },
  { name: 'Carrot (Karot)' },
  { name: 'Lentils (Lentejas)' },
  { name: 'Pineapple (Pinya)' },
  { name: 'Tofu' },
  { name: 'Chicken Liver' },
  { name: 'Avocado (Abukado)' },
  { name: 'Cocoa Powder' },
  { name: 'Sugar (Asukal)' },
  { name: 'Rice Flour' },
  { name: 'Egg Noodles (Miki)' },
  { name: 'Vinegar (Suka)' },
  { name: 'Pork (Baboy)' },
  { name: 'Garlic Friend Rice (Sinangag)' },
  { name: 'Garlic (Bawang)' },
  { name: 'Glutinous Rice (Malagkit)' },
  { name: 'Rice (Bigas)' },
  { name: 'Ginger (Luya)' },
  { name: 'Oats (Avena)' },
  { name: 'Beef Tapa' },
  { name: 'Beef (Baka)' },
  { name: 'Quinoa' },
  { name: 'Strawberries (Mansanas)' },
  { name: 'Milk (Gatas)' },
  { name: 'Green Beans (Sitaw)' },
  { name: 'Onion (Sibuyas)' },
  { name: 'Apples (Mansanas)' },
  { name: 'Peanuts (Mani)' },
  { name: 'Pomelo' },
  { name: 'Cucumber (Pipino)' },
  { name: 'Almonds' },
  { name: 'Squid Balls' },
  { name: 'Cabbage (Repolyo)' },
  { name: 'Soy Sauce (Toyo)' },
  { name: 'Dried Taro Leaves (Dahon ng Gabi)' },
  { name: 'Grated Coconut (Niyog)' },
  { name: 'Grapes (Uva)' },
  { name: 'Olive Oil' },
  { name: 'Oil' },
  { name: 'Shrimp (Hipon)' },
  { name: 'Tamarind (Sampalok)' },
  { name: 'String Beans (Sitaw)' },
  { name: 'Eggplant (Talong)' },
  { name: 'Tomatoes (Kamatis)' },
  { name: 'Bell Pepper (Paminta)' },
  { name: 'Tuna' },
  { name: 'Pechay' },
  { name: 'Oxtail' },
  { name: 'Mango (Mangga)' },
  { name: 'Peanut Butter' },
  { name: 'Pine Nuts' },
  { name: 'Honey' },
  { name: 'Lettuce' },
  { name: 'Squash (Kalabasa)' },
  { name: 'Papaya' },
  { name: 'Celery' },
  { name: 'White Bread' },
  { name: 'Cheddar Cheese' },
  { name: 'Black Beans' },
  { name: 'Peaches' },
  { name: 'Yogurt' },
  { name: 'Calamansi (Kalamansi)' },
  { name: 'Longanisa' },
  { name: 'Evaporated Milk' },
  { name: 'Squid (Calamari)' },
  { name: 'Bitter Gourd (Ampalaya)' },
  { name: 'Mung Beans (Munggo)' },
  { name: 'Ripe Bananas' },
  { name: 'Crab (Alimango)' },
  { name: 'Jackfruit (Langka)' },
  { name: 'Fish Sauce (Patis)' },
  { name: 'Chili Peppers (Siling Labuyo)' },
  { name: 'Shrimp Paste (Bagoong)' },
  { name: 'Pork Belly (Liempo)' },
  { name: 'Carrots' },
  { name: 'Spring Roll Wrappers' },
  { name: 'Crushed Ice' },
  { name: 'Cooking Oil' },
  { name: 'Green Papaya (Papaya)' },
  { name: 'Pork Skin' },
  { name: 'Salt (Asin)' },
  { name: 'Water Spinach (Kangkong)' },
  { name: 'Sweet Potato (Kamote)' },
  { name: 'Lumpia Wrapper' },
  { name: 'Coconut Milk (Gata)' },
  { name: 'Chili Leaves (Dahon ng Sili)' },
  { name: 'Smoked Fish (Tinapa)' },
  { name: 'Jicama (Singkamas)' },
  { name: 'Roast Pig (Lechon)' },
  { name: 'Soy Pudding (Taho)' },
  { name: 'Sweet Macapuno' },
  { name: 'Nata De Coco' },
  { name: 'Taro Leaves (Laing)' },
  { name: 'Purple Yam (Ube)' },
  { name: 'Watermelon (Pakwan)' },
  { name: 'Brown Sugar (Asukal)' },
  { name: 'Cheese (Keso)' },
  { name: 'Corn (Mais)' },
  { name: 'Fish (Isda)' },
  { name: 'Snow Peas (Sitsaro)' },
  { name: 'Coconut (Buko)' },
  { name: 'Fruit Cocktail' },
  { name: 'Lanzones' },
];

const toLowerCase = (str) => str.toLowerCase();

const bulkIngredients = async (adminId, req, res, next) => {
  try {
    const uniqueIngredients = [];

    for (const ingredient of data) {
      if (ingredient.name) {
        const nameLowercase = toLowerCase(ingredient.name);

        const existingIngredient = await Ingredients.findOne({
          name: { $regex: new RegExp(`^${nameLowercase}$`, 'i') },
        });

        if (!existingIngredient) {
          const uniqueIngredient = {
            name: ingredient.name,
            admin_id: adminId,
          };

          uniqueIngredients.push(uniqueIngredient);
        }
      }
    }

    await Ingredients.insertMany(uniqueIngredients);
  } catch (e) {
    return res.status(500).json({
      message: 'Error occurred while creating the items',
      status: 'error occurred',
      data: [],
    });
  }
};

module.exports = {
  bulkIngredients,
};
