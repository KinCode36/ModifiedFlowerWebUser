import { CircleUserRound, Image, Settings, UserPen, ShoppingBag } from 'lucide-react'

export const bouquetData = [
  {
    id: 1,
    badge: "BESTSELLER",
    isFavourite: false,
    image:
      "https://dehraflicks.com/wp-content/uploads/2025/07/rose-single-red-transparent-bg-png-dehraflicks.png",
    category: "BOUQUETS",
    title: "Red Rose Bouquet",
    description: "12 Premium red roses",
    price: 1299,
    currency: "₹",
    button: "+",
    backgroundColor: "#FDE2E4",
    footerColor: "#FFF1C1",
    badgeColor: "#FFF1C1",
    badgeTextColor: "#8B3E2F",
  },

  {
    id: 2,
    badge: "NEW",
    isFavourite: true,
    image:
      "https://png.pngtree.com/png-clipart/20250112/original/pngtree-pink-rose-flower-png-image_19116731.png",
    category: "BOUQUETS",
    title: "Pink Rose Bouquet",
    description: "15 Fresh pink roses",
    price: 1499,
    currency: "₹",
    button: "+",
    backgroundColor: "#FCE4EC",
    footerColor: "#F8E8D6",
    badgeColor: "#E3F2FD",
    badgeTextColor: "#1565C0",
  },

  {
    id: 3,
    badge: "TRENDING",
    isFavourite: false,
    image:
      "https://png.pngtree.com/png-clipart/20231004/original/pngtree-white-lily-flower-png-image_13097547.png",
    category: "SINGLE STEMS",
    title: "White Lily",
    description: "10 Elegant white lilies",
    price: 1699,
    currency: "₹",
    button: "+",
    backgroundColor: "#EEF7F1",
    footerColor: "#FFF8E7",
    badgeColor: "#F3E5F5",
    badgeTextColor: "#7B1FA2",
  },

  {
    id: 4,
    badge: "POPULAR",
    isFavourite: false,
    image:
      "https://static.vecteezy.com/system/resources/previews/025/279/124/non_2x/sunflower-bouquet-illustration-decor-png.png",
    category: "SEASONAL",
    title: "Sunflower Bouquet",
    description: "8 Bright sunflowers",
    price: 999,
    currency: "₹",
    button: "+",
    backgroundColor: "#FFF4CC",
    footerColor: "#FFE8B3",
    badgeColor: "#E8F5E9",
    badgeTextColor: "#2E7D32",
  },

  {
    id: 5,
    badge: "BESTSELLER",
    isFavourite: true,
    image:
      "https://png.pngtree.com/png-clipart/20240301/original/pngtree-pink-tulip-soft-in-formal-garden-decoration-in-valentine-day-png-image_14458999.png",
    category: "SEASONAL",
    title: "Tulip Bouquet",
    description: "12 Colorful tulips",
    price: 1899,
    currency: "₹",
    button: "+",
    backgroundColor: "#E8F5E9",
    footerColor: "#DFF6DD",
    badgeColor: "#FFF1C1",
    badgeTextColor: "#8B3E2F",
  },

  {
    id: 6,
    badge: "LIMITED",
    isFavourite: false,
    image:
      "https://static.vecteezy.com/system/resources/previews/058/172/881/non_2x/beautiful-purple-orchid-flowers-isolated-on-a-transparent-background-showcasing-intricate-details-purple-orchid-flower-isolated-on-background-free-png.png",
    category: "PREMIUM",
    title: "Orchid Bouquet",
    description: "10 Premium orchids",
    price: 2199,
    currency: "₹",
    button: "+",
    backgroundColor: "#F3E5F5",
    footerColor: "#EDE7F6",
    badgeColor: "#FCE4EC",
    badgeTextColor: "#C2185B",
  },

  {
    id: 7,
    badge: "NEW",
    isFavourite: false,
    image:
      "https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-carnation-pink-illustration-png-image_6694653.png",
    category: "SINGLE STEMS",
    title: "Carnation",
    description: "18 Mixed carnations",
    price: 1199,
    currency: "₹",
    button: "+",
    backgroundColor: "#FFF0F5",
    footerColor: "#FDEBD0",
    badgeColor: "#E3F2FD",
    badgeTextColor: "#1565C0",
  },

  {
    id: 8,
    badge: "POPULAR",
    isFavourite: true,
    image:
      "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-colorful-bouquet-of-flowers-with-daisy-and-gerbera-in-bright-yellow-png-image_15836080.png",
    category: "SINGLE STEMS",
    title: "Gerbera",
    description: "15 Fresh gerberas",
    price: 1399,
    currency: "₹",
    button: "+",
    backgroundColor: "#FFF8E1",
    footerColor: "#FFE0B2",
    badgeColor: "#E8F5E9",
    badgeTextColor: "#2E7D32",
  },

  {
    id: 9,
    badge: "BESTSELLER",
    isFavourite: false,
    image:
      "https://static.vecteezy.com/system/resources/previews/044/245/681/non_2x/colorful-bouquet-of-mixed-flowers-in-full-bloom-png.png",
    category: "SEASONAL",
    title: "Mixed Flower",
    description: "20 Seasonal flowers",
    price: 2499,
    currency: "₹",
    button: "+",
    backgroundColor: "#E3F2FD",
    footerColor: "#E1F5FE",
    badgeColor: "#FFF1C1",
    badgeTextColor: "#8B3E2F",
  },

  {
    id: 10,
    badge: "PREMIUM",
    isFavourite: true,
    image:
      "https://png.pngtree.com/png-clipart/20250428/original/pngtree-purple-lavender-png-image_20868046.png",
    category: "PREMIUM",
    title: "Lavender Bouquet",
    description: "12 Fragrant lavender stems",
    price: 1999,
    currency: "₹",
    button: "+",
    backgroundColor: "#EDE7F6",
    footerColor: "#F3E5F5",
    badgeColor: "#FFF3E0",
    badgeTextColor: "#E65100",
  },
]

 export const feedbackData = [
  {
    id: 1,
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Floralia transformed our wedding venue into something truly magical. Every bloom was perfect.",
    name: "Priya S",
    role: "Wedding",
    location: "Delhi",
    avatar: "PS",
    avatarColor: "#D28B73",
  },
  {
    id: 2,
    rating: "⭐⭐⭐⭐",
    review:
      "Quick delivery, beautiful packaging, and the roses stayed fresh for nearly two weeks!",
    name: "Arjun M",
    role: "Order Customer",
    location: "",
    avatar: "AM",
    avatarColor: "#6D9A78",
  },
  {
    id: 3,
    rating: "⭐⭐⭐⭐",
    review:
      "Booked the Silver package for our corporate gala — the team exceeded every expectation.",
    name: "Neha K",
    role: "Corporate Event",
    location: "",
    avatar: "NK",
    avatarColor: "#7B7AB5",
  },
];

 export const work = [
  {
    id: 1,
    title: "Royal Wedding Decoration",
    category: "Wedding",
  },
  {
    id: 2,
    title: "Corporate Event Decoration",
    category: "Corporate",
  },
  {
    id: 3,
    title: "Birthday Flower Decoration",
    category: "Birthday",
  },
  {
    id: 4,
    title: "Engagement Floral Setup",
    category: "Engagement",
  },
  {
    id: 5,
    title: "Anniversary Decoration",
    category: "Anniversary",
  }
]

