const menu_hb = document.querySelector(".menu-hb")
const menu = document.querySelector(".menu-mb")
let openMenu = false
menu_hb.addEventListener("click", ()=>{
  if(!openMenu){
    menu.classList.add("open")
    menu_hb.classList.add("open")
    menu.style.display = "flex"
    openMenu = true
  }else{
    menu.classList.remove("open")
    menu_hb.classList.remove("open")
    menu.style.display = "none"
    openMenu = false
  }
})

// =============================FORM===========================
function sendMsg(event){
  console.log(event);
  event.preventDefault()
}