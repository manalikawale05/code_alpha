let currentImageIndex = 0;
let images = [];

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  images = Array.from(document.querySelectorAll(".gallery img"));
  currentImageIndex = images.indexOf(img);
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(n) {
  currentImageIndex = (currentImageIndex + n + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentImageIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll('.gallery .image');
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
