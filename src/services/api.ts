// Mock data for the grocery app
export interface Product {
  id: number;
  name: string;
  weight: string;
  price: number;
  image: string;
  description?: string;
  category: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Groceries',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    name: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    name: 'Fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&h=200&fit=crop',
  },
  {
    id: 4,
    name: 'Dairy',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop',
  },
];

export const products: Product[] = [
  // Groceries Category (13 products)
  {
    id: 1,
    name: 'Oak Coffee',
    weight: '100g',
    price: 540,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop',
    description:
      'Oak Coffee – A Bold Brew with Earthy Depth\nSavor the rich, full-bodied character of Oak Coffee, crafted from carefully roasted beans that deliver warm, toasty notes reminiscent of oak-aged perfection.',
    category: 'Groceries',
  },
  {
    id: 2,
    name: 'Premium Tea',
    weight: '200g',
    price: 320,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop',
    description:
      'Premium blend tea with aromatic herbs and spices for a perfect cup every time. This carefully curated blend combines the finest tea leaves from high-altitude gardens with natural herbs like cardamom, cinnamon, and ginger. Each sip delivers a rich, full-bodied flavor that awakens your senses and provides the perfect start to your day. Ideal for both morning energy boost and evening relaxation.',
    category: 'Groceries',
  },
  {
    id: 3,
    name: 'Organic Honey',
    weight: '500g',
    price: 450,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=200&fit=crop',
    description:
      'Pure organic honey sourced from local beekeepers, perfect for natural sweetening. This golden nectar is harvested from wildflower meadows where bees collect nectar from diverse flowering plants, creating a complex flavor profile with floral notes. Rich in antioxidants, enzymes, and minerals, this honey not only sweetens your food naturally but also provides numerous health benefits. Perfect for tea, toast, desserts, or as a natural remedy for sore throats.',
    category: 'Groceries',
  },
  {
    id: 8,
    name: 'Basmati Rice',
    weight: '5kg',
    price: 850,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
    description:
      'Premium long-grain basmati rice with aromatic fragrance and fluffy texture. Grown in the fertile plains of the Himalayas, this aged basmati rice is known for its distinctive nutty aroma and delicate flavor. Each grain elongates beautifully when cooked, maintaining its separate identity without sticking together. Perfect for biryanis, pulavs, and everyday meals. This rice is aged for optimal texture and is free from artificial additives.',
    category: 'Groceries',
  },
  {
    id: 9,
    name: 'Whole Wheat Flour',
    weight: '2kg',
    price: 180,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop',
    description:
      'Freshly ground whole wheat flour, perfect for healthy baking and cooking. Made from premium quality wheat grains that are stone-ground to preserve all the natural nutrients, fiber, and wheat germ. This flour retains the wholesome goodness of the entire wheat kernel, providing essential B vitamins, iron, and dietary fiber. Ideal for making rotis, bread, cookies, and other baked goods with a nutty flavor and dense texture.',
    category: 'Groceries',
  },
  {
    id: 10,
    name: 'Olive Oil',
    weight: '500ml',
    price: 650,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop',
    description:
      'Extra virgin olive oil with rich flavor and health benefits. Cold-pressed from the finest Mediterranean olives, this golden oil retains all its natural antioxidants and vitamins. With its fruity aroma and peppery finish, it enhances the flavor of salads, pasta, and grilled vegetables. Rich in monounsaturated fats and vitamin E, this olive oil supports heart health and adds a gourmet touch to your cooking.',
    category: 'Groceries',
  },
  {
    id: 11,
    name: 'Almonds',
    weight: '250g',
    price: 420,
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=300&h=200&fit=crop',
    description:
      'Premium quality almonds, rich in protein and healthy fats. These California almonds are carefully selected for their size, crunch, and nutritional value. Packed with vitamin E, magnesium, and fiber, they make an excellent snack or ingredient for baking. Whether eaten raw, roasted, or used in almond milk, these nuts provide sustained energy and support brain health. Perfect for trail mixes, desserts, or as a healthy on-the-go snack.',
    category: 'Groceries',
  },
  {
    id: 12,
    name: 'Green Tea',
    weight: '100g',
    price: 280,
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=300&h=200&fit=crop',
    description:
      'Organic green tea leaves with antioxidants and natural flavor. Sourced from high-altitude tea gardens, these tender leaves are carefully processed to preserve their natural catechins and polyphenols. Known for its metabolism-boosting properties and calming effect, this green tea offers a delicate, grassy flavor with subtle sweetness. Rich in L-theanine and EGCG, it supports mental clarity and overall wellness. Best enjoyed without milk for maximum health benefits.',
    category: 'Groceries',
  },
  {
    id: 13,
    name: 'Pasta',
    weight: '500g',
    price: 120,
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=300&h=200&fit=crop',
    description:
      "Italian-style pasta made from durum wheat for perfect texture. This premium pasta is crafted using traditional methods with 100% durum wheat semolina, ensuring the ideal al dente texture when cooked. The bronze-die extrusion process creates a slightly rough surface that holds sauces beautifully. Whether you're making a simple aglio e olio or a rich bolognese, this pasta provides the authentic Italian experience with excellent cooking consistency.",
    category: 'Groceries',
  },
  {
    id: 14,
    name: 'Quinoa',
    weight: '500g',
    price: 380,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300&h=200&fit=crop',
    description:
      'Organic quinoa seeds, a complete protein source and superfood. This ancient grain from South America contains all nine essential amino acids, making it a perfect protein source for vegetarians and vegans. With its nutty flavor and fluffy texture when cooked, quinoa is incredibly versatile and can be used in salads, soups, or as a rice substitute. Rich in fiber, iron, and magnesium, it supports digestive health and provides sustained energy throughout the day.',
    category: 'Groceries',
  },
  {
    id: 15,
    name: 'Coconut Oil',
    weight: '500ml',
    price: 320,
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=200&fit=crop',
    description:
      "Pure coconut oil for cooking and health benefits. This virgin coconut oil is extracted from fresh coconut meat using traditional methods, preserving its natural aroma and nutritional properties. With a high smoke point, it's perfect for high-heat cooking, baking, and frying. Rich in medium-chain triglycerides (MCTs), it provides quick energy and supports metabolism. Also excellent for skin and hair care as a natural moisturizer.",
    category: 'Groceries',
  },
  {
    id: 16,
    name: 'Oats',
    weight: '1kg',
    price: 240,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop',
    description:
      'Rolled oats perfect for healthy breakfast and baking. These whole grain oats are steam-rolled to create the perfect texture for quick cooking while retaining maximum nutrition. Rich in beta-glucan fiber, they help lower cholesterol and provide sustained energy release. Perfect for overnight oats, porridge, smoothies, or baking healthy cookies and muffins. Naturally gluten-free and packed with protein, iron, and B vitamins.',
    category: 'Groceries',
  },
  {
    id: 17,
    name: 'Black Pepper',
    weight: '100g',
    price: 180,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=200&fit=crop',
    description:
      'Freshly ground black pepper with intense aroma and flavor. Known as the "King of Spices," this premium black pepper is sourced from the Western Ghats of India. The peppercorns are harvested at peak ripeness and ground to preserve their volatile oils and piperine content. This spice not only enhances the flavor of any dish but also aids digestion and has antioxidant properties. Essential for every kitchen and perfect for seasoning meats, vegetables, and soups.',
    category: 'Groceries',
  },

  // Vegetables Category (11 products)
  {
    id: 4,
    name: 'Fresh Tomatoes',
    weight: '1kg',
    price: 80,
    image:
      'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Fresh, juicy tomatoes perfect for cooking and salads. These vine-ripened tomatoes are bursting with flavor and packed with lycopene, vitamin C, and antioxidants. Their perfect balance of sweetness and acidity makes them ideal for sauces, curries, salads, and sandwiches. Grown using sustainable farming practices, these tomatoes retain their natural taste and nutritional value. Whether used fresh or cooked, they add vibrant color and rich umami flavor to any dish.',
    category: 'Vegetables',
  },
  {
    id: 5,
    name: 'Green Spinach',
    weight: '500g',
    price: 40,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=200&fit=crop',
    description:
      "Fresh green spinach leaves, rich in iron and vitamins. These tender, dark green leaves are harvested at peak freshness to ensure maximum nutritional content. Packed with iron, folate, vitamin K, and antioxidants, spinach supports bone health and boosts immunity. The mild, slightly sweet flavor makes it perfect for salads, smoothies, curries, and sautéed dishes. Easy to cook and incredibly versatile, it's a nutritional powerhouse that adds color and health benefits to any meal.",
    category: 'Vegetables',
  },
  {
    id: 18,
    name: 'Carrots',
    weight: '1kg',
    price: 60,
    image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=200&fit=crop',
    description:
      'Fresh orange carrots, sweet and crunchy, perfect for cooking. These vibrant orange carrots are loaded with beta-carotene, which converts to vitamin A in the body, supporting eye health and immune function. Their natural sweetness and satisfying crunch make them perfect for snacking, roasting, or adding to soups and stews. Whether eaten raw with hummus or cooked in your favorite recipes, these carrots provide essential nutrients and natural sweetness to your meals.',
    category: 'Vegetables',
  },
  {
    id: 19,
    name: 'Broccoli',
    weight: '500g',
    price: 90,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&h=200&fit=crop',
    description:
      'Fresh green broccoli florets, packed with nutrients and vitamins. This superfood vegetable is rich in vitamin C, vitamin K, folate, and powerful antioxidants that support immune health and may help reduce inflammation. The tender florets and crisp stalks offer a mild, slightly bitter flavor that pairs well with garlic, lemon, and cheese. Perfect for steaming, roasting, stir-frying, or adding to pasta dishes and casseroles.',
    category: 'Vegetables',
  },
  {
    id: 20,
    name: 'Bell Peppers',
    weight: '500g',
    price: 120,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=200&fit=crop',
    description:
      'Colorful bell peppers, crisp and sweet, perfect for stir-fries. These vibrant peppers come in a mix of red, yellow, and green varieties, each offering a unique flavor profile from sweet to mildly tangy. Rich in vitamin C, vitamin A, and antioxidants, they support immune health and add beautiful color to any dish. Their crisp texture and natural sweetness make them perfect for raw snacking, grilling, stuffing, or adding to pasta and rice dishes.',
    category: 'Vegetables',
  },
  {
    id: 21,
    name: 'Onions',
    weight: '2kg',
    price: 70,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=200&fit=crop',
    description:
      'Fresh red onions, essential for cooking and adding flavor. These premium red onions have a sharp, pungent flavor when raw that mellows to sweet and savory when cooked. Rich in quercetin and sulfur compounds, they offer anti-inflammatory benefits and support heart health. The beautiful purple-red skin and crisp white flesh make them perfect for salads, caramelizing, or as a base for curries, soups, and sauces. An essential ingredient in every kitchen.',
    category: 'Vegetables',
  },
  {
    id: 22,
    name: 'Potatoes',
    weight: '2kg',
    price: 50,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=200&fit=crop',
    description:
      "Fresh potatoes, versatile and perfect for various cooking methods. These all-purpose potatoes have a smooth, thin skin and creamy white flesh that holds its shape well when cooked. Rich in potassium, vitamin C, and fiber, they provide sustained energy and essential nutrients. Whether you're making mashed potatoes, french fries, roasted vegetables, or adding them to curries and stews, these potatoes deliver consistent results and delicious flavor.",
    category: 'Vegetables',
  },
  {
    id: 23,
    name: 'Cucumber',
    weight: '1kg',
    price: 45,
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&h=200&fit=crop',
    description:
      'Fresh cucumbers, crisp and refreshing, perfect for salads. These garden-fresh cucumbers have a cool, mild flavor and satisfying crunch that makes them perfect for hot summer days. With high water content and natural cooling properties, they help with hydration and provide vitamin K and potassium. Ideal for salads, sandwiches, pickles, or infused water. Their crisp texture and refreshing taste make them a healthy, low-calorie snack option.',
    category: 'Vegetables',
  },
  {
    id: 24,
    name: 'Cauliflower',
    weight: '1kg',
    price: 65,
    image:
      'https://images.unsplash.com/photo-1566842600175-97dca489844f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D',
    description:
      'Fresh white cauliflower, nutritious and versatile vegetable. This cruciferous vegetable has a mild, slightly nutty flavor and dense, creamy texture that makes it incredibly versatile. Rich in vitamin C, vitamin K, and fiber, cauliflower supports immune health and digestion. Perfect for roasting, mashing as a low-carb potato substitute, making cauliflower rice, or adding to curries and gratins. Its neutral flavor absorbs spices beautifully, making it a favorite for healthy, creative cooking.',
    category: 'Vegetables',
  },
  {
    id: 25,
    name: 'Green Beans',
    weight: '500g',
    price: 80,
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&h=200&fit=crop',
    description:
      'Fresh green beans, tender and flavorful, rich in fiber. These crisp, bright green beans are harvested at peak tenderness for the best flavor and texture. Packed with vitamins A, C, and K, plus folate and fiber, they support eye health and digestion. Their sweet, grassy flavor and satisfying snap make them perfect for steaming, sautéing, or adding to stir-fries and casseroles. A classic side dish that pairs well with almonds, garlic, or lemon.',
    category: 'Vegetables',
  },
  {
    id: 26,
    name: 'Cabbage',
    weight: '1kg',
    price: 35,
    image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=300&h=200&fit=crop',
    description:
      "Fresh green cabbage, crunchy and nutritious, perfect for salads. This dense, leafy vegetable has a mild, slightly peppery flavor and satisfying crunch. Rich in vitamin C, vitamin K, and antioxidants, cabbage supports immune health and may help reduce inflammation. Perfect for coleslaw, sauerkraut, soups, or stir-fries. Its sturdy leaves also make excellent wraps for a low-carb alternative to tortillas. Economical and long-lasting, it's a kitchen staple.",
    category: 'Vegetables',
  },
  {
    id: 27,
    name: 'Eggplant',
    weight: '500g',
    price: 55,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&h=200&fit=crop',
    description:
      'Fresh purple eggplant, perfect for grilling and curries. This glossy, deep purple vegetable has a creamy, slightly bitter flesh that becomes silky and rich when cooked. High in fiber, potassium, and antioxidants, eggplant supports heart health and digestion. Its ability to absorb flavors makes it perfect for Mediterranean dishes, Indian curries, baba ganoush, or grilled preparations. The meaty texture makes it an excellent vegetarian protein substitute.',
    category: 'Vegetables',
  },

  // Fruits Category (11 products)
  {
    id: 6,
    name: 'Red Apples',
    weight: '1kg',
    price: 180,
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&h=200&fit=crop',
    description:
      'Crisp and sweet red apples, perfect for snacking and baking. These premium red apples have a perfect balance of sweetness and tartness with a satisfying crunch. Rich in fiber, vitamin C, and antioxidants, they support digestive health and immune function. The natural sugars provide quick energy while the fiber helps maintain stable blood sugar levels. Perfect for eating fresh, adding to salads, baking pies, or making homemade applesauce.',
    category: 'Fruits',
  },
  {
    id: 28,
    name: 'Bananas',
    weight: '1kg',
    price: 60,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop',
    description:
      'Fresh yellow bananas, rich in potassium and natural energy. These perfectly ripe bananas have a creamy texture and natural sweetness that makes them ideal for quick energy. Packed with potassium, vitamin B6, and fiber, they support heart health and muscle function. Perfect for smoothies, baking banana bread, adding to cereal, or enjoying as a healthy on-the-go snack. Their natural sugars provide sustained energy for workouts and daily activities.',
    category: 'Fruits',
  },
  {
    id: 29,
    name: 'Oranges',
    weight: '1kg',
    price: 120,
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=200&fit=crop',
    description:
      'Juicy oranges packed with vitamin C and natural sweetness. These sun-ripened oranges burst with citrusy flavor and refreshing juice. Loaded with vitamin C, folate, and flavonoids, they boost immune health and support collagen production. The natural citrus oils in the peel add aromatic zest to cooking and baking. Perfect for fresh juice, fruit salads, marmalades, or eating fresh. Their bright flavor and high water content make them perfect for hydration.',
    category: 'Fruits',
  },
  {
    id: 30,
    name: 'Grapes',
    weight: '500g',
    price: 150,
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=300&h=200&fit=crop',
    description: 'Sweet and juicy grapes, perfect for snacking and desserts.',
    category: 'Fruits',
  },
  {
    id: 31,
    name: 'Strawberries',
    weight: '250g',
    price: 200,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=200&fit=crop',
    description: 'Fresh strawberries, sweet and aromatic, rich in vitamin C.',
    category: 'Fruits',
  },
  {
    id: 32,
    name: 'Pineapple',
    weight: '1pc',
    price: 80,
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=300&h=200&fit=crop',
    description: 'Fresh pineapple, tropical and sweet, perfect for smoothies.',
    category: 'Fruits',
  },
  {
    id: 33,
    name: 'Mangoes',
    weight: '1kg',
    price: 250,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&h=200&fit=crop',
    description:
      'Sweet and juicy mangoes, the king of fruits with tropical flavor. These premium mangoes have a rich, creamy texture and intense tropical sweetness that makes them irresistible. Packed with vitamin A, vitamin C, and antioxidants, they support eye health and immune function. The golden flesh is perfect for eating fresh, making smoothies, lassi, or traditional Indian desserts. Their natural enzymes aid digestion, and their exotic flavor brings a taste of the tropics to any meal.',
    category: 'Fruits',
  },
  {
    id: 34,
    name: 'Watermelon',
    weight: '2kg',
    price: 90,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop',
    description: 'Fresh watermelon, hydrating and sweet, perfect for summer.',
    category: 'Fruits',
  },
  {
    id: 35,
    name: 'Pomegranate',
    weight: '500g',
    price: 180,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&h=200&fit=crop',
    description: 'Fresh pomegranate seeds, antioxidant-rich and delicious.',
    category: 'Fruits',
  },
  {
    id: 36,
    name: 'Kiwi',
    weight: '500g',
    price: 220,
    image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=300&h=200&fit=crop',
    description: 'Fresh kiwi fruits, tangy and sweet, packed with vitamin C.',
    category: 'Fruits',
  },
  {
    id: 37,
    name: 'Papaya',
    weight: '1kg',
    price: 70,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop',
    description: 'Fresh papaya, sweet and nutritious, rich in enzymes.',
    category: 'Fruits',
  },

  // Dairy Category (11 products)
  {
    id: 7,
    name: 'Fresh Milk',
    weight: '1L',
    price: 60,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop',
    description:
      'Fresh dairy milk, rich in calcium and essential nutrients. This farm-fresh whole milk is sourced from grass-fed cows and pasteurized for safety while retaining its natural taste and nutritional value. Rich in calcium, protein, vitamin D, and B vitamins, it supports bone health and muscle development. Perfect for drinking, cereal, coffee, baking, or making homemade yogurt and cheese. The creamy texture and mild, sweet flavor make it a family favorite.',
    category: 'Dairy',
  },
  {
    id: 38,
    name: 'Greek Yogurt',
    weight: '500g',
    price: 180,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop',
    description:
      'Creamy Greek yogurt, high in protein and probiotics. This thick, strained yogurt has a rich, tangy flavor and velvety texture that makes it incredibly versatile. With twice the protein of regular yogurt and beneficial live cultures, it supports digestive health and muscle recovery. Perfect for breakfast with honey and berries, as a base for smoothies, or as a healthy substitute for sour cream in cooking. The probiotics promote gut health and immune function.',
    category: 'Dairy',
  },
  {
    id: 39,
    name: 'Cheddar Cheese',
    weight: '200g',
    price: 320,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop',
    description:
      'Aged cheddar cheese with rich, sharp flavor. This premium cheddar is aged to perfection, developing a complex, nutty flavor with a firm yet creamy texture. Rich in calcium, protein, and vitamin B12, it supports bone health and energy metabolism. The sharp, tangy taste makes it perfect for sandwiches, mac and cheese, cheese boards, or melting over vegetables. Its excellent melting properties and bold flavor make it a versatile cooking ingredient.',
    category: 'Dairy',
  },
  {
    id: 40,
    name: 'Butter',
    weight: '500g',
    price: 280,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=200&fit=crop',
    description: 'Fresh creamy butter, perfect for cooking and baking.',
    category: 'Dairy',
  },
  {
    id: 41,
    name: 'Cottage Cheese',
    weight: '400g',
    price: 120,
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=200&fit=crop',
    description: 'Fresh cottage cheese, low-fat and high in protein.',
    category: 'Dairy',
  },
  {
    id: 42,
    name: 'Cream',
    weight: '200ml',
    price: 90,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop',
    description: 'Fresh heavy cream, perfect for desserts and cooking.',
    category: 'Dairy',
  },
  {
    id: 43,
    name: 'Mozzarella',
    weight: '250g',
    price: 250,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop',
    description: 'Fresh mozzarella cheese, perfect for pizza and salads.',
    category: 'Dairy',
  },
  {
    id: 44,
    name: 'Paneer',
    weight: '250g',
    price: 140,
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=200&fit=crop',
    description: 'Fresh paneer, soft Indian cottage cheese, perfect for curries.',
    category: 'Dairy',
  },
  {
    id: 45,
    name: 'Lassi',
    weight: '500ml',
    price: 80,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=200&fit=crop',
    description: 'Traditional yogurt-based drink, refreshing and nutritious.',
    category: 'Dairy',
  },
  {
    id: 46,
    name: 'Ice Cream',
    weight: '500ml',
    price: 220,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300&h=200&fit=crop',
    description: 'Creamy vanilla ice cream, perfect for desserts and treats.',
    category: 'Dairy',
  },
  {
    id: 47,
    name: 'Ghee',
    weight: '500g',
    price: 450,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=200&fit=crop',
    description: 'Pure clarified butter (ghee), traditional and flavorful.',
    category: 'Dairy',
  },
];

// API functions
export const getCategories = (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(categories), 500);
  });
};

export const getProductsByCategory = (categoryName: string): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === categoryName.toLowerCase()
      );
      resolve(filteredProducts);
    }, 500);
  });
};

export const getProductById = (id: number): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      resolve(product);
    }, 300);
  });
};
