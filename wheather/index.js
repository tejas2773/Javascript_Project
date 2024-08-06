const API_key="14306dba3990a08bc7b8d5721d332207"

const form=document.querySelector('form')
const search=document.querySelector('#search')
const city=document.querySelector('.city')




form.addEventListener("submit",(e)=>{

    console.log(search.value)                 // search.value=gives value of search id
    e.preventDefault()                       // it prevents from refresh page
    getwheather(search.value)
})

const getwheather = async (city) => {
    const URL = `http://api.weatherstack.com/current?access_key=${API_key}&query=${city}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    showWheather(data)
}


const showWheather=(data)=>{
    city.innerHTML=
    `
                <p>${data.location.country}</p>
                <p>${data.location.name}</p>
                <p>${data.current.temperature}°C</p>
                <p>${data.current.weather_descriptions}</p>
                <p>${data.location.localtime}</p>

    `
    
}