import './css/styles.css';
import Api from './js/api';
import Convert from './js/convert';

let lat;
let long;

(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      lat = pos.coords.latitude;
      long = pos.coords.longitude;
    });
  }
})();

const x = document.getElementById('demo');

x.onclick = () => {
  const link = Api.callbygeo(lat, long);
  Api.callapi(link);
};

const degree = document.querySelector('.deg');
degree.addEventListener('click', () => {
  const temp = document.querySelector('.temp');
  let changetemp = temp.textContent;
  const degtext = degree.textContent;
  if (degtext === 'F') {
    degree.textContent = 'C';
    changetemp = parseFloat(changetemp);
    temp.textContent = Convert.FtoC(changetemp);
  } else if (degtext === 'C') {
    degree.textContent = 'F';
    temp.textContent = Convert.CtoF(changetemp);
  }
});

document.querySelector('.submit').addEventListener('click', e => {
  e.preventDefault();
  const name = document.querySelector('.name');
  const link = Api.callbycity(name.value);
  Api.callapi(link);
  name.value = '';
});
