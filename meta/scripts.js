// LOAD ON CORRECT PAGE

window.addEventListener("load", function(event) {
  const pages = ["#home", "#uni", "#bookmarks"];
  const hash = window.location.hash;

  if(pages.includes(hash)) {
    console.log("yay");
  }

});




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



// MENU LINKS
homeM.classList.remove("hide"); homeA.classList.remove("hide");
bookmarksM.classList.add("hide"); bookmarksA.classList.add("hide");
uniM.classList.add("hide"); uniA.classList.add("hide");
cheatsM.classList.add("hide"); cheatsA.classList.add("hide");

// let loadpage = (button) => {
//   button.addEventListener("click", () => {
//     location.replace(`#${button}`);
//     homeM.classList.remove("hide"); homeA.classList.remove("hide");
//     bookmarksM.classList.add("hide"); bookmarksA.classList.add("hide");
//     uniM.classList.add("hide"); uniA.classList.add("hide");
//     cheatsM.classList.add("hide"); cheatsA.classList.add("hide");
//     menu.classList.toggle("menutoggle");
//     menuup.classList.add("hide");
//     menudown.classList.remove("hide");
//   });
// }



home.addEventListener("click", () => {
  location.replace('');
  homeM.classList.remove("hide"); homeA.classList.remove("hide");
  bookmarksM.classList.add("hide"); bookmarksA.classList.add("hide");
  uniM.classList.add("hide"); uniA.classList.add("hide");
  cheatsM.classList.add("hide"); cheatsA.classList.add("hide");
  menu.classList.remove("showmenu");
  menuup.classList.add("hide");
  menudown.classList.remove("hide");
  window.scrollTo(0, 0);
});
uni.addEventListener("click", () => {
  location.replace('#uni');
  homeM.classList.add("hide"); homeA.classList.add("hide");
  bookmarksM.classList.add("hide"); bookmarksA.classList.add("hide");
  uniM.classList.remove("hide"); uniA.classList.remove("hide");
  cheatsM.classList.add("hide"); cheatsA.classList.add("hide");
  menu.classList.remove("showmenu");
  menuup.classList.add("hide");
  menudown.classList.remove("hide");
  window.scrollTo(0, 0);
});
bookmarks.addEventListener("click", () => {
  location.replace('#bookmarks');
  homeM.classList.add("hide"); homeA.classList.add("hide");
  bookmarksM.classList.remove("hide"); bookmarksA.classList.remove("hide");
  uniM.classList.add("hide"); uniA.classList.add("hide");
  cheatsM.classList.add("hide"); cheatsA.classList.add("hide");
  menu.classList.remove("showmenu");
  menuup.classList.add("hide");
  menudown.classList.remove("hide");
  window.scrollTo(0, 0);
});
cheats.addEventListener("click", () => {
  homeM.classList.add("hide"); homeA.classList.add("hide");
  bookmarksM.classList.add("hide"); bookmarksA.classList.add("hide");
  uniM.classList.add("hide"); uniA.classList.add("hide");
  cheatsM.classList.remove("hide"); cheatsA.classList.remove("hide");
  menu.classList.remove("showmenu");
  menuup.classList.add("hide");
  menudown.classList.remove("hide");
  window.scrollTo(0, 0);
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

