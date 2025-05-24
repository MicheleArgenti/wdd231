const lat = "16.76686102085533";
const lon = "-3.0032591355779075";
const api_key = "675ecc2030d2eaac52e3e1688397dfcb";
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + api_key;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            DisplayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function DisplayData(data) {
    const iconsrc = 'https://openweathermap.org/img/w/' + data['list'][0]['weather'][0]['icon'] + '.png';
    document.getElementById('current-weather').src = iconsrc;
    document.getElementById('current-weather').alt = data['list'][0]['weather'][0]['main'];
    document.getElementById('today').textContent = data['list'][0]['main']['temp'];
    document.getElementById('tomorrow').textContent = data['list'][1]['main']['temp'];
    document.getElementById('after-tomorrow').textContent = data['list'][2]['main']['temp'];
    document.getElementById('weather-info').innerHTML = `
    <span>${data['list'][0]['main']['temp']}° C</span><br>
    <span>${data['list'][0]['weather'][0]['main']}<span><br>
    <span>High: ${data['list'][0]['main']['temp_max']}</span><br>
    <span>Low: ${data['list'][0]['main']['temp_min']}</span><br>
    <span>Humidity: ${data['list'][0]['main']['humidity']}<span>
    `;
}

apiFetch();