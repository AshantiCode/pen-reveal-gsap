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
  // push the part into the body as starting points
  gsap.set(".part4", { y: -548 });
  gsap.set(".part5", { y: -722 });
  gsap.set(".part6", { y: -843 });

  // Tween the tip of the pen back to 0
  gsap.to(".part6", {
    y: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".pen-body",
      start: "top bottom-=640",
      end: "+=843", // same as we offsetted it line 20
      scrub: true, // while we scroll it animates
      markers: true,
    },
  });

  gsap.to(".part5", {
    y: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".pen-body",
      start: "top bottom-=640",
      end: "+=722 ", // same as we offsetted it line 20
      scrub: true, // while we scroll it animates
      markers: true,
    },
  });

  gsap.to(".part4", {
    y: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".pen-body",
      start: "top bottom-=640",
      end: "+=548", // same as we offsetted it line 20
      scrub: true, // while we scroll it animates
      markers: true,
    },
  });
} // end init

window.addEventListener("load", function () {
  init();
});

//part 6 = -843px
//part 5 = - 722
//part 4 = -548
