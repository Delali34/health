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
        Head: "Our Blog",
        sublink: [{ name: "Latest News", link: "/blog" }],
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
    name: "Impact Reports",
    submenu: true,
    sublinks: [
      {
        Head: "2022",
        sublink: [{ name: "Download the report", link: "/" }],
      },

      {
        Head: "2023",
        sublink: [{ name: "Download the report", link: "/" }],
      },
      ,
    ],
  },
];
