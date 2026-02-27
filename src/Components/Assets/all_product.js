import p1_img from "./shose_women/p1.jpg";
import p2_img from "./shose_women/p2.jpg";
import p3_img from "./shose_women/p3.jpg";
import p4_img from "./shose_women/p4.jpg";
import p5_img from "./shose_women/p5.jpg";
import p6_img from "./shose_women/p6.jpg";
import p7_img from "./shose_women/p7.jpg";
import p8_img from "./shose_women/p8.jpg";
import p9_img from "./shose_man/p9.jpg";
import p10_img from "./shose_man/p10.jpg";
import p11_img from "./shose_man/p11.jpg";
import p12_img from "./shose_man/p12.jpg";
import p13_img from "./shose_man/p13.jpg";
import p14_img from "./shose_man/p14.jpg";
import p15_img from "./shose_man/p15.jpg";
import p16_img from "./shose_man/p16.jpg";
import p17_img from "./shoes_kids/p17.jpg";
import p18_img from "./shoes_kids/p18.jpg";
import p19_img from "./shoes_kids/p19.jpg";
import p20_img from "./shoes_kids/p20.jpg";
import p21_img from "./shoes_kids/p21.jpg";
import p22_img from "./shoes_kids/p22.jpg";
import p23_img from "./shoes_kids/p23.jpg";
import p24_img from "./shoes_kids/p24.jpg";

