export const links = [
  {
    name: "About Us",
    submenu: true,
    sublinks: [
      {
        Head: "What we do",
        sublink: [{ name: "About Us", link: "/AboutUs" }],
      },
      {
        Head: "The Organization",
        sublink: [
          { name: "Team", link: "/" },
          { name: "Board Of Directors", link: "/" },
        ],
      },
      {
        Head: "Contact Us",
        sublink: [{ name: "Contact", link: "/contact" }],
      },
    ],
  },

  {
    name: "Our Experience",
    submenu: true,
    sublinks: [
      {
        Head: "Achievements",
        sublink: [
          { name: "Works", link: "/experience" },
          { name: "Partners", link: "/" },
        ],
      },
      {
        Head: "Projects",
        sublink: [
          { name: "Events", link: "/" },
          { name: "Campaigns", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Our Blog",
    submenu: true,
    sublinks: [
      {
        Head: "Updates",
        sublink: [{ name: "Latest News", link: "/blog" }],
      },
      ,
    ],
  },
];
