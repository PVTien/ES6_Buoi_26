const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const domId = (id) => document.getElementById(id);

const loadButton = () => {
  const html = colorList.reduce((total, element) => {
    total += `
            <button id="btn_${element}" onclick="changeColor(event)" class="color-button ${element}"></button>
        `;
    return total;
  }, "");
  domId("colorContainer").innerHTML = html;
};

const changeColor = (e) => {
  for (let element of colorList) {
    domId(`btn_${element}`).classList.remove("active");
    domId("house").classList.remove(`${element}`);
  }
  let activeHouse = e.target.classList[1];
  domId("house").classList.add(activeHouse);
  e.target.classList.add("active");
};

window.onload = () => {
  loadButton();
};
