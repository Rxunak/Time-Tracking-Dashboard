const informationDiv = document.querySelectorAll(".hover");
const elip = document.querySelectorAll(".elipses");
const mainContainer = document.querySelectorAll(".informationPara");
const daily = document.getElementById("day");
const week = document.getElementById("weekly");
const time = document.querySelectorAll(".informationTime");

informationDiv.forEach((items) => {
  items.addEventListener("mouseover", () => {
    items.classList.add("changeBackground");
    items.style.cursor = "pointer";
  });
});

informationDiv.forEach((items) => {
  items.addEventListener("mouseout", () => {
    items.classList.remove("changeBackground");
    items.style.cursor = "pointer";
  });
});

elip.forEach((elips) => {
  elips.addEventListener("mouseover", (e) => {
    elips.style.cursor = "pointer";
    e.stopPropagation();
  });
});

const appendItem = (data) => {
  mainContainer.forEach((item, index) => {
    const span = document.createElement("SPAN");

    span.innerHTML = data[index].title;
    span.id = "Raunak";

    item.prepend(span);
  });
};

fetch("/data.json")
  .then((response) => {
    if (!response.ok) return console.log("Sorry there was an error!");

    return response.json();
  })
  .then((data) => {
    appendItem(data);
  });
