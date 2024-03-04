const kscircle =  document.querySelector('#circularscrollsvg');
const ksbio = document.querySelector('#bioscrollsvg');
const kstest = document.querySelector('#testimoniesscrollsvg');


const ksFeature = document.querySelector('#featuredscrollsvg');
const ksVintageThread = document.querySelector('#dealerscrollsvg');
const ksAbout =  document.querySelector('#aboutscrollsvg');

ksVintageThread.innerHTML = 
`
<div class="svg-container">
        <svg
          id="svgscreen"
          width="390"
          height="834"
          viewBox="0 0 390 844"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="svgscreen"></g>
          <g id="screen1">
            <rect id="background-screen" width="390" height="4491" rx="10" />
            <g id="submenu-button">
              <g id="submenu-spec">
                <g id="review-button">
                  <rect x="260" y="77" width="130" height="38" />
                </g>
                <g id="about-button">
                  <rect x="130" y="77" width="130" height="38" />
                </g>
                <g id="product-button">
                  <rect x="0" y="77" width="130" height="38" />
                </g>
                <rect
                  id="active-indicator"
                  y="115"
                  width="130"
                  height="4"
                  fill="#255AF6"
                />
              </g>
              <g id="action bar">
                <rect
                  id="divider"
                  y="75"
                  width="390"
                  height="2"
                  fill="#9D9D9D"
                />
              </g>
            </g>
          </g>
          <!--  -->
          <g id="header" clip-path="url(#clip0_204_3625)">
            <path
              id="Rectangle 664"
              d="M0 10C0 4.47715 4.47715 0 10 0H380C385.523 0 390 4.47715 390 10V115H0V10Z"
            />
          </g>
          <rect
            id="home-indicator"
            width="139"
            height="5"
            rx="2.5"
            transform="matrix(-1 0 0 1 264.5 8)"
            fill="#525259"
          />
          <circle id="touch" cx="42" cy="42" r="42" />
          <defs>
            <!-- main page -->
            <pattern
              id="dealerpage"
              x="0"
              y="0"
              width="390"
              height="4491"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/vintagedealer-crop2.jpg"
              />
            </pattern>
            <!-- header and submenu -->
            <pattern
              id="headerimg"
              x="0"
              y="0"
              width="390"
              height="115"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/header-knownsource.jpg"
              />
            </pattern>
            <pattern
              id="submenuimg"
              x="0"
              y="0"
              width="390"
              height="44"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/submenu-knownsource.jpg"
              />
            </pattern>
            <!-- SUBMENU TABS -->
            <!-- products -->
            <pattern
              id="products1"
              x="0"
              y="0"
              width="130"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/submenuinteract/products.jpg"
              />
            </pattern>
            <pattern
              id="products2"
              x="0"
              y="0"
              width="130"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/submenuinteract/products-hover.jpg"
              />
            </pattern>
            <pattern
              id="products3"
              x="0"
              y="0"
              width="130"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/submenuinteract/products-active.jpg"
              />
            </pattern>
            <!-- about -->
            <pattern
              id="about1"
              x="0"
              y="0"
              width="130"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/submenuinteract/about.jpg"
              />
            </pattern>
            <pattern
              id="about2"
              x="0"
              y="0"
              width="130"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/submenuinteract/about-hover.jpg"
              />
            </pattern>
            <pattern
              id="about3"
              x="0"
              y="0"
              width="130"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/submenuinteract/about-active.jpg"
              />
            </pattern>
            <!-- reviews -->
            <pattern
              id="reviews1"
              x="0"
              y="0"
              width="130"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/submenuinteract/reviews.jpg"
              />
            </pattern>
            <pattern
              id="reviews2"
              x="0"
              y="0"
              width="130"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/submenuinteract/reviews-hover.jpg"
              />
            </pattern>
            <pattern
              id="reviews3"
              x="0"
              y="0"
              width="130"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/submenuinteract/reviews-active.jpg"
              />
            </pattern>
          </defs>
        </svg>
      </div>
`
ksFeature.innerHTML =
`
<div class="svg-container">
<svg
  id="svgscreen"
  width="390"
  height="834"
  viewBox="0 0 390 844"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="svgscreen">
    <rect id="screen" width="390" height="4491" rx="10" />
  </g>
  <g id="header" clip-path="url(#clip0_204_3625)">
    <path
      id="Rectangle 664"
      d="M0 10C0 4.47715 4.47715 0 10 0H380C385.523 0 390 4.47715 390 10V115H0V10Z"
    />
  </g>
  <g id="submenu" clip-path="url(#clip0_204_3625)">
    <rect id="Rectangle 665" width="390" height="44" />
  </g>
  <g id="featured-section">
    <!-- background -->
    <g id="feature-back">
      <rect width="390" height="427" />
    </g>
    <!-- carousel -->
    <g id="carousel">
      <rect width="1068" height="345" transform="translate(29 53)" />
    </g>
    <!-- scoll dots -->
    <g id="scrolling-dots">
      <g style="--order: 1">
        <rect id="dot1" x="150" y="408" width="8" height="8" rx="4" />
      </g>
      <g style="--order: 2">
        <rect id="dot2" x="166" y="408" width="8" height="8" rx="4" />
      </g>
      <g style="--order: 3">
        <rect id="dot3" x="182" y="408" width="8" height="8" rx="4" />
      </g>
      <g style="--order: 4">
        <rect id="dot4" x="198" y="408" width="8" height="8" rx="4" />
      </g>
    </g>
  </g>
  <rect
    id="home-indicator"
    width="139"
    height="5"
    rx="2.5"
    transform="matrix(-1 0 0 1 264.5 8)"
    fill="#525259"
  />
  <circle
    id="touch3"
    cx="42"
    cy="42"
    r="42"
    fill="black"
    fill-opacity="0.2"
  />
  <defs>
    <!-- main page -->
    <pattern
      id="dealerpage"
      x="0"
      y="0"
      width="390"
      height="4491"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/vintagedealer-crop2.jpg"
      />
    </pattern>
    <!-- header and submenu -->
    <pattern
      id="headerimg"
      x="0"
      y="0"
      width="390"
      height="115"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/header-knownsource.jpg"
      />
    </pattern>
    <pattern
      id="submenuimg"
      x="0"
      y="0"
      width="390"
      height="44"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/submenu-knownsource.jpg"
      />
    </pattern>
    <!-- carousel -->
    <pattern
      id="featured-back-img"
      x="0"
      y="0"
      width="390"
      height="427"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/featured-background.jpg"
      />
    </pattern>
    <pattern
      id="carousel-img"
      x="0"
      y="0"
      width="1068"
      height="345"
      patternUnits="userSpaceOnUse"
    >
      <image xlink:href="assets/svg/knownsource/carousel.jpg" />
    </pattern>
  </defs>
</svg>
</div>
`
ksAbout.innerHTML = 
`
<div class="svg-container">
<svg
  id="svgscreen"
  width="390"
  height="834"
  viewBox="0 0 390 844"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="svgscreen"></g>
  <g id="screen2">
    <rect id="background-screen" width="390" height="4491" rx="10" />
  </g>
  <g id="submenu-button2">
    <g id="submenu-spec">
      <g id="review-button2">
        <rect x="260" y="77" width="130" height="38" />
      </g>
      <g id="about-button2">
        <rect x="130" y="77" width="130" height="38" />
      </g>
      <g id="product-button2">
        <rect x="0" y="77" width="130" height="38" />
      </g>
      <rect
        id="active-indicator2"
        y="115"
        width="130"
        height="4"
        fill="#255AF6"
      />
    </g>
    <g id="action bar">
      <rect id="divider" y="75" width="390" height="2" fill="#9D9D9D" />
    </g>
  </g>
  <g id="header" clip-path="url(#clip0_204_3625)">
    <path
      id="Rectangle 664"
      d="M0 10C0 4.47715 4.47715 0 10 0H380C385.523 0 390 4.47715 390 10V115H0V10Z"
    />
  </g>
  <rect
    id="home-indicator"
    width="139"
    height="5"
    rx="2.5"
    transform="matrix(-1 0 0 1 264.5 8)"
    fill="#525259"
  />
  <circle id="touch2" cx="42" cy="42" r="42" />
  <defs>
    <!-- main page -->
    <pattern
      id="dealerpage"
      x="0"
      y="0"
      width="390"
      height="4491"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/vintagedealer-crop2.jpg"
      />
    </pattern>
    <!-- header and submenu -->
    <pattern
      id="headerimg"
      x="0"
      y="0"
      width="390"
      height="115"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/header-knownsource.jpg"
      />
    </pattern>
    <pattern
      id="submenuimg"
      x="0"
      y="0"
      width="390"
      height="44"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/submenu-knownsource.jpg"
      />
    </pattern>
    <!-- SUBMENU TABS -->
    <!-- products -->
    <pattern
      id="products1"
      x="0"
      y="0"
      width="130"
      height="38"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/submenuinteract/products.jpg"
      />
    </pattern>
    <pattern
      id="products2"
      x="0"
      y="0"
      width="130"
      height="38"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/submenuinteract/products-hover.jpg"
      />
    </pattern>
    <pattern
      id="products3"
      x="0"
      y="0"
      width="130"
      height="38"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/submenuinteract/products-active.jpg"
      />
    </pattern>
    <!-- about -->
    <pattern
      id="about1"
      x="0"
      y="0"
      width="130"
      height="38"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/submenuinteract/about.jpg"
      />
    </pattern>
    <pattern
      id="about2"
      x="0"
      y="0"
      width="130"
      height="38"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/submenuinteract/about-hover.jpg"
      />
    </pattern>
    <pattern
      id="about3"
      x="0"
      y="0"
      width="130"
      height="38"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/submenuinteract/about-active.jpg"
      />
    </pattern>
    <!-- reviews -->
    <pattern
      id="reviews1"
      x="0"
      y="0"
      width="130"
      height="38"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/submenuinteract/reviews.jpg"
      />
    </pattern>
    <pattern
      id="reviews2"
      x="0"
      y="0"
      width="130"
      height="38"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/submenuinteract/reviews-hover.jpg"
      />
    </pattern>
    <pattern
      id="reviews3"
      x="0"
      y="0"
      width="130"
      height="38"
      patternUnits="userSpaceOnUse"
    >
      <image
        xlink:href="assets/svg/knownsource/submenuinteract/reviews-active.jpg"
      />
    </pattern>
  </defs>
</svg>
</div>
`
kscircle.innerHTML =
`
<div class="svg-container">
        <svg
          id="svgscreen"
          width="390"
          height="834"
          viewBox="0 0 390 844"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="screen4">
            <rect width="390" height="4986" rx="10" />
          </g>
          <!--  -->
          <g id="header" clip-path="url(#clip0_204_3625)">
            <path
              id="Rectangle 664"
              d="M0 10C0 4.47715 4.47715 0 10 0H380C385.523 0 390 4.47715 390 10V115H0V10Z"
            />
          </g>
          <rect
            id="home-indicator"
            width="139"
            height="5"
            rx="2.5"
            transform="matrix(-1 0 0 1 264.5 8)"
            fill="#525259"
          />
          <!-- <circle id="touch4" cx="42" cy="42" r="42" /> -->
          <defs>
            <!-- main page -->
            <pattern
              id="aboutpage"
              x="0"
              y="0"
              width="390"
              height="4986"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/aboutpage/aboutpage-img.jpg"
              />
            </pattern>
            <!-- header and submenu -->
            <pattern
              id="headerimg4"
              x="0"
              y="0"
              width="390"
              height="115"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/header-knownsource.jpg"
              />
            </pattern>
          </defs>
        </svg>
      </div>
`
ksbio.innerHTML =
`
<div class="svg-container">
        <svg
          id="svgscreen"
          width="390"
          height="834"
          viewBox="0 0 390 844"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="screen5">
            <rect width="390" height="4986" rx="10" />
          </g>
          <!--  -->
          <g id="header" clip-path="url(#clip0_204_3625)">
            <path
              id="Rectangle 664"
              d="M0 10C0 4.47715 4.47715 0 10 0H380C385.523 0 390 4.47715 390 10V115H0V10Z"
            />
          </g>
          <rect
            id="home-indicator"
            width="139"
            height="5"
            rx="2.5"
            transform="matrix(-1 0 0 1 264.5 8)"
            fill="#525259"
          />
          <!-- <circle id="touch4" cx="42" cy="42" r="42" /> -->
          <defs>
            <!-- main page -->
            <pattern
              id="aboutpage"
              x="0"
              y="0"
              width="390"
              height="4986"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/aboutpage/aboutpage-img.jpg"
              />
            </pattern>
            <!-- header and submenu -->
            <pattern
              id="headerimg4"
              x="0"
              y="0"
              width="390"
              height="115"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/header-knownsource.jpg"
              />
            </pattern>
          </defs>
        </svg>
      </div>
`
kstest.innerHTML =
`
<div class="svg-container">
        <svg
          id="svgscreen"
          width="390"
          height="834"
          viewBox="0 0 390 844"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="screen6">
            <rect width="390" height="4986" rx="10" />
          </g>
          <!--  -->
          <g id="header" clip-path="url(#clip0_204_3625)">
            <path
              id="Rectangle 664"
              d="M0 10C0 4.47715 4.47715 0 10 0H380C385.523 0 390 4.47715 390 10V115H0V10Z"
            />
          </g>
          <rect
            id="home-indicator"
            width="139"
            height="5"
            rx="2.5"
            transform="matrix(-1 0 0 1 264.5 8)"
            fill="#525259"
          />
          <!-- <circle id="touch4" cx="42" cy="42" r="42" /> -->
          <defs>
            <!-- main page -->
            <pattern
              id="aboutpage"
              x="0"
              y="0"
              width="390"
              height="4986"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/aboutpage/aboutpage-img.jpg"
              />
            </pattern>
            <!-- header and submenu -->
            <pattern
              id="headerimg4"
              x="0"
              y="0"
              width="390"
              height="115"
              patternUnits="userSpaceOnUse"
            >
              <image
                xlink:href="assets/svg/knownsource/header-knownsource.jpg"
              />
            </pattern>
          </defs>
        </svg>
      </div>

`