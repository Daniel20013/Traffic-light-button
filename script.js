let nrOfColors = 0;
let colorTrafficLight = document.getElementById("colorTrafficLight");

function changingColors() {
    if (nrOfColors == 0) {
        colorTrafficLight.style.backgroundColor = "yellow";
        nrOfColors = 1;
    } else if (nrOfColors == 1) {
        colorTrafficLight.style.backgroundColor = "green";
        nrOfColors = -1;
    } else {
        colorTrafficLight.style.backgroundColor = "red";
        nrOfColors = 0;
    }
}
