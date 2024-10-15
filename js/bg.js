let btn = document.getElementById("BgColorChagne");
let form = document.getElementById("form");
 let home = document.getElementById("home");
  const nameInput= document.getElementById("nameInput")

  form.addEventListener('submit',(e)=>{
     
    alert(`Thank you ${nameInput.value.toUpperCase()}. Thank You `)
  })
 

  
 


 function myBgChangF() {

    let whiteColor="rgb(255,255,255)" ;

    let redColor="rgb(255,0,0)"

   let blue = Math.floor(Math.random() * 256);
   let red = Math.floor(Math.random() * 256);
   let green = Math.floor(Math.random() * 256);
  //  `rgb(${red}, ${blue},${green})`

      if(`rgb(${red}, ${blue},${green})` !== whiteColor & `rgb(${red}, ${blue},${green})` !== redColor){
        home.style.background = ` rgb(${red}, ${blue},${green})`;

      }

  
 }

 btn.addEventListener("click", myBgChangF);