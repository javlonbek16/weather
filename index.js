const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ddd7ebf0b9mshcdbc4f667108119p10ee37jsn75378c58ed2b",
    "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com",
  },
};
let container = document.querySelector(".content");
let select = document.getElementById("select");
let city = "tashkent";
let country = "uz";

function getData() {
  fetch(
    `https://aerisweather1.p.rapidapi.com/observations/${city},${country}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      container.innerHTML = `
        <ul class="weather-list">
        <li class="weather-item">
          <img src="cloud-solid.svg" alt="" />
          <h1 class="site-title">country:${country}</h1>
          <h2 class="city">city:${city}</h2>
          <p class="weather"> weather:${response.response.ob.dewpointC}</p>
          <span class="wind"> wind:${response.response.ob.windSpeedKPH} KPH</span>
      <span class="weather-sort"> weather-sort:${response.response.ob.weatherShort}</span>;
        </li>
      </ul>
        `;
    })
    .catch((err) => console.error(err));
}
getData();

select.addEventListener("change", (e) => {
  e.preventDefault();
  city = e.target.value;
  getData();
});


let newDate = document.querySelector("#newDate");

let date = Date();
newDate.innerHTML = date