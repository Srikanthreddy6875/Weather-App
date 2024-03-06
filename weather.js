document.addEventListener("DOMContentLoaded", function() {
    let inputEle = document.getElementById("location-input");
    let tempEle = document.getElementById("temp-value");
    let locEle = document.getElementById("location");
    let weatherdescEle = document.getElementById("weather-desc");
    let iconEle = document.getElementById("icon");
    let apiKey = "8e608baa4ab39354c7929df9f4571490";

    document.getElementById("submitBtn").onclick = function() {
        if (inputEle.value == '') {
            alert("Please enter some location");
        } else {
            let loc = inputEle.value; // value assign to a varible
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const { name } = data; //location
                    const { temp } = data.main; // temprature
                    const { description, icon } = data.weather[0];

                    tempEle.innerText = Math.floor(temp - 273.15); // Convert temperature from Kelvin to Celsius
                    locEle.innerText = name;
                    weatherdescEle.innerText = description;
                    iconEle.src = `https://openweathermap.org/img/wn/${icon}.png`;
                })
                .catch(() => {
                    alert("Enter a valid location");
                });

            inputEle.value = "";
        }
    };
});
