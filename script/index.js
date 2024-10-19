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

updateTime();
setInterval(updateTime, 1000);
