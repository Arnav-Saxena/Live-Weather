const API_KEY = `e31ae81f538d69c1803b997ab8940545`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].description);

    setInnerText('humidity', 'Humidity: ' + temperature.main.humidity + '%');
    setInnerText('wind', 'Wind Speed: ' + temperature.wind.speed + ' m/s');

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}


document.addEventListener('DOMContentLoaded', (event) => {
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            cancelIcon: {
                enabled: true
            },
            classes: 'shadow-md bg-purple-dark',
            scrollTo: { behavior: 'smooth', block: 'center' }
        }
    });

    tour.addStep({
        id: 'search',
        text: 'Enter a location here to get the weather information.',
        attachTo: {
            element: '#city-name',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'search-button',
        text: 'Click this button to search for the weather.',
        attachTo: {
            element: '.btn',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'weather-status',
        text: 'Weather details will be displayed here.',
        attachTo: {
            element: '.weather-status',
            on: 'top'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'linktree',
        text: 'This is my Quine, LeetCode and GitHub via LinkTree.',
        attachTo: {
            element: '.nav-links a',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Finish',
                action: tour.complete
            }
        ]
    });

    tour.start();
});
