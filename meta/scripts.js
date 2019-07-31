const pages = ["about", "bookmarks", "cheats", "images", "cats", "secret"];
const menu = document.getElementById("menu_button");


// Menu buttons
const loadPage = () => {
  const url = window.location.hash;
  const page = url.slice(1);
  if(pages.includes(page)) {
    const p = page.replace("_section", "");
    const r = document.getElementById(p + "_button");
    r.checked = true;  // check correct page radio
    menu.checked = false;  // reset menu
    document.title = `Fania | ${page}`;
  } else {
    const h = document.getElementById("home_button");
    h.checked = true;  // check homepage radio
    menu.checked = false;  // reset menu
    document.title = `Fania.eu`;
  };
};

window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);


// BACK TO TOP BUTTON

// console.log(body.scrollTop);
const [...ups] = document.getElementsByClassName("up");

ups.forEach( u => {
  u.addEventListener("click", ()=> {
    console.log("scroll");
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  });
});








