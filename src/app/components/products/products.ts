// src/data/products.ts

export const products = [
  {
    id: 1,
    title: "BOPP laminated box bag",
    mainImage: "/products/bopp/BOPP_pink.png",
    additionalImages: [
      "/products/bopp/BOPP2.png",
      "/products/bopp/BOPP3.png",
      "/products/bopp/BOPP4.jpg",
    ],
    description:
      "Durable and reusable non-woven shopping bag, perfect for grocery shopping and promotional use.",
    colors: [
      {
        name: "Yellow",
        hex: "#FFFF00",
        image: "/products/bopp/BOPP_yellow.png",
      },
      { name: "Black", hex: "#000000", image: "/products/bopp/BOPP_black.png" },
      {
        name: "Orange",
        hex: "#FFA500",
        image: "/products/bopp/BOPP_orange.png",
      },
      {
        name: "Coffee",
        hex: "#A52A2A",
        image: "/products/bopp/BOPP_coffee.png",
      },
      { name: "Red", hex: "#ff000d", image: "/products/bopp/BOPP_red.png" },
      { name: "Pink", hex: "#ff00b7", image: "/products/bopp/BOPP_pink.png" },
      { name: "Gray", hex: "#b7b7b7", image: "/products/bopp/BOPP_gray.png" },
      { name: "White", hex: "#ffffff", image: "/products/bopp/BOPP_white.png" },
      {
        name: "Navi blue",
        hex: "#2b0070",
        image: "/products/bopp/BOPP_navi_blue.png",
      },
      {
        name: "Baby pink",
        hex: "#fbaeff",
        image: "/products/bopp/BOPP_baby_pink.png",
      },
      {
        name: "Parot green",
        hex: "#acff67",
        image: "/products/bopp/BOPP_parot_green.png",
      },
      {
        name: "Sky Blue",
        hex: "#67ccff",
        image: "/products/bopp/BOPP_sky_blue.png",
      },
      { name: "Ivory", hex: "#fff0cb", image: "/products/bopp/BOPP_ivory.png" },
      {
        name: "Golden",
        hex: "#FFD700",
        image: "/products/bopp/BOPP_golden.png",
      },
      {
        name: "Silver",
        hex: "#C0C0C0",
        image: "/products/bopp/BOPP_silver.png",
      },
      {
        name: "Dark green",
        hex: "#084200",
        image: "/products/bopp/BOPP_dark_green.png",
      },
    ],

    size: [
      { size: "15h x 12w x 4g inches", image: "/products/bopp/BOPP_size.png" },
      {
        size: "12h x 15w x 4g inches",
        image: "/products/bopp/BOPP_size_15x12.png",
      },
      {
        size: "12h x 10w x 4g inches",
        image: "/products/bopp/BOPP_size_12x10.png",
      },
    ],
    gsm: [100],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non woven laminated",
      useFor: ["Shopping Bags", "Grocery Bags"],
      priceRange: "$0.50 - $2.00 per piece",
    },
  },
  {
    id: 2,
    title: "Custom Printed Non-Woven Tote",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-2a.jpg",
      "/images/non-woven-bag-2b.jpg",
    ],
    description:
      "Stylish non-woven tote bag with custom printing options for branding and promotions.",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Orange", hex: "#FF5733" },
      { name: "Red", hex: "#C70039" },
    ],
    size: ["14x12 inches", "16x14 inches"],
    gsm: [70, 90, 110],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Promotional Bags", "Event Giveaways"],
      priceRange: "$0.80 - $3.00 per piece",
    },
  },
  {
    id: 3,
    title: "Reusable Grocery Non-Woven Bag",
    mainImage: "/product.jpg",
    additionalImages: [
      "/images/non-woven-bag-3a.jpg",
      "/images/non-woven-bag-3b.jpg",
    ],
    description:
      "Strong and eco-friendly grocery bag designed to carry daily essentials with ease.",
    colors: [
      { name: "Lime Green", hex: "#32CD32" },
      { name: "Orange", hex: "#FFA500" },
      { name: "Brown", hex: "#A52A2A" },
    ],
    size: ["10x8 inches", "12x10 inches"],
    gsm: [80, 100, 120],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Grocery Shopping", "Retail Stores"],
      priceRange: "$0.60 - $2.50 per piece",
    },
  },
  {
    id: 4,
    title: "D-Cut Non-Woven Carry Bag",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-4a.jpg",
      "/images/non-woven-bag-4b.jpg",
    ],
    description:
      "Convenient and lightweight D-cut bag ideal for stores and exhibitions.",
    colors: [
      { name: "Gold", hex: "#FFD700" },
      { name: "Crimson", hex: "#DC143C" },
      { name: "Dark Cyan", hex: "#008B8B" },
    ],
    size: ["14x12 inches", "16x14 inches"],
    gsm: [70, 90, 110],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Retail Bags", "Gift Bags"],
      priceRange: "$0.40 - $1.80 per piece",
    },
  },
  {
    id: 5,
    title: "Zippered Non-Woven Bag",
    mainImage: "/product.jpg",
    additionalImages: [
      "/images/non-woven-bag-5a.jpg",
      "/images/non-woven-bag-5b.jpg",
    ],
    description:
      "Premium non-woven bag with zipper closure for secure storage and easy carrying.",
    colors: [
      { name: "Orange Red", hex: "#FF4500" },
      { name: "Sea Green", hex: "#2E8B57" },
      { name: "Steel Blue", hex: "#4682B4" },
    ],
    size: ["16x14 inches", "18x16 inches"],
    gsm: [90, 110, 130],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Storage Bags", "Shopping Bags"],
      priceRange: "$1.00 - $4.00 per piece",
    },
  },
  {
    id: 6,
    title: "Loop Handle Non-Woven Bag",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-6a.jpg",
      "/images/non-woven-bag-6b.jpg",
    ],
    description:
      "Sturdy loop handle bag for convenient carrying of goods and groceries.",
    colors: [
      { name: "Purple", hex: "#800080" },
      { name: "Pink", hex: "#FF69B4" },
      { name: "Light Sea Green", hex: "#20B2AA" },
    ],
    size: ["12x10 inches", "14x12 inches"],
    gsm: [80, 100, 120],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Retail Bags", "Gift Bags"],
      priceRange: "$0.70 - $2.20 per piece",
    },
  },
  {
    id: 7,
    title: "Large Capacity Non-Woven Bag",
    mainImage: "/product.jpg",
    additionalImages: [
      "/images/non-woven-bag-7a.jpg",
      "/images/non-woven-bag-7b.jpg",
    ],
    description:
      "Spacious and eco-friendly bag designed for carrying bulk items efficiently.",
    colors: [
      { name: "Gray", hex: "#696969" },
      { name: "Dark Red", hex: "#8B0000" },
      { name: "Lime Green", hex: "#32CD32" },
    ],
    size: ["18x16 inches", "20x18 inches"],
    gsm: [100, 120, 140],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Non-Woven Fabric",
      useFor: ["Shopping Bags", "Wholesale Bags"],
      priceRange: "$1.20 - $5.00 per piece",
    },
  },
  {
    id: 8,
    title: "Biodegradable Non-Woven Bag",
    mainImage: "/product2.jpg",
    additionalImages: [
      "/images/non-woven-bag-8a.jpg",
      "/images/non-woven-bag-8b.jpg",
    ],
    description:
      "Environmentally friendly biodegradable bag, reducing waste and promoting sustainability.",
    colors: [
      { name: "Forest Green", hex: "#228B22" },
      { name: "Gold", hex: "#FFD700" },
      { name: "Orange Red", hex: "#FF4500" },
    ],
    size: ["14x12 inches", "16x14 inches"],
    gsm: [80, 100, 120],
    additionalInfo: {
      minOrderQuantity: { india: "500 KG", otherCountries: "1 Tonne" },
      material: "Biodegradable Non-Woven Fabric",
      useFor: ["Eco Bags", "Sustainable Shopping"],
      priceRange: "$1.50 - $6.00 per piece",
    },
  },
];
