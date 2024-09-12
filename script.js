// header

$(document).ready(function(){
  $('.header__burger').click(function(){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

$(document).ready(function(){
  $(".header__link").click(function(){
      if ($(window).width() < 767){
      $('.header__menu').hide();
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').removeClass('lock');
  }
  }); 
  $(".header__logo").click(function(){
      if ($(window).width() < 767){
      $('.header__menu').hide();
      $('.header__burger, .header__menu').removeClass('active');
      $('body').removeClass('lock');
  }
  });
  $(".header__burger, .header__link, .header__logo").click(function(){
      $('.header__menu').show(); 
  });
}); 


$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header").removeClass("active");
      }
  });
});

// header

// section appear

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.fade-in-section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Change to 1.0 to ensure the section is fully visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});

// section appear

// slider

let slideIndex = 1;
showSlides(slideIndex);

// Call plusSlides automatically every 5 seconds
let slideInterval = setInterval(() => {
  plusSlides(1);
}, 10000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot_active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " dot_active";
}

// Function to pause the slideshow when mouse is over it
function pauseSlideshow() {
  clearInterval(slideInterval);
}

// Function to resume the slideshow when mouse leaves it
function resumeSlideshow() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 10000);
}

// slider

// portfolio appear

$(document).ready(function() {
  function showItems(items, startIndex, count) {
      $(items).slice(startIndex, startIndex + count).each(function(index, item) {
          setTimeout(function() {
              $(item).addClass('show');
          }, index * 300); // Delay each item by 300ms for a staggered effect
      });
  }

  function setupPortfolioAnimation() {
      var items = $('.portfolio__item');
      var itemsToShow = 3; // Default to 3 items on larger screens

      if ($(window).width() > 768 && $(window).width() < 1200) {
          itemsToShow = 2; // Show 2 items on medium screens
      }

      // Initially hide all items
      items.removeClass('show');

      // Intersection Observer to detect when the section is in view
      var observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                  showItems(items, 0, itemsToShow);
                  observer.disconnect(); // Stop observing after animation starts
              }
          });
      }, { threshold: 0.7 });

      observer.observe(document.querySelector('#portfolio'));

      // Button click to show more items
      $('.btn').on('click', function() {
          var startIndex = items.filter('.show').length;
          showItems(items, startIndex, itemsToShow);

          // Hide the button if all items are shown
          if (startIndex + itemsToShow >= items.length) {
              $(this).hide();
          }
      });
  }

  setupPortfolioAnimation();
});

// portfolio appear

// services appear

$(document).ready(function() {
  function showItems(items, startIndex, count) {
      $(items).slice(startIndex, startIndex + count).each(function(index, item) {
          setTimeout(function() {
              $(item).addClass('show');
          }, index * 300); // Delay each item by 300ms for a staggered effect
      });
  }

  function setupServicesAnimation() {
      var items = $('.services__item');
      var itemsToShow = 4; // Default to 4 items on larger screens

      // Initially hide all items
      items.removeClass('show');

      // Intersection Observer to detect when the section is in view
      var observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                  showItems(items, 0, itemsToShow);
                  observer.disconnect(); // Stop observing after animation starts
              }
          });
      }, { threshold: 0.9 });

      observer.observe(document.querySelector('#services'));
  }

  setupServicesAnimation();
});

// services appear
