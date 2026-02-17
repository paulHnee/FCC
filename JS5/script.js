// ================================
// Weather App
// ================================

const citySelect = document.getElementById("city-select");
const weatherButton = document.getElementById("get-weather-btn");

const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationName = document.getElementById("location");

async function getWeather(city) {
	try {
		const response = await fetch(
			`https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(
				city
			)}`
		);

		if (!response.ok) {
			throw new Error("Weather request failed.");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return undefined;
	}
}

function getValue(value, suffix) {
	if (value === undefined || value === null) {
		return "N/A";
	}

	if (suffix) {
		return `${value}${suffix}`;
	}

	return `${value}`;
}

async function showWeather(city) {
	const data = await getWeather(city);

	if (!data) {
		alert("Something went wrong, please try again later.");
		return;
	}

	const weather = data.weather && data.weather[0] ? data.weather[0] : {};
	const main = data.main || {};
	const windData = data.wind || {};

	weatherIcon.src = weather.icon || "";
	weatherIcon.alt = weather.description || "N/A";

	weatherMain.textContent = getValue(weather.main);
	locationName.textContent = getValue(data.name);
	mainTemperature.textContent = getValue(main.temp, " C");
	feelsLike.textContent = getValue(main.feels_like, " C");
	humidity.textContent = getValue(main.humidity, " %");
	wind.textContent = getValue(windData.speed, " m/s");
	windGust.textContent = getValue(windData.gust, " m/s");
}

weatherButton.addEventListener("click", () => {
	const city = citySelect.value;

	if (!city) {
		return;
	}

	showWeather(city);
});
