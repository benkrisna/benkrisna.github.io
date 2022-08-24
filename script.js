const mobels = [
  {
    name: "Kallax",
    img: "./pictures/kallax.jpg",
    price: 15,
    info: "negotiable",
    trivia: "Udah diambil Reggy",
  },
  {
    name: "Meja coklat",
    img: "./pictures/meja-coklat.jpg",
    price: 5,
    info: "negotiable, gratis pun gpp",
    trivia: "Ambil plis guys, gratis pun gpp",
  },
  {
    name: "Wooden shelf",
    img: "./pictures/wooden-shelf.jpg",
    price: 10,
    info: "negotiable",
    trivia: "Baru banget woi padahal",
  },
  {
    name: "Hair Dryer",
    img: "./pictures/hair-dryer.jpg",
    price: 5,
    info: "negotiable",
    trivia: "Ga bikin botak kok",
  },
  {
    name: "Setrika uap",
    img: "./pictures/setrika-uap.jpg",
    price: 5,
    info: "negotiable",
    trivia: "Patrick pinjem ini buat Interview kerja, langsung dapet",
  },
  {
    name: "Tong sampah",
    img: "./pictures/tong-sampah.jpg",
    price: 0,
    info: "gratis woi",
    trivia: "she's a keeper :)",
  },
];

mobels.map((mobel) => {
  $("div.card-deck").append(`
    <div class="card">
        <img
            class="card-img-top"
            src="${mobel.img}"
            alt="Card image cap"
        />
        <div class="card-body">
        <h5 class="card-title">${mobel.name}</h5>
        <p class="card-text">Price: ${mobel.price} €</p>
        </div>
        <p class="card-text">
        <small class="text-muted">${mobel.info}</small>
        </p>
        <p class="card-text">
        <small class="text-muted">${mobel.trivia}</small>
        </p>
    </div>`);
});
