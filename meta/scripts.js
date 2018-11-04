// nothing

// menuicon.innerHTML ='<i class="fas fa-angle-down"></i>';

let i = 0;
const arrows = ['<i class="fas fa-angle-down"></i>',
                '<i class="fas fa-angle-up"></i>'];

menuicon.addEventListener("click", () => {
  console.log("test");
  menu.classList.toggle("menutoggle");
  i===0 ? i=1 : i=0;
  menuicon.innerHTML = arrows[i];
});


// "<i class="fas fa-angle-up"></i>"
// "<i class="fas fa-angle-down"></i>"