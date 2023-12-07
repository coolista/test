const menus = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about-2",
  },
  {
    id: 3,
    name: "Dream Interpreter",
    path: "/service-6",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog-2",
  },
  {
    id: 5,
    name: "Pages",
    children: [
      {
        id: 1,
        name: "Help",
        path: "/help",
      },
      {
        id: 2,
        name: "Invoices",
        path: "/invoices",
      },
      {
        id: 3,
        name: "Privacy Policy",
        path: "/terms",
      },
    ],
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
];

export default menus;
