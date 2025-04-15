import { Recipe } from "../interfaces/recipe.int";

export const RECIPES :Recipe[] = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description: "Classic Italian pasta with creamy egg sauce",
    ingredients: ["400g spaghetti", "200g pancetta", "3 eggs", "50g pecorino", "black pepper"],
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=1920&h=1280&fit=crop",
    country: "Italy"
  },
  {
    id: 2,
    title: "Beef Bourguignon",
    description: "French red wine beef stew",
    ingredients: ["1kg beef chuck", "750ml red wine", "200g bacon", "250g mushrooms", "3 carrots"],
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1920&h=1280&fit=crop",
    country: "France"
  },
  {
    id: 3,
    title: "Chicken Tikka Masala",
    description: "Creamy Indian spiced chicken",
    ingredients: ["800g chicken", "250ml yogurt", "400ml tomato sauce", "3 garlic cloves", "ginger"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1920&h=1280&fit=crop",
    country: "India"
  },
  {
    id: 4,
    title: "Sushi Platter",
    description: "Assorted fresh Japanese sushi",
    ingredients: ["sushi rice", "salmon fillet", "tuna", "nori sheets", "avocado"],
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&h=1280&fit=crop",
    country: "Japan"
  },
  {
    id: 5,
    title: "Paella Valenciana",
    description: "Spanish saffron rice with seafood",
    ingredients: ["2 cups rice", "1 pinch saffron", "500g shrimp", "500g mussels", "1 red bell pepper"],
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1920&h=1280&fit=crop",
    country: "Spain"
  },
  {
    id: 6,
    title: "Pad Thai",
    description: "Stir-fried Thai rice noodles",
    ingredients: ["200g rice noodles", "300g shrimp", "100g bean sprouts", "50g peanuts", "2 limes"],
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=1920&h=1280&fit=crop",
    country: "Thailand"
  },
  {
    id: 7,
    title: "Moussaka",
    description: "Greek layered eggplant dish",
    ingredients: ["2 eggplants", "500g ground lamb", "3 potatoes", "200ml béchamel sauce"],
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1920&h=1280&fit=crop",
    country: "Greece"
  },
  {
    id: 8,
    title: "Feijoada",
    description: "Brazilian black bean stew",
    ingredients: ["500g black beans", "300g pork ribs", "200g sausage", "2 bay leaves"],
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1920&h=1280&fit=crop",
    country: "Brazil"
  },
  {
    id: 9,
    title: "Pho Bo",
    description: "Vietnamese beef noodle soup",
    ingredients: ["300g rice noodles", "1L beef broth", "200g sirloin", "100g bean sprouts"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1920&h=1280&fit=crop",
    country: "Vietnam"
  },
  {
    id: 10,
    title: "Peking Duck",
    description: "Crispy Chinese roasted duck",
    ingredients: ["1 whole duck", "100ml hoisin sauce", "20 pancakes", "1 cucumber"],
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=1920&h=1280&fit=crop",
    country: "China"
  },
  {
    id: 11,
    title: "Fish and Chips",
    description: "British fried fish with potatoes",
    ingredients: ["4 white fish fillets", "300g potatoes", "200g flour", "1 lemon"],
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=1920&h=1280&fit=crop",
    country: "UK"
  },
  {
    id: 12,
    title: "Tacos al Pastor",
    description: "Mexican spit-grilled pork tacos",
    ingredients: ["500g pork", "10 corn tortillas", "1 pineapple", "cilantro"],
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=1920&h=1280&fit=crop",
    country: "Mexico"
  },
  {
    id: 13,
    title: "Wiener Schnitzel",
    description: "Austrian breaded veal cutlet",
    ingredients: ["4 veal cutlets", "100g breadcrumbs", "2 eggs", "1 lemon"],
    image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=1920&h=1280&fit=crop",
    country: "Austria"
  },
  {
    id: 14,
    title: "Bibimbap",
    description: "Korean mixed rice bowl",
    ingredients: ["2 cups rice", "200g beef", "spinach", "carrots", "gochujang"],
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=1920&h=1280&fit=crop",
    country: "Korea"
  },
  {
    id: 15,
    title: "Ceviche",
    description: "Peruvian citrus-marinated seafood",
    ingredients: ["500g white fish", "10 limes", "1 red onion", "cilantro", "corn"],
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1920&h=1280&fit=crop",
    country: "Peru"
  },
  {
    id: 16,
    title: "Kebab",
    description: "Middle Eastern grilled meat",
    ingredients: ["500g lamb", "2 onions", "sumac", "flatbread"],
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=1920&h=1280&fit=crop",
    country: "Lebanon"
  },
  {
    id: 17,
    title: "Poutine",
    description: "Canadian fries with cheese curds",
    ingredients: ["500g fries", "200g cheese curds", "300ml gravy"],
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1920&h=1280&fit=crop",
    country: "Canada"
  },
  {
    id: 18,
    title: "Bobotie",
    description: "South African spiced meat bake",
    ingredients: ["500g ground beef", "2 slices bread", "milk", "curry powder"],
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=1920&h=1280&fit=crop",
    country: "South Africa"
  },
  {
    id: 19,
    title: "Lobster Roll",
    description: "New England lobster sandwich",
    ingredients: ["500g lobster meat", "4 hot dog buns", "mayonnaise", "lemon"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1920&h=1280&fit=crop",
    country: "USA"
  },
  {
    id: 20,
    title: "Döner Kebab",
    description: "Turkish grilled meat in bread",
    ingredients: ["500g lamb", "pita bread", "lettuce", "tomato", "yogurt sauce"],
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=1920&h=1280&fit=crop",
    country: "Turkey"
  },
  {
    id: 21,
    title: "Rendang",
    description: "Indonesian spicy beef stew",
    ingredients: ["1kg beef", "coconut milk", "lemongrass", "galangal", "chilies"],
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1920&h=1280&fit=crop",
    country: "Indonesia"
  },
  {
    id: 22,
    title: "Goulash",
    description: "Hungarian beef and paprika stew",
    ingredients: ["1kg beef", "3 onions", "2 tbsp paprika", "4 potatoes"],
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1920&h=1280&fit=crop",
    country: "Hungary"
  },
  {
    id: 23,
    title: "Couscous",
    description: "North African semolina dish",
    ingredients: ["2 cups couscous", "500g lamb", "carrots", "zucchini", "chickpeas"],
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1920&h=1280&fit=crop",
    country: "Morocco"
  },
  {
    id: 24,
    title: "Borscht",
    description: "Ukrainian beetroot soup",
    ingredients: ["3 beets", "1 cabbage", "potatoes", "carrots", "sour cream"],
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1920&h=1280&fit=crop",
    country: "Ukraine"
  },
  {
    id: 25,
    title: "Hainanese Chicken Rice",
    description: "Singaporean poached chicken dish",
    ingredients: ["1 whole chicken", "2 cups rice", "ginger", "garlic", "cucumber"],
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1920&h=1280&fit=crop",
    country: "Singapore"
  },
  {
    id: 26,
    title: "Mole Poblano",
    description: "Mexican chocolate-chili sauce",
    ingredients: ["500g chicken", "chilies", "chocolate", "almonds", "sesame seeds"],
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=1920&h=1280&fit=crop",
    country: "Mexico"
  },
  {
    id: 27,
    title: "Fårikål",
    description: "Norwegian lamb and cabbage stew",
    ingredients: ["1kg lamb", "1 cabbage", "black pepper", "wheat flour"],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1920&h=1280&fit=crop",
    country: "Norway"
  },
  {
    id: 28,
    title: "Koshari",
    description: "Egyptian lentils and pasta dish",
    ingredients: ["rice", "lentils", "pasta", "tomato sauce", "fried onions"],
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1920&h=1280&fit=crop",
    country: "Egypt"
  },
  {
    id: 29,
    title: "Pierogi",
    description: "Polish stuffed dumplings",
    ingredients: ["flour", "potatoes", "cheese", "onions", "butter"],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1920&h=1280&fit=crop",
    country: "Poland"
  },
  {
    id: 30,
    title: "Apple Pie",
    description: "Classic American dessert",
    ingredients: ["6 apples", "cinnamon", "sugar", "butter", "flour"],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1920&h=1280&fit=crop",
    country: "USA"
  }
];
