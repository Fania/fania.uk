'use strict';

// Register Service Worker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw.js', { scope: './' })
    .then(() => {
      // console.log('ServiceWorker registration successful');
    })
    .catch(err => {
      // console.log('ServiceWorker registration failed', err);
    });
}


const pages = ["about", "portfolio", "images", "cats", "secret"];
const menu = document.getElementById("menu_button");


// Menu buttons
const loadPage = () => {
  const url = window.location.hash;
  const re = /#(\w+)\??(\w+)?/;
  const found = url.match(re);
  let page = found===null ? "home" : found[1];
  if(page === "cheats") {
    const r = document.getElementById("cheats_button");
    r.checked = true;  // check correct page radio
    menu.checked = false;  // reset menu
    document.title = `Fania | ${page}`;
    let query = "";
    if (found[2]) {
      query = found[2];
      const elem = document.getElementById(query);
      const mum = elem.parentElement.parentElement;
      mum.open = true;
      window.scroll({
        top: elem.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  } else if(pages.includes(page)) {
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
// const [...ups] = document.getElementsByClassName("up");

// ups.forEach( u => {
//   u.addEventListener("click", ()=> {
//     // console.log("scroll");
//     window.scroll({top: 0, left: 0, behavior: 'smooth'});
//   });
// });


// add bookmark links to individual cheats and populate sub nav
const [...summaries] = document.getElementsByTagName("summary");
summaries.forEach(item => {
  const child = item.children[0];
  child.innerHTML += `<a class="shortcut" href="${location.origin}#cheats?${child.id}">§</a>`;
  cheatsNav.insertAdjacentHTML("beforeend", `
    <a href="${location.origin}#cheats?${child.id}">${(child.innerText).slice(0,-1)}</a>
  `);
});



const cheats_filter_Items = document.querySelectorAll('[name="show_hide_cheatsNav"]');
console.log(cheats_filter_Items);

const prev_cheats_filter_status = localStorage.getItem("cheats-filters");
console.log('prev_cheats_filter_status', prev_cheats_filter_status);
console.log(typeof prev_cheats_filter_status);
console.log(typeof Boolean(prev_cheats_filter_status));
let show_cheatsNav = document.querySelector('#show_cheatsNav');
let hide_cheatsNav = document.querySelector('#hide_cheatsNav');

if(Boolean(prev_cheats_filter_status) == true) {
  show_cheatsNav.checked = true;
} else {
  hide_cheatsNav.checked = true;
}

cheats_filter_Items.forEach(choice => {

  choice.addEventListener("change", () => {

    const cheats_filter_status = document.querySelector('[name="show_hide_cheatsNav"]').checked;
    console.log(cheats_filter_status);

    localStorage.setItem("cheats-filter", cheats_filter_status);


  });

});