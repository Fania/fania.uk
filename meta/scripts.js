// nothing


menudown.addEventListener("click", () => {
  menu.classList.toggle("menutoggle");
  menudown.classList.add("hide");
  menuup.classList.remove("hide");
});

menuup.addEventListener("click", () => {
  menu.classList.toggle("menutoggle");
  menuup.classList.add("hide");
  menudown.classList.remove("hide");
});

