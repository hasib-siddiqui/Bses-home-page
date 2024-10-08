const images = [
  "./images/AC_Scheme_Web_Banner.jpg",
  "./images/Web_banner_6_new.jpg",
  "./images/Web_Banner_Seprate_Connection.jpg", // Corrected path
];

const carouselInner = document.getElementById("carouselImages");

// Function to render images
function renderImages() {
  images.forEach((src, index) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item");
    if (index === 0) div.classList.add("active"); // Set first image as active
    div.innerHTML = `<img src="${src}" class="d-block w-100" alt="Slide ${
      index + 1
    }">`;
    carouselInner.appendChild(div);
  });
}

// Call the renderImages function
renderImages();
