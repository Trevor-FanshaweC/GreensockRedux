// we'll wrap this in a module at the end
(() => {
  console.log('fired!');

  function fireAnim() {
    gsap.to(".box", { scaleX: 0.5, scaleY: 1.5, rotation: 26, x: 250, y: 100, duration: 1.5, ease: "bounce.out", onComplete: doSomethingElse, onCompleteParams: ["arg1", "or a house name, as an example"] });
  }

  function doSomethingElse(one, two) {
    console.log('hello!', one, two);
    gsap.to(".box", { scaleX: 0.5, scaleY: 0.5, rotation: 0, x: 150, y: 30, duration: 0.5, onComplete: doAThirdThing });
  }

  function doAThirdThing() {
    console.log("now we're getting silly");
  }

  fireAnim();
})();
