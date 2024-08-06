import axios from 'axios';

const key = '32e3d44111024139a3442037241207'; 

const weatherApi = par =>
  `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${par.cityName}&days=${par.days}&aqi=no&alerts=no`;

const locationApi = par =>
`https://api.weatherapi.com/v1/search.json?key=32e3d44111024139a3442037241207 &q=${par.cityName}`

const apiCall = async url => {
  const option = {
    method: 'GET',
    url: url,
  };
  try {
    const response = await axios.request(option);
    console.log('response', response)
    return response.data; 
  } catch (error) {
    console.log('error..................', error);
    return null;
  }
};

export const fetchWeatherApi = par => {
  return apiCall(weatherApi(par));
};

export const fetchLocationApi = par => {
  return apiCall(locationApi(par));
};
