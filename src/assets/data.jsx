/* ================= NAV LINKS ================= */

const navLinksData = [
  { isActive: true, name: "WOMENSWEAR" },
  { isActive: false, name: "MENSWEAR" },
  { isActive: false, name: "KIDS" },
  { isActive: false, name: "SALE" },
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
    name: "CORD SHIRT",
    price: "$100",
    tag: "NEW ARRIVAL",
    category: "New",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-2.png)]",
  },
  {
    id: 2,
    name: "CPO SHIRT",
    price: "$90",
    tag: "GET OFF 20%",
    category: "Flash",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-1.png)]",
  },
  {
    id: 3,
    name: "SUMMER SWEATER",
    price: "$50",
    tag: null,
    category: "Summer",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-3.png)]",
  },
  {
    id: 4,
    name: "T-SHIRTS",
    price: "$60",
    tag: null,
    category: "Best",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-4.png)]",
  },
  {
    id: 5,
    name: "CASUAL TROUSERS",
    price: "$120",
    tag: null,
    category: "Best",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-6.png)]",
  },
  {
    id: 6,
    name: "CARDIGAN",
    price: "$150",
    tag: null,
    category: "New",
    imgHeight: "aspect-[3/4]",
    bgUrl: "bg-[url(/images/art-5.png)]",
  },
];

/* ================= FOOTER LINKS ================= */

const productLinksData = [
  {
    title: "Product",
    links: ["Womenswear", "Menswear", "Kids", "Sale", "Discover"],
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
