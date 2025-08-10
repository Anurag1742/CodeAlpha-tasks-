//-----------------------------------------
// 1️⃣ IMAGES DATA
//-----------------------------------------
const images = [
  // Nature
  { src: 'gallery/nature-1.jpg', category: 'nature' },
  { src: 'gallery/nature-2.jpg', category: 'nature' },
  { src: 'gallery/nature-3.jpg', category: 'nature' },
  { src: 'gallery/nature-4.jpg', category: 'nature' },
  { src: 'gallery/nature-5.jpg', category: 'nature' },
  { src: 'gallery/nature-6.jpg', category: 'nature' },
  { src: 'gallery/nature-7.jpg', category: 'nature' },
  { src: 'gallery/nature-8.jpg', category: 'nature' },
  { src: 'gallery/nature-9.jpg', category: 'nature' },
  { src: 'gallery/nature-10.jpg', category: 'nature' },

  // City
  { src: 'gallery/city-1.jpg', category: 'city' },
  { src: 'gallery/city-2.jpg', category: 'city' },
  { src: 'gallery/city-3.jpg', category: 'city' },
  { src: 'gallery/city-4.jpg', category: 'city' },
  { src: 'gallery/city-5.jpg', category: 'city' },
  { src: 'gallery/city-6.jpg', category: 'city' },
  { src: 'gallery/city-7.jpg', category: 'city' },
  { src: 'gallery/city-8.jpg', category: 'city' },
  { src: 'gallery/city-9.jpg', category: 'city' },
  { src: 'gallery/city-10.jpg', category: 'city' },
  { src: 'gallery/city-11.jpg', category: 'city' },
  { src: 'gallery/city-12.jpg', category: 'city' },
  { src: 'gallery/city-13.jpg', category: 'city' },
  { src: 'gallery/city-14.jpg', category: 'city' },
  { src: 'gallery/city-15.jpg', category: 'city' },
  { src: 'gallery/city-16.jpg', category: 'city' },
  { src: 'gallery/city-17.jpg', category: 'city' },
  { src: 'gallery/city-18.jpg', category: 'city' },

  // Office
  { src: 'gallery/office-1.jpg', category: 'office' },
  { src: 'gallery/office-2.jpg', category: 'office' },
  { src: 'gallery/office-3.jpg', category: 'office' },
  { src: 'gallery/office-4.jpg', category: 'office' },
  { src: 'gallery/office-5.jpg', category: 'office' },
  { src: 'gallery/office-6.jpg', category: 'office' },
  { src: 'gallery/office-7.jpg', category: 'office' },
  { src: 'gallery/office-8.jpg', category: 'office' },
  { src: 'gallery/office-9.jpg', category: 'office' },
  { src: 'gallery/office-10.jpg', category: 'office' },
  { src: 'gallery/office-11.jpg', category: 'office' },
  { src: 'gallery/office-12.jpg', category: 'office' },
  { src: 'gallery/office-13.jpg', category: 'office' },
  { src: 'gallery/office-14.jpg', category: 'office' },
  { src: 'gallery/office-15.jpg', category: 'office' },
  { src: 'gallery/office-16.jpg', category: 'office' },
  { src: 'gallery/office-17.jpg', category: 'office' },
  { src: 'gallery/office-18.jpg', category: 'office' },


  // Anime
  { src: 'gallery/anime-1.jpeg', category: 'anime' },
  { src: 'gallery/anime-2.jpeg', category: 'anime' },
  { src: 'gallery/anime-3.jpeg', category: 'anime' },
  { src: 'gallery/anime-4.jpeg', category: 'anime' },
  { src: 'gallery/anime-5.jpeg', category: 'anime' },
  { src: 'gallery/anime-6.jpeg', category: 'anime' },
  { src: 'gallery/anime-7.jpeg', category: 'anime' },
  { src: 'gallery/anime-8.jpeg', category: 'anime' },
  { src: 'gallery/anime-9.jpeg', category: 'anime' },
  { src: 'gallery/anime-10.jpeg', category: 'anime' },
  { src: 'gallery/anime-11.jpeg', category: 'anime' },
  { src: 'gallery/anime-12.jpeg', category: 'anime' },
  { src: 'gallery/anime-14.jpeg', category: 'anime' },
  { src: 'gallery/anime-15.jpeg', category: 'anime' },
  { src: 'gallery/anime-16.jpeg', category: 'anime' },
  { src: 'gallery/anime-17.jpeg', category: 'anime' },
  { src: 'gallery/anime-18.jpeg', category: 'anime' },
  { src: 'gallery/anime-19.jpeg', category: 'anime' },
  { src: 'gallery/anime-20.jpeg', category: 'anime' },
  { src: 'gallery/anime-21.jpeg', category: 'anime' },
  { src: 'gallery/anime-22.jpeg', category: 'anime' },
  { src: 'gallery/anime-23.jpeg', category: 'anime' },
  { src: 'gallery/anime-24.jpeg', category: 'anime' },
  { src: 'gallery/anime-25.jpeg', category: 'anime' },

  //Female Anime
  { src: 'gallery/anime-female-1.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-2.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-3.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-4.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-5.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-6.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-7.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-8.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-9.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-10.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-11.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-12.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-13.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-14.jpeg', category: 'female_anime' },
  { src: 'gallery/anime-female-15.jpeg', category: 'female_anime' },
  
  //Romantic
  { src: 'gallery/romance-1.jpeg', category: 'Romance' },
  { src: 'gallery/romance-2.jpeg', category: 'Romance' },
  { src: 'gallery/romance-3.jpeg', category: 'Romance' },
];

