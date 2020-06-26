const cityForm = document.querySelector("form"); //get the form
const card = document.querySelector(".card"); //get the card div
const details = document.querySelector(".details"); //get the details div
const time = document.querySelector("img.time"); //day or night
const icon = document.querySelector(".icon img"); //get the icon img

cityForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();


    //update UI
    updateCity(city) //invoke the update city function
        .then(data => { //access the promise resolved data
            updateUI(data); //pass data to the updateUI function
        })
        .catch(err => { //access the promise error message
            console.log(err.message); 
            showUIerror();
        });; 
});

//get info from the forecast script module
const updateCity = async (city) => {
    const cityInfo = await getCity(city); //call this function from the forecase.js module and get the info about the queried city
    const weather = await getWeather(cityInfo.Key); //call this function from the forecase.js module and get the city key

    return {  //return this promise object 
        cityInfo: cityInfo,
        weather: weather
    };
};

//Update UI of the app
const updateUI = (data) => {
    //these 2 vars will help us type lesser code
    const cityInfo = data.cityInfo; //get the data from the updateCity cityInfo const
    const weather = data.weather; ////get the data from the updateCity weather const

    //update div.details html template by accessing the API JSON obj values
    details.innerHTML = `
            <h5 class="my-3">${cityInfo.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
            </div>
    `;

    //update icon and day and night imgs
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    let timeSrc = weather.IsDayTime ? "img/day.svg": "img/night.svg";
    
    icon.setAttribute("src", iconSrc);

    time.setAttribute("src", timeSrc);

    //show the card
    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }
};

//update UI if error
const showUIerror = () => {
    const errorMessage = "No location found."; //bug or probably the max limit request of 50 from accuweather API
    alert(errorMessage);
};
