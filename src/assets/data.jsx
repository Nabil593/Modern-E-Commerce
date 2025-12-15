/* ================= NAV LINKS ================= */

const navLinksData = [
  { isActive: true, name: "HOME" },
  { isActive: false, name: "SHOP" },
  { isActive: false, name: "ABOUT" },
  { isActive: false, name: "CONTACT" },
  { isActive: false, name: "DISCOVER" },
];

/* ================= FILTER BUTTONS ================= */
/* name === product.category (VERY IMPORTANT) */

const filterButtonsData = [
  { name: "All", isActive: true },
  { name: "Summer", isActive: false },
  { name: "New", isActive: false },
  { name: "Best", isActive: false },
  { name: "Flash", isActive: false },
];

/* ================= PRODUCTS ================= */

const productData = [
  {
    id: 1,
    name: "SMART WATCH",
    price: "$100",
    tag: "NEW ARRIVAL",
    category: "New",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-2.jpg)]",
  },
  {
    id: 2,
    name: "CPO HEAD",
    price: "$90",
    tag: "GET OFF 20%",
    category: "Flash",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-1.jpg)]",
  },
  {
    id: 3,
    name: "SONY",
    price: "$50",
    tag: null,
    category: "Summer",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-3.jpg)]",
  },
  {
    id: 4,
    name: "BLACK SOUND",
    price: "$60",
    tag: null,
    category: "Best",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-4.jpg)]",
  },
  {
    id: 5,
    name: "CASUAL WATCH",
    price: "$120",
    tag: null,
    category: "Best",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-6.jpg)]",
  },
  {
    id: 6,
    name: "ROBLOX",
    price: "$150",
    tag: null,
    category: "New",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-5.jpg)]",
  },
];

/* ================= FOOTER LINKS ================= */

const productLinksData = [
  {
    title: "MENU",
    links: ["Home", "Shop", "About", "Contact", "Discover"],
  },
];

const buyingLinksData = [
  {
    title: "Buying",
    links: [
      "Shipping",
      "Returns",
      "Terms of Use",
      "Privacy Policy",
      "Customer Service",
    ],
  },
];

const socialLinksData = [
  {
    title: "Social",
    links: ["Instagram", "Facebook", "Twitter"],
  },
];

/* ================= EXPORTS ================= */

export {
  navLinksData,
  filterButtonsData,
  productData,
  productLinksData,
  buyingLinksData,
  socialLinksData,
};
