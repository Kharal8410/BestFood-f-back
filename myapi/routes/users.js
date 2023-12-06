var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let dataArray = [
    {
      id: "1",
      name: "Chef John",
      type: "Italian Cuisine",
      image: "chef_john.jpg",
      description: "Passionate chef specializing in authentic Italian dishes.",
    },
    {
      id: "2",
      name: "Chef Emily",
      type: "Asian Fusion",
      image: "chef_emily.jpg",
      description: "Innovative chef with a flair for combining Asian flavors.",
    },
    {
      id: "3",
      name: "Chef Carlos",
      type: "Mexican Cuisine",
      image: "chef_carlos.jpg",
      description:
        "Master of Mexican spices, bringing the taste of Mexico to you.",
    },
    {
      id: "4",
      name: "Chef Sophia",
      type: "French Pastry",
      image: "chef_sophia.jpg",
      description:
        "Talented pastry chef with a love for creating delicate French pastries.",
    },
    {
      id: "5",
      name: "Chef Ahmed",
      type: "Middle Eastern Cuisine",
      image: "chef_ahmed.jpg",
      description:
        "Expert in Middle Eastern flavors, crafting dishes with rich spices.",
    },
    {
      id: "6",
      name: "Chef Maria",
      type: "Mediterranean Diet",
      image: "chef_maria.jpg",
      description:
        "Promoting a healthy lifestyle with delicious Mediterranean-inspired dishes.",
    },
    {
      id: "7",
      name: "Chef William",
      type: "American BBQ",
      image: "chef_william.jpg",
      description:
        "Masters the art of American barbecue, bringing the taste of the grill to your plate.",
    },
    {
      id: "8",
      name: "Chef Yuki",
      type: "Japanese Sushi",
      image: "chef_yuki.jpg",
      description:
        "Sushi artisan known for creating visually stunning and delicious sushi creations.",
    },
    {
      id: "9",
      name: "Chef Gabriela",
      type: "Vegetarian Delights",
      image: "chef_gabriela.jpg",
      description:
        "Passionate about vegetarian cuisine, crafting flavorful and innovative plant-based dishes.",
    },
    {
      id: "10",
      name: "Chef Ricardo",
      type: "Brazilian Churrasco",
      image: "chef_ricardo.jpg",
      description:
        "Bringing the authentic flavors of Brazilian churrasco to your table with expertise.",
    },
  ];

  res.json({
    data: dataArray,
  });
});

module.exports = router;
