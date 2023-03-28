const opaning = document.querySelector(".line");
const closed = document.querySelector(".close");
const menu = document.querySelector(".menu1");
const x = document.querySelector(".finish");
opaning.addEventListener('click', function(){
menu.style.display = "block" 
});
menu.addEventListener('click', function(){
    menu.style.display = "none"
    });

