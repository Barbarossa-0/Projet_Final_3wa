document.addEventListener('DOMContentLoaded', function() {
    let socialList = document.getElementById('reseaux-social');
    let socialItems = socialList.getElementsByTagName('li');
    let linkMenu = document.getElementById('linkMenu');
    let currentItem = 0;
    let timer;
    socialList.appendChild(socialItems[currentItem]);
    currentItem = (currentItem + 1) % socialItems.length;
    
    function startLoop() {
      socialList.appendChild(socialItems[currentItem]);
      currentItem = (currentItem + 1) % socialItems.length;
      socialItems[currentItem].classList.add('transition-effect');
    }
  
    function stopLoop() {
      clearInterval(timer);
    }

    timer = setInterval(startLoop, 500)
  
    socialList.addEventListener('mouseenter', () => {
      
      stopLoop();  
      socialItems.classList.remove('transition-effect');
    });
  
    socialList.addEventListener('mouseleave', () => {
        timer = setInterval(startLoop, 500);
    });

  });