export const profileDetails = [
  {
    id: 1,
    title: "Account",
    icon: CircleUserRound,
  },
  {
    id: 2,
    title: "Gallery",
    icon: Image,
  },
  {
    id: 3,
    title: "Setting",
    icon: Settings,
  },
  {
    id: 4,
    title: "Edit Profile",
    icon: UserPen,
  },
  {
    id: 5,
    title: "My Orders",
    icon: ShoppingBag,
  }
];

export const sidebarButtons = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Shop",
      path: "/shop",
    },
    {
      id: 3,
      title: "Services",
      path: "/services",
    },
    {
      id: 4,
      title: "Gallery",
      path: "/gallery",
    },
  ];

 export const cards = [
  {
    id: 1,
    name: "Shopping credit - Primary",
    number: "Discover 2828",
    expiry: "08/29",
    type: "discover",
  },
  {
    id: 2,
    name: "Credit - Secondary Account",
    number: "Mastercard 5678",
    expiry: "07/25",
    type: "mastercard",
  },
  {
    id: 3,
    name: "Home - Checking",
    number: "Visa 5678",
    expiry: "11/26",
    type: "visa",
  },
  {
    id: 4,
    name: "Travel Rewards",
    number: "Amex 1234",
    expiry: "10/24",
    type: "amex",
  },
]; 

