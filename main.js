function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  

    function ease(t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  
  
  
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = link.getAttribute('href');
      smoothScroll(target, 600); 
    });
  });
  


  let activeImageId = 1;
  let nextImageId = 1;

  setInterval(function(){
  nextImageId = nextImageId + 1;
  if(nextImageId < 3) {
    document.getElementById("img" +activeImageId).classList.replace("visible", "hidden");

    document.getElementById("img" +nextImageId).classList.replace("hidden", "visible");

    activeImageId = nextImageId;
  }
  else {
    document.getElementById("img" +activeImageId).classList.replace("visible", "hidden");

    document.getElementById("img" +nextImageId).classList.replace("hidden", "visible");

    activeImageId = 3;
    nextImageId = 0;
  }

},3000)