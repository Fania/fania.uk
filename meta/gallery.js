// console.log('testing gallery script');


// modals for all gallery images
const images = document.querySelectorAll("picture.gallery_img");
// console.log(images);
for(let i=0; i < images.length; i++){
  images[i].addEventListener("click", toggleModal);
}
function toggleModal(ev) {
  let modal = document.createElement("div");
  document.body.appendChild(modal);
  modal.id = "modal";
  let img = ev.target.cloneNode();
  // console.log(img);
  console.log('currentSrc: ', img.currentSrc);
  const classes = img.classList;
  const keepers = [];
  const ul = document.createElement("ul");
  [...classes].forEach(c => {
    if(c != 'gallery_img'  && 
       c != 'portrait' && 
       c != 'landscape' && 
       c != 'panorama') {
      keepers.push(c);
      const li = document.createElement("li");
      const liText = document.createTextNode(c);
      ul.appendChild(li);
      li.appendChild(liText);
    }
  })
  modal.appendChild(ul);
  modal.appendChild(img);
  modal.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}


  // if(classes.contains('portrait')) {
  //   console.log('portrait');
  // } else {
  //   console.log('landscape');

  // }


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
  "y19": false,
  "y22": true,
  "y2011": false, 
  "y2013": false, 
  "y2017": false, 
  "y2018": false, 
  "y2019": false,
  "y2022": true
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
// document.addEventListener('lazyloaded', function(e){
document.addEventListener('DOMContentLoaded', function(e){
  // console.log('inside DOMContentLoaded event listener for event: ');
  // console.log(e);
  // console.log(e.target);
  // console.log(e.target.images);

  const images = [...(e.target.images)].filter(i => i.classList.contains('gallery_img'));
  // console.log(images);

  // const images2 = document.querySelectorAll("picture.gallery_img");
  // console.log(images2);

  images.forEach(itemImg => {
      let itemPic = itemImg.parentElement;
      itemImg.addEventListener("load", () => {
        // let itemImg = e.target.children[1];
        if (itemImg.naturalWidth > (itemImg.naturalHeight * 2)) {
          itemPic.classList.add("panorama");
          // itemImg.classList.add("panorama");
        }
        if (itemImg.naturalWidth > itemImg.naturalHeight) {
          itemPic.classList.add("landscape");
          // itemImg.classList.add("landscape");
        }
        if (itemImg.naturalWidth < itemImg.naturalHeight) {
          itemPic.classList.add("portrait");
          // itemImg.classList.add("portrait");
        }
      });
  });
});



const [...portfolioImgs] = document.querySelectorAll("#portfolio picture img");
console.log(portfolioImgs);
portfolioImgs.forEach(itemImg => {
  itemImg.addEventListener("load", () => {
    console.log(itemImg);
    console.log(itemImg.currentSrc);
  });
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


