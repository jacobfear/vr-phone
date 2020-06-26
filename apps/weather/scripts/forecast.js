//API key
const key = "Gt55OK5L1Nb0gGJtuUe4sAypByRFtMOM";

//get weather info
const getWeather = async (k) => {
    const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${k}?apikey=${key}`;
    const response = await fetch(baseURL + query); //fetch promise by combining the urls

    if (response.status !== 200) { //defining an error handler since the response will always resolve a promise even if its address to JSON is incorrect
        throw new Error("Error fetching data");
    }

    const data = await response.json(); //get the json data
    return data[0]; //return the json data
};

//get city info
const getCity = async (city) => {
    const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(baseURL + query); //fetch promise by combining the urls

    if (response.status !== 200) { //defining an error handler since the response will always resolve a promise even if its address to JSON is incorrect
        throw new Error("Error fetching data");
    }

    const data = await response.json(); //get the json data
    return data[0] //return the json data
};

// getCity("manila")
//     .then(data => {
//         return getWeather(data.Key);
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err.message));