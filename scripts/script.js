function myFunction() {    
    document.getElementById("aside-menu").classList.toggle("display-aside-menu");
    document.getElementById("open").classList.toggle("switchOff");
    document.getElementById("close").classList.toggle("switchOn");
    
  }

//Components: Slides SAMPLES exclusively for 4-S website. NO for framework

const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showImage(index) {
  images[currentIndex].classList.remove('active');
  images[currentIndex].style.opacity = 0;
  images[index].classList.add('active');
  images[index].style.opacity = 1;
  currentIndex = index;
}

images.forEach((image, index) => {
  image.style.opacity = 0;
  image.addEventListener('load', () => {
    if(index === 0) {
      image.classList.add('active');
      image.style.opacity = 1;
    }
  })
})

setInterval(() => {
  let nextIndex = currentIndex + 1;
  if(nextIndex >= images.length) {
    nextIndex = 0;
  }
  showImage(nextIndex)
}, 3000);