const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
    input.addEventListener("focus", () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = `Your ${input.placeholder}`;
            formHeading.style.opacity = "1";
        }, 300);
    });

    input.addEventListener("blur", () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = "Let's Talk";
            formHeading.style.opacity = "1";
        }, 300);
    });
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

// Select the images by their classes
const image1 = document.querySelector('.Amino');
const image2 = document.querySelector('.Excel');
const image3 = document.querySelector('.AminoFlock');

// Add event listeners to each image
image1.addEventListener('click', () => {
    image1.classList.toggle('clicked');
});

image2.addEventListener('click', () => {
    image2.classList.toggle('clicked');
});

image3.addEventListener('click', () => {
    image3.classList.toggle('clicked');
});
