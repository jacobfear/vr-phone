const getQuote = url => {
    const q = document.querySelector(".quote");
    fetch(url)
      .then(r => r.json())
      .then(d => {
        let rnd = Math.floor(Math.random() * d.length);
        q.textContent = d[rnd].text
      })
      .catch(err => alert(err))
  };
  
  //https://picsum.photos/200/300?random=1
  
  document.querySelector(".generate").addEventListener("click", ()=>{
    getQuote("https://type.fit/api/quotes");
  });
  
  window.addEventListener('load', () => {
    getQuote("https://type.fit/api/quotes")
  });

/*bottom nav bar controls*/

//go back to home page
const backBtn = document.querySelector(".back-button");
backBtn.addEventListener("click", () => window.location.href="../../index.html");

//refresh page
const navCircle = document.querySelector(".fa-circle-o");

navCircle.addEventListener("click", function(){
    let res = confirm("Are you sure you want to refresh your app?")
    if (res==true){ location.reload() } 
});