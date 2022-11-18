const calcAverage = (...point) => {
  let average = 0;
  for (let element of point) {
    average += element;
  }
  average = average / point.length;
  let result = Math.round(average * 100) / 100;
  return result;
};

const domId = (id) => document.getElementById(id);

domId("btnKhoi1").onclick = () => {
  const Toan = +domId("inpToan").value;
  const Ly = +domId("inpLy").value;
  const Hoa = +domId("inpHoa").value;

  domId("tbKhoi1").innerHTML = calcAverage(Toan, Ly, Hoa);
};

domId("btnKhoi2").onclick = () => {
  const Van = +domId("inpVan").value;
  const Su = +domId("inpSu").value;
  const Dia = +domId("inpDia").value;
  const English = +domId("inpEnglish").value;

  domId("tbKhoi2").innerHTML = calcAverage(Van, Su, Dia, English);
};
