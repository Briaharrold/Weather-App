import{apiKey} from "./environment.js"
let usersInput = document.getElementById("usersInput");
let btn = document.getElementById("btn");
let insertHere = document.getElementById("Insert Here");
let insertMin = document.getElementById("Insert Min");
let insertMax = document.getElementById("Insert Max");
let insertName = document.getElementById("Insert Name");
let insertDay = document.getElementById("Insert Day");
let insertType = document.getElementById("Insert Type");
const d = Date();
const weekDay=["Sunday","Monday","Tuesday","Wednesday",,"Thursday","Friday","Saturday" ];
let lat;
let long;

function ApiCall(){
    //We are goin to initaiate the fetcher request from our random wor api
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=a843da14ff8561f5d288b3a4dc783df6')

    
    fetch(`https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=${lat}&lon=${long}&date=2023-04-12&appid=${apiKey}`)
    .then((response)=>{
      //using JSON method to parse into json data
      return response.json();
  })
  .then((data => date2.innerHTML =  data.date))
  
    let userData = usersInput.value;
    console.log(userData);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userData}&appid=${apiKey}&units=imperial`)

    .then((response)=>{
        //using JSON method to parse into json data
        return response.json();
    })

    .then((data => insertHere.innerHTML =  Math.floor(data.main.feels_like)+ "°"))
    
  

    //GETS LOWEST DEGREE
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userData}&appid=${apiKey}&units=imperial`)
    .then((response)=>{
        //using JSON method to parse into json data
        return response.json();
    })
    .then((data=> insertMin.innerHTML =  " Min." + Math.floor(data.main.temp_min)+ "°"))
    //GETS HIGHEST DEGREE
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userData}&appid=${apiKey}&units=imperial`)
    .then((response)=>{
       
        return response.json();
    })
    .then((data=> insertMax.innerHTML = " Max." + Math.floor(data.main.temp_max)+ "°"))
//GETS NAME OF CITY
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userData}&appid=${apiKey}&units=imperial`)
    .then((response)=>{
       
        return response.json();
    })
    .then((data=> insertName.innerHTML = data.name))

    // fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${apiKey}&units=imperial`)
    // .then((response)=>{
       
    //     return response.json();
    // })
    // .then((data=> insertDay.innerHTML = data.list[6].dt_txt))
fetch(`https://history.openweathermap.org/data/3.0/history/timemachine?lat=51.51&lon=-0.13&dt=606348800&appid=${apiKey}`)
.then((response)=>{
       
    return response.json();
})
.then((data=> insertDay.innerHTML = data.dt))


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=stockton&appid=${apiKey}&units=imperial`)
        .then((response) => {
            return response.json();
        })
        .then((data => insertType.innerHTML = " Type " + data.weather[0].main))
     
 
}

btn.addEventListener('click',function(e){
    let t = new Date();
document.getElementById('date').innerText = t.toDateString();
//on click we are going to make data pop up based on what city user picks
ApiCall();
});
//navigator.geolocation returns a gelocation object lat and long
// getCurrentPosition() Allows if the user allows us to access their loc run first functio if not run error function
navigator.geolocation.getCurrentPosition(success, errorFunc);
{
    coords:{
        latitude: 32.1234;
        longitude:13.1234;
    }
}
function success(position){
    console.log("Our latitude " + position.coords.latitude);
   console.log("Our longitude "+ position.coords.longitude);
   let gotPosition = function (position) {
     lat = position.coords.latitude;
     long = position.coords.longitude;
    console.log(long) ;
    console.log(lat) ;
   }
   
   fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`)
   
     .then((response)=>{
           //using JSON method to parse into json data
           return response.json();
       })
       // .then((data=>  console.log(data[0])))
   
       //This is getting the data from the api  and inserting the degrees onto the html page
       //The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
       .then((data => insertHere.innerHTML =  Math.floor(data.main.feels_like)+ "°"))
       
   }
   
function errorFunc(error){
console.log(error.message);
}



