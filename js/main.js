const API_KEY = "9f85e40b06924f21a08135524230404";

  const header = document.querySelector('.header')
  const form = document.querySelector('#form');
  const input = document.querySelector('#input');
  const btn = document.querySelector('#btn');


function onFetch(){
  
}

function removeCard(){
  const prevCard = document.querySelector('.card')
        if (prevCard) prevCard.remove();
}


  const handleClick = (e) => {
    // console.log(e);
  };

  btn.addEventListener("click", handleClick);

  form.addEventListener("submit", handleSubmit);
  
  function handleSubmit(event) {
    
    event.preventDefault();

    let city;

    city = input.value.trim();

    const {username} = event.currentTarget;
  
    if (username.value === "") {
      return alert("Please fill city in the field!");
    }
  

    const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    const fetchWeather = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        
        // console.log(data);


      if (data.error) {

        removeCard()

        function renderErrorCard(){

          const html = `<div class="card">${data.error.message}</div>`
       
          header.insertAdjacentHTML("afterend", html);
        }
        renderErrorCard()
       
      }
      else {
  
        removeCard()

        function renderNewCard(){

        const html = `<div class="card"> 
        <div class="city">${data.location.name} &nbsp<span class="country">${data.location.country}</span></div>
        <div class="temperature"> ${data.current.temp_c} &nbsp &#176C</div>
        <div class="weather">${data.current.condition.text}</div>
        <div class="picture"><img src="${data.current.condition.icon}" alt="image"> </img></div>
        
      </div>`
       
      header.insertAdjacentHTML("afterend", html);
        }
        renderNewCard()

      }
    }
      catch (error) {
   
        console.log(error.message);
        
      }
    };
   
    fetchWeather();


}
