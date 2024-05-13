const loadCountryAPI =() =>{
    //fetch url of reset country from website
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
//displaying all countries
const displayCountries = countries =>{

const countriesHTML = countries.map(country => getCountry(country));
//displaying div to html
const container = document.getElementById('countries');
container.innerHTML=countriesHTML.join(' ');
}
//get data and set  it in html 
const getCountry =(country) =>{
    console.log(country);
    return `
    <div class="country-div">
    <h2>${country.name.common} </h2>
    <img src="${country.flags.png}">
    <h4> population:${country.population} </h4>
    <h4> Regoin:${country.region} </h4>
    <h4> Capital:${country.capital} </h4>
    <h4>Location:
    <a href="${country.maps.googleMaps}"> Here</a>
    </h4>   


    </div>
    `
}
// call the function to get output in console
loadCountryAPI();