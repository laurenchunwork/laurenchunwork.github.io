document.addEventListener('DOMContentLoaded', function() {
const bodyIndex = document.querySelector("#body");

bodyIndex.innerHTML = `
<div class="container">
  <div class="top-container">
    <div class=""> 
    <p>Hi, my name is <span class="name">Lauren Chun</span>.
    </p>
    <p>I’m a UX Designer, I make emerging technologies easier to use.</p>
    </div>
    <div class="center-image">
    <img src="assets/personal-icon.svg" class="homeIcon" alt="geometric lotus icon"> 
    </div>
  </div>
  <div class="middle-container">
    <div class="inner-container" id="select1">
    </div>
    <div class="inner-container" id="select2">
    </div>
    <div class="inner-container" id="select3">
    </div>
    <div class="inner-container" id="select4">
    </div>
</div>
`
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");
const select4 = document.querySelector("#select4");
// const select5 = document.querySelector("#select5");

select1.innerHTML = `
  <a class="featureLink" href="dalleredesign.html">
    <img src="assets/dalle-cover.jpg" alt="A screenshot of the dall-e 2 redesigned screen with a popup overlay of an ai generated glass cat render. The screenshot is surounded by other little images of ai generated glass cats with the word cat underneath each of the squares."> 
    <h4>Dall-e 2 Redesign - Sharing/Profile <span class="yearIndex"> (2022)</span></h4>
  </a>
  <p class="gray">Case Study</p>
  <p class="tags">#UX Design #UX Research</p>
  <p class=""> A redesign of the AI image generation platform, Dall-E 2’s website for sharing of AI images with others and profile personalization.</p>

<div class="center-image">
  <button class="rounded-button" onclick="window.location.href = 'dalleredesign.html';
">
 View Project	&rarr;
 </button>
</div>
`
select2.innerHTML = `
<a class="featureLink" href="dalleredesign.html">
    <img src="assets/known-source-cover.jpg" alt="an image reads Known Source Shopping Experience Redesign"> 
  <h4>Known Source Redesign <span class="yearIndex">(2022)</span></h4>
</a>
<div class="gray">Known Source</div> 
<p class="tags">#UX Design #UX Research #XR</p>
<p class="">Redesigned of ecommerce marketplace for customer view of secondhand luxury goods.</p>
<div class="center-image">
  <button class="rounded-button" onclick="window.location.href = 'dalleredesign.html';
  "> 
  View Project	&rarr;
  </button>
</div>
`
select3.innerHTML = `
<a class="featureLink" href="twitteraccessibility.html">
  <img src="assets/twitter-cover.jpg" alt="a screenshot of newly redesigned emojis that vibrate and animate slightly to express emotion."> 
  <h4>Twitter Accessibility <span class="yearIndex"> (2022)</span></h4>
</a>
<p class="gray">With the Twitter A11y Team</p>
<p class="tags">#UX Design #UX Research #Accessibility</p>
<p class=""> An exploration on creating a way for users to express themselves in a multi-modal ways.</p>
<div class="center-image">
  <button class="rounded-button" onclick="window.location.href = 'twitteraccessibility.html';
  ">
  View Project	&rarr;
  </button>
</div>
`



select4.innerHTML = `
<a class="featureLink" href="dalleredesign.html">
  <img src="assets/chemvr-cover.jpg" alt="A screenshot of a virtual classroom with a ui with the equation for temperature reacting with particles."> 
  <h4>Chem VR <span class="yearIndex"> (2019)</span></h4>
</a>
  <p class="gray">For San Jose State University E-Campus</p>
<p class="tags">#UX Design #UI Design #VR #3D Modeling</p>
<p class="">Virtual reality application helping students understand the relationship between physical chemistry equations and the physical world.</p>
<div class="center-image">
  <button class="rounded-button" onclick="window.location.href = 'dalleredesign.html';
  "> 
    View Project	&rarr;
  </button>
</div>
`
// select5.innerHTML = `
// <img src="assets/arexplorer-cover.jpg"> 
// <h4>AR Explorer</h4>
// <p class="gray">Thesis ()</p>
// <p class="">.</p>
// `


});

//////////////////////////////÷≥