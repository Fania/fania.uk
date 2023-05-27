
// Pataphysical date for footer

// let now = new Date();
console.log(document.lastModified);

let lastMod = document.lastModified;

let curDay = lastMod.getDate();
let curMonth = lastMod.getMonth();
let curYear = lastMod.getFullYear();

console.log(`${curDay} ${curMonth} ${curYear}`);

let lastEdited = new Date("27 May 2023");
// let pnow = new PataphysicalDate();
let plastEdited = new PataphysicalDate(lastEdited);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = plastEdited;
date.setAttribute("title", `${lastEdited.getDate()} ${months[lastEdited.getMonth()]} ${lastEdited.getFullYear()} vulg.`);

