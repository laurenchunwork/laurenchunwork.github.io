// nav
document.addEventListener('DOMContentLoaded', function() {
const navLink = document.querySelector("#nav");
const mobileMenu = document.querySelector("#menu");
const footer = document.querySelector("#footer");
const otherWork = document.querySelector("#otherwork")
const backButton = document.querySelector("#backbutton")
navLink.innerHTML = `
<ul class="topnav">
  <li class="HomeIcon">
    <a href="index.html">Lauren Chun</a>
  </li>
  <li class="right" id="aboutLink">
<a  href="about.html">About</a>
</li>
  <li class="right">
  <a href="files/laurenchun-resume-product-designer.pdf" target="_blank">Resume</a>
</li>
  <li class="icon right" id="mobileIcon">
  <button href="javascript:void(0);" onclick="toggleMenu()" title="toggle menu" class="menubutton">☰
</button> 
      </li>
      <li class="right work-drop" id="workLink">
    <a href="index.html">Work</a>
  </li>
</ul> 
`
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('nav');
  if (window.scrollY > 0) { // Adjust the scroll position threshold as needed
    navbar.classList.add('navbar-with-shadow');
  } else {
    navbar.classList.remove('navbar-with-shadow');
  }
});
if (footer !== null) {
footer.innerHTML = `
<p>© Designed by <a href="about.html">Lauren Chun</a> | Product Designer </p>
<p> <a href="https://www.linkedin.com/in/laurenmchun/">Linkedin↗</a></p>
`
}

if (otherWork !==null){
  otherWork.innerHTML = `
  <div class="otherprojects">
  <div class="header2title">
    <h2>Other work</h2>
  </div>
  <div class="catergories">
    <div class="catergory">
      <a href="3dweb.html">
      <picture> 
      <source
              srcset="assets/covers/otherwork/nacgallerytemp-color.webp"
              type="image/webp"
            />
        <img src="assets/covers/otherwork/nacgallerytemp-color.jpg" />
        </picture>
        <p>3D Interactive</p>
      </a>
    </div>
    <div class="catergory">
      <a href="3drender.html">
      <picture> 
      <source
              srcset="assets/covers/otherwork/standardhotelredesign.webp"
              type="image/webp"
            />
      <img src="assets/covers/otherwork/standardhotelredesign.jpg" />
      </picture>
      <p>3D Renders</p>
      </a>
    </div>
    <div class="catergory">
      <a href="arvr.html">
      <picture> 
      <source
              srcset="assets/covers/otherwork/soulstealer-cover.webp"
              type="image/webp"
            />
      <img src="assets/covers/otherwork/soulstealer-cover.jpg" />
      </picture>
      <p>AR/VR</p>
      </a>
    </div>
  </div>
  </div>`
}
if (backButton !==null){
  backButton.innerHTML = `
  <a href="index.html">
    <p>Back to Selected Work</p>
  </a>
  `
}
const triggerSets = document.querySelectorAll('.trigger-set');
if(triggerSets!==null){
window.addEventListener('scroll', () => {
  triggerSets.forEach((triggerSet) => {
    const trigger = triggerSet.querySelector('.trigger');
    const line = triggerSet.querySelector('.accentline');
    const triggerPosition = trigger.getBoundingClientRect().top;
    if (triggerPosition < window.innerHeight) {
      line.classList.add('enteranimate');
    }
  });
});
}
if (mobileMenu !==null){
////set mobile menu/////
// const mobileMenu = document.querySelector("#menu");
mobileMenu.innerHTML = `
    <ul>
      <li>
        <a href="index.html">Work</a>
      </li>
      <li>
        <a href="https://docs.google.com/document/d/1XAlRy-PsXQY2ZET5KQn1SxifTNBqXLTjkxdr2DOhXhM/edit">Resume</a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
    </ul>
`
}
});
// toggle mobile menu////
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (window.getComputedStyle(menu).display === "none") {
    console.log("sees none set to block")
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".work-drop");
  const dropdownContent = document.querySelector(".work-drop-content");
  if( dropdown!==null){
    dropdown.addEventListener("mouseover", function () {
      dropdownContent.style.display = "block";
  });
  dropdown.addEventListener("mouseout", function () {
      dropdownContent.style.display = "none";
  });
  }
});
/////////////ACTIVE UNDERLINE //////////////////
document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  let currentPage = window.location.pathname;
  let aboutNavItem = document.getElementById('aboutLink');
  let workNavItem = document.getElementById('workLink');
if (currentPage == '/about.html'){
  aboutNavItem.classList.add('current')
  workNavItem.classList.remove('current');
} 
else{
  workNavItem.classList.add('current')
  aboutNavItem.classList.remove('current');
}
});
//////////END OF ACTIvE UNDERLINE/////////////////
