# 🐃 Albaraka Dairy Farm — Website

## Quick Start

### 1. Install dependencies
Open this folder in VS Code, then open the terminal (`Ctrl + `` ` ``) and run:

```bash
npm install
```

### 2. Run the site locally
```bash
npm run dev
```

Then open your browser and go to: **http://localhost:5173**

---

## How to add your logo later
1. Put your logo image file (e.g. `logo.png`) inside the `/public` folder
2. Open `src/components/Navbar.jsx`
3. Replace the `🐃` emoji in the `.logo-icon` div with:
   ```jsx
   <img src="/logo.png" alt="Albaraka Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
   ```

## How to update stock counts
Open `src/App.jsx` and find this line:
```js
const [stock, setStock] = useState({ milk: 24, laban: 8 })
```
Change `24` and `8` to whatever your current stock is each day.

## How to build for production (deploy)
```bash
npm run build
```
This creates a `/dist` folder you can upload to any hosting service (Vercel, Netlify, etc.).

---

## Project Structure
```
src/
├── App.jsx              ← Main app, holds all state
├── main.jsx             ← Entry point
├── index.css            ← All styles + dark/light theme
├── translations.js      ← All English & Arabic text
└── components/
    ├── Navbar.jsx        ← Top navigation + toggles
    ├── Hero.jsx          ← Hero section with stars/sun
    ├── Products.jsx      ← Product cards + stock counter
    ├── Contact.jsx       ← Contact info section
    └── BookingModal.jsx  ← Booking form + WhatsApp
```
