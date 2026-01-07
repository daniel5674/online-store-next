export type Product = {
  id: string,
  name: string,
  price: number,
  category: string,
  description: string,
  images: string[],
  colors?: string[],
  sizes?: string[],
};

const dummyProducts = [
  {
    id: "1",
    name: "Adidas Campus",
    price: 399,
    category: "adidas",
    description: "Classic Adidas Campus sneakers with a stylish suede design.",
    images: [
      "https://www.mayers.co.il/wp-content/uploads/2023/08/627ccb88-c62d-4621-ad27-7d81df7a935f.png",
      "https://www.readyonline.co.il/wp-content/uploads/2024/02/hq8708-05.jpg",
    ],
    colors: ["gray", "black", "navy"],
    sizes: ["38", "39", "40", "41", "42", "43"],
  },
  {
    id: "2",
    name: "Adidas Ultraboost 22",
    price: 649,
    category: "adidas",
    description:
      "נעל ריצה מתקדמת עם בולמי זעזועים, נוחות מקסימלית ועיצוב מודרני שמתאים גם ליום-יום.",
    images: [
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/bad84b99019d4386a67cd03ecc51c0a4_9366/HQ4201_HM1.jpg",
      "https://omersport.co.il/cdn/shop/products/a4.jpg?v=1609971292&width=1946",
    ],
    colors: ["blue", "white", "black"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
  },
  {
    id: "3",
    name: "Adidas Gazelle Bold",
    price: 399,
    category: "adidas",
    description:
      "דגם רטרו איקוני בעיצוב נועז, עשוי זמש איכותי, מתאים למראה יומיומי עם סטייל.",
    images: [
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/36258d6089244b0891dcaf6101524f6b_9366/HQ6893_04_standard.jpg",
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c8f7f63c0d3248fb94ecaf610150e68c_9366/HQ6893_03_standard.jpg",
    ],
    colors: ["purple", "white", "beige"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: "4",
    name: "Adidas Forum Low",
    price: 439,
    category: "adidas",
    description:
      "נעל קלאסית עם השראה מסגנון הכדורסל של שנות ה-80, מתאימה לאופנת רחוב ייחודית.",
    images: [
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/f0924c964ace43c78dd1ac5e00377f5e_9366/FY7756_04_standard.jpg",
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/4cb5876afbae4250a787ac5e00365cd3_9366/FY7756_03_standard.jpg",
    ],
    colors: ["white", "blue", "gray"],
    sizes: ["38", "39", "40", "41", "42"],
  },
  {
    id: "5",
    name: "Adidas NMD_R1",
    price: 589,
    category: "adidas",
    description:
      "נעל ספורט עירונית עם עיצוב עתידני, סוליית Boost רכה ונוחות יוצאת דופן לאורך כל היום.",
    images: [
      "https://cdn-images.farfetch-contents.com/14/86/22/44/14862244_24360903_1000.jpg",
      "https://cdn-images.farfetch-contents.com/14/86/22/44/14862244_24360905_1000.jpg",
    ],
    colors: ["black", "red", "green"],
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: "6",
    name: "Adidas Stan Smith",
    price: 359,
    category: "adidas",
    description:
      "הדגם המפורסם של אדידס במראה לבן נקי עם נגיעה ירוקה – מתאים לכל הופעה.",
    images: [
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/f86168171d2a4644a8eeac1e00f52f85_9366/FX5502_04_standard.jpg",
      "https://assets.adidas.com/images/w_1880,f_auto,q_auto/72a38538fd684788b5d9ac1e00f52860_9366/FX5502_03_standard.jpg",
    ],
    colors: ["white", "green", "black"],
    sizes: ["37", "38", "39", "40", "41", "42"],
  },
  {
    id: "7",
    name: "Nike Air Force 1",
    price: 449,
    category: "nike",
    description:
      "Iconic Nike Air Force 1 sneakers with a timeless design and superior comfort.",
    images: [
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ef92df87-6098-4fa5-bc88-7107492febcf/AIR+FORCE+1+%2707.png",
    ],
  },
  {
    id: "8",
    name: "Nike Air Max 270",
    price: 589,
    category: "nike",
    description:
      "נעל נוחה במיוחד עם בולם זעזועים בולט ועיצוב מודרני – מתאימה גם לריצה וגם ליום-יום.",
    images: [
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/44fdb67b-6626-4463-85e3-8c181c75c8b1/W+AIR+MAX+270.png",
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/901018cd-e5e7-4081-8dfe-7e49ed1dae95/W+AIR+MAX+270.png",
    ],
    colors: ["black", "blue", "gray"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "9",
    name: "Nike ZoomX Vaporfly NEXT% 3",
    price: 899,
    category: "nike",
    description:
      "נעל ריצה מקצועית עם טכנולוגיית ZoomX וסוליה עם פחמן – מקסימום ביצועים במינימום משקל.",
    images: [
      "https://cdn-images.farfetch-contents.com/21/34/25/72/21342572_51361797_1000.jpg",
      "https://cdn-images.farfetch-contents.com/21/34/25/72/21342572_51361832_1000.jpg",
    ],
    colors: ["neon green", "white", "pink"],
    sizes: ["40", "41", "42", "43", "44", "45"],
  },
  {
    id: "10",
    name: "Nike LeBron Witness 7",
    price: 529,
    category: "nike",
    description:
      "נעלי כדורסל חתומות ע״י לברון ג׳יימס, מספקות תמיכה, קפיציות וסטייל על המגרש.",
    images: [
      "https://cdn-images.farfetch-contents.com/20/12/12/13/20121213_45263682_1000.jpg",
      "https://cdn-images.farfetch-contents.com/20/12/12/13/20121213_45263680_1000.jpg",
    ],
    colors: ["black", "purple", "red"],
    sizes: ["41", "42", "43", "44"],
  },
  {
    id: "11",
    name: "Nike Blazer Mid '77",
    price: 459,
    category: "nike",
    description:
      "נעל גבוהה עם עיצוב רטרו, עור איכותי וסוליה עבה – הבחירה המושלמת לסטייל אורבני.",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d5e4e389-c95e-449d-827d-3a3d7505989d/BLAZER+MID+%2777+SE+D+%28PS%29.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6afdda53-dea8-4f01-9c03-69a113c9b082/BLAZER+MID+%2777+SE+D+%28PS%29.png",
    ],
    colors: ["white", "green", "cream"],
    sizes: ["38", "39", "40", "41", "42"],
  },
  {
    id: "12",
    name: "Nike Dunk Low",
    price: 439,
    category: "nike",
    description:
      "נעלי סניקרס רטרו עם עיצוב ייחודי וסוליה שטוחה – מושלמות ליום-יום ולסטייל עירוני.",
    images: [
      "https://img.joomcdn.net/e16a53ced2962ab0561156f42856569ba9e21e9e_original.jpeg",
      "https://img.joomcdn.net/50619f7ed647bb8670b1a58ad3471c08023df46a_original.jpeg",
    ],
    colors: ["white", "red", "navy"],
    sizes: ["38", "39", "40", "41", "42", "43"],
  },
  {
    id: "13",
    name: "Puma RS-X",
    price: 419,
    category: "puma",
    description:
      "נעל ספורט עיצובית עם סוליה רחבה ובלעדית לנוחות ויציבות לאורך כל היום.",
    images: [
      "https://api.sportspirit.md/uploads/products/PU39192801.jpg",
      "https://shop.shakhtar.com/images/detailed/9/391928_01.jpg",
    ],
    colors: ["white", "gray", "black"],
    sizes: ["39", "40", "41", "42", "43", "44"],
  },
  {
    id: "14",
    name: "Puma Suede Classic",
    price: 299,
    category: "puma",
    description:
      "הדגם הקלאסי של פומה בעיצוב זמש על זמני שמתאים לכל הופעה יומיומית.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/374915/01/sv01/fnd/PNA/fmt/png",
      "https://images.puma.com/image/upload/f_auto,q_auto/global/374915/01/fnd/PNA/fmt/png",
    ],
    colors: ["black", "gray", "red"],
    sizes: ["38", "39", "40", "41", "42", "43"],
  },
  {
    id: "15",
    name: "Puma Future Rider",
    price: 369,
    category: "puma",
    description:
      "נעל ספורט צבעונית וקלילה עם השראה רטרו ונוחות מקסימלית לאורך כל היום.",
    images: [
      "https://m.media-amazon.com/images/I/51NIZPS-9JL.jpg",
      "https://m.media-amazon.com/images/I/51imeODnh6L._UY900_.jpg",
    ],
    colors: ["green", "pink", "yellow"],
    sizes: ["36", "37", "38", "39", "40"],
  },
  {
    id: "16",
    name: "Puma Cali Star",
    price: 339,
    category: "puma",
    description: "דגם נשי ואופנתי של פומה עם סוליה מודרנית וגפה לבנה ונקייה.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto/global/380176/01/sv01/fnd/PNA/fmt/png",
      "https://images.puma.com/image/upload/f_auto,q_auto/global/380176/01/fnd/PNA/fmt/png",
    ],
    colors: ["white", "gold", "silver"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: "17",
    name: "Puma MB.02",
    price: 599,
    category: "puma",
    description:
      "נעל כדורסל מקצועית בעיצוב מודגש, שיתוף פעולה עם למלו בול – יציבות, אחיזה וסטייל.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto/global/378287/01/sv01/fnd/PNA/fmt/png",
      "https://images.puma.com/image/upload/f_auto,q_auto/global/378287/01/fnd/PNA/fmt/png",
    ],
    colors: ["black", "red", "orange"],
    sizes: ["40", "41", "42", "43", "44", "45"],
  },
  {
    id: "18",
    name: "Puma CA Pro Classic",
    price: 349,
    category: "puma",
    description:
      "נעל יומיומית עם עיצוב אלגנטי ונקי, שואבת השראה מדגמי קליפורניה האייקוניים – מושלמת לסטייל אורבני עדכני.",
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto/global/380190/01/sv01/fnd/PNA/fmt/png",
      "https://images.puma.com/image/upload/f_auto,q_auto/global/380190/01/fnd/PNA/fmt/png",
    ],
    colors: ["white", "beige", "navy"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
  },
  {
    id: "19",
    name: "New Balance 327",
    price: 449,
    category: "newbalance",
    description:
      "נעל רטרו מודרנית בהשראת שנות ה-70 עם עיצוב בולט וסוליה מחוספסת – מושלמת לאופנת רחוב.",
    images: [
      "https://footlocker.co.il/cdn/shop/files/Footlocker_327_-_-3656357.jpg?v=1726740087&width=800",
      "https://footlocker.co.il/cdn/shop/files/Footlocker_327_-_-3656373.jpg?v=1726740096&width=800",
    ],
    colors: ["gray", "white", "green"],
    sizes: ["38", "39", "40", "41", "42", "43"],
  },
  {
    id: "20",
    name: "New Balance 574",
    price: 429,
    category: "newbalance",
    description:
      "הדגם האייקוני של ניו באלאנס בעיצוב קלאסי שמשלב נוחות וסגנון יומיומי.",
    images: [
      "https://nb.scene7.com/is/image/NB/ml574evg_nb_02_i?$pdpflexf2$&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/ml574evg_nb_04_i?$pdpflexf2$&wid=880&hei=880",
    ],
    colors: ["brown", "gray", "white"],
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: "21",
    name: "New Balance 550",
    price: 529,
    category: "newbalance",
    description:
      "נעל סניקרס עם השראה מעולם הכדורסל של שנות ה-80 – שילוב של נוסטלגיה וסטייל עכשווי.",
    images: [
      "https://nb.scene7.com/is/image/NB/bb550pb1_nb_02_i?$pdpflexf2$&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/bb550pb1_nb_04_i?$pdpflexf2$&wid=880&hei=880",
    ],
    colors: ["white", "black", "red"],
    sizes: ["41", "42", "43", "44", "45"],
  },
  {
    id: "22",
    name: "New Balance 990v5",
    price: 699,
    category: "newbalance",
    description:
      "דגם פרימיום עם נוחות מקסימלית, ייצור אמריקאי וסוליה מתקדמת – מתאים לריצה ולשימוש יומיומי.",
    images: [
      "https://nb.scene7.com/is/image/NB/m990gl5_nb_02_i?$pdpflexf2$&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/m990gl5_nb_04_i?$pdpflexf2$&wid=880&hei=880",
    ],
    colors: ["gray", "white", "black"],
    sizes: ["40", "41", "42", "43", "44", "45"],
  },
  {
    id: "23",
    name: "New Balance Fresh Foam 1080v13",
    price: 679,
    category: "newbalance",
    description:
      "נעל ריצה עם טכנולוגיית Fresh Foam X, בולמת זעזועים מושלמת לרצים מקצועיים וחובבים.",
    images: [
      "https://nb.scene7.com/is/image/NB/m1080k13_nb_02_i?$pdpflexf2$&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/m1080k13_nb_04_i?$pdpflexf2$&wid=880&hei=880",
    ],
    colors: ["black", "white", "gray"],
    sizes: ["41", "42", "43", "44", "45", "46"],
  },
  {
    id: "24",
    name: "New Balance 996",
    price: 399,
    category: "newbalance",
    description:
      "נעל ספורט קלאסית במראה נקי ואלגנטי שמתאים גם למשרד וגם ליום-יום.",
    images: [
      "https://www.jdsports.co.th/cdn/shop/files/jd_U996GR_e.jpg?v=1747103515&width=1007",
      "https://www.jdsports.co.th/cdn/shop/files/jd_U996GR_d.jpg?v=1747103513&width=1007",
    ],
    colors: ["black", "brown", "white"],
    sizes: ["39", "40", "41", "42", "43"],
  },
];

export default dummyProducts;
