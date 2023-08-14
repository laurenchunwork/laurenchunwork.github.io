////////////////////skip to active overlay//////////////////////// 
document.addEventListener("DOMContentLoaded", function(event) {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
  });
  
  window.addEventListener("click", function(event) {
    var overlay = document.getElementById("overlay");
    if (!event.target.closest(".overlay-content")) {
      overlay.style.display = "none";
    }
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  ////////////////////////Toggle active overlay menu//////////////////////
  const overlaylist = document.querySelectorAll('.overlay-content ul li');
  // Add click event listeners to each list item
overlaylist.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all list items
    overlaylist.forEach(li => li.classList.remove('active'));
    
    // Add 'active' class to the clicked list item
    item.classList.add('active');
  });
});

////////////////detail image//////////////////
const image = document.getElementById('image');

image.addEventListener('click', () => {
  image.classList.toggle('image-expanded');
});
