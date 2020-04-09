// we'll wrap this in a module at the end
(() => {
  console.log('fired!');

  gsap.to(".box", { scaleX: 0.5, scaleY: 1.5, rotation: 26, x: 250, y: 100, duration: 1.5, ease: "bounce.out" });
})();
