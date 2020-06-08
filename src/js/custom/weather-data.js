(function () {
  const cities = [{
      id: 524901,
      name: 'Москва',
    },
    {
      id: 498817,
      name: 'Санкт-Петербург',
    },
    {
      id: 501175,
      name: 'Ростов-на-Дону',
    },
    {
      id: 576116,
      name: 'Благовещенск',
    },
    {
      id: 580497,
      name: 'Астрахань',
    },
    {
      id: 578072,
      name: 'Белгород',
    },
    {
      id: 2026070,
      name: 'Брянск',
    },
    {
      id: 473247,
      name: 'Владимир',
    },
    {
      id: 472757,
      name: 'Волгоград',
    },
    {
      id: 472459,
      name: 'Вологда',
    },
    {
      id: 472045,
      name: 'Воронеж',
    },
    {
      id: 555312,
      name: 'Иваново',
    },
    {
      id: 2023469,
      name: 'Иркутск',
    },
    {
      id: 554234,
      name: 'Калининград',
    },
    {
      id: 553915,
      name: 'Калуга',
    },
    {
      id: 1503901,
      name: 'Кемерово',
    },
    {
      id: 548408,
      name: 'Киров',
    },
    {
      id: 543878,
      name: 'Кострома',
    },
    {
      id: 1501321,
      name: 'Курган',
    },
    {
      id: 538560,
      name: 'Курск',
    },
    {
      id: 535121,
      name: 'Липецк',
    },
    {
      id: 2123628,
      name: 'Магадан',
    },
    {
      id: 2124187,
      name: 'Красногорск',
    },
    {
      id: 524305,
      name: 'Мурманск',
    },
    {
      id: 520555,
      name: 'Нижний Новгород',
    },
    {
      id: 519336,
      name: 'Великий Новгород',
    },
    {
      id: 1496747,
      name: 'Новосибирск',
    },
    {
      id: 1496153,
      name: 'Омск',
    },
    {
      id: 515003,
      name: 'Оренбург',
    },
    {
      id: 515012,
      name: 'Орел',
    },
    {
      id: 519560,
      name: 'Пенза',
    },
    {
      id: 504341,
      name: 'Псков',
    },
    {
      id: 500095,
      name: 'Рязань',
    },
    {
      id: 499099,
      name: 'Самара',
    },
    {
      id: 498677,
      name: 'Саратов',
    },
    {
      id: 2119441,
      name: 'Южно-Сахалинск',
    },
    {
      id: 1486209,
      name: 'Екатеринбург',
    },
    {
      id: 491687,
      name: 'Смоленск',
    },
    {
      id: 484646,
      name: 'Тамбов',
    },
    {
      id: 480060,
      name: 'Тверь',
    },
    {
      id: 1489425,
      name: 'Томск',
    },
    {
      id: 3165115,
      name: 'Тула',
    },
    {
      id: 1488754,
      name: 'Тюмень',
    },
    {
      id: 479123,
      name: 'Ульяновск',
    },
    {
      id: 1508291,
      name: 'Челябинск',
    },
    {
      id: 468902,
      name: 'Ярославль',
    },
    {
      id: 2026643,
      name: 'Биробиджан',
    },
    {
      id: 1503772,
      name: 'Ханты-Мансийск',
    },
    {
      id: 2127202,
      name: 'Анадырь',
    },
    {
      id: 1493197,
      name: 'Салехард',
    },
    {
      id: 1510853,
      name: 'Барнаул',
    },
    {
      id: 2025339,
      name: 'Чита',
    },
    {
      id: 2122104,
      name: 'Петропавловск-Камчатский',
    },
    {
      id: 542420,
      name: 'Краснодар',
    },
    {
      id: 1502026,
      name: 'Красноярск',
    },
    {
      id: 511196,
      name: 'Пермь',
    },
    {
      id: 2013348,
      name: 'Владивосток',
    },
    {
      id: 487846,
      name: 'Ставрополь',
    },
    {
      id: 2022890,
      name: 'Хабаровск',
    },
    {
      id: 528293,
      name: 'Майкоп',
    },
    {
      id: 1506271,
      name: 'Горно-Алтайск',
    },
    {
      id: 479561,
      name: 'Уфа',
    },
    {
      id: 2014407,
      name: 'Улан-Удэ',
    },
    {
      id: 532096,
      name: 'Махачкала',
    },
    {
      id: 6313621,
      name: 'Магас',
    },
    {
      id: 563514,
      name: 'Элиста',
    },
    {
      id: 569154,
      name: 'Черкесск',
    },
    {
      id: 509820,
      name: 'Петрозаводск',
    },
    {
      id: 485239,
      name: 'Сыктывкар',
    },
    {
      id: 466806,
      name: 'Йошкар-Ола',
    },
    {
      id: 498698,
      name: 'Саранск',
    },
    {
      id: 2013159,
      name: 'Якутск',
    },
    {
      id: 473249,
      name: 'Владикавказ',
    },
    {
      id: 551487,
      name: 'Казань',
    },
    {
      id: 1500973,
      name: 'Кызыл',
    },
    {
      id: 554840,
      name: 'Ижевск',
    },
    {
      id: 1512236,
      name: 'Абакан',
    },
    {
      id: 558418,
      name: 'Грозный',
    },
    {
      id: 569696,
      name: 'Чебоксары',
    },
    {
      id: 694423,
      name: 'Севастополь',
    },
    {
      id: 693805,
      name: 'Симферополь',
    },
    {
      id: 706524,
      name: 'Керч',
    },
  ];

  // Объект с настройками
  const options = {
    APIKey: '959d949ddcff86a99efc29f96ae96b38', // APIKey сервиса погоды
    lang: 'ru', // Язык получения данных
    pressureMMHg: 0.75006375541921, // Значение 1 мм рт.ст. в паскалях
    kelvin: 273.15, // Разница между температурой по Кельвину и по Цельсию
    initialCity: cities[0].id,
  };

  // Функция проверяет response.status и возвращает результат: Promise.resolve() или Promise.reject()
  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
  // Функция возвращает JSON объект в случае успешного обращения к серверу
  function json(response) {
    return response.json();
  }

  // Функция вывода первоначальных данных в виджет (Москва)
  function initialDataShow(initialCity, APIKey, lang) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${initialCity}&appid=${APIKey}&lang=${lang}`)
      .then(status)
      .then(json)
      .then((data) => {
        showCities(data); // Передаем в функцию showCities полученные с сервера данные для последующей обработки
      })
      .catch((error) => {
        console.log(error.name);
        console.log('Ошибка: ' + error.message);
        console.log(error.response);
      });
  }
  initialDataShow(options.initialCity, options.APIKey, options.lang);

  // Функция создания массива городов на русском языке из массив cities, который она получает в качестве параметра
  function makeRussianCitiesArr(arr) {
    let citiesInRussian = []; // Создаем пустой массив
    arr.forEach((city) => {
      // Перебираем массив cities
      citiesInRussian.push(city.name); // Выбираем названия городов на русском
      citiesInRussian.sort(); // Сортируем полученный массив по алфавиту
    });
    return citiesInRussian; // Функция возвращает полученный массив городов на русском
  }

  // Функция выбора города
  function cityListMake() {
    let autocompleteInput = document.getElementById('autocomplete'); // Получаем инпут
    let citiesList = document.querySelector('.cities-list'); // Получаем список (ul), в который будут выводиться подходящие города (li) из массива
    // Отслеживаем изменения value инпута
    autocompleteInput.addEventListener('input', () => {
      citiesList.innerHTML = ''; // Скрытие списка подходящих городов при изменении value инпута
      citiesList.classList.remove('cities-list--active'); // Удаление активного класса у подходящих городов при изменении value инпута
      let currentCity = autocompleteInput.value.trim(); // Обрезаем пробелы и присваиваем value инпута в переменную currentCity
      // Проверяем, не является ли инпут пустым
      if (currentCity != '') {
        autocompleteInput.value = autocompleteInput.value[0].toUpperCase() + autocompleteInput.value.slice(1); // Делаем первую букву в инпуте заглавной
        // Перебираем массив городов, который передаем из функции makeRussianCitiesArr
        makeRussianCitiesArr(cities).forEach((elem) => {
          // Делаем value инпута и каждый элемент массива городов заглавными буквами (так как города написаны с заглавной буквы) для их сравнения и поиска подходящих
          if (currentCity.toUpperCase() == elem.substr(0, currentCity.length).toUpperCase()) {
            let li = document.createElement('li'); // Создаем тег li
            li.classList.add('cities__item'); // Присваиваем ему класс
            li.textContent = elem; // Вписываем в него название города, совпадающего по началу названия с введенным в инпут
            citiesList.classList.add('cities-list--active'); // Присваиваем списку подходящих городов активный класс для открытия выпадающего списка со скроллом
            citiesList.appendChild(li); // Прикрепляем каждый li с названеим подходящего города к списку
          }
        });
        let citiesItems = document.querySelectorAll('.cities__item'); // Выбираем коллекцию списка подходящих городов
        // Перебираем список подходящих городов
        citiesItems.forEach((city) => {
          city.addEventListener('click', () => {
            autocompleteInput.value = city.textContent; // По клику на любой город в списке получаем его название и присваиваем его в value инпута
            findChoosenCityId(autocompleteInput.value); // Передаем в функцию поиска id выбранного города value инпута
            citiesList.innerHTML = ''; // Скрытие списка после выбора города
            citiesList.classList.remove('cities-list--active'); // Удаление активного класса у подходящих в массиве городов
          });
          city.addEventListener('touch', () => {
            autocompleteInput.value = city.textContent; // По клику на любой город в списке получаем его название и присваиваем его в value инпута
            findChoosenCityId(autocompleteInput.value); // Передаем в функцию поиска id выбранного города value инпута
            citiesList.innerHTML = ''; // Скрытие списка после выбора города
            citiesList.classList.remove('cities-list--active'); // Удаление активного класса у подходящих в массиве городов
          });
        });
      }
    });
  }
  cityListMake();

  // Функция поиска id выбранного города, которая принимает параметром value инпута в функции cityListMake
  function findChoosenCityId(value) {
    let currentId;
    cities.forEach((city) => {
      // Перебираем массив
      if (city.name == value) {
        // Находим в массиве город, соответствующий выбранному в инпуте
        currentId = city.id; // Получаем его Id
        getCities(city.id, options.APIKey, options.lang); // Передаем в функцию Id выбранного в инпуте города, APTKey и язык для запроса на сервер
      }
    });
    return currentId; // Функция возвращает полученный id выбранного в инпуте города
  }

  // Функция перевода направления ветра из градусов в части света
  function windDirectionCalc(deg) {
    let windDirection;
    if ((deg) => 0 && deg < 22) {
      windDirection = 'северный';
    }
    if (deg >= 22 && deg < 45) {
      windDirection = 'северо-северо-восточный';
    }
    if (deg >= 45 && deg < 67) {
      windDirection = 'северо-восточный';
    }
    if (deg >= 67 && deg < 90) {
      windDirection = 'востоко-северо-восточный';
    }
    if (deg >= 90 && deg < 112) {
      windDirection = 'восточный';
    }
    if (deg >= 112 && deg < 135) {
      windDirection = 'востоко-юго-восточный';
    }
    if (deg >= 135 && deg < 157) {
      windDirection = 'юго-восточный';
    }
    if (deg >= 157 && deg < 180) {
      windDirection = 'юго-юго-восточный';
    }
    if (deg >= 180 && deg < 202) {
      windDirection = 'южный';
    }
    if (deg >= 202 && deg < 225) {
      windDirection = 'юго-юго-западный';
    }
    if (deg >= 225 && deg < 247) {
      windDirection = 'юго-западный';
    }
    if (deg >= 247 && deg < 270) {
      windDirection = 'западо-юго-западный';
    }
    if (deg >= 270 && deg < 292) {
      windDirection = 'западный';
    }
    if (deg >= 292 && deg < 315) {
      windDirection = 'западо-северо-западный';
    }
    if (deg >= 315 && deg < 337) {
      windDirection = 'северо-западный';
    }
    if (deg >= 337 && deg < 359) {
      windDirection = 'северо-северо-западный';
    }
    return windDirection;
  }

  // Функция запроса на сервер, которая принимает параметрами id выбранного в инпуте города, APTKey и язык
  function getCities(id, apiKey, lang) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&lang=${lang}`)
      .then(status)
      .then(json)
      .then((data) => {
        showCities(data); // Передаем в функцию showCities полученные с сервера данные для последующей обработки
      })
      .catch((error) => {
        console.log(error.name);
        console.log('Ошибка: ' + error.message);
        console.log(error.response);
      });
  }

  // Функция заполнения виджета полученными по API запросу данными
  function showCities(data) {
    document.querySelector('.widgets-wrap').innerHTML = ''; // Очищаем блок виджета
    // Перебираем массив городов cities
    cities.forEach((city) => {
      // Ищем город на английском, совпадающий с полученным по API и выводим его HTML
      if (city.name == data.name) {
        let cityName = `<div class="widget">
                      <div class="widget__city">${city.name}</div>`;
        let currentDate = `${getAndShowTimeDate()}`;
        let metaData = `<div class="widget__icon"><img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></div>
                      <div class="widget__temp">${Math.round(data.main.temp - options.kelvin)}°C</div>
                      <div class="widget-data">
                        <div class="data-block">
                          <div class="data__title">Давление (мм рт.ст.): </div>
                          <div class="data__num pressure">${Math.round(data.main.pressure * options.pressureMMHg)}</div>
                        </div>
                        <div class="data-block">
                          <div class="data__title">Влажность: </div>
                          <div class="data__num humidity">${data.main.humidity}%</div>
                        </div>
                        <div class="data-block">
                          <div class="data__title">Облачность: </div>
                          <div class="data__num cloud">${data.clouds.all}%</div>
                        </div>
                        <div class="data-block">
                          <div class="data__title">Осадки: </div>
                          <div class="data__num precipitation">${data.weather[0].description}</div>
                        </div>
                        <div class="data-block">
                          <div class="data__title">Направление ветра: </div>
                          <div class="data__num wind-direction">${windDirectionCalc(data.wind.deg)}</div>
                        </div>
                        <div class="data-block">
                          <div class="data__title">Сила ветра: </div>
                          <div class="data__num wind-speed">${Math.round(data.wind.speed)} м/с</div>
                        </div>
                      </div>
                    </div>`;
        document.querySelector('.widgets-wrap').innerHTML += cityName + currentDate + metaData;
      }
    });
  }

  // Функция получения даты и времени и вывода его в виджет
  function getAndShowTimeDate() {
    let date = new Date();
    let hours = doubleDigit(date.getHours());
    let minutes = doubleDigit(date.getMinutes());
    let day = doubleDigit(date.getDate());
    let month = date.getMonth();

    if (month == 0) month = 'января';
    if (month == 1) month = 'февраля';
    if (month == 2) month = 'марта';
    if (month == 3) month = 'апреля';
    if (month == 4) month = 'мая';
    if (month == 5) month = 'июня';
    if (month == 6) month = 'июля';
    if (month == 7) month = 'августа';
    if (month == 8) month = 'сентября';
    if (month == 9) month = 'октября';
    if (month == 10) month = 'ноября';
    if (month == 11) month = 'декабря';

    let year = doubleDigit(date.getFullYear());
    let time = `<div class="widget__date-time">
                  <div class="widget__date">${day} ${month} ${year}</div>
                  <div class="widget__time">${hours}:${minutes} (мск)</div>
                </div>`;
    return time;
  }

  // Функция добавления 0 к числам от 9 и менее
  function doubleDigit(num) {
    if (num <= 9) num = `0${num}`;
    return num;
  }
})();