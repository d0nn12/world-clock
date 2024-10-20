function updateTime() {
  let peruElement = document.querySelector("#peru");
  let peruDateElement = peruElement.querySelector(".date");
  let peruTimeElement = peruElement.querySelector(".big-time");
  let peruTime = moment().tz("America/Lima");

  peruDateElement.innerHTML = peruTime.format("MMMM DD, YYYY");
  peruTimeElement.innerHTML = `${peruTime.format(
    "h:mm:ss[<small>]A[</small>]"
  )}`;

  let stockholmElement = document.querySelector("#stockholm");
  let stockholmDateElement = stockholmElement.querySelector(".date");
  let stockholmTimeElement = stockholmElement.querySelector(".big-time");
  let stockholmTime = moment().tz("Europe/Stockholm");

  stockholmDateElement.innerHTML = stockholmTime.format("MMMM DD, YYYY");
  stockholmTimeElement.innerHTML = `${stockholmTime.format(
    "h:mm:ss[<small>]A[</small>]"
  )}`;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone === moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city-container">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM DD, YYYY")}</div>
          </div>
          <div class="big-time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
    `;
}

updateTime();

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
