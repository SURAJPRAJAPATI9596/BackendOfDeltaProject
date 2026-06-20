const sampleListings = [
  {
    title: "Luxury Beach Villa",
    description:
      "Beautiful villa with ocean view and private pool perfect for vacations.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: 4500,
    location: "Goa",
    country: "India",
  },

  {
    title: "Mountain View Cottage",
    description: "Peaceful cottage surrounded by mountains and fresh air.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 1800,
    location: "Manali",
    country: "India",
  },

  {
    title: "Modern City Apartment",
    description: "Stylish apartment located in the heart of the city.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 2500,
    location: "Delhi",
    country: "India",
  },

  {
    title: "Forest Tree House",
    description: "Unique tree house stay surrounded by nature.",
    image: "https://images.unsplash.com/photo-1520986606214-8b456906c813",
    price: 1200,
    location: "Kerala",
    country: "India",
  },

  {
    title: "Lake Side Resort",
    description: "Relaxing resort beside a beautiful lake.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    price: 3200,
    location: "Udaipur",
    country: "India",
  },

  {
    title: "Snow Valley Cabin",
    description: "Cozy cabin with amazing snow mountain views.",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73",
    price: 2200,
    location: "Shimla",
    country: "India",
  },

  {
    title: "Royal Palace Stay",
    description: "Historic palace converted into luxury accommodation.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    price: 8000,
    location: "Jaipur",
    country: "India",
  },

  {
    title: "Desert Camp",
    description: "Luxury desert camp with traditional experience.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    price: 3500,
    location: "Jaisalmer",
    country: "India",
  },

  {
    title: "Island Paradise",
    description: "Private island stay with beautiful beaches.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 9000,
    location: "Maldives",
    country: "Maldives",
  },

  {
    title: "Ocean Front House",
    description: "House located directly near the ocean.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    price: 5000,
    location: "Bali",
    country: "Indonesia",
  },

  {
    title: "Hill Station Home",
    description: "Comfortable home with scenic hill views.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: 1600,
    location: "Mussoorie",
    country: "India",
  },

  {
    title: "Luxury Penthouse",
    description: "Premium penthouse with city skyline view.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    price: 7000,
    location: "Dubai",
    country: "UAE",
  },

  {
    title: "River Side Cabin",
    description: "Small cabin beside a flowing river.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
    price: 1400,
    location: "Rishikesh",
    country: "India",
  },

  {
    title: "Countryside Farm House",
    description: "Farm house surrounded by green fields.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    price: 2000,
    location: "Punjab",
    country: "India",
  },

  {
    title: "Snow Resort",
    description: "Luxury resort for winter holidays.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    price: 6000,
    location: "Switzerland",
    country: "Switzerland",
  },

  {
    title: "Beach Hut",
    description: "Simple beach hut for peaceful vacation.",
    image: "https://images.unsplash.com/photo-1505881502353-a1986add3762",
    price: 1000,
    location: "Thailand",
    country: "Thailand",
  },

  {
    title: "Vintage Villa",
    description: "Classic villa with vintage interiors.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 4200,
    location: "Rome",
    country: "Italy",
  },

  {
    title: "Forest Lodge",
    description: "Wooden lodge inside deep forest.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 1700,
    location: "Canada",
    country: "Canada",
  },

  {
    title: "Modern Studio",
    description: "Small modern studio apartment.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    price: 1300,
    location: "Tokyo",
    country: "Japan",
  },

  {
    title: "Luxury Hotel Room",
    description: "Premium hotel room with modern facilities.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
    price: 5500,
    location: "Paris",
    country: "France",
  },

  {
    title: "Coastal Cottage",
    description: "Cute cottage near the sea.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
    price: 2100,
    location: "Sydney",
    country: "Australia",
  },

  {
    title: "Mountain Resort",
    description: "Resort with beautiful mountain landscape.",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1",
    price: 3900,
    location: "Nepal",
    country: "Nepal",
  },

  {
    title: "Lake House",
    description: "Private house near a peaceful lake.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 2800,
    location: "New York",
    country: "USA",
  },

  {
    title: "Garden Villa",
    description: "Villa surrounded by beautiful gardens.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    price: 3500,
    location: "London",
    country: "UK",
  },

  {
    title: "Eco Resort",
    description: "Environment friendly stay close to nature.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    price: 2600,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = sampleListings;
