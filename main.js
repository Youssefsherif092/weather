let input = document.getElementById("input")
let cityTitle = document.querySelector(".main-title");
let degree = document.querySelector(".main-text");
let cardGroup = document.querySelector(".card-group");
let icon = document.querySelector(".icon");
let stat = document.querySelector(".status");
let cardTwo = document.querySelector(".card2");
let cardThree = document.querySelector(".card3");
let header = document.querySelector(".card-header")
let box = ``;

async function getData(a) {
    let url = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e8c5a356ce344fcfbff194219233012&q=${a}&days=3`)
    let res = await url.json();
    let d = new Date();
    header.innerHTML = d.toDateString();
    cityTitle.innerHTML = a;
    degree.innerHTML = res.current.temp_c + " C";
    icon.innerHTML = `<img src="https:${res.current.condition.icon}">`;
    stat.innerHTML = `${res.current.condition.text}`

    // NEXT!!
    addCards(a)
}

async function addCards(a){
  let url = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e8c5a356ce344fcfbff194219233012&q=${a}&days=3`)
  let res = await url.json();
  let data1 = new Date(res.forecast.forecastday[1].date);
  let data2 = new Date(res.forecast.forecastday[2].date);
  cardTwo.innerHTML =  `
  <div class="card-header">${data1.toDateString()}</div>
  <div class="card-body">
    <h5 class="main-title">

    ${res.forecast.forecastday[1].day.maxtemp_c} C
    </h5>
    <p class="main-text">${res.forecast.forecastday[1].day.mintemp_c} C</p>
    <div class="icon">
    <img src="https:${res.forecast.forecastday[1].day.condition.icon}">
    </div>
    <div class="status text-info">
    ${res.forecast.forecastday[1].day.condition.text}
    </div>

  </div>
`

cardThree.innerHTML =  `
<div class="card-header">${data2.toDateString()}</div>
<div class="card-body">
  <h5 class="main-title">
   
  ${res.forecast.forecastday[2].day.maxtemp_c} C
  </h5>
  <p class="main-text">${res.forecast.forecastday[2].day.mintemp_c} C</p>
  <div class="icon">
  <img src="https:${res.forecast.forecastday[2].day.condition.icon}">
  </div>
  <div class="status text-info">
  ${res.forecast.forecastday[2].day.condition.text}
  </div>

</div>
`

}

async function autoComplete(that){
  let url = await fetch(`https://api.weatherapi.com/v1/search.json?key=e8c5a356ce344fcfbff194219233012&q=${that.value}`)
  let res = await url.json();
  getData(res[0].name)
}





getData("Cairo")