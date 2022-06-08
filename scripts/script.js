const scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.addEventListener("click",()=>{
    window.scrollTo({top:0})
})
window.addEventListener("scroll",()=>{
    window.pageYOffset>100 ? (scrollToTop.style.display="block"): 
   ( scrollToTop.style.display="none")
})

const html = document.querySelector("html")
const responsiveNavbar = document.querySelector(".responsive__navbar")
const responsiveToggle = document.querySelector(".toggle")
responsiveNavbar.addEventListener("click",(e)=>e.stopPropagation())

 responsiveToggle.addEventListener("click",(e)=>{
     e.stopPropagation();
     responsiveNavbar.classList.toggle("show");
 })


 html.addEventListener("click",() => responsiveNavbar.classList.remove("show"))

const navLinks = document.querySelectorAll(".nav__links")

navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        responsiveNavbar.classList.remove("show");
    })
})
