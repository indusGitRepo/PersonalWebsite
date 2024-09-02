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






