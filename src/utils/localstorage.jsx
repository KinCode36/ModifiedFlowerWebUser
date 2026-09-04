const users = [
  {
    id: 1,
    name: "Khushi Sharma",
    email: "khushi@gmail.com",
    otp: 123,
    phone: "9876543210",

    address: {
      houseNo: "24",
      street: "MG Road",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302001",
      country: "India"
    },

    orders: [
      {
        orderId: "ORD1001",
        items: [
          {
            productId: 1,
            productName: "Red Rose Bouquet",
            quantity: 2,
            price: 1299
          }
        ],
        totalAmount: 2598,
        paymentMethod: "UPI",
        paymentStatus: "Paid",
        orderStatus: "Delivered",
        orderDate: "2026-08-10"
      }
    ],

    wishlist: [2, 5],
    cart: [
      {
        productId: 3,
        productName: "Pink Tulip Bouquet",
        quantity: 1,
        price: 1499
      }
    ]
  },

  {
    id: 2,
    name: "Aarav Mehta",
    email: "aarav@gmail.com",
    otp: 123,
    phone: "9876543211",

    address: {
      houseNo: "18",
      street: "Vaishali Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302021",
      country: "India"
    },

    orders: [
      {
        orderId: "ORD1002",
        items: [
          {
            productId: 4,
            productName: "White Lily Bouquet",
            quantity: 1,
            price: 1799
          },
          {
            productId: 1,
            productName: "Red Rose Bouquet",
            quantity: 1,
            price: 1299
          }
        ],
        totalAmount: 3098,
        paymentMethod: "Cash on Delivery",
        paymentStatus: "Pending",
        orderStatus: "Shipped",
        orderDate: "2026-08-12"
      }
    ],

    wishlist: [1, 4],
    cart: []
  },

  {
    id: 3,
    name: "Priya Verma",
    email: "priya@gmail.com",
    otp: 123,
    phone: "9876543212",

    address: {
      houseNo: "52",
      street: "Civil Lines",
      city: "Delhi",
      state: "Delhi",
      pincode: "110054",
      country: "India"
    },

    orders: [
      {
        orderId: "ORD1003",
        items: [
          {
            productId: 5,
            productName: "Mixed Flower Bouquet",
            quantity: 3,
            price: 1999
          }
        ],
        totalAmount: 5997,
        paymentMethod: "Credit Card",
        paymentStatus: "Paid",
        orderStatus: "Processing",
        orderDate: "2026-08-13"
      }
    ],

    wishlist: [3, 5],
    cart: [
      {
        productId: 2,
        productName: "Yellow Tulip Bouquet",
        quantity: 2,
        price: 1399
      }
    ]
  },

  {
    id: 4,
    name: "Arjun Singh",
    email: "arjun@gmail.com",
    otp: 123,
    phone: "9876543213",

    address: {
      houseNo: "101",
      street: "Sector 15",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122001",
      country: "India"
    },

    orders: [
      {
        orderId: "ORD1004",
        items: [
          {
            productId: 2,
            productName: "Pink Tulip Bouquet",
            quantity: 1,
            price: 1499
          }
        ],
        totalAmount: 1499,
        paymentMethod: "UPI",
        paymentStatus: "Paid",
        orderStatus: "Delivered",
        orderDate: "2026-08-08"
      }
    ],

    wishlist: [2],
    cart: []
  },

  {
    id: 5,
    name: "Neha Kapoor",
    email: "neha@gmail.com",
    otp: 123,
    phone: "9876543214",

    address: {
      houseNo: "76",
      street: "Banjara Hills",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500034",
      country: "India"
    },

    orders: [
      {
        orderId: "ORD1005",
        items: [
          {
            productId: 1,
            productName: "Red Rose Bouquet",
            quantity: 1,
            price: 1299
          },
          {
            productId: 5,
            productName: "Mixed Flower Bouquet",
            quantity: 1,
            price: 1999
          }
        ],
        totalAmount: 3298,
        paymentMethod: "UPI",
        paymentStatus: "Paid",
        orderStatus: "Out for Delivery",
        orderDate: "2026-08-14"
      }
    ],

    wishlist: [1, 5],
    cart: []
  }
];


export const setLocalStorage = () => {
  localStorage.setItem('users', JSON.stringify(users))
}

export const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('users'))

  return { users:data }
}

  