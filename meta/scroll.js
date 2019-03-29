

// const controller = new ScrollMagic.Controller();
// new ScrollMagic.Scene({
//   duration: 100,
//   offset: 10
// })
// .setClassToggle("#brimg", "rotate")
// .addIndicators({name: "rotate stars"})
// .addTo(controller);


const controller2 = new ScrollMagic.Controller({
  container: "body"
});
new ScrollMagic.Scene({
  // triggerElement: "header",
  duration: 200,
  offset: 40
})
// .setClassToggle(".left", "move")
.setPin(".left")
.addIndicators({name: "move left"})
.addTo(controller2);