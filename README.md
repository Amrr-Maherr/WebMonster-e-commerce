# WebMonster - E-commerce Store

A full React e-commerce storefront backed by a custom REST API. Shoppers can browse the catalog, filter by category, manage a cart and a favorites list, and check out.

## Features

- **Authentication**: sign-up, login, forgot-password and reset-password flows
- **Catalog**: home page with product sections, an all-products page and per-category pages
- **Product details**: dedicated page per product
- **Cart**: add/remove items and review before checkout
- **Favorites**: save products to a favorites list
- **Checkout** with a thank-you confirmation page
- **Profile**: user profile page
- Static **About** and **Contact** pages
- Toast notifications (react-hot-toast), confirmation dialogs (SweetAlert2), animations (Framer Motion) and a product marquee

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 18 (Create React App / react-scripts 5), Node 18 |
| State | Redux, Redux Toolkit, React Redux |
| Routing | React Router 7 |
| HTTP | Axios (custom REST API hosted on Railway) |
| Styling | Bootstrap 5, Font Awesome |
| UI extras | Framer Motion, react-hot-toast, SweetAlert2, react-fast-marquee |

## Getting Started

```bash
git clone https://github.com/Amrr-Maherr/WebMonster-e-commerce.git
cd WebMonster-e-commerce
npm install
npm start
```

The app runs at http://localhost:3000. Use `npm run build` for a production build.

## Project Structure

```
src/
  Pages/        Home, Cart, Checkout, Favorites, ProductDetails, CategoryPage,
                Profile, About, Contact, ThankYou, NotFound, Authentication/
  Component/    Shared components (AllProducts and more)
  Redux/        Store, actions and reducers
  Style/  Assets/
```

## Notes

Product data comes from a custom backend API (`my-api-production-3918.up.railway.app`); the backend is not part of this repository.

## Live

https://web-monster-e-commerce.vercel.app
