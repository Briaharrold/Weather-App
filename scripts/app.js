import{apiKey} from "./environment.js"
let usersInput = document.getElementById("usersInput");
let btn = document.getElementById("btn");
let insertHere = document.getElementById("Insert Here");
let insertMin = document.getElementById("Insert Min");
let insertMax = document.getElementById("Insert Max");
let insertName = document.getElementById("Insert Name");
let insertDay = document.getElementById("Insert Day");
let insertType = document.getElementById("Insert Type");
let lat;
let long;
let userData = usersInput.value;
let starBtn = document.getElementById("starBtn");

let maxT1 = document.getElementById("maxT1");
let maxT2 = document.getElementById("maxT2");
// let maxT3 = document.getelementById('maxT3');
// let maxT4 = document.getElementById('maxT4');
// let maxTemp5 = document. getElementById('maxT5');
let minT1 = document.getElementById("minT1");
let minT2 = document.getElementById("minT2");
// let minTemp3 = document.getelementById('minT3');
// let minTemp4 = document.getelementById('minT4');
// let minTemp5 = document.getElementById('minT5');

// ;;;;;;;;;;

function ApiCall(){

fetch(`https://history.openweathermap.org/data/3.0/history/timemachine?lat=51.51&lon=-0.13&dt=606348800&appid=${apiKey}`)
.then((response)=>{
       
    return response.json();
})
.then((data=> insertDay.innerHTML = data.dt))


}


btn.addEventListener('click',function(e){
    
ApiCall2();
// ApiC();

});
// async function ApiC(){
//     const promise = fetch (`https://api.openweathermap.org/data/2.5/weather?zip=${userData},us&appid=${apiKey}`)
//     const data = await promise.json();
//     insertName.innerText = data.name;
//     insertMax.innerText =  Math.floor(data.main.temp_max)+ "°";
//     insertMin.innerText =  Math.floor(data.main.temp_min)+ "°";
//     insertHere.innerText =  Math.floor(data.main.feels_like)+ "°";
//     // insertType.innerText = " Type " + data.weather[0].main;

// }
async function ApiCall2(){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userData}&appid=${apiKey}&units=imperial`);
    const data = await promise.json();
    console.log(userData);
    insertName.innerText = data.name;
     insertMax.innerText =  Math.floor(data.main.temp_max)+ "°";
     insertMin.innerText =  Math.floor(data.main.temp_min)+ "°";
     insertHere.innerText =  Math.floor(data.main.feels_like)+ "°";
      insertType.innerText = " Type " + data.weather[0].main;
      
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

//      maxT1.innerHTML = Math.floor(data.list[1].main.temp_max );
// minT1.innerHTML = Math.floor(data.list[1].main.temp_min);
// maxT2.innerHTML = Math.floor(data.list[9].main.temp_max);
// minT2.innerHTML= Math.floor(data.list[9].main.temp_min);

//      const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let d = new Date("2023-12-7");
// let day = days[d.getDay()];
//  day = document.getElementById("Day").innerHTML;

     //search bar data
     




// maxT3.innerText = weather5Day. list[17].main.temp_max
// minT.innerText = weathersDay.last.main.temp_min
// maxT4.innerText = weatherSDay._ist_25.main.temp_max
// minT4. innerText = weather5Day. list[25].main.temp_min

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



