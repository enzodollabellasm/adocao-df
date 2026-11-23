const pets = [
  { id: 1, name: "Pipoca", species: "Cão", age: "2 anos", region: "Taguatinga", temperament: "Carinhosa", size: "Médio porte", sex: "Fêmea", image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85", description: "Pipoca é uma companheira curiosa e carinhosa. Gosta de passeios tranquilos, de explorar cheiros novos e de ficar por perto quando a casa está calma." },
  { id: 2, name: "Nino", species: "Gato", age: "8 meses", region: "Asa Norte", temperament: "Brincalhão", size: "Pequeno porte", sex: "Macho", image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85", description: "Nino é um gatinho ativo e sociável. Brinquedos simples e uma janela segura já fazem o dia dele. Está aprendendo a confiar em novos ambientes." },
  { id: 3, name: "Amora", species: "Cão", age: "3 anos", region: "Águas Claras", temperament: "Tranquila", size: "Pequeno porte", sex: "Fêmea", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=85", description: "Amora tem um jeito sereno e adora receber carinho depois de conhecer a pessoa. Se adapta bem a uma rotina previsível e passeios curtos." },
  { id: 4, name: "Tico", species: "Gato", age: "1 ano", region: "Ceilândia", temperament: "Afetuoso", size: "Pequeno porte", sex: "Macho", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85", description: "Tico é um gato observador que procura um cantinho confortável e uma família paciente. Depois de se sentir seguro, gosta de ficar perto e acompanhar a rotina." },
  { id: 5, name: "Bento", species: "Cão", age: "1 ano e meio", region: "Asa Sul", temperament: "Energético", size: "Médio porte", sex: "Macho", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85", description: "Bento é animado e aprende rápido. Caminhadas, brincadeiras e uma rotina com atividades ajudam a gastar sua energia e criar vínculo." },
  { id: 6, name: "Luna", species: "Gato", age: "2 anos", region: "Taguatinga", temperament: "Calma", size: "Pequeno porte", sex: "Fêmea", image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=900&q=85", description: "Luna é tranquila e gosta de observar o movimento ao redor. Precisa de um espaço seguro e de tempo para se acostumar com as novidades." },
  { id: 7, name: "Chico", species: "Cão", age: "5 anos", region: "Ceilândia", temperament: "Companheiro", size: "Médio porte", sex: "Macho", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85", description: "Chico é um cão adulto de temperamento companheiro. Gosta de passeios no próprio ritmo e de estar perto das pessoas em quem confia." },
  { id: 8, name: "Mimi", species: "Gato", age: "6 meses", region: "Águas Claras", temperament: "Curiosa", size: "Pequeno porte", sex: "Fêmea", image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=85", description: "Mimi é uma filhote curiosa que se diverte com bolinhas e caixas. A família ideal pode oferecer brincadeiras, cuidado e acompanhamento veterinário." }
];

const petGrid = document.querySelector("#pet-grid");
const featuredTrack = document.querySelector("#featured-track");
const searchInput = document.querySelector("#search-input");
const speciesFilter = document.querySelector("#species-filter");
const regionFilter = document.querySelector("#region-filter");
const resultsCount = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const toast = document.querySelector("#toast");
let visibleLimit = 4;
let carouselOffset = 0;
let toastTimer;

function cardMarkup(pet) {
  return `<article class="pet-card">
    <div class="pet-image" role="img" aria-label="Foto de ${pet.name}" style="background-image:url('${pet.image}')">
      <span class="pet-tag">${pet.species}</span>
      <button class="pet-favorite" type="button" aria-label="Salvar ${pet.name} nos favoritos" aria-pressed="false">♡</button>
    </div>
    <div class="pet-info"><div class="pet-title-row"><h3>${pet.name}</h3><span class="pet-age">${pet.age}</span></div>
      <p class="pet-place">⌖ ${pet.region} · DF</p><div class="pet-card-bottom"><span class="pet-temperament">${pet.temperament}</span><button class="card-open" type="button" data-pet="${pet.id}">Conhecer ${pet.name} <span aria-hidden="true">→</span></button></div>
    </div>
  </article>`;
}

function renderFeatured() {
  const featuredPets = pets.slice(carouselOffset, carouselOffset + 4);
  const wrapped = featuredPets.length === 4 ? featuredPets : [...featuredPets, ...pets.slice(0, 4 - featuredPets.length)];
  featuredTrack.innerHTML = wrapped.map(cardMarkup).join("");
  attachCardActions(featuredTrack);
}

function getFilteredPets() {
  const query = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  return pets.filter((pet) => {
    const matchesName = pet.name.toLocaleLowerCase("pt-BR").includes(query);
    const matchesSpecies = speciesFilter.value === "all" || pet.species === speciesFilter.value;
    const matchesRegion = regionFilter.value === "all" || pet.region === regionFilter.value;
    return matchesName && matchesSpecies && matchesRegion;
  });
}

function renderCatalog() {
  const filteredPets = getFilteredPets();
  const visiblePets = filteredPets.slice(0, visibleLimit);
  petGrid.innerHTML = visiblePets.map(cardMarkup).join("");
  resultsCount.textContent = `${filteredPets.length} ${filteredPets.length === 1 ? "animal encontrado" : "animais encontrados"}`;
  emptyState.hidden = filteredPets.length > 0;
  document.querySelector("#show-all").hidden = filteredPets.length <= visibleLimit;
  attachCardActions(petGrid);
}

function attachCardActions(container) {
  container.querySelectorAll("[data-pet]").forEach((button) => {
    button.addEventListener("click", () => openPet(Number(button.dataset.pet)));
  });
  container.querySelectorAll(".pet-favorite").forEach((button) => {
    button.addEventListener("click", () => {
      const saved = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", String(!saved));
      button.textContent = saved ? "♡" : "♥";
      announce(saved ? "Animal removido dos favoritos." : "Animal salvo nos favoritos.");
    });
  });
}

function openPet(id) {
  const pet = pets.find((item) => item.id === id);
  const dialog = document.querySelector("#pet-dialog");
  document.querySelector("#pet-dialog-content").innerHTML = `<button class="modal-close" type="button" data-close aria-label="Fechar">×</button>
    <div class="pet-detail"><div class="pet-detail-image" role="img" aria-label="Foto de ${pet.name}" style="background-image:url('${pet.image}')"></div>
    <div class="pet-detail-copy"><p class="eyebrow">${pet.species} · ${pet.region}, DF</p><h2 id="pet-dialog-title">${pet.name}</h2><p>${pet.description}</p><div class="pet-facts"><span>${pet.age}</span><span>${pet.size}</span><span>${pet.sex}</span><span>${pet.temperament}</span></div><button class="button button-primary" id="interest-button" type="button">Tenho interesse <span aria-hidden="true">→</span></button></div></div>`;
  dialog.showModal();
  dialog.querySelector("[data-close]").addEventListener("click", () => dialog.close());
  dialog.querySelector("#interest-button").addEventListener("click", () => {
    dialog.close();
    const interestDialog = document.querySelector("#interest-dialog");
    interestDialog.querySelector("[name='pet']").value = pet.name;
    interestDialog.showModal();
  });
}

function announce(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  visibleLimit = pets.length;
  renderCatalog();
});
searchInput.addEventListener("input", () => { visibleLimit = pets.length; renderCatalog(); });
speciesFilter.addEventListener("change", () => { visibleLimit = pets.length; renderCatalog(); });
regionFilter.addEventListener("change", () => { visibleLimit = pets.length; renderCatalog(); });
document.querySelector("#clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  speciesFilter.value = "all";
  regionFilter.value = "all";
  visibleLimit = 4;
  renderCatalog();
});
document.querySelector("#show-all").addEventListener("click", () => { visibleLimit = pets.length; renderCatalog(); });
document.querySelector("#carousel-next").addEventListener("click", () => { carouselOffset = (carouselOffset + 1) % pets.length; renderFeatured(); });
document.querySelector("#carousel-prev").addEventListener("click", () => { carouselOffset = (carouselOffset - 1 + pets.length) % pets.length; renderFeatured(); });

document.querySelectorAll("[data-open]").forEach((button) => {
  button.addEventListener("click", () => document.getElementById(button.dataset.open).showModal());
});
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target.closest("[data-close]")) dialog.close();
  });
});

document.querySelector("#interest-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const petName = new FormData(event.currentTarget).get("pet");
  event.currentTarget.reset();
  document.querySelector("#interest-dialog").close();
  announce(`Interesse por ${petName} registrado nesta demonstração.`);
});
document.querySelector("#publish-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const petName = new FormData(event.currentTarget).get("petName");
  event.currentTarget.reset();
  document.querySelector("#publish-dialog").close();
  announce(`Pré-cadastro de ${petName} conferido. Não houve publicação real.`);
});
document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  announce("Mensagem registrada nesta demonstração. Nenhum e-mail foi enviado.");
});
document.querySelector("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  document.querySelector("#login-dialog").close();
  announce("Login ilustrativo. Esta versão não possui autenticação.");
});

document.querySelector("#theme-toggle").addEventListener("click", (event) => {
  const isDark = document.body.classList.toggle("dark");
  event.currentTarget.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro");
  announce(isDark ? "Modo escuro ativado." : "Modo claro ativado.");
});
document.querySelector("#font-toggle").addEventListener("click", (event) => {
  const isLarge = document.documentElement.style.getPropertyValue("--font-scale") === "1.1";
  document.documentElement.style.setProperty("--font-scale", isLarge ? "1" : "1.1");
  event.currentTarget.setAttribute("aria-label", isLarge ? "Aumentar tamanho do texto" : "Restaurar tamanho do texto");
  announce(isLarge ? "Tamanho do texto restaurado." : "Tamanho do texto aumentado.");
});
document.querySelector("#menu-toggle").addEventListener("click", (event) => {
  const menu = document.querySelector("#mobile-nav");
  const isOpen = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!isOpen));
  event.currentTarget.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  menu.hidden = isOpen;
});
document.querySelectorAll("#mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#mobile-nav").hidden = true;
    document.querySelector("#menu-toggle").setAttribute("aria-expanded", "false");
  });
});

renderFeatured();
renderCatalog();
