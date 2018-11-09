// FIRST LOAD

const pages = ["home", "uni", "bookmarks", "cheats"];

const arr = ["homeM", "homeA", 
             "bookmarksM", "bookmarksA",
             "uniM", "uniA",
             "cheatsM", "cheatsA"];


console.log("welcome");
const url = window.location.search;
// console.log("url", url);
let h = url.slice(6);
// console.log("h", h);
if(pages.includes(h)) {
  // console.log("welcome if");
  loadpage(h);
} else {
  // console.log("welcome else");
  loadpage("home");
};

  
// Browser history
window.addEventListener("popstate", () => {
  if (history.state) {
    // console.log("popstate triggered");
    // console.log(history);
    loadpage(history.state.id);
  }
});




// SUBSEQUENT LOADS
home.addEventListener("click", menuload);
uni.addEventListener("click", menuload);
bookmarks.addEventListener("click", menuload);
cheats.addEventListener("click", menuload);


// Load page from menu
function menuload() {
  let src = event.srcElement.id;
  !src ? src = "home" : src;
  // location.replace(`${window.location.pathname}?page=${src}`);
  // localStorage.setItem("currentPage", src);

  if (history && history.pushState) {
    // console.log("hisory and pushState work");
    let stateObj = { id: src };
    let wl = window.location;
    let currPage = `${wl.protocol}//${wl.hostname}:${wl.port}`;
    let newPage = `/${src}.html`;
    // console.log("src", src);
    // console.log("currPage", currPage);
    // console.log("newPage", newPage);
    let fakeURL = `${currPage}${newPage}`;
    let realURL = `${currPage}?page=${src}`;
    // console.log("fakeURL", fakeURL);
    // console.log("realURL", realURL);
    history.pushState(stateObj, src, realURL);  // needs web server
    // var newPage = window.location.href + '#' + evt.target.href.replace(base, '');
    // window.location.href = fakeURL;  // reloads
  }
  // console.log("menuload", src);
  loadpage(src);
}

function loadpage(src) {
  // console.log("loadpage", src, `${src}M`);
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

