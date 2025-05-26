const apiKey = 'შენი_API_KEY_აქ_ჩასვი'; // შეცვალე შენით

function getWeather() {
  const city = document.getElementById("city").value;
  const weatherDiv = document.getElementById("weather");

  if (!city) {
    weatherDiv.innerHTML = "<p>გთხოვ შეიყვანე ქალაქის სახელი</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ka`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("ქალაქი ვერ მოიძებნა");
      }
      return response.json();
    })
    .then((data) => {
      weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡 ტემპერატურა: ${data.main.temp}°C</p>
        <p>🌤 მდგომარეობა: ${data.weather[0].description}</p>
        <p>💨 ქარის სიჩქარე: ${data.wind.speed} მ/წმ</p>
      `;
    })
    .catch((error) => {
      weatherDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
