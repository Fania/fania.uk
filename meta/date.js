
// Pataphysical date for footer

// let now = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// console.log(document.lastModified);

let lastMod = new Date(document.lastModified);

let curDay = lastMod.getDate();
let curMonth = lastMod.getMonth();
let curYear = lastMod.getFullYear();

// console.log(`${curDay} ${months[curMonth]} ${curYear}`);

let lastEdited = `${curDay} ${months[curMonth]} ${curYear}`;
// let pnow = new PataphysicalDate();
let plastEdited = new PataphysicalDate(lastEdited);


date.innerHTML = plastEdited;
date.setAttribute("title", `${curDay} ${months[curMonth]} ${curYear} vulg.`);

