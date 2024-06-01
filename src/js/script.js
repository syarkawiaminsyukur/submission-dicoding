const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");
let index = 0;

function slideShow() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;

  if (index > images.length) {
    index = 1;
  }
  images[index - 1].style.display = "block";
  setTimeout(slideShow, 2000);
}

slideShow();
