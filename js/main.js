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
      markers: true,
    },
  });
}

window.addEventListener("load", function () {
  init();
});
