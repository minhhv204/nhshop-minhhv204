$(document).ready(function(){
    new Swiper(".best-seller", {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            768: {
                centeredSlides: false,
            },
        },
    });
    new Swiper(".testimonials", {
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        centeredSlides: true,
        breakpoints: {
            768: {
                centeredSlides: false,
            },
        },
    });

    $(".my-rating").starRating({
        totalStars: 5, 
        starShape: "rounded",
        strokeColor: "#894A00",
        strokeWidth: 10,
        starSize: 25,
        });
})