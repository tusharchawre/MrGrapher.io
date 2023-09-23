
(function () {
    var scroll = new LocomotiveScroll();
})();

let imgs = [
    "https://images.unsplash.com/photo-1694439368032-230a1bad9617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694705446476-1fd06c06d54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694719977532-293c34eed810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1695026069898-bcb96e060d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694719100080-fdeb57de1e32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694656937152-b2377c0b5de7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694436948284-23fc69603169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1686681557672-a0305ebf8381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1694754933649-8afc9bebc7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1673725173733-8947a79e16a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://plus.unsplash.com/premium_photo-1694547924493-bd8a2c84547d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
   

]

var timeout


function time(){
    var datetime = new Date().toLocaleTimeString();

    document.getElementById("time").textContent = datetime; 
    setInterval(time, 1000);

}

time();













let crsr = document.querySelector(".cursor")
let throttleFunction = (func, delay)=>{
     
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
   
       
      if(now - prev> delay){
        prev = now;
   
        return func(...args); 
      }
    }
  }









let herotext = document.querySelector(".herotext")
let hero = document.querySelector(".hero")

gsap.to(herotext.querySelectorAll("h1"),{
    y: "0",
    delay: 6,
    ease: Power4,
    duration: 1,
    stagger: 0.5
})

gsap.from(document.querySelector(".nav"),{

    delay: 5.5,
    opacity: 0,
    duration: 1.5,
    ease: Power4
})

gsap.from(hero.querySelectorAll("h5"),{
    delay: 7.5,
    opacity: 0,
    duration: 2,

    ease: Power4

})


function circleMouseFollow(xscale,yscale){
    window.addEventListener("mousemove",(dets)=>{
        crsr.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    
    })
}


function circleSqueezer(){
    var xscale =1
    var yscale=1

    var xprev=0
    var yprev = 0

    window.addEventListener("mousemove",function(dets){
    clearTimeout(timeout)           

        var xdiff = dets.clientX - xprev
        xprev = dets.clientX

        var ydiff = dets.clientY - yprev
        yprev = dets.clientY


       xscale = gsap.utils.clamp(0.8,1.2,xdiff)
       yscale = gsap.utils.clamp(0.8,1.2,ydiff)

       circleMouseFollow(xscale,yscale) 

    

       timeout = setTimeout(function(){
       
                                                    
document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    
    })
}

circleSqueezer()




let showimg = document.querySelector(".mainimg")

showimg.addEventListener("mousemove",(dets)=>{
    let pos = dets.clientX - showimg.getBoundingClientRect().left

    var opacity1 = gsap.utils.mapRange(50, showimg.getBoundingClientRect().width/2, 1, 0, pos)
    var opacity2 = gsap.utils.mapRange(showimg.getBoundingClientRect().width/2, showimg.getBoundingClientRect().width-50, 0, 1, pos)


    gsap.to(showimg.querySelector("#img1"),{
        opacity: `${opacity1}`,
        ease: Power2
    })
    gsap.to(showimg.querySelector("#img2"),{
        opacity: `${opacity2}`,
        ease: Power2
    })
})

let pop = document.querySelector(".pop")

var rotate=0
var diffrot = 0
  
  pop.addEventListener("mousemove", throttleFunction((dets)=>{
    var div = document.createElement("div")
    div.classList.add("popimage")
    div.style.left = dets.clientX + "px"
    div.style.top = dets.clientY + "px"

    var img = document.createElement("img")
    let i = Math.floor(Math.random()*11)
    console.log(i)
    img.setAttribute("src",imgs[i])

    div.appendChild(img)


    var  diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

 

    div.style.rotate = `${gsap.utils.clamp(-20, 20, diffrot )}deg`




    gsap.to(img,{
        y:0,
        scale: 1.1,
        ease: Back.easeOut,
        duration: 0.5,

    })
    gsap.to(img,{
        y:"150%",
        delay: 0.7,
        ease: Power1,
        scale: 1.5

    })





    document.querySelector(".hero").appendChild(div)

    setTimeout(function(){
        div.remove()
    },2000)


}, 100));


