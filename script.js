const mobels = [
  {
    name: "Kallax",
    img: "./pictures/kallax.jpg",
    price: 15,
    info: "negotiable",
  },
  {
    name: "Meja coklat",
    img: "./pictures/meja-coklat.jpg",
    price: 5,
    info: "",
  },
  {
    name: "Wooden shelf",
    img: "./pictures/wooden-shelf.jpg",
    price: 15,
    info: "negotiable",
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
    </div>`);
});
