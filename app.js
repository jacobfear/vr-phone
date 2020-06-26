//facebook
const facebookButton = document.querySelector(".fb-ico");

facebookButton.addEventListener("click", function(){
    window.open("https://m.facebook.com/","_self");
});

//tasks
const tasksButton = document.querySelector(".tasks-ico");

tasksButton.addEventListener("click", function(){
    window.location.href="./apps/tasks/tasks.html";
});

//weather
const weatherButton = document.querySelector(".weather-ico");

weatherButton.addEventListener("click", function(){
    window.location.href="./apps/weather/weather.html";
});

//web browser
const browserButton = document.querySelector(".browser-ico");

browserButton.addEventListener("click", function(){
    window.open("https://www.google.com/","_self");
});

//chat  
const chatButton = document.querySelector(".chat-ico");

chatButton.addEventListener("click", function(){
    window.location.href="./apps/chat/chat.html";
});

//photo  
const photosButton = document.querySelector(".images-ico");

photosButton.addEventListener("click", function(){
    window.location.href="./apps/photos/photos.html";
});

//youtube
const youtubeButton = document.querySelector(".youtube-ico");

youtubeButton.addEventListener("click", function(){
    window.open("https://www.youtube.com/","_self");
});

//radio-music
const radioMusic = document.querySelector(".music-ico");

radioMusic.addEventListener("click", function(){
    window.open("./apps/radio/radio.html","_self");
});

//settings
const settingsButton = document.querySelector(".settings-ico");
const popup = document.querySelector(".popup-wrapper");
const popupclose = document.querySelector(".popup-close");

settingsButton.addEventListener("click", function(){
    popup.style.display = "block";
});

popupclose.addEventListener("click", function(){
    popup.style.display = "none";
});

popup.addEventListener("click", function(){
    popup.style.display = "none";
});

//bottom nav bar
const navCircle = document.querySelector(".fa-circle-o");

navCircle.addEventListener("click", function(){
    let res = confirm("Are you sure you want to refresh your app?")
    if (res==true){ location.reload() } 
});

