import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#Faculty", label: "Faculty" },
  {href: '#acheivements',label:"Achievements"},
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: bigShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: bigShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: bigShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Chuck Taylor All Star",
    price: "100.20 €",
  },
  {
    imgURL: shoe5,
    name: "Run Star Hike Sequins",
    price: "190.00 €",
  },
  {
    imgURL: shoe6,
    name: "Chuck Taylor All Star",
    price: "120.20 €",
  },
  {
    imgURL: shoe7,
    name: "Chuck 70 Y2K Heart",
    price: "130.00 €",
  },
];

export const services = [
  {
    // imgURL: truckFast,
    label: "Vision",
    subtext: "Department of CSE aims to make a stance of International repute through continuous research, innovation and industry led curriculum.",
  },
  {
    
    label: "Mission",
    subtext:
      "To Impart Quality Education with social consciousness and make them Globally Competent.",
  },
  
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { name: "Home", link: "/" },
      { name: "University", link: "/" },
      { name: "MRGI", link: "/" },
      { name: "Statutory Authorities", link: "/" },
      { name: "Statutory Bodies", link: "/" },
      { name: "Examinations", link: "/" },
    ],
  },
  {
    title: "CAMPUS LIFE",
    links: [
      { name: "Hostel", link: "/" },
      { name: "Library", link: "/" },
      { name: "Cafeteria", link: "/" },
      { name: "Laboratories", link: "/" },
      { name: "Sports", link: "/" },
      
    ],
  },
  {
    title: "QUICK LINKS",
    links: [
      { name: "UGC Application", link: "/" },
      { name: "Conferences", link: "tel:+92554862354" },
      {name: "MOUs and Collaborations", link: "/" },
      {name: "Contact Us", link: "/" },
      {name: "Student Login", link: "/" },
    ],
  },
  {
    title: "ACADEMICS",
    links: [
      { name: "School of Engineering", link: "/" },
      { name: "School of Agriculture", link: "tel:+92554862354" },
      {name: "School of Allied Healthcare Sciences", link: "/" },
      {name: "School of Management / Commerce", link: "/" },
      {name: "School of Sciences", link: "/" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
