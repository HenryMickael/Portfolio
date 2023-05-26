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

typeTitle();
