fetch("/travaux.json")
  .then((response) => response.json())
  .then((data) => {
    const travauxContainer = document.getElementById("travaux-container");
    data.forEach((travail, index) => {
      const card = document.createElement("div");
      card.className = "col-md-4";
      card.innerHTML = `
        <div class="card">
          <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${
                  travail.image1
                }" class="d-block w-100" alt="Image 1">
              </div>
              <div class="carousel-item">
                <img src="${
                  travail.image2
                }" class="d-block w-100" alt="Image 2">
              </div>
              <div class="carousel-item">
                <img src="${
                  travail.image3
                }" class="d-block w-100" alt="Image 3">
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">${travail.nom}</h5>
            <p class="card-text">${travail.description}</p>
            <a href="#" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#site-info-${index}" aria-expanded="false" aria-controls="site-info-${index}">
              <i class="fas fa-chevron-down"></i>
            </a>
            <a href="${
              travail.lienSite
            }" target="_blank" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div class="collapse" id="site-info-${index}">
            <div class="card-body">
              <p>Informations supplémentaires sur le site ${index + 1}.</p>
              <a href="${
                travail.lienGithub
              }" target="_blank" class="btn btn-secondary">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      `;
      travauxContainer.appendChild(card);
    });
  });
