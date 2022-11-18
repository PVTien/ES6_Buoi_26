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
            <button class="color-button ${element}"></button>
        `;
    return total;
  }, "");
  domId("colorContainer").innerHTML = html;
};

window.onload = () => {
  loadButton();
};
