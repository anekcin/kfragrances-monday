# K-Fragrances - E-Commerce Perfume Store

Welcome to **K-Fragrances**, an elegant web-based perfume store where users can browse luxury fragrances, manage their cart, securely checkout, and track their purchases via invoices. This platform is fully front-end and leverages **HTML**, **CSS**, and **JavaScript** with `localStorage` for persistent user and purchase data.

---

## 👩‍💻 Authors

- **Abigail Robinson (2101752)**  
  - Updated the **Login** page (validation, session management)  
  - Designed and implemented the **Registration** page (form, validation)  
  - Designed the **Welcome** page (personalized greeting)  
  - Designed and implemented the **Dashboard** page (user demographics & invoice lookup)

- **Roneil Burnette (2404487)**  
  - Updated the **Product** page (dynamic product loading, Add to Cart functionality)  
  - Designed and implemented the **Cart** page (item list, quantity controls, pricing logic)

- **Enidro Hall(2301550)**  
  - Designed and implemented the **Checkout** page (cart summary, shipping form, invoice creation)  
  - Updated the **Invoice** page (detailed invoice display, user‑tied invoices)

University of Technology, Jamaica 


---

## 📁 Project Structure

```
K-Fragrances/
│
├── index.html                 # Login page
├── public/
│   ├── registration.html      # User registration
│   ├── welcome.html           # Welcome landing page after login
│   ├── product.html           # Product catalog and Add-to-Cart feature
│   ├── cart.html              # Shopping cart with summary
│   ├── checkout.html          # Shipping & final confirmation
│   ├── invoice.html           # Final invoice view after purchase
│   ├── dashboard.html         # Dashboard with analytics
│   ├── about.html             # Brand and contact info
│
├── JS/
│   ├── login.js
│   ├── register.js
│   ├── welcome.js
│   ├── product.js
│   ├── cart.js
│   ├── checkout.js
│   ├── invoice.js
│   ├── dashboard.js
│
├── assets/                    # Images, logos, product photos, video, favicon
├── style.css                 # Main stylesheet
└── README.md                 # This file
```

---
## Hosting Link

- (https://anekcin.github.io/kfragrances-monday/)

---

## 🚀 How to Run the Project

1. **Download or Clone the Repository:**
   ```bash
   git clone https://github.com/anekcin/kfragrances-monday.git
   cd k-fragrances
   ```

2. **Run the Website Locally:**
   Since this is a fully static front-end project, no backend server is required.

   You can open `index.html` directly in your browser:
   - Right-click on `index.html` → Open With → Your Browser

---

## 🔧 Tools & Technologies Used

| Tool/Library     | Purpose                                           |
|------------------|---------------------------------------------------|
| **HTML5**        | Markup structure for all webpages                 |
| **CSS3**         | Styling and layout via `style.css`                |
| **Vanilla JavaScript** | All logic and dynamic behavior (cart, login, charts, etc.) |
| **LocalStorage** | Store user data, cart contents, and invoices locally |
| **Media**        | Video showcase, images, and icons for branding    |

---

## 🛠️ Features

- 🔐 User Registration & Login (with TRN and validation)
- 🛍️ Product Browsing with Add-to-Cart
- 🛒 Real-Time Cart Summary with Discount & Tax
- 📦 Checkout with Shipping Form and Invoice Generation
- 📊 Dashboard with Charts (Gender and Age Group Frequency)
- 🧾 Invoice Lookup by TRN
- 🚪 **Logout functionality** (clears current session)

---

## 🔐 Credentials Format

- **TRN Format:** `000-000-000` (validated via RegEx)
- **Password:** Minimum 8 characters
- **Age Restriction:** Must be **18 years or older**

---

## ✅ Notes

- Passwords are stored in plaintext for simplicity.
- A logout link is available in the top navigation bar for all authenticated pages.

---
 

