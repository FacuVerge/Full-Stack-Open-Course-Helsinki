import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='

const getWeather = (countrie, appid) => {
	const request = axios.get(`${baseUrl}${countrie}&APPID=${appid}`)
	return request.then(response => response.data)
}

export default {
	getWeather: getWeather
} 