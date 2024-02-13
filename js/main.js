// nav
document.addEventListener('DOMContentLoaded', function() {
const navLink = document.querySelector("#nav");
const mobileMenu = document.querySelector("#menu");
const footer = document.querySelector("#footer");
navLink.innerHTML = `
<ul class="topnav">
  <li class="HomeIcon">
    <a href="index.html">Lauren Chun</a>
  </li>
  <li class="right" id="aboutLink">
<a  href="about.html">About</a>
</li>
  <li class="right">
  <a href="https://drive.google.com/file/d/1uJ-kqILwWXm0wNTt8dFsc98VILNAo1B1/view?usp=sharing" target="_blank">Resume</a>
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
{/* <button href="javascript:void(0);" onclick="toggleMenu()" title="toggle menu" class="menubutton">☰
</button> */}
{/* <a href="javascript:void(0);" onclick="toggleMenu()">☰</a> */}
/* for menu dropdown hover but we arent using this rn
 <div class="work-drop-content">
<a href="#">UX</a>
<a href="#">AR/VR</a>
</div>   */

footer.innerHTML = `
<p>© Designed by <a href="about.html">Lauren Chun</a> | Product Designer </p>
<p> <a href="https://www.linkedin.com/in/laurenmchun/">Linkedin↗</a></p>

`
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
      <li>
      <a href="https://www.linkedin.com/in/laurenmchun/"> 
      <img src="assets/linkedinIcon.svg" alt="Linkedin icon">
    </a>
      </li>
    </ul>
`

});
{/* <li>
<a href="#"><img src="assets/githubIcon.svg" alt="Github icon"></a>
</li> */}

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

  dropdown.addEventListener("mouseover", function () {
      dropdownContent.style.display = "block";
  });

  dropdown.addEventListener("mouseout", function () {
      dropdownContent.style.display = "none";
  });
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
// else if (currentPage == ''){
// }
else{
  workNavItem.classList.add('current')
  aboutNavItem.classList.remove('current');
}
});



//////////END OF ACTIvE UNDERLINE/////////////////

// LOADING SCREEN CODE UNDERNEATH
// const loadingScreen = document.querySelector(".loading-screen");

// window.onload = function() {
//   setTimeout(function() {
//       hideLoadingScreen();
//   }, 1000); 
//   // 2000 milliseconds (2 seconds)
// };

// function hideLoadingScreen() {
//   const bodyContent = document.querySelector("body");

//   loadingScreen.style.display = "none";
//   bodyContent.style.display = "block";
// }

// loadingScreen.innerHTML =`
// <div class="loading-screen">
//   <div class="loader-grid">
//       <div class="loader-rectangle"></div>
//   </div>
//   <div class="loader-text">
//       <div class="loader-line"></div>
//       <div class="loader-line"></div>
//   </div>

//    <div class="loader-grid">
//       <div class="loader-rectangle"></div>
//   </div>
//   <div class="loader-text">
//       <div class="loader-line"></div>
//       <div class="loader-line"></div>
//   </div>

//   <div class="loader-grid">
//     <div class="loader-rectangle"></div>
//   </div>
//   <div class="loader-text">
//       <div class="loader-line"></div>
//       <div class="loader-line"></div>
//   </div>

//   <div class="loader-grid">
//     <div class="loader-rectangle"></div>
//   </div>
//   <div class="loader-text">
//     <div class="loader-line"></div>
//     <div class="loader-line"></div>
//   </div>
// </div>

// `

///LOADING SCREEN CODE END

