(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Filter Section
    console.log('ran');

document.addEventListener('click', function (e) {
  var button = e.target;
  
  if (button.getAttribute('data-reset') === 'true') {
    // Reset the filters
    var filter = button.getAttribute('data-filter');
    resetFilter(filter);
  } else {
    // Filter the tag
    var filter = button.getAttribute('data-filter');
    var tag    = button.getAttribute('data-filter-tag');
    filterTag(filter, tag);
  }
});

// Filter tag
// function filterTag (filter, tag) {
//   var items = document.querySelectorAll('.' + filter + ' > li');

//   for (var i = 0; i < items.length; i++) {
//     var itemTags = items[i].getAttribute('data-tags');

//     // Catch case with no tags
//     if (itemTags != null) {
//       if (itemTags.indexOf(tag) < 0) {
//         items[i].setAttribute('data-toggle', 'off');
//       }
//     }
//   }
// }

// Reset filters
function resetFilter (filter) {
  var items = document.querySelectorAll('.' + filter + ' > li');

  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('data-toggle', 'on');
  }
}
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);