console.log('PlagiClean');

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("active");

}else{

header.classList.remove("active");

}

});