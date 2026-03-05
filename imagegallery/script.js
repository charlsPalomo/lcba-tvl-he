const images = document.querySelectorAll('#carousel img');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

images.forEach(img => {
  img.onclick = () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  };
});

lightbox.onclick = () => {
  lightbox.style.display = 'none';
};

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") lightbox.style.display = 'none';
});