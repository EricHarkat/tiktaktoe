

const btns = document.querySelectorAll(".btn")
const cancel = document.querySelector("#replay")

const btnsTab=Array.from(btns)

let matrice= [];
  
    matrice.push(btnsTab.slice(0,3))
    matrice.push(btnsTab.slice(3,6))
    matrice.push(btnsTab.slice(6,9))

let lastCheck=null;

function checkLastCaractere(check){
   let echeck = check;
   if(lastCheck != null && lastCheck.textContent == "x" && check.textContent == ""){
      e.target.textContent = "o"

   }else if(check.textContent == ""){
      e.target.textContent = "x"
   }
   lastCheck = echeck;
}

btns.forEach((elm) =>{
    elm.addEventListener("click",(e)=>{
      let event = new CustomEvent('play',{detail:e.target});
      document.dispatchEvent(event);
    })
 })


 
cancel.addEventListener("click", () => {
    btns.forEach((elm) =>{
        elm.textContent= ""
    })
})

 
 





