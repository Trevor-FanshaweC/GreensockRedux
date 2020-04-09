// we'll wrap this in a module at the end
(() => {
  console.log('fired!');

  let person  = {
    haircolor: "red",
    eyes: "blue",
    weight: "too much",
    height: "180cm",

    walk: () => { console.log('move my legs one at a time to walk') }
  };

  debugger;    
})();
