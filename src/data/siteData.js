// YuM PuM Restaurant Data & Menu
// All business info, locations, phones, menu items, deals, and reviews live here.

export const siteInfo = {
  name: "YuM PuM",
  tagline: "Fast Food | BBQ & Pakistani Cuisine",
  headline: "Hot. Fresh. Yum.",
  accentWord: "Yum",
  about: "Your one-stop spot for flavorful dishes: shawarma, BBQ, fresh pizza, and authentic karahi (mutton, beef, chicken). Start the day with a hearty nashta (breakfast). Rooftop seating available. Delivery available.",
  hoursDisplay: "11:00 AM to 3:00 AM daily",
  openHour: 11, // 11 AM
  closeHour: 3,  // 3 AM next day (crosses midnight)
  minDeliveryOrder: 700,
  googleRating: 4.1,
  googleReviewsCount: 545,
  googleReviewUrl: "https://www.google.com/search?q=yumpum+shahdara+lahore+reviews",
  socials: {
    facebook: "https://www.facebook.com/yumpum312/",
    instagram: "https://www.instagram.com/yumpum.official/",
    tiktok: "https://www.tiktok.com/@yum_pum"
  },
  amenities: [
    "Rooftop Seating",
    "Delivery",
    "Dine-in",
    "Takeaway",
    "Party / Bulk Orders (Daig on Demand)"
  ],
  formEndpoint: "" // Optional: Add Formspree or Google Apps Script endpoint if desired
};

export const phones = [
  { label: "WhatsApp Orders", number: "0326-8414405", intl: "+923268414405", type: "whatsapp" },
  { label: "Call Line 1 (UAN)", number: "0304-1111373", intl: "+923041111373", type: "call" },
  { label: "Call Line 2", number: "0304-1111180", intl: "+923041111180", type: "call" }
];

// NOTE: Owners can edit location names, addresses, or remove a location here.
export const locations = [
  {
    id: "loc1",
    name: "Location 1: Main Gujranwala Road",
    shortName: "Kashmir Park (Main Rd)",
    address: "Main Gujranwala Road, near UBL Bank, Kashmir Park, Shahdara, Lahore",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.0!2d74.29!3d31.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzEyLjAiTiA3NMKsMTcnMjQuMCJF!5e0!3m2!1sen!2spk!4v1",
    directionsUrl: "https://maps.google.com/?q=Main+Gujranwala+Road+near+UBL+Bank+Kashmir+Park+Shahdara+Lahore",
    hours: "11:00 AM - 3:00 AM",
    phones: phones
  },
  {
    id: "loc2",
    name: "Location 2: BBQ Shawarma Chowk",
    shortName: "Begum Kot",
    address: "YuM PuM BBQ Shawarma Chowk, Begum Kot, Shahdara Town, Lahore 54950",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.5!2d74.28!3d31.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM2JzM2LjAiTiA3NMKsMTYnNDguMCJF!5e0!3m2!1sen!2spk!4v2",
    directionsUrl: "https://maps.google.com/?q=YuM+Pum+BBQ+Shawarma+Chowk+Begum+Kot+Shahdara+Town+Lahore",
    hours: "11:00 AM - 3:00 AM",
    phones: phones
  }
];

// Pizza sizes and price mapping
export const pizzaSizes = [
  { id: "small", label: "7\" Small", multiplier: 1 },
  { id: "medium", label: "10\" Medium", multiplier: 1.8 },
  { id: "large", label: "13\" Large", multiplier: 2.6 },
  { id: "family", label: "16\" Family", multiplier: 3.4 }
];

export const pizzaFlavors = [
  "Supreme", "Fajita", "Tikka", "Cheese Lover", "Veggie"
];

export const menuCategories = [
  "Deals", "Classic Pizza", "Special Pizza", "BBQ", "BBQ Shawarma",
  "Paratha Roll", "Platter Shawarma", "Karahi", "Fish", "Biryani",
  "Special Nashta", "Tandoor", "Burgers", "Sandwiches", "Fast Bites",
  "Fresh Juices", "Mint Juices", "Milk Shakes", "Ice Cream Shakes",
  "Beverages", "Add-ons", "Daig on Demand"
];

