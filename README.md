# DevFest Indore 2025

Official website for DevFest Indore 2025 by Google Developer Group (GDG) Indore. Built with Vue.js.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 20.19.0 or higher, or 22.12.0+)
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```

3. **Open your browser:**
   - The app will be available at `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## 📁 Project Folder Structure

Here's the folder structure of the DevFest website. Understanding this will help you navigate and work on the project:

```
devfest-indore-2025/
│
├── public/                 # Static files (images, favicon, etc.)
│   └── favicon.ico        # Website icon
│
├── src/                   # Main source code folder (THIS IS WHERE YOU WORK!)
│   │
│   ├── main.js           # ⭐ Entry point - starts the Vue app
│   │                      # This file imports App.vue and router, then mounts the app
│   │
│   ├── App.vue           # ⭐ Root component - the main app wrapper
│   │                      # Contains the Header and router-view (where pages show up)
│   │
│   ├── assets/           # Images, fonts, CSS files (if needed)
│   │
│   ├── components/       # Reusable Vue components
│   │   └── Header.vue    # Navigation header component (used on all pages)
│   │
│   ├── views/            # Page components (each file = one page)
│   │   ├── Home.vue      # Home page (/)
│   │   ├── Team.vue      # Team page (/team)
│   │   ├── Agenda.vue    # Agenda page (/agenda)
│   │   └── Sponsers.vue  # Sponsors page (/sponsors)
│   │
│   └── router/           # Routing configuration
│       └── index.js      # Defines all routes (which URL shows which page)
│
├── index.html            # Main HTML file (where Vue app gets mounted)
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite build tool configuration
└── README.md             # This file!
```

## 📝 Understanding Key Files

### 1. `src/main.js` - The Starting Point
This is where your Vue app begins! It:
- Imports the main App component
- Imports the router (for navigation)
- Creates and mounts the Vue app to the HTML

**Think of it as:** The engine that starts your car 🚗

### 2. `src/App.vue` - The Main Container
This is the root component that wraps everything. It contains:
- `<Header />` - The navigation bar (shown on all pages)
- `<router-view />` - Where different pages get displayed

**Think of it as:** The frame of your house 🏠

### 3. `src/components/Header.vue` - Navigation Bar
A reusable component that shows the navigation menu. It appears on every page.

**Think of it as:** The menu bar at a restaurant 🍽️

### 4. `src/views/` - Your Pages
Each `.vue` file in this folder represents a different page:
- `Home.vue` → Shows when you visit `/`
- `Team.vue` → Shows when you visit `/team`
- `Agenda.vue` → Shows when you visit `/agenda`
- `Sponsers.vue` → Shows when you visit `/sponsors`

**Think of them as:** Different rooms in your house 🚪

### 5. `src/router/index.js` - Navigation Rules
This file tells Vue which URL should show which page. It's like a map for navigation!

**Example:**
```javascript
{
  path: '/team',      // URL in browser
  name: 'Team',       // Component name
  component: Team     // Which Vue file to show
}
```

## 🎨 Vue Component Structure

Every `.vue` file has 3 parts:

```vue
<template>
  <!-- HTML structure - what you see -->
  <div>
    <h1>Hello World</h1>
  </div>
</template>

<script>
// JavaScript logic - how it works
export default {
  name: 'ComponentName',
  // data, methods, etc.
}
</script>

<style scoped>
/* CSS styles - how it looks */
h1 {
  color: black;
}
</style>
```

- **`<template>`** = What you see (HTML)
- **`<script>`** = How it works (JavaScript)
- **`<style>`** = How it looks (CSS)

## 🛠️ Common Development Tasks

### Adding a New Page

1. **Create a new file** in `src/views/` (e.g., `About.vue`)
2. **Add the route** in `src/router/index.js`:
   ```javascript
   {
     path: '/about',
     name: 'About',
     component: About
   }
   ```
3. **Import it** at the top of `src/router/index.js`
4. **Add a link** in `src/components/Header.vue` if you want navigation

### Modifying a Page

Just edit the `.vue` file in `src/views/`! Changes appear automatically when you save (hot reload).

### Changing Styles

- **Global styles:** Edit `src/App.vue` `<style>` section
- **Page-specific styles:** Edit the `<style scoped>` section in that page's `.vue` file

## 🎯 Recommended IDE Setup

- **VS Code** (free and popular)
- Install the **Vue Language Features (Volar)** extension
- Install **Vue - Official** extension

## 🌐 Recommended Browser Extensions

- **Vue.js DevTools** - Helps debug Vue apps
  - [Chrome/Edge](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## 🐛 Troubleshooting

**App won't start?**
- Make sure you ran `npm install` first
- Check that Node.js version matches requirements

**Changes not showing?**
- Check browser console for errors
- Make sure dev server is running (`npm run dev`)
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Can't find a file?**
- Check the folder structure above
- Make sure file names match exactly (case-sensitive!)

## 🤝 Contributing to DevFest Website

We welcome contributions! Here's how you can help:
- Add new pages or sections
- Improve existing pages
- Add new features
- Fix bugs
- Enhance the design
- Update content

## 📋 Current Pages

- **Home** (`/`) - Landing page
- **Team** (`/team`) - Team members page
- **Agenda** (`/agenda`) - Event schedule
- **Sponsors** (`/sponsors`) - Sponsors page

---

**Built with ❤️ for DevFest Indore 2025**
