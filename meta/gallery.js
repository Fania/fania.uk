
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
  "city": false
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
