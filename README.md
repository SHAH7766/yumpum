# YuM PuM — Fast Food, BBQ & Pakistani Cuisine 🍕🔥🍛

An award-level, frontend-only, smooth and highly animated website for **YuM PuM**, a famous Fast Food, BBQ & Pakistani Cuisine restaurant in Shahdara, Lahore, Pakistan.

## 🚀 Features

- **Business Details & Branding**: Warm, energetic street-food brand with premium polish (Hot tomato red `#E8262B`, sunny yellow `#FFC929`, charcoal black `#141414`, warm white `#FFF8EC`).
- **3 Phone Numbers with Dedicated Roles**:
  - WhatsApp Orders: `0326-8414405`
  - Call Line 1 (UAN): `0304-1111373`
  - Call Line 2: `0304-1111180`
- **2 Locations in Shahdara**:
  1. Main Gujranwala Road, near UBL Bank, Kashmir Park, Shahdara, Lahore
  2. YuM PuM BBQ Shawarma Chowk, Begum Kot, Shahdara Town, Lahore
- **Live "Open Now / Closed" Badge**: Correctly handles cross-midnight operating hours (11:00 AM to 3:00 AM daily).
- **Light / Dark Mode**: Seamless toggle with localStorage persistence.
- **English / Urdu Mode**: Instant language toggle with RTL support.
- **Full Menu & 15 Fast Food Deals**: Verified flyer prices, instant search, price sorting, variant/size selectors, and quantity steppers.
- **Build Your Pizza Interactive Builder**: Choose size, flavor, and extra toppings with a live animated SVG preview and running price calculation.
- **Cart Drawer & WhatsApp Checkout**: Supports Delivery, Dine-in, and Pickup order types, minimum order validation (Rs. 700 for delivery), customer details, confetti celebration, and prefilled WhatsApp order messaging.
- **Daig on Demand**: Bulk and party order booking for weddings and large gatherings.
- **Customer Reviews & Gallery**: 4.1 ★ rating from 545 Google reviews, masonry gallery with category filters and lightbox.

---

## 🛠️ How to Run Locally

1. **Clone or open the project folder**:
   ```bash
   cd Yum_Pum
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## ✏️ How to Edit Data

All restaurant data, menu items, prices, deals, phones, and locations live in a single editable file:
`src/data/siteData.js`

- **To update phone numbers**: Edit the `phones` array at the top of `src/data/siteData.js`.
- **To update locations**: Edit the `locations` array.
- **To update menu items or prices**: Edit the `menuItems` or `fastFoodDeals` arrays.

---

## 🚢 Deployment (Free on Vercel or Netlify)

1. Push your code to a GitHub repository.
2. Import the repository into **Vercel** or **Netlify**.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy**!
# yumpum
