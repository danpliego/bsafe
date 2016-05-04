/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages

        $('.level').on('click', function() {
          $('.more-info').fadeIn();
        });

        $('.more-info .close-more').on('click', function() {
          $('.more-info').fadeOut();
        });

        function showGoogleMaps() {
          var position = [19.3539765, -99.2932529];
          var centerPosition = [19.3539765, -99.2908529];
          var latLng = new google.maps.LatLng(position[0], position[1]);
          var center = new google.maps.LatLng(centerPosition[0], centerPosition[1]);

          if ($(window).width() < 768) {
            center = latLng;
          }

          var styleArray = [
            {
              featureType: "all",
              stylers: [
               { saturation: -80 }
              ]
            },{
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [
                { hue: "#00ffee" },
                { saturation: 50 }
              ]
            },{
              featureType: "poi.business",
              elementType: "labels",
              stylers: [
                { visibility: "off" }
              ]
            }
          ];

          var mapOptions = {
            zoom: 16, // initialize zoom level - the max value is 21
            streetViewControl: false, // hide the yellow Street View pegman
            scaleControl: true, // allow users to zoom the Google Map
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: center,
            scrollwheel: false,
            styles: styleArray
          };

          var map = new google.maps.Map(document.getElementById('googlemaps'),
            mapOptions);

          // Show the default red marker at the location
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP
          });
        }

        $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
            if (windscroll >= 100) {
                $('.wrapper .sect').each(function(i) {
                  if ($(this).position().top <= windscroll - 100) {
                    $('#header li.active').removeClass('active');
                    $('#header li').eq(i).addClass('active');
                  }
                });

            } else {
                $('#header li.active').removeClass('active');
                $('#header li:first').addClass('active');
            }
          }).scroll();

        google.maps.event.addDomListener(window, 'load', showGoogleMaps);

      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
