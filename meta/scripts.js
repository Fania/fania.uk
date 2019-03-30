






// MOBILE MENU
if (window.matchMedia("(min-width: 900px)").matches) {

  // DESKTOP

  leftmenu.classList.remove("hide");
  rightmenu.classList.remove("hide");

  about.addEventListener("click", ()=> {
    const l = document.querySelector(".left");
    const r = document.querySelector(".right");
    l.classList.add("move");
    r.classList.add("move");
  });


} else {

  // MOBILE
  
  menuopen.addEventListener("click", () => {
    leftmenu.classList.remove("hide");
    rightmenu.classList.remove("hide");
    menuopen.classList.add("hide");
    menuclose.classList.remove("hide");
  });
  menuclose.addEventListener("click", () => {
    leftmenu.classList.add("hide");
    rightmenu.classList.add("hide");
    menuclose.classList.add("hide");
    menuopen.classList.remove("hide");
  });
}



