


  let city=document.getElementById('city');
  let date=document.getElementById('date');
  let date1=document.getElementById('date1');
  let date2=document.getElementById('date2');
  let date3=document.getElementById('date3');
  let date4=document.getElementById('date4');
  let date5=document.getElementById('date5');
  let date6=document.getElementById('date6');
 
  let temp=document.getElementById('temp');
  let temp1=document.getElementById('temp1');
  let temp2=document.getElementById('temp2');
  let temp3=document.getElementById('temp3');
  let temp4=document.getElementById('temp4');
  let temp5=document.getElementById('temp5');
  let temp6=document.getElementById('temp6');
 
  let weatherr=document.getElementById('weather');
  let weatherr1=document.getElementById('weather1');
  let weatherr2=document.getElementById('weather2');
  let weatherr3=document.getElementById('weather3');
  let weatherr4=document.getElementById('weather4');
  let weatherr5=document.getElementById('weather5');
 let weatherr6=document.getElementById('weather6');
  
  let hiLow=document.getElementById('hi-low');
  let hiLow1=document.getElementById('hi-low1');
  let hiLow2=document.getElementById('hi-low2');
  let hiLow3=document.getElementById('hi-low3');
  let hiLow4=document.getElementById('hi-low4');
  let hiLow5=document.getElementById('hi-low5');
  let hiLow6=document.getElementById('hi-low6');
 

  let now=new Date()
  let day1 = new Date();
  day1.setDate(day1.getDate() + 1);


let day2 = new Date();
day2.setDate(day2.getDate() + 2);


let day3 = new Date();
day3.setDate(day3.getDate() + 3);


let day4 = new Date();
day4.setDate(day4.getDate() + 4);


let day5 = new Date();
day5.setDate(day5.getDate() + 5);


let day6 = new Date();
day6.setDate(day6.getDate() + 6);


 


const api={
    key:"6289e5be2d11314bbf3b9716741ca763",
   url:"https://api.openweathermap.org/data/2.5/"
 ,
 urlO:"https://api.openweathermap.org/data/2.5/onecall?"
}

document.addEventListener("DOMContentLoaded",refresh);
function refresh(){
    fetch(`${api.urlO}lat=40.71&lon=-74.01&exclude=minutely&units=metric&APPID=${api.key}`)
  .then(weather=>weather.json())
  .then(displayDom);   
}
  
function displayDom(Dom){
    console.log(Dom);
    
 date.innerHTML=dateBuilder(now);
 
 temp.innerHTML=`${Math.round(Dom.current.temp)} <span>°C</span>`
 weatherr.innerHTML=` ${Dom.current.weather[0].description} `

 hiLow.innerHTML=`${Math.round(Dom.daily[0].temp.min)}°C / ${Math.round(Dom.daily[0].temp.max)}°C`

//Daily Update
 date1.innerHTML=dateBuilder(day1);
 date2.innerHTML=dateBuilder(day2);
 date3.innerHTML=dateBuilder(day3);
 date4.innerHTML=dateBuilder(day4);
 date5.innerHTML=dateBuilder(day5);
 date6.innerHTML=dateBuilder(day6);

 temp1.innerHTML=`${Math.round(Dom.daily[1].temp.day)} <span>°C</span>`
 temp2.innerHTML=`${Math.round(Dom.daily[2].temp.day)} <span>°C</span>`
 temp3.innerHTML=`${Math.round(Dom.daily[3].temp.day)} <span>°C</span>`
 temp4.innerHTML=`${Math.round(Dom.daily[4].temp.day)} <span>°C</span>`
 temp5.innerHTML=`${Math.round(Dom.daily[5].temp.day)} <span>°C</span>`
 temp6.innerHTML=`${Math.round(Dom.daily[6].temp.day)} <span>°C</span>`


 weatherr1.innerHTML=`${Dom.daily[1].weather[0].main}`
 weatherr2.innerHTML=`${Dom.daily[2].weather[0].main}`
 weatherr3.innerHTML=`${Dom.daily[3].weather[0].main}`
 weatherr4.innerHTML=`${Dom.daily[4].weather[0].main}`
 weatherr5.innerHTML=`${Dom.daily[5].weather[0].main}`
 weatherr6.innerHTML=`${Dom.daily[6].weather[0].main}`


 hiLow1.innerHTML=`${Math.round(Dom.daily[1].temp.min)}°C / ${Math.round(Dom.daily[1].temp.max)}°C`
 hiLow2.innerHTML=`${Math.round(Dom.daily[2].temp.min)}°C / ${Math.round(Dom.daily[2].temp.max)}°C`
 hiLow3.innerHTML=`${Math.round(Dom.daily[3].temp.min)}°C / ${Math.round(Dom.daily[3].temp.max)}°C`
 hiLow4.innerHTML=`${Math.round(Dom.daily[4].temp.min)}°C / ${Math.round(Dom.daily[4].temp.max)}°C`
 hiLow5.innerHTML=`${Math.round(Dom.daily[5].temp.min)}°C / ${Math.round(Dom.daily[5].temp.max)}°C`
 hiLow6.innerHTML=`${Math.round(Dom.daily[6].temp.min)}°C / ${Math.round(Dom.daily[6].temp.max)}°C`
 

}
const search=document.getElementById('search');

search.addEventListener('keypress',setQuery );
function setQuery(e){
    if(e.keyCode===13){
        
        localStorageUpdate(search.value);
      if(navigator.onLine===true){
        getResults(search.value);
        console.log("online");
    } else {
        console.log("offline");
        
       let final=localStorageUpdate(search.value)
       console.log("final",final);

  displayResults(final);
    }

  
       

        let wkly1=document.getElementById('wkly1');
        let wkly2=document.getElementById('wkly2');   
        let wkly3=document.getElementById('wkly3');
wkly1.classList.add('hide');
wkly2.classList.add('hide');
wkly3.classList.add('hide');
    }
} 





function getResults(query){
fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
   
    .then(weather=>{
       return weather.json()
       
    })
  
    .then(displayResults)
   
    
  

}
function displayResults(weather){
    console.log(weather);
 
 city.innerHTML=`${weather.name}, ${weather.sys.country}`

 date.innerHTML=dateBuilder(now);

 temp.innerHTML=`${Math.round(weather.main.temp)} <span>°C</span>`

weatherr.innerHTML=`${weather.weather[0].description} `

hiLow.innerHTML=`${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}
function dateBuilder(d){
    let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}

function localStorageUpdate(query){
    fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
       
        .then(weather=>{
           return weather.json()
           
        })
      
        .then((local)=>{
            localStorage.setItem(search.value,JSON.stringify(local))
  
 
 
        })
        
        
       
  let result=JSON.parse(localStorage.getItem(search.value));
  return result;
        }