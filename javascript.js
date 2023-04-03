const server_data = {
  images: {
    item_1: "/server_images/server_img1.jpg",
    item_2: "/server_images/server_img2.jpg",
    item_3: "/server_images/server_img3.jpg",
  },
  h2: { item_1: "Lorum", item_2: "Ipsum", item_3: "Dolor" },
  description: {
    item_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    item_2: "Quisque consequat, ex at convallis efficitur.",
    item_3: "Fusce venenatis tortor imperdiet justo venenatis varius.",
  },
  price: {
    item_1: "<s>kn 1,027.99</s> kn813.99",
    item_2: "<s>kn 1,027.99</s> kn813.99",
    item_3: "<s>kn 1,027.99</s> kn813.99",
  },
  discount: {
    item_1: "Limited 20% discount",
    item_2: "Limited 15% discount",
    item_3: "Limited 20% discount",
  },
  ages: { item_1: "Ages 10+", item_2: "Ages 11+", item_3: "Ages 12+" },
};

async function loadImages() {
  /* const data = await fetch("www.MainDomain/server_images/server_img1.jpg"); */

  show_loading();

  function show_loading() {
    const svg = document.querySelector("#svg_animation");
    const svg2 = svg.cloneNode(true);
    const svg3 = svg.cloneNode(true);

    document.querySelector(`#card${1}`).append(svg);
    document.querySelector(`#card${2}`).append(svg2);
    document.querySelector(`#card${3}`).append(svg3);

    document
      .querySelectorAll("#svg_animation")
      .forEach((svg) => (svg.style.display = "block"));

    setTimeout(() => {
      document
        .querySelectorAll("#svg_animation")
        .forEach((svg) => svg.remove());
    }, 900);
  }

  setTimeout(() => {
    for (let i = 1; i < 4; i++) {
      document.querySelector(`#img_${i}`).src = server_data.images[`item_${i}`];
    }

    let item = 1;
    let name = `item_${item}`;

    document.querySelectorAll("li").forEach((element) => {
      element.childNodes.forEach((node) => {
        if (node.id !== server_data[node.id]) {
          if (
            node == document.querySelector(`#img_${item}`) ||
            node == document.querySelector(`#button_${item}`)
          )
            return;
          node.innerHTML = server_data[node.id][name];
          if (node.id == "ages") {
            item++;
            name = `item_${item}`;
          }
        }
      });
    });
  }, 1000);
}
