const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('static'));

app.get('/cities/:cityId', (req, res) => {
  const forecast = forecasts.filter(forec => forec.city == req.params.cityId)[0];
  console.log(forecast);
  res.render('detailed', {forecast: forecast});
});

app.get('/', (req, res) => {
  res.render('dashboard', {forecasts: forecasts});
})

app.listen(3000, () => {
  console.log('server is lisening on 3000');
});

////////DATA//////////
const forecasts = [
  {
    city: 'Seattle',
    location: 'Washington, United States',
    weather: [
      { temp: 11, icon: 'cloudy', message: 'Complete Grey' },
      { temp: 11, icon: 'cloudy', message: 'Just stay in bed.' },
      { temp: 13, icon: 'cloudy', message: 'Meh...' },
      { temp: 12, icon: 'cloudy', message: 'Still meh...' },
      { temp: 13, icon: 'partly_cloudy', message: 'Not too sunny.' },
    ],
  },
  {
    city: 'Miami',
    location: 'Florida, United States',
    weather: [
      { temp: 33, icon: 'sunny', message: 'Hot.' },
      { temp: 35, icon: 'sunny', message: 'Too hot!' },
      { temp: 34, icon: 'sunny', message: 'Sunny.' },
      { temp: 34, icon: 'sunny', message: 'Beach time!' },
      { temp: 35, icon: 'sunny', message: 'Here comes the sun.' },
    ],
  },
  {
    city: 'Barcelona',
    location: 'Spain',
    weather: [
      { temp: 19, icon: 'sunny', message: 'Sunny.' },
      { temp: 15, icon: 'partly_cloudy', message: 'Not too sunny.' },
      { temp: 17, icon: 'sunny', message: 'So far so good.' },
      { temp: 16, icon: 'rainy', message: 'Rihanna - Umbrella' },
      { temp: 18, icon: 'sunny', message: 'Here comes the sun.' },
    ],
  },
  {
    city: 'London',
    location: 'United Kingdom',
    weather: [
      { temp: 4, icon: 'snowy', message: 'Go home winter.' },
      { temp: 7, icon: 'rainy', message: 'Do you have an umbrella?' },
      { temp: 10, icon: 'rainy', message: 'It\'s rainy.' },
      { temp: 9, icon: 'rainy', message: 'Meh...' },
      { temp: 11, icon: 'rainy', message: 'Meh... Again.' },
    ],
  },
  {
    city: 'Budapest',
    location: 'Hungary',
    weather: [
      { temp: 12, icon: 'partly_cloudy', message: 'It\'s cloudy.' },
      { temp: 16, icon: 'rainy', message: 'Sooo... Wet.' },
      { temp: 18, icon: 'partly_cloudy', message: 'Here comes the sun.' },
      { temp: 16, icon: 'partly_cloudy', message: 'Not too sunny.' },
      { temp: 19, icon: 'partly_cloudy', message: 'So far so good.' },
    ],
  },
];