function toggleNavbar() {
  var navbarNav = document.getElementById('navbarNav');
  navbarNav.classList.toggle('active');
  var navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.classList.toggle('active');
}

function toggleDescription(id) {
  var description = document.getElementById(id);
  description.style.display = (description.style.display === 'none' || description.style.display === '') ? 'block' : 'none';
}