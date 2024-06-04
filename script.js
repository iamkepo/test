let lastScrollTop = 0;
let lastTime = Date.now();

function myFunction(el) {
  const currentSize = parseFloat(el.width);
  const st = window.pageYOffset || document.documentElement.scrollTop;
  const now = Date.now();
  const timeDiff = now - lastTime;
  const scrollSpeed = Math.abs(st - lastScrollTop) / timeDiff; // vitesse de défilement en pixels par milliseconde

  let newWidth = currentSize;

  if (st > lastScrollTop) {
    // Scroll vers le bas
    newWidth -= scrollSpeed * 50; // Multiplier la vitesse par un facteur pour ajuster l'effet
    if (newWidth >= 200) {
      logo.style.transform = 'translateY(0px)';
    }
  } else {
    // Scroll vers le haut
    newWidth += scrollSpeed * 50;
    if (newWidth >= 700) {
      logo.style.transform = 'translateY(100px)';
    }
  }

  // Assurer que la largeur reste entre 200px et 700px
  newWidth = Math.max(200, Math.min(700, newWidth));

  el.style.width = `${newWidth}px`;
  lastScrollTop = st;
  lastTime = now;
}