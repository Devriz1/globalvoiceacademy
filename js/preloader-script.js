
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      

      preloader.classList.add('preloader-zoom-out');
      

      preloader.addEventListener('transitionend', () => {
        try {
          window.location.href = "main.html";
        } catch (err) {
          console.error("Redirect failed:", err);

          document.body.innerHTML = '<a id="manualRedirect" href="index.html">Click here if not redirected</a>';
          document.getElementById("manualRedirect").click();
        }
      });
    }, 4000); 
