fetch("travaux.json")
  .then((response) => response.json())
  .then((data) => {
    const travauxContainer = document.getElementById("travaux-container");
    data.forEach((travail, index) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
      card.innerHTML = `
        <div class="card card-fixed-height">
          <img src="${
            travail.image1
          }" class="card-img-top" alt="Image présentation d'un site">
          <div class="card-body">
            <h3 class="card-title">${travail.nom}</h3>
            <p class="card-text">${travail.description}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${index}">
              Curieux?
            </button>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="modal-${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header bg-dark">
        <h3 class="modal-title" id="exampleModalLabel">${travail.nom}</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="carousel-container d-flex align-items-center justify-content-center">
          <div id="carouselExample-${index}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner d-flex align-items-center"  >
              <div class="carousel-item active "  >
                <img src="${
                  travail.image1
                }" class="img-fluid carousel-image d-block h-100" alt="Photo de ${
        travail.image1
      }">
              </div>
              <div class="carousel-item " >
                <img src="${
                  travail.image2
                }" class="img-fluid carousel-image d-block h-100" alt="Photo de ${
        travail.image2
      }">
              </div>
              <div class="carousel-item " >
                <img src="${
                  travail.image3
                }" class="img-fluid carousel-image d-block h-100" alt="Photo de ${
        travail.image3
      }">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample-${index}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon custom-color" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample-${index}" data-bs-slide="next">
            <span class="carousel-control-next-icon custom-color" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <p class="my-3">${travail.descriptionComplete}</p>
        <p><strong>Technologies utilisées:</strong></p>
        <ul>
          ${travail.techUtilise.map((tech) => `<li>${tech}</li>`).join("")}
        </ul>
      </div>
      <div class="modal-footer">
        <a href="${travail.lienSite}" target="_blank" class="btn btn-primary">
          Voir le site
        </a>
        <a href="${
          travail.lienGithub
        }" target="_blank" class="btn btn-secondary">
          Voir sur Code
        </a>
      </div>
    </div>
  </div>
</div>`;
      travauxContainer.appendChild(card);
    });
  });
