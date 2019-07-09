
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
  "y2019": false
};

const filters = {...categories, ...locations, ...years};

const boxes = document.querySelectorAll("[class*='filter-']");

let currentFilters = localStorage.getItem("gallery-filters");

if (currentFilters) {
  let filters = JSON.parse(currentFilters);
  boxes.forEach(box => {
    box.checked = filters[box.id];
    box.addEventListener("change", ()=> {
      updateFilters(box.id, box.checked);
    });
  });
} else {
  boxes.forEach(box => {
    updateFilters(box.id, box.checked);
    box.addEventListener("change", ()=> {
      updateFilters(box.id, box.checked);
    });
  });
}

function updateFilters(key, value) {
  filters[key] = value; 
  localStorage.setItem("gallery-filters", JSON.stringify(filters));
}
