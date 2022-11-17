const Location = document.getElementById('Location');
const Country = document.getElementById('Country');
const Timezone = document.getElementById('Timezone')
const cityName = document.getElementById('cityname');
const Temp = document.getElementById('temp');
const Humidity = document.getElementById('humidity');
const maxTemp = document.getElementById('maxtemp');
const minTemp = document.getElementById('mintemp');
const searchBtn = document.getElementById('search');
const Condition = document.getElementById('condition');
const date = new Date();
const Datey = document.getElementById('date1');


const getWeather1 = async (city) => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cba7954da9msh471cabcfe861514p1362f1jsn48155097017b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then(response => {
  Temp.innerText = `Temperature: ${response.temp}°C`;
  Humidity.innerText = `Humidity: ${response.humidity}%rh`;
  maxTemp.innerText = `Maximium Temperature: ${response.max_temp}°C`;
  minTemp.innerText = `Minimium Temperature: ${response.min_temp}°C`;
  
})
	.catch(err => console.error(err));  
}

const getWeather = async (city) => {
  const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cba7954da9msh471cabcfe861514p1362f1jsn48155097017b',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options2)
	.then(response => response.json())
	.then(response => {
  Condition.innerText = `Condition: ${response.current_observation.condition.text.toUpperCase()}`
  Location.innerText = `Location: ${city.toUpperCase()}`;
  Country.innerText = `Country: ${response.location.country.toUpperCase()}`     
})  
	.catch(err => console.error(err));
}

const getTimeZone = async (city) => {
  let timezone = '';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cba7954da9msh471cabcfe861514p1362f1jsn48155097017b',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options2)
	.then(response => response.json())
	.then(response => {
  Timezone.innerText = response.location.timezone_id;
  return response.location.timezone_id;
}) 
	.catch(err => console.error(err));  
  
}

const getDate = async (timezone) => {
  console.log('Second',timezone)
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cba7954da9msh471cabcfe861514p1362f1jsn48155097017b',
		'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
	}
};

fetch(`https://world-time2.p.rapidapi.com/timezone/${timezone}`, options)
	.then(response => response.json())
	.then(response => {
  console.log(response)
  Datey.innerText = response.datetime
})
	.catch(err => console.error(err));
}

const getCity = () => {  
  getWeather1(cityName.value);
  getWeather(cityName.value);
  getTimeZone(cityName.value)
  getDate(Timezone.value);
  document.getElementById('date').innerText = date;  
}