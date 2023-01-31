const manSpeed = 3.6;
const bycicleSpeed = 20.1;
const carSpeed = 70;
const planeSpeed = 800;

const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");

const manResultTime = document.querySelector("#manResult");
const bycicleResultTime = document.querySelector("#bycicleResult");
const carResultTime = document.querySelector("#carResult");
const planeResultTime = document.querySelector("#planeResult");
const elWarn = document.querySelector("#warn");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const enterWay = Number(elInput.value);

  if (isNaN(enterWay)) {
    elWarn.textContent =
      "Siz noto'g'ri qiymat kiritdingiz, iltimos 0 dan katta raqam kiriting!";
    elWarn.style.color = "red";
  } else {
    const manHour = Math.floor(enterWay / manSpeed);
    const bycicleHour = Math.floor(enterWay / bycicleSpeed);
    const carHour = Math.floor(enterWay / carSpeed);
    const planeHour = Math.floor(enterWay / planeSpeed);

    const manMin = Math.floor((enterWay / manSpeed - manHour) * 60);
    const bycicleMin = Math.floor((enterWay / bycicleSpeed - bycicleHour) * 60);
    const carMin = Math.floor((enterWay / carSpeed - carHour) * 60);
    const planeMin = Math.floor((enterWay / planeSpeed - planeHour) * 60);

    const manSekund = Math.floor(
      ((enterWay / manSpeed - manHour) * 60 - manMin) * 60
    );
    const bycicleSekund = Math.floor(
      ((enterWay / bycicleSpeed - bycicleHour) * 60 - bycicleMin) * 60
    );
    const carSekund = Math.floor(
      ((enterWay / carSpeed - carHour) * 60 - carMin) * 60
    );
    const planeSekund = Math.floor(
      ((enterWay / planeSpeed - planeHour) * 60 - planeMin) * 60
    );

    manResultTime.textContent = `Piyoda ${manHour} soatda, ${manMin} daqiqada, ${manSekund} sekunda masofani bosib o'tadi.`;
    bycicleResultTime.textContent = `Velosiped ${bycicleHour} soatda, ${bycicleMin} daqiqada, ${bycicleSekund} sekunda masofani bosib o'tadi.`;
    carResultTime.textContent = `Moshina ${carHour} soatda, ${carMin} daqiqada, ${carSekund} sekunda masofani bosib o'tadi.`;
    planeResultTime.textContent = `Samolyot ${planeHour} soatda, ${planeMin} daqiqada, ${planeSekund} sekunda masofani bosib o'tadi.`;

    elWarn.textContent = "";
  }
});
