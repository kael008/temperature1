function checkTemp() {

    const temp = parseFloat(document.getElementById('input').value);
    const outputElement = document.getElementById('output');

    if (isNaN(temp)) {
        outputElement.textContent = "Please enter a valid temperature.";
        outputElement.style.color = "red";
        return;
    }

    let message = "";
    let color = "";

    if (temp < 20) {
        message = "Low";
        color = "blue";
    } else if (temp >= 20 && temp <= 25) {
        message = "Medium";
        color = "orange";
    } else {
        message = "High";
        color = "red";
    }


    outputElement.textContent = `The temperature is: ${message}`;
    outputElement.style.color = color;
}
