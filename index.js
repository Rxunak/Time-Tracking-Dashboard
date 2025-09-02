const informationDiv = document.querySelectorAll(".hover");
const elip = document.querySelectorAll(".elipses");
const mainContainer = document.querySelectorAll(".informationPara");
const informationTimeSetion = document.querySelectorAll(".informationTime");
const options = document.querySelectorAll(".options");
const container = document.querySelectorAll(".mainContainer");

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
  const dayButtonText = dailyTime.innerText.toLowerCase();
  if (text === "daily") {
    container.forEach((item, index) => {
      const pTag = document.createElement("p");
      pTag.innerText = data[index].timeframes[text].current + "hrs";
      pTag.classList.add("informationTime");
      item.innerText = "";
      weeklyTime.classList.remove("test");
      item.appendChild(pTag);
    });
  } else if (text === "weekly") {
    container.forEach((item, index) => {
      const pTag = document.createElement("p");
      pTag.innerText = data[index].timeframes[text].current + "hrs";
      pTag.classList.add("informationTime");
      item.innerText = "";
      item.appendChild(pTag);
    });
  } else if (text === "monthly") {
    container.forEach((item, index) => {
      const pTag = document.createElement("p");
      pTag.innerText = data[index].timeframes[text].current + "hrs";
      pTag.classList.add("informationTime");
      item.innerText = "";
      weeklyTime.classList.remove("test");
      item.appendChild(pTag);
    });
  }
};

const fetchedDated = (data) => {
  container.forEach((item, index) => {
    const pTag = document.createElement("p");
    pTag.innerText = data[index].timeframes.weekly.current + "hrs";
    pTag.classList.add("informationTime");
    item.innerText = "";
    item.appendChild(pTag);
    test()
  });
};

function test() {

  weeklyTime.classList.add("test");
}

const sendData = (data) => {
  for (const info of data) {
    pullHours(info);
  }
};

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
        const test = button.innerText.toLowerCase();
        appendTime(data, test);
      });
    });
  });
