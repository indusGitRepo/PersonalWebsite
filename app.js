document.addEventListener('DOMContentLoaded', function() {
    let starInterval;

    const startButton = document.getElementById('showImage');
    const stopButton = document.getElementById('stop');
    const image = document.getElementById('animation');

    startButton.addEventListener('click', function() {
        startButton.style.display = 'none';  // Hide Start button
        stopButton.style.display = 'block';  // Show Stop button
        image.style.display = 'block';
        startAnimation(image);
        startStars();
    });

    stopButton.addEventListener('click', function() {
        stopButton.style.display = 'none';  // Hide Stop button
        startButton.style.display = 'block';  // Show Start button
        stopStars();
    });

    function startAnimation(image) {
        var finalPosition = 100; // Final horizontal position
        var step = 5; // Pixels moved per interval
        var currentPosition = 0;

        var intervalId = setInterval(function() {
            currentPosition += step;
            if (currentPosition >= finalPosition) {
                currentPosition = finalPosition;
                clearInterval(intervalId);
            }
            image.style.left = currentPosition + "px";
        }, 50);
    }

    function createStar() {
        let star = document.createElement('div');
        star.setAttribute('class', 'star');
        document.body.appendChild(star);
    
        // Get the navbar's bottom position
        let navbar = document.querySelector('.navbar');
        let navbarBottom = navbar.offsetTop + navbar.offsetHeight;
    
        // Position the star randomly across the window's width, a bit lower than the navbar
        let offset = 360; // Adjust this value to set how much lower the stars start
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = (navbarBottom + offset) + 'px';
    
        // Remove the star after it has fallen down
        setTimeout(function() {
            document.body.removeChild(star);
        }, 5000);
    }

    function startStars() {
        if (starInterval) {
            clearInterval(starInterval);
        }

        // Increase star creation frequency by reducing interval time
        starInterval = setInterval(createStar, 200); // Create a star every 200ms (5 stars per second)
    }

    function stopStars() {
        if (starInterval) {
            clearInterval(starInterval);
        }
    }
});


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar_menu').classList.add('active');
    document.querySelector('.hamburger').style.display = 'none'; // Hide hamburger
    document.querySelector('.close-menu').style.display = 'block'; // Show close menu
    document.querySelector('.button').style.display = 'active';
    
});

document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.navbar_menu').classList.remove('active');
    document.querySelector('.hamburger').style.display = 'block'; // Show hamburger
    document.querySelector('.close-menu').style.display = 'none'; // Hide close menu
    
});


function toggleClass() {
    document.querySelector('.navbar_menu').classList.toggle('active');
    document.querySelector('.imgs').classList.toggle('active');
}
const images = document.querySelectorAll('.pop-image');

images.forEach(image => {
    image.addEventListener('click', () => {
        // Toggle the 'clicked' class on the clicked image
        image.classList.toggle('clicked');
    });
});

