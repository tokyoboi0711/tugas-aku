// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Check if the 'slides' element exists
    const slidesContainer = document.getElementById('slides');
    
    if (slidesContainer) {
        // Set the width of the slides container based on the number of slides
        slidesContainer.style.width = `${totalSlides * 100}%`;

        // Next Slide Button
        const nextSlideArrow = document.getElementById('nextSlide');
        
        // Check if the nextSlideArrow exists
        if (nextSlideArrow) {
            nextSlideArrow.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % totalSlides; // Cycle to the next slide
                updateSlides();
            });
        }

        function updateSlides() {
            const offset = -currentSlide * (100 / totalSlides); // Move slides left
            slidesContainer.style.transform = `translateX(${offset}%)`;
        }
    } else {
        console.error('Slides container not found!');
    }
});


// Set the date we're counting down to (example: 10 minutes from now)
const countdownDate = new Date().getTime() + 9999 * 60 * 1000; // 10 minutes in milliseconds

// Update the countdown every second
const countdownFunction = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Find the time difference
  const timeLeft = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the results in their respective <div> elements
  // Update the <h1> inside the respective divs
  document.querySelector("#days h1").innerHTML = days;
  document.querySelector("#hours h1").innerHTML = hours;
  document.querySelector("#minutes h1").innerHTML = minutes;
  document.querySelector("#seconds h1").innerHTML = seconds;

  // If the countdown is over, stop the timer and reset to zero
  if (timeLeft < 0) {
    clearInterval(countdownFunction);
    document.querySelector("#days h1").innerHTML = "0";
    document.querySelector("#hours h1").innerHTML = "0";
    document.querySelector("#minutes h1").innerHTML = "0";
    document.querySelector("#seconds h1").innerHTML = "0";
  }
}, 1000);

function toggleDropdown(index) {
    const dropdown = document.getElementById(`dropdown-sec4-${index}`);
    
    // Atur tinggi maksimal untuk slide up atau slide down
    if (dropdown.style.maxHeight) {
      dropdown.style.maxHeight = null;
    } else {
      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    }
  }
  