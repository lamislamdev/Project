// Get elements
const ghost = document.getElementById('ghost');
const priceCards = document.querySelectorAll('.a');

// Ghost animation
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    ghost.style.top = y + 'px';
    ghost.style.left = x + 'px';
});

// Show price cards after a delay
setTimeout(() => {
    priceCards.forEach(card => card.classList.remove('hidden'));
}, 2000);

// Bat animation
const batsContainer = document.createElement('div');
batsContainer.classList.add('absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'pointer-events-none', 'overflow-hidden');

for (let i = 0; i < 50; i++) {
    const bat = document.createElement('img');
    bat.src = './img/glich.gif';
    bat.classList.add('absolute', 'z-10',  'w-3', 'h-auto', 'animate-bat');
    bat.style.top = `${Math.random() * 100}vh`;
    bat.style.left = `${Math.random() * 100}vw`;
    batsContainer.appendChild(bat);
}

document.body.appendChild(batsContainer);


// tool image slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