let all_product = [
  {
    id: 1,
    name: "ARCH FIT - COMFY WAVE",
    category: "women",
    image: p1_img,
    new_price: 1259.0,
    old_price: 1499.0,
    descriptions: "Your feet will thank you for the supportive comfort and sporty style of the SKECHERS Arch Fit - Comfy Wave shoe. Sporty engineered knit mesh fabric upper in a lace up sporty cas",
  },
  {
    id: 2,
    name: "D'LUX FITNESS-ROAM FREE",
    category: "women",
    image: p2_img,
    new_price: 1120.0,
    old_price: 1889.0,
    descriptions: "This lace-up features a breathable mesh and synthetic upper, Skechers Air-Cooled Memory Foam insole and a well-cushioned midsole",
  },
  {
    id: 3,
    name: "D'LUX WALKER-FRESH FINESSE",
    category: "women",
    image: p3_img,
    new_price: 1599.0,
    old_price: 1999.0,
    descriptions: "D'Lux Walker - Fresh Finesse. This lace-up features an engineered mesh upper with a Skechers Air-Cooled Memory Foam insole and a cushioned platform midsole",
  },
  {
    id: 4,
    name: "ELITE SPORT PRO- RADIANT SQUA",
    category: "women",
    image: p4_img,
    new_price: 999.0,
    old_price: 1599.0,
    descriptions: "Athletic style and awesome comfort combine in Skechers Elite Sport - Radiant Squads. This lace-up features an engineered mesh upper with synthetic hotmelt detail, cushione",
  },
  {
    id: 5,
    name: "MICROSPEC MAX PLUS - OMBRE DA",
    category: "women",
    image: p5_img,
    new_price: 1699.0,
    old_price: 2009.0,
    descriptions: "Optical illusions aren't just for the movies when wearing Skechers Microspec Max Plus - Ombre Days. This fun Colorful Comfort design features a mesh and synthetic up",
  },
  {
    id: 6,
    name: "RELAXED FIT- D'LUX FITNESS",
    category: "women",
    image: p6_img,
    new_price: 2229.0,
    old_price: 2590.0,
    descriptions: "Stay motivated in well-cushioned comfort during your workouts with Skechers Relaxed Fit® D'Lux Fitness. This lace-up features an engineered mesh upper with a cushioned Skech",
  },
  {
    id: 7,
    name: "SKECH-AIR COURT-COOL AVENUE",
    category: "women",
    image: p7_img,
    new_price: 859.0,
    old_price: 1299.0,
    descriptions: " Surefooted comfort and athletic style combine in Skechers Skech-Air Court - Retro Avenue. This lace-up features a suede leather, synthetic, and mesh upper with a cushione",
  },
  {
    id: 8,
    name: "ULTRA FLEX 3",
    category: "women",
    image: p8_img,
    new_price: 1509.0,
    old_price: 2029.0,
    descriptions: "Step out in colorful style and comfort wearing Skechers Ultra Flex 3.0. This Stretch Fit design features a Skech-Knit upper with multicolor gore straps and a cushioned Skechers Air",
  },
  {
    id: 9,
    name: "BOBS SQUAD CHAOS  ",
    category: "men",
    image: p9_img,
    new_price: 1559.0,
    old_price: 2099.0,
    descriptions: "Stride out in comfort and sleek style wearing BOBS from Skechers. This sporty vegan design features a engineered mesh upper and a Skechers Memory Foam™ cushioned comfort insole",
  },
  {
    id: 10,
    name: "GLIDE-STEP TRAIL",
    category: "men",
    image: p10_img,
    new_price: 1999.0,
    old_price: 2599.5,
    descriptions: "Sporty comfort and durable traction meet in Skechers GLIDE STEP TRAIL. This outdoor trail style lace-up features a waterproof leather upper with a Skechers Air-Cooled Memory Foam insole",
  },
  {
    id: 11,
    name: "GO RUN SPEED BEAST",
    category: "men",
    image: p11_img,
    new_price: 1289.0,
    old_price: 1659.0,
    descriptions: " Beat your own record in superior comfort and performance technology wearing Skechers GO RUN Speed Beast. This lace-up running design features a breathable monomesh upper with a removab",
  },
  {
    id: 12,
    name: "UNO - KEEP CLOSE",
    category: "men",
    image: p12_img,
    new_price: 2009.0,
    old_price: 2599.0,
    descriptions: "Step up your look with striking style in Skechers Street Uno - Keep Close. This lace-up fashion sneaker features a synthetic duraleather upper with a Skechers Air-Cooled Memory Foam i",
  },
  {
    id: 13,
    name: "UNO - POWEX",
    category: "men",
    image: p13_img,
    new_price: 2509.0,
    old_price: 2999.0,
    descriptions: "Classic air cushioned style meets updated comfort in the SKECHERS Uno – Powex shoe. Synthetic and textile upper in a lace up classic jogger style sneaker with stitching and perforation acc",
  },
  {
    id: 14,
    name: "UNO - STAND ON AIR",
    category: "men",
    image: p14_img,
    new_price: 2239.0,
    old_price: 2609.0,
    descriptions: "Classic air-cushioned comfort meets a fresh update in the Skechers Street Street Uno - Stand on Air shoe. This lace-up fashion sneaker features a smooth perforated synthetic upper",
  },
  {
    id: 15,
    name: "UNO - STAND ON AIR",
    category: "men",
    image: p15_img,
    new_price: 2209.0,
    old_price: 2799.0,
    descriptions: "This lace-up fashion sneaker features a smooth perforated synthetic upper with an Air-Cooled Memory Foam® insole and Skech-Air® visible air-cushioned midsole",
  },
  {
    id: 16,
    name: "UPPER CUT CLASSIC JOGGER-ASH",
    category: "men",
    image: p16_img,
    new_price: 2999.0,
    old_price: 3599.0,
    descriptions: "Kick it old school with a fresh look in Mark Nason Los Angles Upper Cut Classic Jogger - Ash. This lace-up sneaker features a soft suede and nylon fabric upper with a cushi",
  },
  {
    id: 17,
    name: "COURT HIGH - GLITTER MIX",
    category: "kid",
    image: p17_img,
    new_price: 859.0,
    old_price: 1209.0,
    descriptions: "Get that ideal clean style with enhanced comfort wearing the SKECHERS Court High-Glitter Mix Smooth Clean Synthetic upper in a lace up sneaker with stitching, perforation",
  },
  {
    id: 18,
    name: "GLIMMER KICKS - FRESH GLOW",
    category: "kid",
    image: p18_img,
    new_price: 859.0,
    old_price: 1299.0,
    descriptions: "Shine through the day in sporty comfort with Skechers S Lights® Glimmer Kicks - Fresh Glow. This lighted design features an athletic mesh and synthetic upper with stretc",
  },
  {
    id: 19,
    name: "GO RUN 400-INTREPID",
    category: "kid",
    image: p19_img,
    new_price: 1299.0,
    old_price: 1599.0,
    descriptions: "Perfect to keep your feet comfortable throughout your playing sessions, this pair sport shoes from Skechers ensures to provide you with the required performance. Its mesh upper will",
  },
  {
    id: 20,
    name: "RAZOR FLEX AIR",
    category: "kid",
    image: p20_img,
    new_price: 1009.0,
    old_price: 1359.0,
    descriptions: "A sporty style that keeps up with his every move comes in the Skechers Razor Flex AIR - shoe. This lightweight Gore & Strap Sneaker with Lateral Tech Piece and mesh upper with an Ai",
  },
  {
    id: 21,
    name: "SKECH FAST",
    category: "kid",
    image: p21_img,
    new_price: 1599.0,
    old_price: 1899.0,
    descriptions: "Move with an extra step of comfort wearing Skechers Skech Fast. This slip-on features a mesh and synthetic upper with an elasticized quarter brace and a lightweight cushioned midsole.",
  },
  {
    id: 22,
    name: "SKECH FAST - OMBRE SUNSET",
    category: "kid",
    image: p22_img,
    new_price: 1399.0,
    old_price: 1690.0,
    descriptions: "Move with an extra step of comfort wearing Skechers Skech Fast-Ombre Sunset. This sporty design features a mesh and synthetic upper with an elasticized quarter brace and cushio",
  },
  {
    id: 23,
    name: "SKECH POPS",
    category: "kid",
    image: p23_img,
    new_price: 1090.0,
    old_price: 1299.0,
    descriptions: "Poppable fun combines with awesome comfort wearing Skechers Skech Pops. This pop bubble themed sneaker features a laceless fit mesh and synthetic upper with a pop bubble brace and a cus",
  },
  {
    id: 24,
    name: "SKECH POPS BLAST",
    category: "kid",
    image: p24_img,
    new_price: 1399.0,
    old_price: 1699.0,
    descriptions: "Poppable fun combines with awesome comfort in the Skechers Skech Pops Blast. This pop bubble themed sneaker features mesh and synthetic upper with stretch laces and a cushioned insole.",
  },
];

export default all_product;
