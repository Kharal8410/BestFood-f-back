var express = require("express");
var router = express.Router();
let dataArray = [
  {
    id: "1",
    name: "Burger",
    type: "Fast Food",
    category: "non-veg",
    price: 5.99,
    description:
      "Indulge in the timeless satisfaction of a classic beef burger featuring crisp lettuce, juicy tomato slices, and a generous layer of melted cheese. This culinary masterpiece transcends the ordinary with its harmonious combination of flavors and textures. The succulent beef patty, cooked to perfection, provides a robust foundation that complements the freshness of the lettuce and the vibrant juiciness of the tomatoes.",

    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Salad",
    type: "Healthy",
    category: "vegetarian",
    price: 7.99,
    description:
      "Fresh garden salad with mixed greens and vinaigrette. Immerse yourself in a world of vibrant flavors and wholesome goodness with this refreshing salad that's perfect for a healthy meal.",
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Pizza",
    type: "Italian",
    category: "non-veg",
    price: 12.99,
    description:
      "Delicious pepperoni pizza with a thin crust. Indulge in the rich flavors of this Italian classic, featuring savory pepperoni and a perfectly crispy crust that will leave you wanting more.",
    image:
      "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "Margherita Pizza",
    type: "Italian",
    category: "non-veg",
    price: 10.99,
    description:
      "Classic Margherita pizza with fresh tomatoes and mozzarella. Experience the simplicity and perfection of this traditional Italian pizza, crafted with the finest ingredients.",
    image:
      "https://images.unsplash.com/photo-1564936281291-294551497d81?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    name: "Chicken Alfredo Pasta",
    type: "Italian",
    category: "non-veg",
    price: 14.99,
    description:
      "Creamy Alfredo pasta with grilled chicken and parmesan. Delight your taste buds with this comforting and rich pasta dish, featuring tender chicken and a luscious Alfredo sauce.",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    name: "Sushi Platter",
    type: "Japanese",
    category: "non-veg",
    price: 22.99,
    description:
      "Assorted sushi rolls with soy sauce and wasabi. Embark on a culinary journey with this exquisite sushi platter that showcases the artistry of Japanese cuisine.",
    image:
      "https://plus.unsplash.com/premium_photo-1664206963965-f2f884b7e83d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    name: "Chicken Tikka Masala",
    type: "Indian",
    category: "non-veg",
    price: 12.99,
    description:
      "Spicy chicken tikka in a creamy tomato-based sauce. Experience the bold and aromatic flavors of Indian cuisine with this tantalizing chicken tikka masala.",
    image:
      "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    name: "Caesar Salad",
    type: "American",
    category: "non-veg",
    price: 8.99,
    description:
      "Fresh Caesar salad with crisp lettuce and parmesan cheese. Indulge in the classic flavors of this American favorite, featuring crunchy romaine lettuce and savory parmesan.",
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "9",
    name: "Pho Soup",
    type: "Vietnamese",
    category: "non-veg",
    price: 9.99,
    description:
      "Traditional Vietnamese pho soup with beef and rice noodles. Warm your soul with the authentic flavors of this Vietnamese classic, featuring fragrant herbs and tender beef.",
    image:
      "https://plus.unsplash.com/premium_photo-1694699354812-fead620b7d4f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "10",
    name: "Cheeseburger",
    type: "American",
    category: "non-veg",
    price: 11.99,
    description:
      "Classic cheeseburger with lettuce, tomato, and pickles. Bite into the timeless flavors of this American classic, featuring a juicy beef patty and all the fixings.",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "11",
    name: "Pad Thai",
    type: "Thai",
    category: "vegetarian",
    price: 13.99,
    description:
      "Stir-fried rice noodles with shrimp, tofu, and peanuts. Transport your taste buds to the vibrant streets of Thailand with this flavorful and aromatic Pad Thai.",
    image:
      "https://plus.unsplash.com/premium_photo-1664472637341-3ec829d1f4df?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "12",
    name: "Margarita Cocktail",
    type: "Beverage",
    category: "vegetarian",
    price: 7.99,
    description:
      "Refreshing margarita cocktail with lime and salt. Unwind and savor the zesty goodness of this classic margarita, expertly crafted with fresh lime and a hint of salt.",
    image:
      "https://images.unsplash.com/photo-1544145945-b4744b209fc2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "13",
    name: "Caprese Salad",
    type: "Italian",
    category: "vegetarian",
    price: 9.99,
    description:
      "Caprese salad with fresh tomatoes, mozzarella, and basil. Delight in the simplicity of this Italian classic, featuring the finest tomatoes, creamy mozzarella, and fragrant basil leaves.",
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "14",
    name: "Tofu Stir Fry",
    type: "Asian",
    category: "vegetarian",
    price: 10.99,
    description:
      "Healthy tofu stir-fry with vegetables in a savory sauce. Elevate your dining experience with this nutritious and flavorful tofu stir-fry, featuring a medley of fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1619683548293-c74defe8d5d2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "15",
    name: "BBQ Ribs",
    type: "American",
    category: "non-veg",
    price: 16.99,
    description:
      "Tender BBQ ribs with a smoky and tangy barbecue sauce. Sink your teeth into the succulence of these barbecue ribs, featuring a perfect balance of smokiness and tangy sweetness.",
    image:
      "https://plus.unsplash.com/premium_photo-1663012872761-33dd73e292cc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "16",
    name: "Pho Soup",
    type: "Vietnamese",
    category: "vegetarian",
    price: 9.99,
    description:
      "Traditional Vietnamese pho soup with beef and rice noodles. Warm your soul with the authentic flavors of this Vietnamese classic, featuring fragrant herbs and tender beef.",
    image:
      "https://plus.unsplash.com/premium_photo-1694699354812-fead620b7d4f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "28",
    name: "Margherita Pizza",
    type: "Italian",
    category: "vegetarian",
    price: 12.99,
    description:
      "Classic Margherita pizza with fresh tomatoes, mozzarella, and basil on a thin crust. Indulge in the simplicity and deliciousness of this Italian favorite.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "22",
    name: "Sushi Platter",
    type: "Japanese",
    category: "non-veg",
    price: 24.99,
    description:
      "Exquisite sushi platter with a variety of fresh fish and expertly crafted rolls. Experience the delicate flavors and textures of Japanese cuisine in every bite.",
    image:
      "https://images.unsplash.com/photo-1556845753-dc2253812a18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "37",
    name: "Vegetable Stir-Fry",
    type: "Asian",
    category: "vegetarian",
    price: 14.99,
    description:
      "Assorted vegetables stir-fried to perfection with a savory sauce. Enjoy the vibrant flavors and crisp textures of this delicious and healthy vegetarian stir-fry.",
    image:
      "https://plus.unsplash.com/premium_photo-1664478238082-3df93e48c491?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: "31",
    name: "Grilled Salmon",
    type: "Seafood",
    category: "non-veg",
    price: 18.99,
    description:
      "Juicy grilled salmon fillet seasoned with herbs and lemon. Delight in the rich and savory taste of this perfectly grilled seafood dish.",
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

router.get("/", function (req, res, next) {
  res.json({
    data: dataArray,
  });
});

router.get("/:id", function (req, res, next) {
  const foodId = req.params.id;
  const food = dataArray.find((user) => user.id === foodId);

  if (food) {
    res.json({
      data: food,
    });
  } else {
    res.status(404).json({
      error: "Food not found",
    });
  }
});
module.exports = router;