export const menuItems = [
  // Classic Pizza (7" Small / 10" Medium / 13" Large / 16" Family)
  {
    id: "cp-1",
    category: "Classic Pizza",
    name: "Kabab Pizza",
    description: "Loaded with spiced seekh kabab chunks, mozzarella cheese, onions, and signature herbs.",
    prices: { small: 800, medium: 1400, large: 2050, family: 2650 },
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "cp-2",
    category: "Classic Pizza",
    name: "Malai Boti Pizza",
    description: "Creamy marinated chicken malai boti, bell peppers, jalapeños, and rich cheese blend.",
    prices: { small: 800, medium: 1400, large: 2050, family: 2650 },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "cp-3",
    category: "Classic Pizza",
    name: "Afghani Pizza",
    description: "Traditional Afghani spices, tender chicken chunks, special white sauce, and herbs.",
    prices: { small: 700, medium: 1250, large: 1800, family: 2400 },
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cp-4",
    category: "Classic Pizza",
    name: "Peri Peri Pizza",
    description: "Spicy peri peri chicken, fiery chillies, capsicum, olives, and melted cheese.",
    prices: { small: 700, medium: 1250, large: 1800, family: 2400 },
    image: "https://images.unsplash.com/photo-1595750033100-34444a7f0532?auto=format&fit=crop&w=600&q=80",
    spicy: true
  },
  {
    id: "cp-5",
    category: "Classic Pizza",
    name: "Euro Pizza",
    description: "European style toppings with smoked chicken, mushrooms, olives, and oregano.",
    prices: { small: 700, medium: 1250, large: 1800, family: 2400 },
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cp-6",
    category: "Classic Pizza",
    name: "Chicken Supreme",
    description: "Tikka chicken, smoked sausage, mushrooms, bell peppers, olives, and extra cheese.",
    prices: { small: 700, medium: 1250, large: 1800, family: 2400 },
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "cp-7",
    category: "Classic Pizza",
    name: "Cheese Lover",
    description: "Triple layered mozzarella and cheddar cheese with savory pizza sauce.",
    prices: { small: 650, medium: 1200, large: 1700, family: 2200 },
    image: "https://images.unsplash.com/photo-1548365328-8c6db32c0e6e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cp-8",
    category: "Classic Pizza",
    name: "Veggie Pizza",
    description: "Fresh mushrooms, onions, tomatoes, sweet corn, olives, and bell peppers.",
    prices: { small: 650, medium: 1200, large: 1700, family: 2200 },
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
  },

  // Special Pizza (7" / 10" / 13" / 16")
  {
    id: "sp-1",
    category: "Special Pizza",
    name: "YumPum Special Pizza",
    description: "Chef's special double-decker creation with loaded meats, mushrooms, and secret spicy sauce.",
    prices: { small: 800, medium: 1400, large: 2050, family: 2650 },
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "sp-2",
    category: "Special Pizza",
    name: "YumPum Signature",
    description: "An exquisite blend of BBQ chicken, seekh kabab, herbs, and stuffed crust option.",
    prices: { small: 800, medium: 1400, large: 2050, family: 2650 },
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sp-3",
    category: "Special Pizza",
    name: "Crown Crust",
    description: "Stuffed kabab pockets on the crust edge with premium chicken toppings. (No small size)",
    prices: { small: 0, medium: 1400, large: 2050, family: 2650 },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "sp-4",
    category: "Special Pizza",
    name: "Donner Pizza",
    description: "Turkish donner meat style chicken with garlic sauce swirl. (No small size)",
    prices: { small: 0, medium: 1400, large: 2050, family: 2650 },
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sp-5",
    category: "Special Pizza",
    name: "Lazania Pizza",
    description: "Layered lasagna pasta flavor infused in crust and toppings. (No small size)",
    prices: { small: 0, medium: 1400, large: 2050, family: 2650 },
    image: "https://images.unsplash.com/photo-1595750033100-34444a7f0532?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sp-6",
    category: "Special Pizza",
    name: "Chicken Tikka",
    description: "Classic spicy chicken tikka chunks with onions and green peppers.",
    prices: { small: 700, medium: 1250, large: 1800, family: 2400 },
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sp-7",
    category: "Special Pizza",
    name: "Chicken Fajita",
    description: "Fajita seasoned chicken, jalapeños, bell peppers, and onions.",
    prices: { small: 700, medium: 1250, large: 1800, family: 2400 },
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80"
  },

  // BBQ (price per Seekh / per KG)
  {
    id: "bbq-1",
    category: "BBQ",
    name: "Beef Kabab",
    description: "Juicy minced beef skewers infused with authentic Lahori spices.",
    prices: { seekh: 270, kg: 2160 },
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "bbq-2",
    category: "BBQ",
    name: "Chicken Kabab",
    description: "Tender minced chicken skewers grilled over glowing charcoal.",
    prices: { seekh: 220, kg: 1760 },
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bbq-3",
    category: "BBQ",
    name: "Chicken Tikka Boti",
    description: "Classic yogurt and spice marinated chicken cubes charbroiled to perfection.",
    prices: { seekh: 360, kg: 1440 },
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "bbq-4",
    category: "BBQ",
    name: "Chicken Malai Boti",
    description: "Melt-in-your-mouth cream and cheese marinated boneless chicken.",
    prices: { seekh: 530, kg: 2120 },
    image: "https://images.unsplash.com/photo-1599487488170-d3319c6ae911?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "bbq-5",
    category: "BBQ",
    name: "Chicken Boneless Boti",
    description: "Spicy and smoky boneless chicken pieces grilled on skewers.",
    prices: { seekh: 470, kg: 1880 },
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bbq-6",
    category: "BBQ",
    name: "Chicken Breast Piece",
    description: "Whole chicken breast charcoal grilled with special tikka spices.",
    prices: { piece: 450 },
    image: "https://images.unsplash.com/photo-1594998893017-3614740f0a9c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bbq-7",
    category: "BBQ",
    name: "Chicken Malai Breast Piece",
    description: "Creamy rich marinated whole chicken breast piece.",
    prices: { piece: 550 },
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bbq-8",
    category: "BBQ",
    name: "Chicken Leg Piece",
    description: "Juicy chicken leg charbroiled with traditional spices.",
    prices: { piece: 420 },
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bbq-9",
    category: "BBQ",
    name: "Malai Leg Piece",
    description: "Tender leg piece marinated in creamy malai herbs.",
    prices: { piece: 520 },
    image: "https://images.unsplash.com/photo-1599487488170-d3319c6ae911?auto=format&fit=crop&w=600&q=80"
  },

  // BBQ Shawarma
  {
    id: "sh-1",
    category: "BBQ Shawarma",
    name: "Chicken Tikka Shawarma",
    description: "Tikka chicken wrapped in pita with garlic mayo and fresh veggies.",
    prices: { regular: 350 },
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sh-2",
    category: "BBQ Shawarma",
    name: "YumPum Tikka Special",
    description: "Double chicken tikka with extra cheese and special sauce.",
    prices: { regular: 440 },
    image: "https://images.unsplash.com/photo-1561651857-3474bd4e557d?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "sh-3",
    category: "BBQ Shawarma",
    name: "Chicken Kabab Shawarma",
    description: "Seekh kabab wrapped with crisp lettuce and tangy sauce.",
    prices: { regular: 360 },
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sh-4",
    category: "BBQ Shawarma",
    name: "YumPum Kabab Special",
    description: "Loaded kabab shawarma with melted cheese and creamy mayo.",
    prices: { regular: 450 },
    image: "https://images.unsplash.com/photo-1561651857-3474bd4e557d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sh-5",
    category: "BBQ Shawarma",
    name: "Chicken Malai Boti Shawarma",
    description: "Creamy malai boti pieces wrapped in soft pita bread.",
    prices: { regular: 390 },
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "sh-6",
    category: "BBQ Shawarma",
    name: "YumPum Malai Boti Special",
    description: "Extra malai boti with cheese and special herbs.",
    prices: { regular: 480 },
    image: "https://images.unsplash.com/photo-1561651857-3474bd4e557d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sh-7",
    category: "BBQ Shawarma",
    name: "Mumbai Shawarma",
    description: "Mumbai street style spicy shredded chicken shawarma.",
    prices: { regular: 260 },
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sh-8",
    category: "BBQ Shawarma",
    name: "Mumbai Special Shawarma",
    description: "Spicy Mumbai chicken with extra cheese and crunchy fries inside.",
    prices: { regular: 350 },
    image: "https://images.unsplash.com/photo-1561651857-3474bd4e557d?auto=format&fit=crop&w=600&q=80"
  },

  // Paratha Roll
  {
    id: "pr-1",
    category: "Paratha Roll",
    name: "B.B.Q Tikka Roll",
    description: "Smoky chicken tikka wrapped in a flaky, buttery paratha.",
    prices: { regular: 360 },
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pr-2",
    category: "Paratha Roll",
    name: "Tikka Special Roll",
    description: "Double tikka paratha roll with cheese and mint chutney.",
    prices: { regular: 450 },
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "pr-3",
    category: "Paratha Roll",
    name: "Kabab Roll",
    description: "Juicy seekh kabab rolled in crispy fried paratha.",
    prices: { regular: 370 },
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pr-4",
    category: "Paratha Roll",
    name: "Kabab Special Roll",
    description: "Loaded kabab roll with cheese and special spices.",
    prices: { regular: 460 },
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pr-5",
    category: "Paratha Roll",
    name: "Malai Boti Roll",
    description: "Rich malai boti wrapped in paratha with garlic sauce.",
    prices: { regular: 390 },
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "pr-6",
    category: "Paratha Roll",
    name: "Malai Boti Special Roll",
    description: "Extra creamy malai boti paratha roll with cheese.",
    prices: { regular: 480 },
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pr-7",
    category: "Paratha Roll",
    name: "Mumbai Roll",
    description: "Spicy Mumbai chicken rolled in flaky paratha.",
    prices: { regular: 270 },
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
  },

  // Platter Shawarma
  {
    id: "pl-1",
    category: "Platter Shawarma",
    name: "Chicken Tikka Platter",
    description: "Open platter with tikka chicken, fries, pita bread, salad, and sauces.",
    prices: { regular: 660 },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "pl-2",
    category: "Platter Shawarma",
    name: "Chicken Kabab Platter",
    description: "Open platter featuring seekh kababs, fries, pita, and special dips.",
    prices: { regular: 710 },
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pl-3",
    category: "Platter Shawarma",
    name: "Chicken Malai Boti Platter",
    description: "Creamy malai boti served on a loaded platter with fries and garlic sauce.",
    prices: { regular: 710 },
    image: "https://images.unsplash.com/photo-1599487488170-d3319c6ae911?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "pl-4",
    category: "Platter Shawarma",
    name: "Chicken Mumbai Platter",
    description: "Spicy Mumbai chicken served with fries, salad, and mayo.",
    prices: { regular: 520 },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pl-5",
    category: "Platter Shawarma",
    name: "Zinger Platter",
    description: "Crispy crunchy zinger strips served on a loaded fries and salad platter.",
    prices: { regular: 730 },
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pl-6",
    category: "Platter Shawarma",
    name: "Tikka Paratha Platter",
    description: "Chicken tikka served with flaky paratha pieces and sauces.",
    prices: { regular: 680 },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pl-7",
    category: "Platter Shawarma",
    name: "Kabab Paratha Platter",
    description: "Seekh kabab served with crispy paratha and special dressing.",
    prices: { regular: 730 },
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pl-8",
    category: "Platter Shawarma",
    name: "Malai Boti Paratha Platter",
    description: "Malai boti served with buttery paratha and creamy dips.",
    prices: { regular: 730 },
    image: "https://images.unsplash.com/photo-1599487488170-d3319c6ae911?auto=format&fit=crop&w=600&q=80"
  },

  // Karahi (Quarter / Half KG / KG)
  {
    id: "kr-1",
    category: "Karahi",
    name: "Chicken Karahi",
    description: "Traditional tomato and ginger-based fresh chicken karahi cooked in wok.",
    prices: { quarter: 600, half: 1100, kg: 2000 },
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "kr-2",
    category: "Karahi",
    name: "Chicken Special Karahi (Makhan)",
    description: "Rich buttery chicken karahi cooked with desi butter and special spices. (Quarter unavailable)",
    prices: { half: 1200, kg: 2200 },
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "kr-3",
    category: "Karahi",
    name: "Chicken White Malai Karahi",
    description: "Creamy white gravy chicken karahi with yogurt, cream, and green chillies.",
    prices: { half: 1300, kg: 2400 },
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kr-4",
    category: "Karahi",
    name: "Chicken Achari Karahi",
    description: "Tangy pickle-flavored chicken karahi with aromatic spices.",
    prices: { half: 1100, kg: 2000 },
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kr-5",
    category: "Karahi",
    name: "Chicken Qeema",
    description: "Minced chicken cooked with tomatoes, ginger, and green herbs.",
    prices: { half: 1100, kg: 2100 },
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kr-6",
    category: "Karahi",
    name: "Chicken Kabab Masala",
    description: "Seekh kababs simmered in a thick, spicy tomato gravy.",
    prices: { half: 1150, kg: 2200 },
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kr-7",
    category: "Karahi",
    name: "Beef Karahi",
    description: "Tender beef chunks cooked in traditional wok with rich spices.",
    prices: { half: 1300, kg: 2600 },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "kr-8",
    category: "Karahi",
    name: "Beef Special Karahi (Makhan)",
    description: "Prime beef karahi cooked in pure butter and special spices.",
    prices: { half: 1400, kg: 2800 },
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "kr-9",
    category: "Karahi",
    name: "Mutton Special Karahi (Makhan)",
    description: "Exquisite tender mutton karahi cooked with butter, tomatoes, and ginger.",
    prices: { half: 2200, kg: 4200 },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "kr-10",
    category: "Karahi",
    name: "Fish Karahi",
    description: "Boneless fish chunks cooked in spicy karahi masala.",
    prices: { half: 1200, full: 2300 },
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
  },

  // Fish (per KG)
  {
    id: "fi-1",
    category: "Fish",
    name: "Grilled Fish",
    description: "Fresh river fish marinated in herbs and grilled over charcoal.",
    prices: { kg: 1750 },
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fi-2",
    category: "Fish",
    name: "Tandoori Fish",
    description: "Traditional spicy tandoori marinated fish roasted in clay oven.",
    prices: { kg: 2100 },
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "fi-3",
    category: "Fish",
    name: "Fish Sajji",
    description: "Sajji style whole fish stuffed with rice and special spices.",
    prices: { kg: 2200 },
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
  },

  // Biryani (Newer flyer version primary, older in comments/alt)
  {
    id: "bi-1",
    category: "Biryani",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice layered with spiced tender chicken and aromatic herbs.",
    prices: { half: 370, full: 680 },
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "bi-2",
    category: "Biryani",
    name: "Sada Biryani",
    description: "Flavorful spiced basmati rice cooked with traditional biryani masala.",
    prices: { half: 250, full: 480 },
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bi-3",
    category: "Biryani",
    name: "Broast Piece",
    description: "Crispy golden fried chicken broast piece.",
    prices: { piece: 160 },
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80"
  },

  // Special Nashta (Breakfast)
  {
    id: "ns-1",
    category: "Special Nashta",
    name: "Bong Paye",
    description: "Traditional slow-cooked trotters and shank gravy in rich broth.",
    prices: { half: 400, full: 750 },
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "ns-2",
    category: "Special Nashta",
    name: "Murgh Chane",
    description: "Savory chicken and chickpea curry cooked in traditional style.",
    prices: { half: 150, full: 250 },
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "ns-3",
    category: "Special Nashta",
    name: "Special Kulcha",
    description: "Soft leavened bread baked fresh for breakfast.",
    prices: { piece: 40 },
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ns-4",
    category: "Special Nashta",
    name: "Anda (Egg)",
    description: "Fried or omelette egg prepared to order.",
    prices: { piece: 50 },
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ns-5",
    category: "Special Nashta",
    name: "Kofta",
    description: "Spiced minced meat meatballs in gravy.",
    prices: { piece: 70 },
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ns-6",
    category: "Special Nashta",
    name: "Meethi Lassi",
    description: "Traditional sweet yogurt lassi topped with malai.",
    prices: { glass: 170 },
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80",
    popular: true
  },

  // Tandoor
  {
    id: "tn-1",
    category: "Tandoor",
    name: "Half Roghni Naan",
    description: "Sesame topped butter naan.",
    prices: { piece: 40 },
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tn-2",
    category: "Tandoor",
    name: "Roghni Naan",
    description: "Large traditional sesame butter naan.",
    prices: { piece: 80 },
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tn-3",
    category: "Tandoor",
    name: "Kalwanji Naan",
    description: "Naan topped with nigella seeds.",
    prices: { piece: 150 },
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tn-4",
    category: "Tandoor",
    name: "Garlic Naan",
    description: "Fresh garlic and herb butter naan.",
    prices: { piece: 300 },
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "tn-5",
    category: "Tandoor",
    name: "Cheese Naan",
    description: "Stuffed mozzarella cheese naan.",
    prices: { piece: 350 },
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "tn-6",
    category: "Tandoor",
    name: "Qeema Naan",
    description: "Stuffed minced meat naan baked in clay oven.",
    prices: { piece: 450 },
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tn-7",
    category: "Tandoor",
    name: "Nutella Chocolate Naan",
    description: "Sweet dessert naan stuffed with rich Nutella chocolate.",
    prices: { piece: 450 },
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "tn-8",
    category: "Tandoor",
    name: "Sada Roti",
    description: "Simple wheat flour tandoori roti.",
    prices: { piece: 30 },
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tn-9",
    category: "Tandoor",
    name: "Sada Naan",
    description: "Classic plain tandoori naan.",
    prices: { piece: 50 },
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80"
  },

  // Burgers
  {
    id: "bg-1",
    category: "Burgers",
    name: "Zinger Burger Reg",
    description: "Crispy fried chicken fillet with lettuce and mayo in sesame bun.",
    prices: { regular: 370 },
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bg-2",
    category: "Burgers",
    name: "Jumbo Zinger",
    description: "Extra large crispy zinger fillet with double cheese and special sauce.",
    prices: { regular: 450 },
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "bg-3",
    category: "Burgers",
    name: "Jumbo Patty Burger",
    description: "Thick juicy chicken patty with cheese and lettuce.",
    prices: { regular: 380 },
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bg-4",
    category: "Burgers",
    name: "Fish Burger",
    description: "Crispy battered fish fillet with tartar sauce in soft bun.",
    prices: { regular: 650 },
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },

  // Sandwiches
  {
    id: "sd-1",
    category: "Sandwiches",
    name: "Club Sandwich",
    description: "Triple-decker sandwich with chicken, egg, cheese, and fries.",
    prices: { regular: 420 },
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "sd-2",
    category: "Sandwiches",
    name: "Tikka Sandwich",
    description: "Grilled tikka chicken chunks with melted cheese and veggies in toasted bread.",
    prices: { regular: 480 },
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sd-3",
    category: "Sandwiches",
    name: "Mexican Sandwich",
    description: "Spicy Mexican style shredded chicken with jalapeños and melted cheese.",
    prices: { regular: 800 },
    image: "https://images.unsplash.com/photo-1554471062-e64e322300b9?auto=format&fit=crop&w=600&q=80",
    popular: true
  },

  // Fast Bites
  {
    id: "fb-1",
    category: "Fast Bites",
    name: "Zinger Paratha",
    description: "Crispy zinger chicken wrapped inside a buttery flaky paratha.",
    prices: { regular: 400 },
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "fb-2",
    category: "Fast Bites",
    name: "Zinger Shawarma",
    description: "Crunchy zinger strips wrapped in soft pita bread.",
    prices: { regular: 400 },
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fb-3",
    category: "Fast Bites",
    name: "Macroni Creamy Pasta",
    description: "Creamy white sauce macaroni pasta with chicken chunks and herbs.",
    prices: { regular: 800 },
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281229?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fb-4",
    category: "Fast Bites",
    name: "Pizza Paratha",
    description: "Paratha stuffed with pizza cheese, chicken, and herbs.",
    prices: { regular: 700 },
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "fb-5",
    category: "Fast Bites",
    name: "French Fries",
    description: "Crispy golden potato fries sprinkled with signature masala.",
    prices: { regular: 320 },
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fb-6",
    category: "Fast Bites",
    name: "Crunchy Pasta",
    description: "Baked cheesy pasta with crunchy golden crust.",
    prices: { regular: 850 },
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281229?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fb-7",
    category: "Fast Bites",
    name: "Loaded Fries",
    description: "Fries topped with cheese sauce, chicken chunks, and jalapeños.",
    prices: { regular: 650 },
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "fb-8",
    category: "Fast Bites",
    name: "Wings (10 pcs)",
    description: "Spicy buffalo chicken wings glazed with special sauce.",
    prices: { regular: 600 },
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fb-9",
    category: "Fast Bites",
    name: "Nuggets (10 pcs)",
    description: "Crispy golden chicken nuggets served with dip.",
    prices: { regular: 700 },
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
  },

  // Fresh Juices (Medium / Large)
  { id: "fj-1", category: "Fresh Juices", name: "Arru Juice", prices: { medium: 220, large: 250 }, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80" },
  { id: "fj-2", category: "Fresh Juices", name: "Falsa Juice", prices: { medium: 140, large: 180 }, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80" },
  { id: "fj-3", category: "Fresh Juices", name: "Apple Juice", prices: { medium: 240, large: 310 }, image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=600&q=80" },
  { id: "fj-4", category: "Fresh Juices", name: "Pine Apple Juice", prices: { medium: 310, large: 400 }, image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80" },
  { id: "fj-5", category: "Fresh Juices", name: "Strawberry Juice", prices: { medium: 210, large: 280 }, image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80", popular: true },
  { id: "fj-6", category: "Fresh Juices", name: "Mango Juice", prices: { medium: 220, large: 290 }, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80", popular: true },
  { id: "fj-7", category: "Fresh Juices", name: "Mosami Kinu Juice", prices: { medium: 160, large: 210 }, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80" },
  { id: "fj-8", category: "Fresh Juices", name: "Kinu Juice", prices: { medium: 160, large: 210 }, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80" },
  { id: "fj-9", category: "Fresh Juices", name: "Gray Fruit Juice", prices: { medium: 160, large: 210 }, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80" },
  { id: "fj-10", category: "Fresh Juices", name: "Cocktail Juice", prices: { medium: 280, large: 360 }, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" },
  { id: "fj-11", category: "Fresh Juices", name: "Mosami Juice", prices: { medium: 130, large: 170 }, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80" },
  { id: "fj-12", category: "Fresh Juices", name: "Red Annar Juice", prices: { medium: 400, large: 600 }, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80", popular: true },

  // Mint Juices (Medium / Large)
  { id: "mj-1", category: "Mint Juices", name: "Mint Margarita", prices: { medium: 150, large: 190 }, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80", popular: true },
  { id: "mj-2", category: "Mint Juices", name: "Apple Margarita", prices: { medium: 200, large: 250 }, image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80" },
  { id: "mj-3", category: "Mint Juices", name: "Lemonade", prices: { medium: 150, large: 190 }, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80" },
  { id: "mj-4", category: "Mint Juices", name: "Ginger Mint", prices: { medium: 150, large: 190 }, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80" },

  // Milk Shakes (Medium / Large)
  { id: "ms-1", category: "Milk Shakes", name: "Banana Milkshake", prices: { medium: 220, large: 280 }, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80" },
  { id: "ms-2", category: "Milk Shakes", name: "Apple Milkshake", prices: { medium: 220, large: 280 }, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80" },
  { id: "ms-3", category: "Milk Shakes", name: "Banana Apple Milkshake", prices: { medium: 220, large: 280 }, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80" },
  { id: "ms-4", category: "Milk Shakes", name: "Khoya Kela Khajoor", prices: { medium: 290, large: 380 }, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80", popular: true },
  { id: "ms-5", category: "Milk Shakes", name: "Khoya Khajoor", prices: { medium: 290, large: 380 }, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80" },
  { id: "ms-6", category: "Milk Shakes", name: "Mango Milkshake", prices: { medium: 250, large: 330 }, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80", popular: true },
  { id: "ms-7", category: "Milk Shakes", name: "Mango Special", prices: { medium: 340, large: 440 }, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80" },
  { id: "ms-8", category: "Milk Shakes", name: "Strawberry Milkshake", prices: { medium: 250, large: 330 }, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80" },
  { id: "ms-9", category: "Milk Shakes", name: "Pine Apple Milkshake", prices: { medium: 350, large: 440 }, image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80" },
  { id: "ms-10", category: "Milk Shakes", name: "Arru Milkshake", prices: { medium: 210, large: 280 }, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80" },
  { id: "ms-11", category: "Milk Shakes", name: "Pinacolada", prices: { medium: 340, large: 430 }, image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80", popular: true },
  { id: "ms-12", category: "Milk Shakes", name: "Khopra Milkshake", prices: { medium: 340, large: 430 }, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80" },
  { id: "ms-13", category: "Milk Shakes", name: "Coconut Milkshake", prices: { medium: 340, large: 430 }, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80" },

  // Ice Cream Shakes (Medium 350 / Large 450)
  {
    id: "is-1",
    category: "Ice Cream Shakes",
    name: "Ice Cream Shake (Strawberry, Mango, Vanilla, Chocolate, Pista, Kulfa, Oreo, KitKat, Cold Coffee, Tutti Fruity)",
    description: "Rich blended ice cream shake available in all classic flavors.",
    prices: { medium: 350, large: 450 },
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    popular: true
  },

  // Beverages
  { id: "bv-1", category: "Beverages", name: "500ml Bottle", prices: { regular: 120 }, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80" },
  { id: "bv-2", category: "Beverages", name: "1.5 Ltr Bottle", prices: { regular: 220 }, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80", popular: true },
  { id: "bv-3", category: "Beverages", name: "Mineral Water Small", prices: { regular: 50 }, image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4c?auto=format&fit=crop&w=600&q=80" },
  { id: "bv-4", category: "Beverages", name: "Mineral Water Large", prices: { regular: 100 }, image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4c?auto=format&fit=crop&w=600&q=80" },
  { id: "bv-5", category: "Beverages", name: "Lassi", prices: { regular: 170 }, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80" },

  // Add-ons
  { id: "ao-1", category: "Add-ons", name: "Salad", prices: { regular: 70 }, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80" },
  { id: "ao-2", category: "Add-ons", name: "Raita", prices: { regular: 50 }, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80" },
  { id: "ao-3", category: "Add-ons", name: "Dahi Bhallay (Full)", prices: { regular: 200 }, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80", popular: true },
  { id: "ao-4", category: "Add-ons", name: "Cream Chat (Full)", prices: { regular: 350 }, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80", popular: true },

  // Daig on Demand
  {
    id: "dg-1",
    category: "Daig on Demand",
    name: "Chicken Korma (10kg)",
    description: "Traditional wedding style chicken korma cooked in large bulk daig.",
    prices: { regular: 15000 },
    image: "/images/chicken-korma.jpg",
    popular: true
  },
  {
    id: "dg-2",
    category: "Daig on Demand",
    name: "Chicken Korma (12kg)",
    description: "Large gathering chicken korma daig.",
    prices: { regular: 17000 },
    image: "/images/chicken-korma.jpg"
  },
  {
    id: "dg-3",
    category: "Daig on Demand",
    name: "Chicken Biryani (Rice 10kg + Chicken 8kg)",
    description: "Massive party daig of aromatic chicken biryani.",
    prices: { regular: 17000 },
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "dg-4",
    category: "Daig on Demand",
    name: "Chicken Biryani (Rice 12kg + Chicken 8kg)",
    description: "Extra rice party daig for large events and weddings.",
    prices: { regular: 18000 },
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  }
];

// Fast Food Deals (15 Deals verified against flyer)
export const fastFoodDeals = [
  {
    id: "deal-1",
    name: "Deal 1",
    contents: "2 Small Pizza + 500ml Drink",
    price: 1450,
    image: "/images/deal-1.jpg",
    includesPizza: true,
    pizzaCount: 2,
    pizzaSize: "small"
  },
  {
    id: "deal-2",
    name: "Deal 2",
    contents: "1 Large Pizza + 1 Family Pizza + 1.5L Drink",
    price: 4300,
    image: "/images/deal-2.jpg",
    includesPizza: true,
    pizzaCount: 2,
    pizzaSize: "mixed"
  },
  {
    id: "deal-3",
    name: "Deal 3",
    contents: "2 Large Pizza + 1.5L Drink",
    price: 3700,
    image: "/images/deal-3.jpg",
    includesPizza: true,
    pizzaCount: 2,
    pizzaSize: "large"
  },
  {
    id: "deal-4",
    name: "Deal 4",
    contents: "1 Large Pizza + 1 Medium Pizza + 1.5L Drink",
    price: 3100,
    image: "/images/deal-4.jpg",
    includesPizza: true,
    pizzaCount: 2,
    pizzaSize: "mixed"
  },
  {
    id: "deal-5",
    name: "Deal 5",
    contents: "2 Patty Burger + Fries + 500ml Drink",
    price: 900,
    image: "/images/deal-5.jpg"
  },
  {
    id: "deal-6",
    name: "Deal 6",
    contents: "4 Chicken Wings + 2 Zinger + Fries + 500ml Drink",
    price: 1090,
    image: "/images/deal-6.jpg",
    popular: true
  },
  {
    id: "deal-7",
    name: "Deal 7",
    contents: "1 Jumbo Zinger + Fries + Reg Drink",
    price: 540,
    image: "/images/deal-7.jpg"
  },
  {
    id: "deal-8",
    name: "Deal 8",
    contents: "1 Small Pizza + 1 Loaded Fries + 500ml Drink",
    price: 1400,
    image: "/images/deal-8.jpg",
    includesPizza: true,
    pizzaCount: 1,
    pizzaSize: "small"
  },
  {
    id: "deal-9",
    name: "Deal 9",
    contents: "4 Reg Zinger + Fries + 1.5L Drink",
    price: 1700,
    image: "/images/deal-9.jpg",
    popular: true
  },
  {
    id: "deal-10",
    name: "Deal 10",
    contents: "1 Large Pizza + 4 Mumbai Shawarma + 1.5L Drink",
    price: 2950,
    image: "/images/deal-10.jpg",
    includesPizza: true,
    pizzaCount: 1,
    pizzaSize: "large"
  },
  {
    id: "deal-11",
    name: "Deal 11",
    contents: "1 Large Pizza + 2 Reg Zinger + 8 Nuggets + 1.5L Drink",
    price: 3200,
    image: "/images/deal-11.jpg",
    includesPizza: true,
    pizzaCount: 1,
    pizzaSize: "large"
  },
  {
    id: "deal-12",
    name: "Deal 12",
    contents: "1 Large Pizza + 2 Reg Zinger + 1 Loaded Fries + 1.5L Drink",
    price: 3250,
    image: "/images/deal-12.jpg",
    includesPizza: true,
    pizzaCount: 1,
    pizzaSize: "large"
  },
  {
    id: "deal-13",
    name: "Deal 13",
    contents: "1 Large Pizza + 4 Reg Zinger + 1.5L Drink",
    price: 3350,
    image: "/images/deal-13.jpg",
    includesPizza: true,
    pizzaCount: 1,
    pizzaSize: "large",
    popular: true
  },
  {
    id: "deal-14",
    name: "Deal 14",
    contents: "1 Large Pizza + 2 Reg Zinger + 4 Fried Chicken + 1.5L Drink",
    price: 3500,
    image: "/images/deal-14.jpg",
    includesPizza: true,
    pizzaCount: 1,
    pizzaSize: "large"
  },
  {
    id: "deal-15",
    name: "Deal 15",
    contents: "2 Large Pizza + 8 Nuggets + 8 Wings + Fries + 1.5L Drink",
    price: 4900,
    image: "/images/deal-15.jpg",
    includesPizza: true,
    pizzaCount: 2,
    pizzaSize: "large",
    popular: true
  }
];

// Gallery items (Placeholder photos with categories)
export const galleryItems = [
  { id: "g1", title: "Juicy Malai Boti", category: "BBQ", image: "/images/gallery-malai-boti.jpg" },
  { id: "g2", title: "Loaded Cheese Pizza", category: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" },
  { id: "g3", title: "Spicy Chicken Karahi", category: "Karahi", image: "/images/gallery-karahi.jpg" },
  { id: "g4", title: "Crispy Zinger Burger", category: "Fast Food", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
  { id: "g5", title: "Refreshing Mint Margarita", category: "Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80" },
  { id: "g6", title: "Chicken Biryani", category: "Pakistani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80" }
];

// Testimonials / Reviews (Placeholder testimonials)
export const reviewsList = [
  {
    id: "r1",
    author: "Usman Ali",
    rating: 5,
    date: "2 weeks ago",
    comment: "Best pizza and BBQ in Shahdara! The Malai Boti pizza is mind-blowing and delivery was super fast even at midnight.",
    source: "Google Reviews"
  },
  {
    id: "r2",
    author: "Ayesha Khan",
    rating: 5,
    date: "1 month ago",
    comment: "Authentic taste and amazing rooftop seating. Their Chicken Karahi and Roghni Naan reminded me of home-cooked luxury.",
    source: "Google Reviews"
  },
  {
    id: "r3",
    author: "Hamza Malik",
    rating: 4,
    date: "3 weeks ago",
    comment: "Great deals! Deal #13 is our go-to for game nights. Open till 3 AM is a lifesaver.",
    source: "Google Reviews"
  },
  {
    id: "r4",
    author: "Zainab Tariq",
    rating: 5,
    date: "2 months ago",
    comment: "Tried their Bong Paye for breakfast and it was extraordinarily delicious. Highly recommended!",
    source: "Google Reviews"
  }
];
