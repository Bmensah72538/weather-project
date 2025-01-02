export const buildUI = {
    cleanDiv(div) {
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    },
    displayWeather(weatherData) {
        let weatherArray = [];
        let currentDiv = document.body.getElementsByClassName('current')[0];
        this.cleanDiv(currentDiv);
        // City Name
        let cityName = document.createElement('h2');
        cityName.textContent = weatherData.location.name;
        weatherArray.push(cityName)
        // Temp
        let temp = document.createElement('div');
        temp.classList.add('temp')
        let tempNumber = document.createElement('p');
        tempNumber.textContent = `Temperature: ${weatherData.current.temp_f} farenheight`;
        temp.appendChild(tempNumber);
        weatherArray.push(temp);
        // feels like
        let feelsLike = document.createElement('div');
        feelsLike.classList.add('feels-like')
        let feelsLikeText = document.createElement('p');
        feelsLikeText.textContent = `Feels like: ${weatherData.current.feelslike_c}`;
        feelsLike.appendChild(feelsLikeText);
        weatherArray.push(feelsLike);
        // Condition 
        let condition = document.createElement('div');
        condition.classList.add('condition-container');
        let conditionText = document.createElement('p');
        let conditionIcon = document.createElement('img');

        conditionText.textContent = weatherData.current.condition.text;
        conditionIcon.src = weatherData.current.condition.icon;
        conditionIcon.src = `https://${conditionIcon.src.slice(7)}`;
        console.log(typeof conditionIcon.src);

        condition.appendChild(conditionText);
        condition.appendChild(conditionIcon);

        weatherArray.push(condition);


        

        




        weatherArray.forEach((value) => {
            currentDiv.appendChild(value);
        })





    },

}