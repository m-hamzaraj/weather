let btn_search = document.querySelector(".btn_search");
let display_info = document.querySelector(".display_info");
let temp_data = document.querySelector(".temp-data");
let feel_data = document.querySelector(".feel-data");
let wind_data = document.querySelector(".wind-data");
let degree_data = document.querySelector(".degree-data");
let cloud_data = document.querySelector(".cloud-data");
let humidity_data = document.querySelector(".humidity-data");
let sunny_data = document.querySelector(".sunny-data");
let precip_data = document.querySelector(".precip-data");
let pressure_data = document.querySelector(".pressure-data");
let heat_data = document.querySelector(".heat-data");
function search() {
  let date_time = document.querySelector(".date_time");
  const key = "e4383b4f85954ce795e93154251906";
  const serachinput = document.querySelector("#search");
  const country = serachinput.value.trim();
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${country}`;
  const option = {
    method: "GET",
  };
  fetch(url, option)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      date_time.innerHTML = `Date/Time:${data.location.localtime}`;
      display_info.innerHTML = `Country:${data.location.country}\tCity:${data.location.name}`;
      temp_data.innerHTML = ` Temperature:${data.current.temp_c}&deg;C`;
      feel_data.innerHTML = `Feel-Like:${data.current.feelslike_c}&deg;C`;
      wind_data.innerHTML = `Wind-Kph:${data.current.wind_kph}Kph`;
      degree_data.innerHTML = `Wind-Degree:${data.current.wind_degree}`;
      cloud_data.innerHTML = data.current.cloud;
      humidity_data.innerHTML = data.current.humidity;
      sunny_data.innerHTML = data.current.condition.text;
      precip_data.innerHTML = data.current.precip_in;
      pressure_data.innerHTML = data.current.pressure_in;
      heat_data.innerHTML = data.current.heatindex_c;
    })
    .catch((error) => {
      console.log("Error");
    });
}
btn_search.addEventListener("click", search);
