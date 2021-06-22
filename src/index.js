import './css/styles.css';

const addinfo = (name, temp, description) => {
  document.querySelector('.content').innerHTML = `
    <span class="name">Country/City: ${name}</span>
    <span class="temp">temperature: ${temp}</span>
    <span class="description">Weather condition: ${description}</span>
  `;
};

const callapi = input => {
  fetch(
    'http://api.openweathermap.org/data/2.5/weather?q='.concat(input).concat('&APPID=4d7121b3fcc151b2058bedb6f9a71d02'),
    {
      mode: 'cors',
    },
  )
    .then((response) => response.json())
    .then((data) => {
      const { name } = data;
      const { temp } = data.main;
      const { description } = data.weather[0];

      addinfo(name, temp, description);
    })
    .catch((err) => console.log('error: '.join(err)));
};

const getinput = () => document.querySelector('.input').value;
document.querySelector('.submit').onclick = () => callapi(getinput());