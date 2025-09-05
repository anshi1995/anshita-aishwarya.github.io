document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImg");
  const caption = document.getElementById("caption");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
      // Change main image
      mainImage.src = thumbnail.src;
      caption.textContent = thumbnail.getAttribute("data-caption");

      // Remove active from others
      thumbnails.forEach(t => t.classList.remove("active"));

      // Add active class to selected
      thumbnail.classList.add("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  
  const thumbnails = document.querySelectorAll(".thumbnails img");

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
      
    });
  });
});
