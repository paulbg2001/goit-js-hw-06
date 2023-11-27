let counterValue = 0;

const buton1 = document.querySelector('[data-action= "decrement"]');
const buton2 = document.querySelector('[data-action="increment"]');

buton1.addEventListener("click", () => {
    counterValue -= 1;
    document.getElementById("value").textContent = counterValue;
})
buton2.addEventListener("click", () => {
    counterValue++;
    document.getElementById("value").textContent = counterValue;
})