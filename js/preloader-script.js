// Start the animation after 4 seconds (leaving 1s for animation before redirect)
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      
      // Add the zoom-out animation class
      preloader.classList.add('preloader-zoom-out');
      
      // Listen for when the animation completes
      preloader.addEventListener('transitionend', () => {
        try {
          window.location.href = "index.html";
        } catch (err) {
          console.error("Redirect failed:", err);
          // Fallback: Click-triggered redirect
          document.body.innerHTML = '<a id="manualRedirect" href="index.html">Click here if not redirected</a>';
          document.getElementById("manualRedirect").click();
        }
      });
    }, 4000); // Reduced from 5s to 4s to account for 1s animation