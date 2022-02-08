(function() {
  "use strict"; // Start of use strict

  // Show the navbar when the page is scrolled up
  var MQL = 992;
  var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  var mainNav = document.querySelector('#mainNav');

  //primary navigation slide-in effect
  if (mainNav && vw > MQL) {
    var headerHeight = mainNav.offsetHeight;
    var previousTop = window.pageYOffset;
    
    window.addEventListener('scroll', function() {
      var currentTop = window.pageYOffset;


        if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
          mainNav.classList.add('is-fixed');
        }
      }
      previousTop = currentTop;
    });
  }

})(); // End of use strict
