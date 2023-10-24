const getCurrentWeatherApi = (lat, lon, Key) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Key}`
    return (
        fetch(url)
        .then((response) => response.json())
        .then((data)=> console.log(data))
        .catch((error) => {
            console.error(`Error Api`, error);
            return null;
        })
    )
}

export { getCurrentWeatherApi }