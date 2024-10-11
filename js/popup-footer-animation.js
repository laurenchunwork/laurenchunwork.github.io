        let lastScrollTop = 0; // Track the last scroll position
        let timeoutId = null;   // For the timeout delay
        window.addEventListener('scroll', function() {
            const footer = document.querySelector('#footer'); // Adjusted to the correct footer ID
            const animatedImage = document.getElementById('animatedImage');
            const footerPosition = footer.getBoundingClientRect().top;
            const currentScroll = window.scrollY || window.pageYOffset;
        
            // Check if the footer is in view and user is scrolling down
            if (footerPosition <= window.innerHeight && currentScroll > lastScrollTop) {
                animatedImage.classList.add('show'); // Show the image
                animatedImage.style.opacity = '1'; // Ensure opacity is 1 when shown
                animatedImage.style.transform = 'translateY(0)'; // Ensure translate is 0 when shown
                // Clear any existing timeout to prevent flicker
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            } 
            // User is scrolling up
            else if (currentScroll < lastScrollTop) {
                // Set a timeout to retract the image after 1 second
                if (!timeoutId) {
                    timeoutId = setTimeout(() => {
                        animatedImage.classList.remove('show'); // Hide the image
                        animatedImage.style.opacity = '0'; // Fade out
                        animatedImage.style.transform = 'translateY(100%)'; // Move down
                        timeoutId = null; // Reset timeoutId
                    }, 4000);
                }
            }
        
            lastScrollTop = currentScroll; // Update last scroll position
        });
        