//-----------------------------------------
// 2️⃣ PAGINATION SETUP
//-----------------------------------------
const imagesPerPage = 20;
let currentPage = 1;
let filteredImages = [...images];
const totalPages = () => Math.ceil(filteredImages.length / imagesPerPage);

// Elements
const galleryContainer = document.getElementById('galleryContainer');
const prevPageBtn = document.getElementById('prevBtn');
const nextPageBtn = document.getElementById('nextBtn');
const pageIndicator = document.getElementById('pageIndicator');

// Render gallery
function renderGallery() {
  galleryContainer.innerHTML = '';

  const start = (currentPage - 1) * imagesPerPage;
  const end = start + imagesPerPage;
  const currentImages = filteredImages.slice(start, end);

  currentImages.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.setAttribute('data-category', item.category);

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = '';

    div.appendChild(img);
    galleryContainer.appendChild(div);

    div.addEventListener('click', () => openLightbox(filteredImages.indexOf(item)));
  });

  pageIndicator.textContent = `Page ${currentPage} of ${totalPages()}`;
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages();
}

// Pagination controls
prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderGallery();
  }
});

nextPageBtn.addEventListener('click', () => {
  if (currentPage < totalPages()) {
    currentPage++;
    renderGallery();
  }
});

//-----------------------------------------
// 3️⃣ LIGHTBOX LOGIC
//-----------------------------------------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementsByClassName('close')[0];
const nextBtn = document.getElementsByClassName('next')[0];
const prevBtn = document.getElementsByClassName('prev')[0];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = filteredImages[currentIndex].src;
  lightbox.style.display = 'block';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function showNext() {
  currentIndex = (currentIndex + 1) % filteredImages.length;
  lightboxImg.src = filteredImages[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
  lightboxImg.src = filteredImages[currentIndex].src;
}

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

//-----------------------------------------
// 4️⃣ FILTERING LOGIC
//-----------------------------------------
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filteredImages = category === 'all' ? [...images] : images.filter(img => img.category === category);
    currentPage = 1;
    renderGallery();
  });
});

//-----------------------------------------
// 5️⃣ INITIAL RENDER
//-----------------------------------------
renderGallery();
