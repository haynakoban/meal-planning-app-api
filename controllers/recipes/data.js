const data = [
  {
    name: 'Adobo Flakes',
    description:
      "Adobo flakes are a popular Filipino breakfast dish made from leftover adobo (a savory soy sauce and vinegar stew) that is shredded and fried until crispy. It's often served with garlic rice and fried eggs.",
    procedure: [
      'Shred leftover adobo',
      'Heat a pan and fry the shredded adobo until crispy',
      'Serve with garlic rice',
    ],
    image:
      'https://i0.wp.com/www.angsarap.net/wp-content/uploads/2019/09/Crispy-Adobo-Flakes-Wide.jpg?ssl=1',
    cooking_time: 30,
    meal_types: ['breakfast'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Olive Oil',
        measurement: 'tablespoons',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Vinegar (Suka)',
        measurement: 'tablespoons',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Pork (Baboy)',
        measurement: 'g',
        amount: 500,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Tapsilog',
    description:
      "Tapsilog is a classic Filipino breakfast consisting of thinly sliced and marinated beef (tapa), garlic fried rice (sinangag), and fried egg (itlog). It's a delightful combination of flavors.",
    procedure: [
      'Marinate the beef slices in soy sauce and garlic',
      'Fry the marinated beef until cooked',
      'Serve with garlic fried rice',
    ],
    image:
      'https://assets.bonappetit.com/photos/61e8411b3fb9f421b7590ae4/1:1/w_2560%2Cc_limit/20211208%2520Tapsilog%2520LEDE.jpg',
    cooking_time: 20,
    meal_types: ['breakfast', 'dinner'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Beef Tapa',
        measurement: 'g',
        amount: 150,
        description: '',
      },
      {
        ingredients_id: 'Garlic Friend Rice (Sinangag)',
        measurement: 'g',
        amount: 200,
        description: '',
      },
      {
        ingredients_id: 'Egg (Itlog)',
        measurement: 'piece',
        amount: 1,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Champorado',
    description:
      "Champorado is a sweet chocolate rice porridge often enjoyed as a breakfast or snack in the Philippines. It's made by cooking glutinous rice with cocoa powder and sugar.",
    procedure: [
      'Boil glutinous rice with water until soft and sticky',
      'Add cocoa powder and sugar, and stir until well combined',
      'Serve hot and enjoy',
    ],
    image:
      'https://www.curiouscuisiniere.com/wp-content/uploads/2022/08/champorado-vertical.1.jpg.webp',
    cooking_time: 30,
    meal_types: ['breakfast'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Glutinous Rice (Malagkit)',
        measurement: 'cup',
        amount: 0.5,
        description: '',
      },
      {
        ingredients_id: 'Cocoa Powder',
        measurement: 'cup',
        amount: 0.25,
        description: '',
      },
      {
        ingredients_id: 'Sugar (Asukal)',
        measurement: 'cup',
        amount: 0.25,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Arroz Caldo',
    description:
      "Arroz caldo is a comforting Filipino rice porridge often served for breakfast. It's made with chicken, ginger, and rice, and it's garnished with fried garlic, green onions, and calamansi.",
    procedure: [
      'Boil chicken and rice in a ginger-infused broth until rice is soft and chicken is tender',
      'Garnish with fried garlic, green onions, and calamansi',
      'Serve hot',
    ],
    image:
      'https://www.seriouseats.com/thmb/Uw29OFjIBZTATJ6PpSMC2hckCGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210508-arroz-caldo-melissa-hom-Hero-seriouseats-6-dbc8058635c64ac0bd3eeadd8da5ddee.jpg',
    cooking_time: 30,
    meal_types: ['breakfast', ''],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'batangas', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Olive Oil',
        measurement: 'tablespoons',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Chicken (Manok)',
        measurement: 'lb',
        amount: 1.5,
        description: '',
      },
      {
        ingredients_id: 'Rice (Bigas)',
        measurement: 'cup',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Ginger (Luya)',
        measurement: 'tablespoon',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Calamansi (Kalamansi)',
        measurement: 'pcs',
        amount: 2,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Taho',
    description:
      'Taho is a popular Filipino street food and breakfast item. It consists of silken tofu topped with arnibal (sweet syrup) and sago pearls (similar to tapioca pearls).',
    procedure: [
      'Heat silken tofu',
      'Top with arnibal syrup and sago pearls',
      'Serve hot',
    ],
    image: 'https://example.com/taho.jpg',
    cooking_time: 10,
    meal_types: ['breakfast', 'snacks', 'sides', 'appetizers'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'batangas', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Silken Tofu',
        measurement: 'g',
        amount: 300,
        description: '',
      },
      {
        ingredients_id: 'Arnibal Syrup',
        measurement: 'ml',
        amount: 50,
        description: '',
      },
      {
        ingredients_id: 'Sago Pearls',
        measurement: 'g',
        amount: 50,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Pancit Canton',
    description:
      "Pancit canton is a Filipino stir-fried noodle dish commonly eaten for breakfast. It's made with egg noodles, vegetables, and often includes meat or seafood.",
    procedure: [
      'Stir-fry egg noodles with vegetables and your choice of meat or seafood',
      'Season with soy sauce and oyster sauce',
      'Serve hot',
    ],
    image:
      'https://www.foxyfolksy.com/wp-content/uploads/2019/02/pancit-canton-640.jpg',
    cooking_time: 30,
    meal_types: ['breakfast', 'snacks'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'batangas', 'bicolano', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Oil',
        measurement: 'tablespoons',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Squid Balls',
        measurement: 'pieces',
        amount: 12,
        description: '',
      },
      {
        ingredients_id: 'Garlic (Bawang)',
        measurement: 'cloves',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Onion (Sibuyas)',
        measurement: 'medium',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Chicken Liver',
        measurement: 'grams',
        amount: 100,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Pandesal with Peanut Butter',
    description:
      "Pandesal is a Filipino bread roll that's soft on the inside and slightly crusty on the outside. It's commonly enjoyed with peanut butter for a quick and satisfying breakfast.",
    procedure: [
      'Slice the pandesal in half',
      'Spread peanut butter on the sliced pandesal',
      'Enjoy with hot coffee or chocolate',
    ],
    image:
      'https://newgenbaker.com/wp-content/uploads/2020/07/Matcha-Flavored-Pandesal-1-1024x683.jpg',
    cooking_time: 5,
    meal_types: ['breakfast', 'appetizers'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Pandesal',
        measurement: 'pieces',
        amount: 4,
        description: '',
      },
      {
        ingredients_id: 'Peanut Butter',
        measurement: 'tbsp',
        amount: 4,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Sinigang na Hipon',
    description:
      "Sinigang na Hipon is a sour shrimp soup that's a Filipino comfort food favorite. It's made with shrimp, vegetables, and a tamarind-based broth, giving it a delightful tangy flavor.",
    procedure: [
      'Boil tamarind pulp to extract the juice.',
      'Combine tamarind juice, shrimp, and vegetables in a pot.',
      'Simmer until shrimp turn pink and vegetables are tender.',
    ],
    image:
      'https://www.foxyfolksy.com/wp-content/uploads/2019/01/sinigang-na-hipon-640.jpg',
    cooking_time: 60,
    meal_types: ['lunch', 'dinner', 'soups'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Shrimp (Hipon)',
        measurement: 'grams',
        amount: 500,
        description: '',
      },
      {
        ingredients_id: 'Tamarind (Sampalok)',
        measurement: 'grams',
        amount: 50,
        description: '',
      },
      {
        ingredients_id: 'Eggplant (Talong)',
        measurement: 'pieces',
        amount: 5,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Kare-Kare',
    description:
      "Kare-Kare is a rich Filipino stew made with oxtail, tripe, and vegetables, cooked in a creamy peanut sauce. It's often served with bagoong (fermented shrimp paste) on the side.",
    procedure: [
      'Boil oxtail and tripe until tender.',
      'Sauté garlic and onions, add peanut butter, and cook until oil separates.',
      'Combine the peanut sauce with boiled meats and vegetables.',
    ],
    image:
      'https://images.aws.nestle.recipes/resized/af78558684736b541f41416b652b5eed_MMS_K_0102_1900px_944_531.jpg',
    cooking_time: 120,
    meal_types: ['breakfast', 'lunch', 'dinner'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Peanut Butter',
        measurement: 'cups',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'String Beans (Sitaw)',
        measurement: 'bundle',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Pechay',
        measurement: 'bundle',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Oxtail',
        measurement: 'lbs',
        amount: 3,
        description: '',
      },
      {
        ingredients_id: 'Eggplant (Talong)',
        measurement: 'pieces',
        amount: 5,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Adobo Manok',
    description:
      "Adobo Manok is a classic Filipino dish made with chicken marinated in soy sauce, vinegar, and spices, then simmered until tender. It's savory, slightly tangy, and very flavorful.",
    procedure: [
      'Marinate chicken in soy sauce, vinegar, and spices.',
      'Simmer the marinated chicken until tender and the sauce thickens.',
      'Serve with steamed rice.',
    ],
    image:
      'https://i0.wp.com/relaxlangmom.com/wp-content/uploads/2023/07/Chicken-Adobo-RLM-Article-Image.jpg?resize=800%2C600&ssl=1',
    cooking_time: 30,
    meal_types: ['lunch', 'dinner'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Chicken (Manok)',
        measurement: 'kilo',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Soy Sauce (Toyo)',
        measurement: 'tablespoons',
        amount: 4,
        description: '',
      },
      {
        ingredients_id: 'Vinegar (Suka)',
        measurement: 'tablespoons',
        amount: 3,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Laing',
    description:
      "Laing is a Bicolano dish made from dried taro leaves cooked in coconut milk with chili peppers. It's known for its creamy and spicy flavors.",
    procedure: [
      'Sauté garlic and onions in coconut oil.',
      'Add dried taro leaves and coconut milk, and simmer until leaves are tender.',
      'Season with shrimp paste and chili peppers.',
    ],
    image:
      'https://i0.wp.com/whattoeatph.com/wp-content/uploads/2023/05/DSC_6775.jpg?fit=3850%2C3080&ssl=1',
    cooking_time: 60,
    meal_types: ['lunch', 'dinner'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Dried Taro Leaves (Dahon ng Gabi)',
        measurement: 'grams',
        amount: 200,
        description: '',
      },
      {
        ingredients_id: 'Coconut Milk (Gata)',
        measurement: 'cups',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Shrimp Paste (Bagoong)',
        measurement: 'tablespoons',
        amount: 2,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Lechon Kawali',
    description:
      "Lechon Kawali is a popular Filipino dish consisting of deep-fried crispy pork belly. It's usually served with liver sauce or vinegar dipping sauce and steamed rice.",
    procedure: [
      'Boil pork belly until tender, then air-dry to remove excess moisture.',
      'Deep-fry the pork belly until golden and crispy.',
      'Slice and serve with liver sauce or vinegar dipping sauce.',
    ],
    image:
      'https://www.seriouseats.com/thmb/orl1xkPajYxzsOZwkooPtdYvM-M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210508-lechon-kawali-melissa-hom-2-inchChunks-seriouseats-1d53c12cee234305b921362e2106bf29.jpg',
    cooking_time: 60,
    meal_types: ['lunch', 'dinner'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Pork Belly (Liempo)',
        measurement: 'grams',
        amount: 500,
        description: '',
      },
      {
        ingredients_id: 'Cooking Oil',
        measurement: 'cups',
        amount: 2,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Bicol Express',
    description:
      "Bicol Express is a spicy Filipino dish made with chili peppers, shrimp paste, and coconut milk. It's named after the Bicol region and is known for its bold flavors.",
    procedure: [
      'Sauté garlic and onions in coconut oil.',
      'Add chili peppers, shrimp paste, and coconut milk.',
      'Simmer until the sauce thickens and serve.',
    ],
    image: 'https://assets.unileversolutions.com/recipes-v2/243019.jpg',
    cooking_time: 30,
    meal_types: ['lunch', 'dinner'],
    preferences: ['gain weight'],
    cuisines: ['bicolano', 'tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Chili Peppers (Siling Labuyo)',
        measurement: 'pieces',
        amount: 10,
        description: '',
      },
      {
        ingredients_id: 'Shrimp Paste (Bagoong)',
        measurement: 'tablespoons',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Coconut Milk (Gata)',
        measurement: 'cups',
        amount: 2,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Tinolang Manok',
    description:
      "Tinolang Manok is a comforting Filipino chicken soup made with ginger, garlic, and green papaya. It's a light and soothing lunch option, often served with rice.",
    procedure: [
      'Sauté ginger and garlic in oil.',
      'Add chicken pieces and sauté until lightly browned.',
      'Add water, green papaya, and chili leaves, then simmer until chicken is tender.',
    ],
    image:
      'https://amiablefoods.com/wp-content/uploads/tinolang-manok-recipe-card.jpg',
    cooking_time: 30,
    meal_types: ['lunch', 'dinner'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Chicken (Manok)',
        measurement: 'grams',
        amount: 800,
        description: '',
      },
      {
        ingredients_id: 'Green Papaya (Papaya)',
        measurement: 'grams',
        amount: 200,
        description: '',
      },
      {
        ingredients_id: 'Chili Leaves (Dahon ng Sili)',
        measurement: 'grams',
        amount: 50,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Turon',
    description:
      'Turon, also known as banana spring rolls, is a popular Filipino snack or dessert. It consists of ripe bananas and jackfruit wrapped in spring roll wrappers, fried until crispy, and coated with caramelized sugar.',
    procedure: [
      'Slice ripe bananas and jackfruit into thin strips.',
      'Wrap them in spring roll wrappers, sealing the edges with a little water.',
      'Deep-fry until golden brown, then coat with caramelized sugar.',
    ],
    image:
      'https://www.foxyfolksy.com/wp-content/uploads/2018/10/mini-turon-640.jpg',
    cooking_time: 30,
    meal_types: ['snacks', 'desserts', 'appetizers'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Ripe Bananas',
        measurement: 'pieces',
        amount: 6,
        description: '',
      },
      {
        ingredients_id: 'Cooking Oil',
        measurement: 'cups',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Jackfruit (Langka)',
        measurement: 'cups',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Spring Roll Wrappers',
        measurement: 'pieces',
        amount: 6,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Halo-Halo',
    description:
      'Halo-Halo is a popular Filipino dessert/snack that means "mix-mix" in Tagalog. It\'s a delightful concoction of crushed ice, sweetened fruits, jellies, and various toppings, often drizzled with evaporated milk.',
    procedure: [
      'Layer crushed ice in a glass or bowl.',
      'Add a variety of sweetened fruits, jellies, and beans.',
      'Drizzle with evaporated milk, and top with leche flan and a scoop of ube ice cream.',
    ],
    image:
      'https://hips.hearstapps.com/hmg-prod/images/halo-halo1-1658258347.jpg?crop=0.671xw:1.00xh;0.167xw,0&resize=1200:*',
    cooking_time: 10,
    meal_types: ['snacks', 'desserts', 'appetizers'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Crushed Ice',
        measurement: 'cups',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Banana (Saging)',
        measurement: 'pieces',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Purple Yam (Ube)',
        measurement: 'tablespoons',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Nata De Coco',
        measurement: 'pieces',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Evaporated Milk',
        measurement: 'tablespoons',
        amount: 5,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Kamote Cue',
    description:
      "Kamote Cue is a popular Filipino street food snack made from sweet potatoes coated in caramelized brown sugar. It's fried until crispy and served on sticks.",
    procedure: [
      'Slice sweet potatoes into wedges and coat them in brown sugar.',
      'Skewer them on sticks and deep-fry until caramelized and crispy.',
      'Allow them to cool before serving.',
    ],
    image:
      'https://homefoodie.com.ph/uploads/2021/Nov%202021/SALTED%20CARAMEL%20KAMOTE-CUE.JPG',
    cooking_time: 30,
    meal_types: ['snacks', 'desserts', 'appetizers'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Sweet Potato (Kamote)',
        measurement: 'pieces',
        amount: 4,
        description: '',
      },
      {
        ingredients_id: 'Brown Sugar (Asukal)',
        measurement: 'cups',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Cooking Oil',
        measurement: 'cups',
        amount: 2,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Chicharrón',
    description:
      "Chicharrón is a crispy and crunchy Filipino snack made from deep-fried pork skin or pork belly. It's often seasoned with salt or vinegar and enjoyed as a savory treat.",
    procedure: [
      'Cut pork skin or pork belly into thin strips or bite-sized pieces.',
      'Deep-fry until golden and crispy.',
      'Season with salt or dip in vinegar sauce.',
    ],
    image:
      'https://thebigmansworld.com/wp-content/uploads/2022/07/chicharrones-recipe-500x375.jpg',
    cooking_time: 30,
    meal_types: ['snacks', 'desserts', 'appetizers', 'sides'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Pork Skin',
        measurement: 'grams',
        amount: 200,
        description: '',
      },
      {
        ingredients_id: 'Cooking Oil',
        measurement: 'cups',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Salt (Asin)',
        measurement: 'teaspoons',
        amount: 1,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Bibingka',
    description:
      "Bibingka is a traditional Filipino rice cake made with rice flour and coconut milk, topped with salted egg slices, grated coconut, and butter. It's often enjoyed during Christmas season.",
    procedure: [
      'Mix rice flour, coconut milk, and sugar to make the batter.',
      'Pour the batter into banana leaf-lined molds and bake until set.',
      'Top with salted egg slices, grated coconut, and butter.',
    ],
    image:
      'https://www.seriouseats.com/thmb/cXLaFRa5DV9S9wtY3oQ01QcU-Jc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Beauty_1-20ff60406a904cd7b35832eaef4ff585.jpg',
    cooking_time: 30,
    meal_types: ['snacks', 'desserts', 'appetizers', 'sides'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Rice Flour',
        measurement: 'cups',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Coconut Milk (Gata)',
        measurement: 'cups',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Salted Eggs (Itlog Maalat)',
        measurement: 'pieces',
        amount: 2,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Leche Flan',
    description:
      "Leche Flan is a creamy caramel custard dessert made from egg yolks, condensed milk, and sugar. It's known for its silky texture and sweet caramel sauce.",
    procedure: [
      'Make caramel syrup by melting sugar in a pan.',
      'Mix egg yolks, condensed milk, and vanilla.',
      'Pour the mixture into molds, then steam until set.',
    ],
    image:
      'https://wildflourtogo.com/cdn/shop/products/DSCF8007_8c67f001-3a9f-48fe-b8a3-c208db35f987.jpg?v=1601056452',
    cooking_time: 30,
    meal_types: ['snacks', 'desserts', 'appetizers', 'sides'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Egg Yolks',
        measurement: 'pieces',
        amount: 8,
        description: '',
      },
      {
        ingredients_id: 'Condensed Milk',
        measurement: 'can',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Vanilla Extract',
        measurement: 'teaspoon',
        amount: 1,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Atchara',
    description:
      "Atchara is a popular Filipino side dish made from grated green papaya, carrots, and other vegetables, pickled in a sweet and tangy vinegar solution. It's a refreshing and crunchy accompaniment to many Filipino dishes.",
    procedure: [
      'Grate green papaya and carrots, then mix with salt and let it sit for an hour.',
      'Squeeze out excess moisture and add vinegar, sugar, and spices.',
      'Chill in the refrigerator before serving.',
    ],
    image:
      'https://lemonsandanchovies.com/wp-content/uploads/2021/03/Atchara-Filipino-Pickled-Green-Papaya-5.jpg',
    cooking_time: 90,
    meal_types: ['sides'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Green Papaya',
        measurement: 'grams',
        amount: 250,
        description: '',
      },
      {
        ingredients_id: 'Carrots',
        measurement: 'grams',
        amount: 100,
        description: '',
      },
      {
        ingredients_id: 'Vinegar (Suka)',
        measurement: 'cups',
        amount: 1,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Ensaladang Talong',
    description:
      "Ensaladang Talong is a simple Filipino side dish made from grilled eggplants, tomatoes, and onions, dressed with a mixture of fish sauce and calamansi (Filipino lime). It's a refreshing and smoky-flavored salad.",
    procedure: [
      'Grill eggplants until the skin is charred and the flesh is tender.',
      'Peel off the skin, then mash the eggplants and mix with tomatoes and onions.',
      'Season with fish sauce and calamansi juice.',
    ],
    image:
      'https://www.recipesbynora.com/wp-content/uploads/2019/07/Ensaladang-talong-served-in-a-bowl-featured-image.jpg',
    cooking_time: 30,
    meal_types: ['sides', 'salads'],
    preferences: ['gain weight', 'vegetarian'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Eggplant (Talong)',
        measurement: 'pieces',
        amount: 4,
        description: '',
      },
      {
        ingredients_id: 'Tomatoes (Kamatis)',
        measurement: 'pieces',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Onion (Sibuyas)',
        measurement: 'pieces',
        amount: 1,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Pomelo Salad',
    description:
      'Pomelo Salad is a refreshing Filipino salad made with sweet pomelo segments, shrimp, coconut, and a tangy calamansi (Philippine lime) dressing.',
    procedure: [
      'Peel and segment the pomelo.',
      'Blanch shrimp and shred coconut.',
      'Combine pomelo, shrimp, and coconut, then drizzle with calamansi dressing.',
    ],
    image:
      'https://www.allrecipes.com/thmb/0eUJSwIuhWblafbBE_IVP32SS8I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4564256-201d6b7674ba47fa81dd29604514b397.jpg',
    cooking_time: 30,
    meal_types: ['sides', 'salads'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Pomelo',
        measurement: 'segments',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Shrimp (Hipon)',
        measurement: 'grams',
        amount: 150,
        description: '',
      },
      {
        ingredients_id: 'Grated Coconut (Niyog)',
        measurement: 'cups',
        amount: 1,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Ube Macapuno Salad',
    description:
      'Ube Macapuno Salad is a Filipino dessert salad made with purple yam (ube), sweet macapuno (coconut sport), and other ingredients like nata de coco and fruit cocktail.',
    procedure: [
      'Combine cooked and mashed purple yam (ube) with macapuno, nata de coco, and fruit cocktail.',
      'Fold in condensed milk and mix well.',
      'Chill before serving.',
    ],
    image:
      'https://i0.wp.com/whattoeatph.com/wp-content/uploads/2022/02/DSC_8781.jpg?resize=720%2C576&ssl=1',
    cooking_time: 20,
    meal_types: ['salads', 'desserts'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Purple Yam (Ube)',
        measurement: 'cups',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Sweet Macapuno',
        measurement: 'cups',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Nata De Coco',
        measurement: 'cups',
        amount: 1,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Buko Salad',
    description:
      'Buko Salad is a popular Filipino dessert salad made with young coconut, fruit cocktail, and other sweet ingredients, all held together with a creamy dressing.',
    procedure: [
      'Combine young coconut, fruit cocktail, and other sweet ingredients in a bowl.',
      'Toss with a mixture of condensed milk and cream.',
      'Chill before serving.',
    ],
    image:
      'https://api.lifegetsbetter.ph/uploads/recipes/featured/Buko%20Pearl%20Salad%20-%20Semi%20Top.jpg',
    cooking_time: 10,
    meal_types: ['salads', 'desserts'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Coconut (Buko)',
        measurement: 'cups',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Fruit Cocktail',
        measurement: 'cups',
        amount: 1,
        description: '',
      },
      {
        ingredients_id: 'Condensed Milk',
        measurement: 'cups',
        amount: 1,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Ginisang Labanos',
    description:
      "Ginisang Labanos is a Filipino sautéed radish salad made with sliced radishes, shrimp, and fish sauce. It's a simple and healthy dish with a mild, savory flavor.",
    procedure: [
      'Sauté garlic and onions in oil, then add sliced radishes and cook until tender.',
      'Add shrimp and fish sauce, and cook until the shrimp turn pink.',
      'Serve as a side dish or salad.',
    ],
    image:
      'https://amiablefoods.com/wp-content/uploads/guisadong-labanos-4-810x810-1-700x700.jpg',
    cooking_time: 20,
    meal_types: ['salads', 'sides'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Radishes (Labanos)',
        measurement: 'grams',
        amount: 250,
        description: '',
      },
      {
        ingredients_id: 'Shrimp (Hipon)',
        measurement: 'grams',
        amount: 100,
        description: '',
      },
      {
        ingredients_id: 'Fish Sauce (Patis)',
        measurement: 'tablespoons',
        amount: 2,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Sinigang na Baboy',
    description:
      "Sinigang na Baboy is a popular Filipino sour pork soup made with tender pork, tamarind, and assorted vegetables. It's known for its tangy and savory flavor.",
    procedure: [
      'Boil tamarind pulp to extract the juice.',
      'Combine tamarind juice, pork, and vegetables in a pot.',
      'Simmer until pork is tender and vegetables are cooked.',
    ],
    image:
      'https://www.foxyfolksy.com/wp-content/uploads/2019/07/sinigang-na-baboy.jpg',
    cooking_time: 60,
    meal_types: ['soups', 'lunch', 'dinner'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Pork (Baboy)',
        measurement: 'grams',
        amount: 500,
        description: '',
      },
      {
        ingredients_id: 'Tamarind (Sampalok)',
        measurement: 'grams',
        amount: 50,
        description: '',
      },
      {
        ingredients_id: 'Eggplant (Talong)',
        measurement: 'pieces',
        amount: 4,
        description: '',
      },
      {
        ingredients_id: 'Radishes (Labanos)',
        measurement: 'grams',
        amount: 250,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Bulalo',
    description:
      "Bulalo is a hearty Filipino beef bone marrow soup made with tender beef shanks, bone marrow, and vegetables. It's known for its rich and flavorful broth.",
    procedure: [
      'Boil beef shanks until tender and skim off impurities.',
      'Add bone marrow and vegetables, and simmer until vegetables are cooked.',
      'Season with fish sauce and serve hot.',
    ],
    image:
      'https://i0.wp.com/www.angsarap.net/wp-content/uploads/2015/11/Bulalo-Wide.jpg?ssl=1',
    cooking_time: 90,
    meal_types: ['soups', 'lunch', 'dinner'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Beef Shanks (Buto-buto)',
        measurement: 'grams',
        amount: 800,
        description: '',
      },
      {
        ingredients_id: 'Bone Marrow (Buto ng Baka)',
        measurement: 'pieces',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Fish Sauce (Patis)',
        measurement: 'tablespoons',
        amount: 3,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Ginataang Alimango',
    description:
      "Ginataang Alimango is a creamy Filipino soup made with crab cooked in coconut milk with chili peppers and vegetables. It's a luxurious and flavorful dish.",
    procedure: [
      'Sauté garlic and onions in coconut oil.',
      'Add crab, coconut milk, and vegetables, and simmer until crab is cooked.',
      'Season with shrimp paste and chili peppers.',
    ],
    image:
      'https://i0.wp.com/whattoeatph.com/wp-content/uploads/2021/12/DSC_1174.jpg?resize=720%2C576&ssl=1',
    cooking_time: 60,
    meal_types: ['soups', 'lunch', 'dinner'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Crab (Alimango)',
        measurement: 'pieces',
        amount: 4,
        description: '',
      },
      {
        ingredients_id: 'Coconut Milk (Gata)',
        measurement: 'cups',
        amount: 2,
        description: '',
      },
      {
        ingredients_id: 'Shrimp Paste (Bagoong)',
        measurement: 'tablespoons',
        amount: 2,
        description: '',
      },
    ],
    privacy: 'public',
  },
  {
    name: 'Batchoy',
    description:
      "Batchoy is a flavorful Ilonggo noodle soup made with pork, beef, and egg noodles, topped with chicharrón (crispy pork skin). It's a comforting and hearty soup.",
    procedure: [
      'Sauté garlic and onions in oil until fragrant.',
      'Add pork and beef, simmer until tender, and remove meat from the broth.',
      'Cook noodles, return meat to the broth, and serve hot with chicharrón.',
    ],
    image: 'https://assets.unileversolutions.com/recipes-v2/110752.jpg',
    cooking_time: 60,
    meal_types: ['soups', 'lunch', 'dinner'],
    preferences: ['gain weight'],
    cuisines: ['tagalog', 'other filipino cuisines'],
    ingredients: [
      {
        ingredients_id: 'Pork (Baboy)',
        measurement: 'grams',
        amount: 300,
        description: '',
      },
      {
        ingredients_id: 'Beef (Baka)',
        measurement: 'grams',
        amount: 300,
        description: '',
      },
      {
        ingredients_id: 'Egg Noodles (Miki)',
        measurement: 'grams',
        amount: 200,
        description: '',
      },
    ],
    privacy: 'public',
  },
];

module.exports = { data };
