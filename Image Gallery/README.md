

# 📸 My Image Gallery

A responsive **Masonry-style image gallery** with filter categories, pagination, and lightbox. Built with vanilla HTML, CSS, and JavaScript—no frameworks required!

---

## ✨ Features

✅ Masonry-style responsive layout
✅ Multiple filter categories:

* All
* Nature
* City
* Office
* Anime
* Female Anime
* Romantic

✅ Pagination with customizable page size
✅ Lightbox with next/previous navigation
✅ Hover zoom and brightness effect
✅ Click-outside-to-close lightbox

---

## 🚀 Demo

*(Add your screenshot or live link here)*

![Gallery Screenshot](./screenshot.png)

---

## 📂 Project Structure

```
/project-root
│
├── index.html        # Main HTML
├── style.css         # All styling
└── script.js         # Functionality (data, filtering, pagination, lightbox)
```

---

## ⚙️ How It Works

### 1️⃣ **Image Data**

* All images are listed in `script.js`, with `src` and `category`.
* Categories match filter buttons.

### 2️⃣ **Filtering**

* Click filter buttons to show only images in that category.
* "All" resets the filter.

### 3️⃣ **Pagination**

* Configurable images per page (default 20).
* Prev/Next buttons to navigate pages.
* Disabled automatically at first/last page.

### 4️⃣ **Masonry Layout**

* Uses CSS grid with `auto-fit` and `minmax` to create responsive columns that adjust to screen size.
* Masonry-like wrapping with variable image heights.

### 5️⃣ **Lightbox**

* Click any image to open in fullscreen.
* Next/Previous buttons to navigate within filtered set.
* Click outside or use close (×) to dismiss.

---

## 🖼️ Example Categories

✅ Nature: forest, landscapes, wildlife
✅ City: skyscrapers, streets, architecture
✅ Office: interiors, workspaces
✅ Anime: generic anime illustrations
✅ Female Anime: female-focused anime art
✅ Romantic: romance-themed images

---

## ✅ Usage

1. Clone the repo:

```bash
https://github.com/Anurag1742/Image-Gallery-
```

2. Add your own images to the `gallery` folder.

3. Update `script.js` with your image paths and categories.

4. Open `index.html` in your browser.

---

## 💻 Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla)

No external libraries or frameworks required.

---

## 📜 License

MIT License. Free to use and modify.

---

## 🙏 Credits

* Inspired by Masonry Grid design.
* Images in demo are placeholders (e.g., Unsplash, Pinterest).
