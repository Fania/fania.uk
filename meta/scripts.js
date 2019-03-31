






// MOBILE MENU
if (window.matchMedia("(min-width: 900px)").matches) {

  // DESKTOP

  const [...radios] = document.getElementsByName("mainnav");
  const [...sections] = document.querySelectorAll("[id$='section']");
  // console.log(sections);

  radios.forEach(i => {
    i.addEventListener("change", ()=> {
      console.log("CHANGED", i.id);
      const l = document.querySelector(".left");
      const r = document.querySelector(".right");
      l.classList.add("move");
      r.classList.add("move");

      sections.forEach(s => s.classList.add("hide"));

      switch (i.id) {
        case "about_button":
          about_section.classList.remove("hide");
          console.log("showing about");
          break;
        case "bookmarks_button":
          interlude_section.classList.remove("hide");
          console.log("showing interlude");
          break;
        default:
          break;
      }

      

    });
  });


  leftmenu.classList.remove("hide");
  rightmenu.classList.remove("hide");


  




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



