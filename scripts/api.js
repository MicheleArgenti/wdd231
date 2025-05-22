const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = "49.750782109849354";
const lon = "6.638089749177551";
const api_key = "675ecc2030d2eaac52e3e1688397dfcb";
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + api_key;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// To Complete
function displayResults(data) {
    currentTemp.innerHTML = `${data._____}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
    let desc = data.weather[0].______;
    weatherIcon.setAttribute('___', _____);
    weatherIcon.setAttribute('___', _____);
    captionDesc.textContent = `${desc}`;
}

apiFetch();