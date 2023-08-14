// nav
document.addEventListener('DOMContentLoaded', function() {
const navLink = document.querySelector("#nav");
const mobileMenu = document.querySelector("#menu");

navLink.innerHTML = `
<ul class="topnav">
<li class="HomeIcon">
<a href="index.html">Lauren Chun</a>
</li>
<li class="icon right" id="mobileIcon">
      <a href="javascript:void(0);" onclick="toggleMenu()">☰</a>
    </li>
<li class="right">
<a href="#"><img src="assets/githubIconBlue.svg" alt="Github icon"></a>
</li>
<li class="right">
<a href="https://www.linkedin.com/in/laurenmchun/"> <img src="assets/linkedinIconBlue.svg" alt="Linkedin icon"></a>
</li>
<li class="right">
<a href="about.html">About</a>
</li>
<li class="right">
<a href="https://docs.google.com/document/d/1XAlRy-PsXQY2ZET5KQn1SxifTNBqXLTjkxdr2DOhXhM/edit">Resume</a>
</li>
<li class="right">
<a href="index.html">Work</a>
</li>
</ul> 
`

////set mobile menu/////
// const mobileMenu = document.querySelector("#menu");
mobileMenu.innerHTML = `
    <ul>
      <li class="HomeIcon"><a href="#home">Lauren Chun</a></li>
      <li><a href="index.html">Work</a></li>
      <li><a href="https://docs.google.com/document/d/1XAlRy-PsXQY2ZET5KQn1SxifTNBqXLTjkxdr2DOhXhM/edit">Resume</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="#"><img src="assets/githubIcon.svg" alt="Github icon"></a><a href="https://www.linkedin.com/in/laurenmchun/"> <img src="assets/linkedinIcon.svg" alt="Linkedin icon"></a></li>
    </ul>
`

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




