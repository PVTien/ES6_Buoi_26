let str = document.querySelector(".heading").innerHTML;
str = [...str];

const jumpText = () => {
  const html = str.reduce((total, element) => {
    total += `
            <span>${element}</span>
        `;
    return total;
  }, "");
  document.querySelector(".heading").innerHTML = html;
};

window.onload = () => {
  jumpText();
};
