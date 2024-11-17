function convertTemperature() {
    let number = document.getElementById("input").value;
    let from = document.getElementById("select").value;
    let fromto = document.getElementById("selectTo").value;
    if (from == "C" && fromto == "F") {
        let result = (number * 9 / 5) + 32;
        document.getElementById("displayTempreture").innerHTML = (result + "&deg;C")
    } else if (from == "F" && fromto == "C") {
        result = ((number - 32) * 5 / 9).toFixed(1);
        document.getElementById("displayTempreture").innerHTML = (result + "&deg;F")
    } else {
        document.getElementById("displayTempreture").innerHTML = (number)
    }
}
