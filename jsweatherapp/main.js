window.addEventListener('load',() =>{
    let long;
    let lat;
    //locationall   tem-degree     tem-discription   
    let tempdrg=document.querySelector('.tem-degree'); 
    let locationall=document.querySelector('.locationall'); 
    let tempdis=document.querySelector('.tem-discription'); 


    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(position =>{
        callconsoleall(position);
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const api =  `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d8555e1975100d3db1241229ec6ca59d`

        fetch(api)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data.weather[0].main)
    console.log(data.main.temp)
    console.log(data.name)

    tempdrg.textContent = data.main.temp;
    locationall.textContent = data.name;
    tempdis.textContent =  data.weather[0].main;
})
     })   
    }
})




function callconsoleall(msg){
    console.log(msg);
}