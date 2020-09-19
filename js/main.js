function getTopPartsHeight() {
  return document.querySelector(".pen-top").clientHeight - 22;
}

function init() {
  gsap.set(".part3", {
    y: -getTopPartsHeight(),
    scrollTrigger: {
      id: "pen-body",
      trigger: ".part3",
      start: "top bottom-=270",
      end: `+=${getTopPartsHeight()}`,
      pin: true,
      pinSpacing: false,
    },
  });

  gsap.set(".part4", { y: -548 });
  gsap.set(".part5", { y: -722 });
  gsap.set(".part6", { y: -843 });
} // end init

window.addEventListener("load", function () {
  init();
});

//part 6 = -843px
//part 5 = - 722
//part 4 = -548
