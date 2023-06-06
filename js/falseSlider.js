window.addEventListener('DOMContentLoaded', () => {
    
    
})
/*
falseSilder = document.getElementById("falseSlider")
    /*console.log(falseSlider)

    var container = document.getElementById("containSlider");
    const images = container.querySelectorAll('.image-wrapper');
    let max = container.scrollWidth
    container.addEventListener('wheel', function(event) {
        event.preventDefault();
        
        var scrollAmount = event.deltaY;
        
        container.scrollLeft += scrollAmount;
        console.log("------------------------")
        console.log("C" + container.scrollLeft)
        console.log("------------------------")
        console.log(container.scrollWidth)
    });

  const imageWidth = images[0].clientWidth;
  let scrollPosition = 0;

        container.addEventListener('wheel', (event) => {
            event.preventDefault();
            const scrollAmount = event.deltaY;
            scrollPosition += scrollAmount;

            container.scrollLeft = Math.floor(scrollPosition / imageWidth) * imageWidth;
        });


    container.addEventListener('scroll', function() {
        console.log("------------------------")
        console.log("C" + container.scrollLeft)
        console.log("------------------------")
        num = 1
        images.forEach(image => {
            const distance = Math.abs(container.scrollLeft - image.offsetLeft);
            
            //console.log(num)
            //console.log("D" + distance)
            num = num + 1
            //console.log(container.offsetWidth)
            if (distance < container.offsetWidth / 8) {
                image.classList.add('visible');
            } 
            else {
                image.classList.remove('visible');
            }
        });
    });
*/
/*

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('containSlider');
  const images = container.querySelectorAll('.image-wrapper');
  const imageWidth = images[0].clientWidth;
  let scrollPosition = 0;

  container.addEventListener('wheel', (event) => {
    event.preventDefault();
    const scrollAmount = event.deltaY;
    scrollPosition += scrollAmount;
    container.scrollLeft = Math.floor(scrollPosition / imageWidth) * imageWidth;
  });
});

*/