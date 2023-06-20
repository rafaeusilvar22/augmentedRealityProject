// let btnLinkdin = document.querySelector("#linkedin");

// btnLinkdin.addEventListener("click", () =>{
//     window.open("https://www.linkedin.com/in/rafael-silva-480a67222/", '_blank');

// });

let BtnLogoWind = document.querySelector("#BtnLogoWind");
let attributeWind = document.querySelector("#attributeWind");

function clear() {
  attributeWind.setAttribute("visible", "false");
  BtnLogoWind.setAttribute(
    "animation",
    "property: scale; to: 0.01.5 0.01.5 0.01.5; easing: easeOutQuad; loop: true; dir: alternate"
  );
  BtnIconLevel.setAttribute(
    "animation",
    "property: scale; to: 0.01.5 0.01.5 0.01.5; easing: easeOutQuad; loop: true; dir: alternate"
  );
  attributeWind.removeAttribute('value');
}

BtnLogoWind.addEventListener("click", () => {
  attributeWind.setAttribute("visible", "true");
  attributeWind.setAttribute('value', "Monstros do atributo VENTO geralmente sao monstros voadores. Como Fera-alada,  Inseto voador, Fada e Dragao.")
  BtnLogoWind.removeAttribute("animation");
  setTimeout(clear, 9000);
});


let BtnIconLevel = document.querySelector('#BtnIconLevel');

BtnIconLevel.addEventListener('click', () =>{
  attributeWind.setAttribute('visible', 'true');
  attributeWind.setAttribute('value', 'O Nivel de um Card de Monstro, representado por estrelas no lado superior direito do card, geralmente mostra o quao poderoso e valioso o monstro. O Nivel minimo 1, e o maximo 12.')
  BtnIconLevel.removeAttribute("animation");
  setTimeout(clear, 9000);
})

let btnInformation = document.querySelector("#btnInformation");
let textAbout = document.querySelector("#about");
let btnStorePharmacy = document.querySelector("#storePharmacy");
let textStorePharmacy = document.querySelector("#textStorePharmacy");
let aboutNext = document.querySelector("#aboutNext");
let btnNextAbout = document.querySelector("#btnNextAbout");
let btnReturnAbout = document.querySelector("#btnReturnAbout");

btnInformation.addEventListener("click", () => {
  console.log("clicou");
  textAbout.setAttribute(
    "value",
    "Paracetamol é um analgesico e antipiretico, sendo indicado para a alivio da dor de intensidade leve a moderada, incluindo dor de cabeca, enxaqueca, dor musculo esqueletica, colicas menstruais, dor de garganta, dor de dente, dor pos-procedimentos odontologicos, dor e febre apos vacinacao, e dor de osteoartrite."
  );
  btnStorePharmacy.setAttribute("visible", "true");
  textStorePharmacy.setAttribute("visible", "true");
  btnNextAbout.setAttribute("visible", "true");
  btnInformation.removeAttribute("animation");
});

btnStorePharmacy.addEventListener("click", () => {
  window.open(
    "https://www.panvel.com/panvel/buscarProduto.do?termoPesquisa=paracetamol",
    "_blank"
  );
});

btnNextAbout.addEventListener("click", () => {
  textAbout.setAttribute(
    "value",
    "Este medicamento nao deve ser usado em caso de hipersensibilidade ao paracetamol ou a qualquer outro componente da formula."
  );
  btnNextAbout.setAttribute("visible", "false");
});

function loadPlaces(position) {
  const params = {
      radius: 300,    // search places not farther than this value (in meters)
      clientId: 'N3WJ41R5UHA0FPIN4FWGK5ZJXUEAUJEOZ1BOI4SGJCZEL0KK',
      clientSecret: 'CEMLIZYHN41GTFZG5LUYUWI2TNFQFHHJJY3QD00YFD43MAWZ',
      version: '20300101',    // foursquare versioning, required but unuseful for this demo
  };

  // CORS Proxy to avoid CORS problems
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';

  // Foursquare API (limit param: number of maximum places to fetch)
  const endpoint = `${corsProxy}https://api.foursquare.com/v2/venues/search?intent=checkin
      &ll=${position.latitude},${position.longitude}
      &radius=${params.radius}
      &client_id=${params.clientId}
      &client_secret=${params.clientSecret}
      &limit=30 
      &v=${params.version}`;
  return fetch(endpoint)
      .then((res) => {
          return res.json()
              .then((resp) => {
                  return resp.response.venues;
              })
      })
      .catch((err) => {
          console.error('Error with places API', err);
      })
};


window.onload = () => {
  const scene = document.querySelector('a-scene');

  // first get current user location
  return navigator.geolocation.getCurrentPosition(function (position) {

      // than use it to load from remote APIs some places nearby
      loadPlaces(position.coords)
          .then((places) => {
              places.forEach((place) => {
                  const latitude = place.location.lat;
                  const longitude = place.location.lng;

                  // add place name
                  const placeText = document.createElement('a-link');
                  placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                  placeText.setAttribute('title', place.name);
                  placeText.setAttribute('scale', '15 15 15');
                  
                  placeText.addEventListener('loaded', () => {
                      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
                  });

                  scene.appendChild(placeText);

                  console.log("Aquiiiiiiii ",placeText)
              });
          })
  },
      (err) => console.error('Error in retrieving position', err),
      {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 27000,
      }
  );
};