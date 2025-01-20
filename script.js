// JavaScript for Navigation Bar
document.querySelectorAll('nav ul li').forEach((item) => {
    item.addEventListener('click', () => {
        alert(`You clicked on ${item.innerText}`);
    });
});
// Redirect to Sign-In Page when "Sign In" button is clicked
document.getElementById('signInButton').addEventListener('click', function () {
    window.location.href = 'signin.html'; // Path to your Sign-In Page
});


// Slider Animation Control
const sliderContainer = document.querySelector('.card-slider');
let isPaused = false;

function startSlider() {
    if (!isPaused) {
        sliderContainer.style.animationPlayState = 'running';
    }
}

function pauseSlider() {
    sliderContainer.style.animationPlayState = 'paused';
}

sliderContainer.addEventListener('mouseover', pauseSlider);
sliderContainer.addEventListener('mouseout', startSlider);

// Scrollable Movie List
const moviesContainer = document.querySelector('.movies-container');
let isDragging = false;
let startX;
let scrollLeft;

moviesContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    moviesContainer.classList.add('dragging');
    startX = e.pageX - moviesContainer.offsetLeft;
    scrollLeft = moviesContainer.scrollLeft;
});

moviesContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    moviesContainer.classList.remove('dragging');
});

moviesContainer.addEventListener('mouseup', () => {
    isDragging = false;
    moviesContainer.classList.remove('dragging');
});

moviesContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - moviesContainer.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    moviesContainer.scrollLeft = scrollLeft - walk;
});

// Explore More Button
document.querySelector('.btn').addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
    alert('Exploring more content...');
});

// Sign-In Button Alert
document.querySelector('nav ul li button').addEventListener('click', () => {
    alert('Sign-In functionality will be added soon!');
});

// Add Event Listeners for Movie Blocks
document.querySelectorAll('.image-block').forEach((block) => {
    block.addEventListener('click', () => {
        const movieTitle = block.querySelector('.image-title').innerText;
        alert(`You selected: ${movieTitle}`);
    });
});
