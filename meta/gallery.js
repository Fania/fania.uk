
// modals for all gallery images
const images = document.querySelectorAll(".gallery_img");
for(let i=0; i < images.length; i++){
  images[i].addEventListener("click", toggleModal);
}
function toggleModal() {
  let modal = document.createElement("div");
  document.body.appendChild(modal);
  modal.id = "modal";
  let img = event.srcElement.cloneNode();
  modal.appendChild(img);
  modal.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}


// save filters to local storage

const categories = {
  "trees": false, 
  "water": false, 
  "sky": false, 
  "sunset": false, 
  "people": false, 
  "heritage": false, 
  "stone": false, 
  "beach": false, 
  "flowers": false, 
  "animals": false, 
  "art": false, 
  "night": false, 
  "city": false,
  "patterns": false,
  "faves": false
};

const locations = {
  "england": false, 
  "germany": false, 
  "sydney": false, 
  "iceland": false, 
  "crete": false, 
  "miami": false, 
  "japan": false
};

const years = {
  "y03": false,
  "y04": false,
  "y05": false,
  "y06": false,
  "y07": false,
  "y08": false,
  "y09": false,
  "y10": false,
  "y11": false,
  "y12": false,
  "y13": false,
  "y14": false,
  "y15": false,
  "y16": false,
  "y17": false,
  "y18": false,
  "y19": true,
  "y2011": false, 
  "y2013": false, 
  "y2017": false, 
  "y2018": false, 
  "y2019": true
};



const newFilters = {
  "show": false,
  ...categories, 
  ...locations, 
  ...years
};

const choices = [
  ...document.querySelectorAll("[class*='filter-']"), ...document.getElementsByName("show_hide")
];

choices.forEach(choice => {
  const oldFilters = localStorage.getItem("gallery-filters");
  const filters = JSON.parse(oldFilters);
  if (oldFilters) {
    if (choice.id != "show_filters" && choice.id != "hide_filters") {
      choice.checked = filters[choice.id];
    } else {
      document.getElementById("show_filters").checked = filters["show"];
      document.getElementById("hide_filters").checked = !filters["show"];
    }
  }
  choice.addEventListener("change", () => {
    if (choice.id != "show_filters" && choice.id != "hide_filters") {
      updateFilters(choice.id, choice.checked);
    } else {
      if (choice.id == "show_filters") { updateFilters("show", true); }
      if (choice.id == "hide_filters") { updateFilters("show", false); }
    }
  });
});

function updateFilters(key, value) {
  const oldFilters = localStorage.getItem("gallery-filters");
  if (oldFilters) {
    let currentFilters = JSON.parse(oldFilters);
    currentFilters[key] = value;
    localStorage.setItem("gallery-filters", JSON.stringify(currentFilters));
  } else {
    newFilters[key] = value; 
    localStorage.setItem("gallery-filters", JSON.stringify(newFilters));
  }
}



// automatically tag portrait and landscape images

images.forEach(img => {
  if (img.naturalWidth > (img.naturalHeight * 2)) {
    img.classList.add("panorama");
  }
  if (img.naturalWidth > img.naturalHeight) {
    img.classList.add("landscape");
  } else {
    img.classList.add("portrait");
  }
});







// responsive images
// const imagez = document.querySelectorAll(".y18");
// imagez.forEach(img => {

//   const path = img.getAttribute("src");
//   const rgx = /([\w*_?]*\d{3})\.\w{3,4}/g;
//   const source = rgx.exec(path)[1];
//   console.log(source);
//   const newpath = path.slice(0, -5);
//   console.log(newpath);

//   let resptag = `
//     <source media="(max-width: 899px)" srcset="${newpath}_Small.jpg">
//     <source media="(min-width: 900px)" srcset="${newpath}.jpg">
//     <source type="image/webp" srcset="${newpath}.webp"> 
//     <img src="${newpath}.jpg">`;

//   let tag = `<img src="small.jpg" srcset="medium.jpg 900w, large.jpg 1200w"></img>`;

//   let pic = document.createElement("picture");
//   pic.classList.add("gallery_img", "lazyload", "y18");
//   pic.innerHTML = resptag;
//   let parent = img.parentElement;
//   console.log(pic);
//   console.log(parent);
//   parent.replaceChild(pic, img);

// });


