window.onload = () => {
  let button = document.querySelector('button[data-action="change"]');
  let btnAbout = document.querySelector('button[data-action="teste"]');
  btnAbout.innerText = "?";
  button.innerHTML =
    '<img width="40px" height="40px" src="assets/images/return.png"/>';

  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      name: "Animaismon",
      location: {
        lat: -26.915493045742146,
        lng: -49.05746340751648,
      },
    },
  ];
}

let models = [
  {
    url: "assets/low_poly_dog/scene.gltf",
    scale: "0.001 0.001 0.001",
    rotation: "0 180 0",
    info: "Cachorro Caramelo, Lv. 10, HP 150/150",
    about:
      "O vira-lata caramelo, é um cão sem raça definida que se popularizou por ser encontrado com facilidade pelo Brasil. É considerado pelas pessoas um patrimônio nacional.",
  },
  {
    url: "assets/dollynho_dance/scene.gltf",
    scale: "0.5 0.5 0.5",
    rotation: "0 180 0",
    info: "Refrigerante Dolly, Lv. 25, HP 40/40",
    about:
    "Oi pessoal, eu sou o Dollynho, seu amiguinho! Segundo o meu proprietário, fui inspirado no Teletubbies."
  },
  {
    url: "assets/loro_jose/scene.gltf",
    scale: "0.01 0.01 0.01",
    rotation: "0 180 0",
    info: "Loro Jose, Lv. 10, HP 10/10",
    about:
    "Louro José foi um boneco de um papagaio que misturava artifícios de fantoches com a tecnologia de controle remoto."
  },
  {
    url: "assets/lesser_dog_-_undertale/scene.gltf",
    scale: "0.005 0.005 0.005",
    rotation: "0 180 0",
    info: "Cachorro Guerreiro, Lv. 70, HP 150/150",
    about:
    "Um cachorro equipado com uma espada muito afiada e um escudo extremamente resistente"
  },
  {
    url: "assets/capybara/scene.gltf",
    scale: "0.5 0.5 0.5",
    info: "Capivara, Lv. 10, HP 30/10",
    rotation: "0 180 0",
    about:
    "A capivara destaca-se por ser o maior roedor do mundo. É um animal herbívoro que pode ser encontrado nas Américas Central e do Sul."
  },
  {
    url: "assets/samurai_capybara/scene.gltf",
    scale: "0.9 0.9 0.9",
    rotation: "0 180 0",
    info: "Capivara Samurai, Lv. 80, HP 100/100",
    about:
    "Cansei de ser um Templário Ardente, agora farei jus ao meu nome e serei a Capivara Samurai mais forte de Blumenau"
  },
];

var modelIndex = 0;
var setModel = function (model, entity) {
  if (model.scale) {
    entity.setAttribute("scale", model.scale);
  }

  if (model.rotation) {
    entity.setAttribute("rotation", model.rotation);
  }

  if (model.position) {
    entity.setAttribute("position", model.position);
  }

  entity.setAttribute("gltf-model", model.url);

  const div = document.querySelector(".instructions");
  let about = document.querySelector(".about");
  about.innerHTML = `<p>${model.about}</p>`;
  div.innerText = model.info;

  document
    .querySelector('button[data-action="teste"]')
    .addEventListener("click", () => {
      about.classList.remove("hidden");
    });
};

function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement("a-entity");
    model.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    model.setAttribute("animation-mixer", "");

    setModel(models[modelIndex], model);

    model.setAttribute("class", "clickable");

    document
      .querySelector('button[data-action="change"]')
      .addEventListener("click", function () {
        let entity = document.querySelector("[gps-entity-place]");
        modelIndex++;
        let newIndex = modelIndex % models.length;
        setModel(models[newIndex], entity);
        let about = document.querySelector(".about");
        about.classList.add("hidden");
      });
    scene.appendChild(model);
  });
}
