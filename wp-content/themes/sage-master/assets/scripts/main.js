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
        $('.level').on('click', function() {
          $('.more-info').fadeIn('slow')
        })

        $('.more-info .close-more').on('click', function() {
          $('.more-info').fadeOut('slow')
        })

        function showGoogleMaps(position, centerPosition) {
          var position = [19.417554, -99.162323]
          var centerPosition = [19.416967, -99.1574625]
          var latLng = new google.maps.LatLng(position[0], position[1])
          var center = new google.maps.LatLng(centerPosition[0], centerPosition[1])

          if ($(window).width() < 768) {
            center = latLng
          }

          var mapOptions = {
            zoom: 16, // initialize zoom level - the max value is 21
            streetViewControl: false, // hide the yellow Street View pegman
            scaleControl: true, // allow users to zoom the Google Map
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: center,
            scrollwheel: false
          }

          var map = new google.maps.Map(document.getElementById('googlemaps'),
            mapOptions)

          // Show the default red marker at the location
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP
          })
        }

        google.maps.event.addDomListener(window, 'load', showGoogleMaps)

      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
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
