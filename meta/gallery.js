const images = [
  "IMG_0017.jpg", 
  "IMG_0075.PNG", 
  "IMG_0096(Edited).jpg", 
  "IMG_0105 (Edited).PNG", 
  "IMG_0106 (Edited).PNG", 
  "IMG_0150.JPG", 
  "IMG_0172.JPG", 
  "IMG_0282.jpg", 
  "IMG_0331.jpg", 
  "IMG_0361.jpg", 
  "IMG_0552.jpg", 
  "IMG_0558.jpg", 
  "IMG_0697.jpg", 
  "IMG_0698.jpg", 
  "IMG_0730.jpg", 
  "IMG_0762.jpg", 
  "IMG_0813.jpg", 
  "IMG_0832.jpg", 
  "IMG_0841.jpg", 
  "IMG_0852.jpg", 
  "IMG_0855.jpg", 
  "IMG_1170.jpg", 
  "IMG_1226.JPG", 
  "IMG_1229.jpg", 
  "IMG_1231.jpg", 
  "IMG_6272.JPG", 
  "IMG_6291.JPG", 
  "IMG_6563.JPG", 
  "IMG_6728.JPG", 
  "IMG_6848.JPG", 
  "IMG_6949.JPG", 
  "IMG_7017.JPG", 
  "IMG_7045.JPG", 
  "IMG_7167.JPG", 
  "IMG_7232.JPG", 
  "IMG_7303.JPG", 
  "IMG_7311.JPG", 
  "IMG_7320.JPG", 
  "IMG_7393.JPG", 
  "IMG_7428.JPG", 
  "IMG_7752.JPG", 
  "oakham sky.jpg" 
];

const grid = document.getElementsByClassName("gallery_grid")[0];


// images.forEach(img => {

//   let tag = `<img class="gallery_img" src="images/gallery/${img}">`

//   grid.innerHTML += tag;

// });




// const imgs = document.querySelectorAll('.gallery_img');
// const orientation = 6;
// const css = exif2css(orientation);


// imgs.forEach(img => {
//   if (css.transform) {
//     console.log("test css exif");
//     console.log(css);
//     img.style.transform = css.transform;
//   }
//   if (css['transform-origin']) {
//     console.log("test css exif 2");
//     console.log(css);
//     img.style['transform-origin'] = css['transform-origin'];
//   }
// });


// ['not-an-exif-orientation', 1,2,3,4,5,6,7,8]
//   .forEach((i) => {
//     console.log('Orientation: %s', i)
//     const result = exif2css(i)
//     console.log(result)
//     console.log()
//   });