const Api = {
  callapi: api => {
    fetch(api,
      {
        mode: 'cors',
      })
      .then((response) => response.json())
      .then((data) => {
        const { name } = data;
        const { temp } = data.main;
        const { description, icon } = data.weather[0];
        Api.addinfo(name, temp, description, icon);
      })
      .catch(() => Api.errfun());
  },

  addinfo: (name, temp, description, icon) => {
    document.querySelector('.location').textContent = name;
    document.querySelector('.temp').textContent = (((temp - 273.15) * (9 / 5)) + 32).toFixed(2);
    document.querySelector('.deg').textContent = 'F';
    document.querySelector('.description').textContent = description;
    document.querySelector('.icon').src = `http://openweathermap.org/img/w/${icon}.png`;
  },

  errfun: () => {
    const error = document.querySelector('.error');
    error.textContent = 'Somthing Went wrong please try again!';
    error.classList.add('error');
    error.classList.add('border');
  },

  callbygeo: (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4d7121b3fcc151b2058bedb6f9a71d02`,

  callbycity: name => `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4d7121b3fcc151b2058bedb6f9a71d02`,

};

export default Api;
