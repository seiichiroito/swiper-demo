const tabs = ["Tweets", "Tweets & replies", "Media", "Likes"];

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + tabs[index] + "</span>";
    },
  },
});
