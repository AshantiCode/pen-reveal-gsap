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

  const partsBottomOffsets = [548, 722, 843];

  function fixBottomParts(el, offset, index) {
    gsap.set(el, { y: -offset });

    gsap.to(el, {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".pen-body",
        start: "top bottom-=640",
        end: `+=${offset}`,
        scrub: true,
        markers: true,
      },
    });
  }

  gsap.utils.toArray([".part4", ".part5", ".part6"]).forEach((part, index) => {
    fixBottomParts(part, partsBottomOffsets[index], index);
  });
} // end init

window.addEventListener("load", function () {
  init();
});

//part 6 = -843px
//part 5 = - 722
//part 4 = -548
