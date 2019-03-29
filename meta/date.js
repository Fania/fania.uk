
// Pataphysical date for footer

// let now = new Date();
let lastEdited = new Date("04 November 2018");
// let pnow = new PataphysicalDate();
let plastEdited = new PataphysicalDate(lastEdited);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = plastEdited;
date.setAttribute("title", `${lastEdited.getDate()} ${months[lastEdited.getMonth()]} ${lastEdited.getFullYear()} vulg.`);

