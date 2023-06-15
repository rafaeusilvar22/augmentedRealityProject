// let btnLinkdin = document.querySelector("#linkedin");

// btnLinkdin.addEventListener("click", () =>{
//     window.open("https://www.linkedin.com/in/rafael-silva-480a67222/", '_blank');

// });

let BtnLogoWind = document.querySelector('#BtnLogoWind');
let attributeWind = document.querySelector('#attributeWind');

BtnLogoWind.addEventListener('click', () => {
  attributeWind.setAttribute('visible', 'true');
  BtnLogoWind.removeAttribute('animation');
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
  btnInformation.removeAttribute('animation')
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
