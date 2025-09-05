const informationDiv = document.querySelectorAll(".hover");
const elip = document.querySelectorAll(".elipses");
const mainContainer = document.querySelectorAll(".informationPara");
const options = document.querySelectorAll(".options");
const container = document.querySelectorAll(".mainContainer");
const infoDescription = document.querySelectorAll(".informationDes");

const dailyTime = document.getElementById("daily");
const weeklyTime = document.getElementById("weekly");
const monthlyTime = document.getElementById("monthly");

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

    item.prepend(span);
  });
};

const appendTime = (data, text) => {
  dailyTime.classList.remove("changeHover", "test");
  weeklyTime.classList.remove("changeHover", "test");
  monthlyTime.classList.remove("changeHover", "test");

  if (text === "daily") {
    dailyTime.classList.add("changeHover");
  } else if (text === "weekly") {
    weeklyTime.classList.add("test");
  } else if (text === "monthly") {
    monthlyTime.classList.add("changeHover");
  }

  container.forEach((item, index) => {
    const pTag = document.createElement("p");
    pTag.innerText = data[index].timeframes[text].current + "hrs";
    pTag.classList.add("informationTime");
    item.innerText = "";
    item.appendChild(pTag);
  });
};

const updateHours = (data, text) => {
  infoDescription.forEach((item, index) => {
    item.textContent = `Last Week - ${data[index].timeframes[text].previous}hrs`;
  });
};

const fetchedDated = (data) => {
  container.forEach((item, index) => {
    const pTag = document.createElement("p");
    pTag.innerText = data[index].timeframes.weekly.current + "hrs";
    pTag.classList.add("informationTime");
    item.innerText = "";
    item.appendChild(pTag);
  });

  infoDescription.forEach((item, index) => {
    item.textContent = `Last Week - ${data[index].timeframes.weekly.previous}hrs`;
  });

  test();
};

function test() {
  weeklyTime.classList.add("test");
}

fetch("/data.json")
  .then((response) => {
    if (!response.ok) return console.log("Sorry there was an error!");

    return response.json();
  })
  .then((data) => {
    appendItem(data);
    fetchedDated(data);
    window.onload = function () {
      weeklyTime.click();
    };

    options.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonText = button.innerText.toLowerCase();
        appendTime(data, buttonText);
        updateHours(data, buttonText);
      });
    });
  });
