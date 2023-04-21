const colors = ["yellow", "green", "red"];
let currentColorIndex = 0;
let colorTrafficLight = document.getElementById("colorTrafficLight");

function changingColors() {
    colorTrafficLight.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}
