let rascryt = document.querySelector(".main__button-more");
let slideContainer = document.querySelector(".swiper-container");
let slide = slideContainer.querySelectorAll(".swiper-slide");
let scryt = document.querySelector(".main__button-hide");

let width = document.documentElement.clientWidth;

if (width >= 768 && width < 992) {
  for (let i = 6; i < slide.length; i++) {
    slide[i].classList.add("hidden");
  }
}

if (width >= 992) {
  for (let i = 8; i < slide.length; i++) {
    slide[i].classList.add("hidden");
  }
}

rascryt.addEventListener("click", function () {
  for (let i = 0; i < slide.length; i++) {
    slide[i].classList.remove("hidden");
  }
  scryt.classList.remove("hidden");
  rascryt.classList.add("hidden");
});

scryt.addEventListener("click", function () {
  if (width >= 768 && width < 991) {
    for (let i = 6; i < slide.length; i++) {
      slide[i].classList.add("hidden");
    }
  }

  if (width >= 992) {
    for (let i = 8; i < slide.length; i++) {
      slide[i].classList.add("hidden");
    }
  }
  rascryt.classList.remove("hidden");
  scryt.classList.add("hidden");
});

if (width < 768) {
  new Swiper(".slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: "auto",
    spaceBetween: 16,
  });
}
