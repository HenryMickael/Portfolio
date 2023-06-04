// Animation text presentation
const titleText = `Suite à une reconversion professionnelle, j'ai décidé de devenir
développeur web front-end. Mon objectif : apprendre en permanence et
évoluer dans ce domaine passionnant.`;
const typedTitleElement = document.getElementById("typed-title");

function typeTitle() {
  let index = 0;
  const typingInterval = setInterval(() => {
    typedTitleElement.textContent += titleText[index];
    index++;
    if (index >= titleText.length) {
      clearInterval(typingInterval);
    }
  }, 40);
}

setTimeout(typeTitle, 1000);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// Retouren haut de page
window.addEventListener("scroll", function () {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
// btn retourner
function flipImage() {
  var flipContainer = document.querySelector(".flip-container");
  flipContainer.classList.toggle("flipped");
}
