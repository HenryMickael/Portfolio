function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// Retour en haut de page
window.addEventListener("scroll", function () {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
// Retournement card
function flipCard() {
  var card = document.getElementById("flip-card");
  card.classList.toggle("flipped");
}
// card s'adapte a l'image
window.addEventListener("load", function () {
  const cardPresentation = document.querySelector(".card-presentation");
  const cardFrontImg = document.querySelector(".card-front img");

  function setCardHeight() {
    const imgHeight = cardFrontImg.offsetHeight;
    cardPresentation.style.height = imgHeight + "px";
  }

  setCardHeight();

  window.addEventListener("resize", setCardHeight);
});
