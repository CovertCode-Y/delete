const btnDisplay = document.querySelector(".btnDisplay");
const container = document.querySelector(".container");

const divYelow = document.container.createElement("div");
divYelow.classList.add("div-yelow");

btnDisplay.addEventListener("click", () => {
  if (divYelow.style.display === "block") {
    divYelow.classList.add("disNone");
  } else {
    divYelow.classList.add("div-yelow");
  }
});

//https://randomuser.me/api/

const fatchUser = async (data) => {
  try {
    const results = await fetch("https://randomuser.me/api/");
    results.json(data);
  } catch {
    throw Error("Couldn't connect");
  }
};

const nameUser = async (data) => {
  container.appendChild("h3");
  h3.textContent = data.nameUser.name;
};
