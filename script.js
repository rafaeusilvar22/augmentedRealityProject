// let btnLinkdin = document.querySelector("#linkedin");

// btnLinkdin.addEventListener("click", () =>{
//     window.open("https://www.linkedin.com/in/rafael-silva-480a67222/", '_blank');

// });

let btnInformation = document.querySelector("#btnInformation");
let example = document.querySelector("#about");
let btnStorePharmacy = document.querySelector("#storePharmacy");

btnInformation.addEventListener("click", () => {
  console.log("clicou");
  example.setAttribute(
    "value",
    "O paracetamol, tambem conhecido por acetaminofeno, é um farmaco com propriedades analgesicas e antipireticas utilizado essencialmente para tratar a febre e a dor leve e moderada, embora existam poucas evidencias de que o seu uso seja realmente eficaz no alivio da febre em criancas."
  );
  btnStorePharmacy.setAttribute("visible", "true");
});

btnStorePharmacy.addEventListener("click", () => {
  window.open(
    "https://www.panvel.com/panvel/buscarProduto.do?termoPesquisa=paracetamol",
    "_blank"
  );
});
