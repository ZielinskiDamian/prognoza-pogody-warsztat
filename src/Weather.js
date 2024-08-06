import './Weather.css';
import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import WeatherItem from './WeatherItem';
import SearchWeather from './SearchWeather';

const Weather = () => {
	const [weatherData, setWeatherData] = useState([]);
	const [weatherDataAferFilter, setWeatherDataAferFilter] = useState([]);
	const getWeatherData = () => {
		axios.get('https://danepubliczne.imgw.pl/api/data/synop').then((res) => {
			setWeatherData(res.data);
			setWeatherDataAferFilter(res.data);
		});
	};

	const filterWeather = (serchWalue) => {
		const filteredWeatherData = weatherData.filter((weatherItem) =>
			weatherItem.stacja.toLowerCase().includes(serchWalue.toLowerCase())
		);
		setWeatherDataAferFilter(filteredWeatherData);
	};

	useEffect(() => {
		getWeatherData();
	}, []);
	console.log(weatherData);
	return (
		<div className='weather'>
			<h1>Prognoza pogody</h1>
			<SearchWeather filterWeather={filterWeather} />
			<div className='weatherList'>
				{weatherDataAferFilter.map((weatherItem) => {
					return (
						<WeatherItem
							weatherItem={weatherItem}
							key={weatherItem.id_stacji}
						/>
					);
				})}
			</div>
		</div>
	);
};
export default Weather;
