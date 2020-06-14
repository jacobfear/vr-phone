const channelListInfo = [
    {name: "Flash", frequency: "105 MHz", src:"stations/flash.mp3"}, //Note: put the link to your mp3 file in the src attribute 
    {name: "Vrock", frequency: "103 MHz", src:"stations/vrock.mp3"},
    {name: "Emotion", frequency: "98.3 MHz", src:"stations/emotion.mp3"},
    {name: "Kchat", frequency: "94.5 MHz", src:"stations/kchat.mp3"}
];

//init fake radio 
let fakeRadio = function(source){
    let sound = new Howl({
        src: source,
        html5: true,
        volume: 0.5,
        loop: true
    });
    sound.play();
};

//init the first mp3
window.addEventListener('load', function(){ 
    Howler.unload();
    document.getElementsByClassName("channel")[0].classList.add("channel-active");
    fakeRadio(channelListInfo[0].src);
    channelName.textContent = channelListInfo[0].name;
    channelFrequency.textContent = channelListInfo[0].frequency;
});


//get DOM references
let channelList = document.querySelector(".channel-list");
let channelName = document.querySelector(".channel-name");
let channelFrequency = document.querySelector(".channel-frequency");
let volume = document.querySelector(".volume-btn");
let volumeSlider = document.querySelector(".volume-slider");

channelList.addEventListener("click", function(e){
    const channel = document.querySelectorAll(".channel");

    channel.forEach(function(e){ //remove active status
        e.classList.remove("channel-active"); 
    });

    if (e.target.tagName === "H3") { //show active status
        e.target.classList.add("channel-active");
        //console.log(e.target);

        //play audio depending on the clicked/selected station
        if (e.target.textContent === "105 Flashlive") {
            Howler.unload();
            fakeRadio(channelListInfo[0].src);
            channelName.textContent = channelListInfo[0].name;
            channelFrequency.textContent = channelListInfo[0].frequency;
        }
        else if (e.target.textContent === "103 Vrocklive") {
            Howler.unload();
            fakeRadio(channelListInfo[1].src);
            channelName.textContent = channelListInfo[1].name;
            channelFrequency.textContent = channelListInfo[1].frequency;
        }
        else if (e.target.textContent === "98.3 Emotionlive") {
            Howler.unload();
            fakeRadio(channelListInfo[2].src);
            channelName.textContent = channelListInfo[2].name;
            channelFrequency.textContent = channelListInfo[2].frequency;
        }
        else if (e.target.textContent === "94.5 K-Chatlive") {
            Howler.unload();
            fakeRadio(channelListInfo[3].src);
            channelName.textContent = channelListInfo[3].name;
            channelFrequency.textContent = channelListInfo[3].frequency;
        }
    }
});

//volume controller
volume.addEventListener("click", function(){
    volumeSlider.classList.toggle("hide");
});

volumeSlider.addEventListener("change", function(){
    let n = "0." + volumeSlider.value;
    if (n === "0.10") {
        Howler.volume([1.0]);
    } 
    else {
        Howler.volume([Number(n)]);
    }
        //console.log(sound.volume());
});

/*bottom nav bar controls*/

//go back to home page
const backBtn = document.querySelector(".fa-arrow-circle-left");

backBtn.addEventListener("click", () => window.location.href="../../index.html");

//refresh page
const navCircle = document.querySelector(".fa-circle-o");

navCircle.addEventListener("click", function(){
    let res = confirm("Are you sure you want to refresh your app?")
    if (res==true){ location.reload() } 
});
