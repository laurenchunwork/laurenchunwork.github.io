document.addEventListener('DOMContentLoaded', function() {
const bodyIndex = document.querySelector("#body");
bodyIndex.innerHTML = `
<div class="container">
  <div class="top-container">
      <div class="top-container-text">
        <p class="heroName">
          Hi, my name is <a class="name" href="about.html"><span >Lauren Chun</span></a>.
        </p>
        <p class="landing-bio-text">
        I’m a product designer, passionate about creating pleasing digital experiences with interaction and 3D.</p>
        <div class="resumeCallouts">
        <p class="landing-bio-text-call">
        Previously worked with <a class="companyname-landing-bio" href="https://sra.samsung.com/" target="_blank"> Samsung ↗  </a> and <a href="artistcollaboration.html">various artists</a>.
        </p>    
        <p class="landing-bio-text-call">
        Graduated from<a class="companyname-landing-bio" href="https://itp.nyu.edu/itp/" target="_blank"> NYU ITP↗ </a>,<a class="companyname-landing-bio" href="https://cadre.sjsu.edu/" target="_blank"> SJSU CADRE Media Lab↗ .</a>
        </p>  
        </div>
      </div>
      <div class="landing-icon">
    <dotlottie-player src="https://lottie.host/5b1743ac-8e77-43bc-86b7-c243701e00d6/lVCuYnqr5U.json" background="transparent" speed="1" style="width: 400px;" loop autoplay></dotlottie-player>
      </div>
  </div>
    <div class="header2title"> 
      <h2>Selected Work</h2> 
    </div>
    <div class="inner-container" id="select1">
    </div>
    <hr class="divider">
    <div class="inner-container" id="select2">
    </div>
    <hr class="divider">
     <div class="inner-container" id="select4">
    </div>
</div>
`
{/* <div class="inner-container" id="select3">
</div> */}
//   <img src="assets/icon-landingpage.png"  alt="icon of a geometric lotus flower in black and white">

// <div class="inner-container" id="select3">
// </div>
// <div class="inner-container" id="select4">
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
// const select3 = document.querySelector("#select3");
const select4 = document.querySelector("#select4");

select1.innerHTML = `
<div class="portfolioIndexText">
  <a href="sraintern.html"><h4>Samsung Research America XR Design</h4></a>
  <a href="sraintern.html"><p>UX Design, Interaction Design, Internship</p></a>
  <a href="sraintern.html"><p class="">Designed user experience of social interaction for an AI-powered digital human in a mixed reality environment.</p></a>
</div>
</a>
<div class="portfolioIndexImage">
<a href="sraintern.html">
<img src="assets/covers/samsungintern-cover.jpg"  class="indexImage" alt="an image reads Known Source Shopping Experience Redesign"> </a>
</div>
`
select2.innerHTML = `
  <div class="portfolioIndexText">
    <a href="knownsource.html"> <h4>Known Source Redesign</h4></a>
    <a href="knownsource.html"><p>Web, Mobile, Client Project</p></a>
    <a href="knownsource.html"><p class="">Redesigned user experience for e-commerce luxury goods marketplace to promote credibility and trust in buyers and sellers.</p></a>
  </div>
  <div class="portfolioIndexImage">
  <a href="knownsource.html"><img class="indexImage" src="assets/covers/knownsource-dealerpage2.jpg" alt="an image reads Known Source Shopping Experience Redesign"> </a>
  </div>
`
select4.innerHTML = `
<div class="portfolioIndexText">
<a href="chemvr.html">
<h4>E-Learning Chemistry App</h4>
<p>UX Design, VR, UI Design, Client Project</p>
<p class="">Designed of user interface and environment for E-Learning virtual reality application.</p>
</a>
<div class="center-image">
</div>
</div>
<div class="portfolioIndexImage">
<a href="chemvr.html">
<img src="assets/covers/chemvr-cover.jpg" class="indexImage" alt="an image reads Known Source Shopping Experience Redesign"> 
</a>
</div>
`
// select3.innerHTML = `
// <div class="portfolioIndexText">
// <a href="dalleredesign.html"> <h4>Sharing Profile - Dall-e 2 Redesign</h4></a>
// <a href="dalleredesign.html"><p>UX Design, Case Study</p></a>
// <a href="dalleredesign.html"><p class="">A redesign of the AI image generation platform, Dall-E 2’s website for sharing of AI images with others and profile personalization.</p></a>
// </div>
// <div class="portfolioIndexImage">
// <a href="dalleredesign.html"><img class="indexImage" src="assets/covers/dalleredesign-cover.jpg" alt="an image reads Known Source Shopping Experience Redesign"> </a>
// </div>
// `
// select5.innerHTML = `
// <div class="portfolioIndexText">
// <h4>Chem VR</h4>
// <p>UX Design, VR Design, UI Design, Client Project</p>
// <p class="">Design of user interface and environment for E-Learning virtual reality application.</p>
// <div class="center-image">
// </div>
// </div>
// <div class="portfolioIndexImage">
// <img src="assets/chemvr/chemvr-cover.jpg" alt="an image reads Known Source Shopping Experience Redesign"> 
// </div>
// `


});
//////////////////////////////

