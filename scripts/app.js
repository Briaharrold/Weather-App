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
let userData = usersInput.value;


function ApiCall(){

fetch(`https://history.openweathermap.org/data/3.0/history/timemachine?lat=51.51&lon=-0.13&dt=606348800&appid=${apiKey}`)
.then((response)=>{
       
    return response.json();
})
.then((data=> insertDay.innerHTML = data.dt))


}

btn.addEventListener('click',function(e){
    let t = new Date();
document.getElementById('date').innerText = t.toDateString();
ApiCall2()

});
async function ApiCall2(){
    const promise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userData}&appid=${apiKey}&units=imperial`);
    const data = await promise.json();
    insertName.innerHTML = data.name;
     insertMax.innerHTML =  Math.floor(data.main.temp_max)+ "°";
     insertMin.innerHTML =  Math.floor(data.main.temp_min)+ "°";
     insertHere.innerHTML =  Math.floor(data.main.feels_like)+ "°";
     insertType.innerHTML = " Type " + data.weather[0].main;
}

//navigator.geolocation returns a gelocation object lat and long
// getCurrentPosition() Allows if the user allows us to access their loc run first functio if not run error function
navigator.geolocation.getCurrentPosition(success, errorFunc);
{
    coords:{
        latitude: 32.1234;
        longitude:13.1234;
    }
}
async function success(position){
    console.log("Our latitude " + position.coords.latitude);
   console.log("Our longitude "+ position.coords.longitude);

     lat = position.coords.latitude;
     long = position.coords.longitude;
    console.log(long) ;
    console.log(lat) ;
    
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`);
    const data = await promise.json();
     insertName.innerHTML = data.name;
     insertMax.innerHTML =  Math.floor(data.main.temp_max)+ "°";
     insertMin.innerHTML =  Math.floor(data.main.temp_min)+ "°";
     insertHere.innerHTML =  Math.floor(data.main.feels_like)+ "°";
     insertType.innerHTML = " Type " + data.weather[0].main;

     //search bar data

    }
//    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`)
   
//      .then((response)=>{
//            //using JSON method to parse into json data
//            return response.json();
//        })
//        // .then((data=>  console.log(data[0])))
   
//        //This is getting the data from the api  and inserting the degrees onto the html page
//        //The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
//        .then((data => insertHere.innerHTML =  Math.floor(data.main.feels_like)+ "°"))
       
   
   
function errorFunc(error){
console.log(error.message);
}