export const cartData = [
  {
    id: 1,
    name: "Red Rose Bouquet",
    price: 250,
    quantity: 1,
    subtotal: 250,
    image: "https://dehraflicks.com/wp-content/uploads/2025/07/rose-single-red-transparent-bg-png-dehraflicks.png",
  },
  {
    id: 2,
    name: "Pink Rose Bouquet",
    price: 300,
    quantity: 1,
    subtotal: 300,
    image: "https://png.pngtree.com/png-clipart/20250112/original/pngtree-pink-rose-flower-png-image_19116731.png",
  },
  {
    id: 3,
    name: "White Lily Bouquet",
    price: 350,
    quantity: 2,
    subtotal: 700,
    image: "https://png.pngtree.com/png-clipart/20231004/original/pngtree-white-lily-flower-png-image_13097547.png",
  },
  {
    id: 4,
    name: "Sunflower Bouquet",
    price: 280,
    quantity: 1,
    subtotal: 280,
    image: "https://static.vecteezy.com/system/resources/previews/025/279/124/non_2x/sunflower-bouquet-illustration-decor-png.png",
  },
  {
    id: 5,
    name: "Tulip Bouquet",
    price: 400,
    quantity: 1,
    subtotal: 400,
    image: "https://png.pngtree.com/png-clipart/20240301/original/pngtree-pink-tulip-soft-in-formal-garden-decoration-in-valentine-day-png-image_14458999.png",
  },
  {
    id: 6,
    name: "Mixed Flower Bouquet",
    price: 450,
    quantity: 2,
    subtotal: 900,
    image: "https://static.vecteezy.com/system/resources/previews/044/245/681/non_2x/colorful-bouquet-of-mixed-flowers-in-full-bloom-png.png",
  },
  {
    id: 7,
    name: "Purple Orchid Bouquet",
    price: 500,
    quantity: 1,
    subtotal: 500,
    image: "https://static.vecteezy.com/system/resources/previews/058/172/881/non_2x/beautiful-purple-orchid-flowers-isolated-on-a-transparent-background-showcasing-intricate-details-purple-orchid-flower-isolated-on-background-free-png.png",
  },
  {
    id: 8,
    name: "Gerbera Bouquet",
    price: 320,
    quantity: 1,
    subtotal: 320,
    image: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-colorful-bouquet-of-flowers-with-daisy-and-gerbera-in-bright-yellow-png-image_15836080.png",
  },
  {
    id: 9,
    name: "Pink Carnation Bouquet",
    price: 380,
    quantity: 1,
    subtotal: 380,
    image: "https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-carnation-pink-illustration-png-image_6694653.png",
  },
  {
    id: 10,
    name: "Lavender Bouquet",
    price: 650,
    quantity: 1,
    subtotal: 650,
    image: "https://png.pngtree.com/png-clipart/20250428/original/pngtree-purple-lavender-png-image_20868046.png",
  },
];

export const orderSummary = {
  subtotal: 1435.00,
  discount: 20,
  shipping: "Free",
  total: 1026.23
};