const toggleButton=document.getElementsByClassName("toggle-button")[0];
const navbarLinks=document.getElementsByClassName("nav-links")[0];


toggleButton.addEventListener("click",()=>{
    navbarLinks.classList.toggle("active");
})
const body=document.querySelector(".body");
const input=document.querySelector(".clicked");

console.log(body,input)

input.addEventListener("click",()=>{

    body.classList.toggle("mode")
})