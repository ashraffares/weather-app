import './css/styles.css';

const x = document.getElementById('demo');

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=4d7121b3fcc151b2058bedb6f9a71d02`;
      callapi(api);
    });
  }
};

x.onclick = () => getLocation();

const addinfo = (name, temp, description) => {
  document.querySelector('.name').textContent = name;
  document.querySelector('.temp').textContent = (((temp - 273.15) * (9 / 5)) + 32).toFixed(2);
  document.querySelector('.deg').textContent = 'F';
  document.querySelector('.description').textContent = description;
};

const errfun = () => {
  const error = document.querySelector('.error');
  error.textContent = 'Somthing Went wrong please try again!';
  error.classList.add('error');
  error.classList.add('border');
};

const callapi = api => {
  fetch(api,
    {
      mode: 'cors',
    })
    .then((response) => response.json())
    .then((data) => {
      const { name } = data;
      const { temp } = data.main;
      const { description } = data.weather[0];
      addinfo(name, temp, description);
    })
    .catch(() => errfun());
};

const getinput = document.querySelector('.input');
document.querySelector('.submit').addEventListener('click', e => {
  e.preventDefault();
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${getinput.value}&appid=4d7121b3fcc151b2058bedb6f9a71d02`;
  callapi(api);
  getinput.value = '';
});