let sacola = document.querySelector("#sacola");
let car = document.querySelector(".car");
let fechar = document.querySelector("#fechar");

sacola.onclick = () => {
    car.classList.add("active");
};

fechar.onclick = () => {
    car.classList.remove("active");
};
