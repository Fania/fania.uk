// LOAD ON CORRECT PAGE

const pages = ["home", "uni", "bookmarks", "cheats"];

window.addEventListener("load", function(event) {
  const url = window.location.search;
  let h = url.slice(6);
  if(pages.includes(h)) {
    loadpage(h);
  }
});

const arr = ["homeM", "homeA", 
             "bookmarksM", "bookmarksA",
             "uniM", "uniA",
             "cheatsM", "cheatsA"];

home.addEventListener("click", menuload);
uni.addEventListener("click", menuload);
bookmarks.addEventListener("click", menuload);
cheats.addEventListener("click", menuload);


function menuload() {
  let src = event.srcElement.id;
  !src ? src = "home" : src;
  location.replace(`${window.location.pathname}?page=${src}`);
  loadpage(src);
}

function loadpage(src) {
  let hides = arr.filter(x => x !== `${src}M` && x !== `${src}A`);
  let shows = arr.filter(x => x == `${src}M` || x == `${src}A`);
  hides.map(x => eval(x).classList.add("hide"));
  shows.map(x => eval(x).classList.remove("hide"));
  menu.classList.remove("showmenu");
  menuup.classList.add("hide");
  menudown.classList.remove("hide");
  window.scrollTo(0, 0);
}






// MOBILE MENU
menudown.addEventListener("click", () => {
  menu.classList.add("showmenu");
  menudown.classList.add("hide");
  menuup.classList.remove("hide");
});

menuup.addEventListener("click", () => {
  menu.classList.remove("showmenu");
  menuup.classList.add("hide");
  menudown.classList.remove("hide");
});





  // body {
  //   display: grid;
  //   /* grid-template-columns: 45% 10% 45%; */
  //   grid-template-columns: calc(50% - 60px) 120px calc(50% - 60px);
  //   grid-template-areas: 
  //     "main header content"
  //     "footer footer footer";
  // }













// Pataphysical date for footer

// let now = new Date();
let lastEdited = new Date("04 November 2018");
// let pnow = new PataphysicalDate();
let plastEdited = new PataphysicalDate(lastEdited);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = plastEdited;
date.setAttribute("title", `${lastEdited.getDate()} ${months[lastEdited.getMonth()]} ${lastEdited.getFullYear()} vulg.`);

