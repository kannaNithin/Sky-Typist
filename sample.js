var h1 = document.createElement("h1");
h1.innerHTML ="hello";
document.body.appendChild(h1);
document.addEventListener("keydown",(event)=>{
    console.log(event.key);
});