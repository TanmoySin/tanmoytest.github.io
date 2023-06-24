let sortDirection = false;
let personData = [
  { item: "Fry-rice", amount: 80 },
  { item: "Egg-roll", amount: 45 },
  { item: "Chicken-Biriyani", amount: 180 },
  { item: "Momo", amount: 100 },
  { item: "Chilli-chicken", amount: 220 },
  { item: "Fired chicken", amount: 60 },
  { item: "Butter Chicken Massala", amount: 250 }
];

window.onload = () => {
  loadTableData(personData);
};

loadTableData(personData);

function loadTableData(personData) {
  const tableBody = document.getElementById("tabledata");
  let dataHtml = "";
  for (let person of personData) {
    dataHtml += `<tr><td>${person.item}</td><td>${person.amount}</td></tr>`;
  }
  // console.log(dataHtml)
  tableBody.innerHTML = dataHtml;
}

function sortColumn(columnName) {
  const dataType = typeof personData[0][columnName];
  // console.log(dataType);
  sortDirection = !sortDirection;
  switch (dataType) {
    case "number":
      sortNumberColumn(sortDirection, columnName);
      break;
  }
  loadTableData(personData);
}

function sortNumberColumn(sort, columnName) {
  personData = personData.sort((p1, p2) => {
    return sort
      ? p1[columnName] - p2[columnName]
      : p2[columnName] - p1[columnName];
  });
}

function logout() {
  window.location.href = "../index.html";
}
