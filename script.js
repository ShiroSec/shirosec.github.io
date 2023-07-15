$(document).ready(function() {
    // Scroll to section on link click
    $("a").click(function() {
      var sectionName = $(this).attr("href");
      $("html, body").animate({
        scrollTop: $(sectionName).offset().top
      }, 800);
      return false;
    });
  
    // Generate services cards
    generateServicesCards();
  
    // Shuffle and show three cards at a time
    showServicesCards();
  
    // Animate services cards
    animateServicesCards();
  
    // Open service details modal
    $(".service-card .read-more").click(function() {
      var title = $(this).siblings("h3").text();
      var description = $(this).siblings(".description").text();
  
      $("#service-modal-title").text(title);
      $("#service-modal-description").text(description);
  
      $("#service-details-modal").fadeIn();
    });
  
    // Close service details modal
    $(".close").click(function() {
      $("#service-details-modal").fadeOut();
    });
  });
  function showServicesCards() {
    var servicesCards = $(".service-card");
    servicesCards.hide();
  
    var currentIndex = 0;
  
    function showNextThreeCards() {
      servicesCards.slice(currentIndex, currentIndex + 3).fadeIn(800);
  
      currentIndex += 3;
  
      if (currentIndex >= servicesCards.length) {
        currentIndex = 0;
      }
  
      setTimeout(showNextThreeCards, 3000);
    }
  
    showNextThreeCards();
  }
  function animateServicesCards() {
    var servicesCards = $(".service-card");
  
    function animateCard(card) {
      var maxX = $(window).width() - card.outerWidth();
      var maxY = $(window).height() - card.outerHeight();
  
      var randomX = Math.floor(Math.random() * maxX);
      var randomY = Math.floor(Math.random() * maxY);
  
      card.animate({
        left: randomX,
        top: randomY
      }, 2000, function() {
        animateCard(card);
      });
    }
  
    servicesCards.each(function() {
      animateCard($(this));
    });
  }
    
  function generateServicesCards() {
    var servicesContainer = $(".services");
    for (var i = 1; i <= 12; i++) {
      var title = "Service " + i;
      var description = "Description of Service " + i;
      var imageSrc = "service-image-" + i + ".jpg";
  
      var card = $("<div>").addClass("service-card").append(
        $("<div>").addClass("service-image").append(
          $("<img>").attr("src", imageSrc).attr("alt", title)
        ),
        $("<div>").addClass("service-details").append(
          $("<h3>").text(title),
          $("<p>").addClass("description").text(description),
          $("<a>").addClass("read-more").attr("href", "#").text("Read More")
        )
      );
  
      servicesContainer.append(card);
    }
  }
  
  /* Existing code for showServicesCards and animateServicesCards functions */
  $(document).ready(function() {
    // Change banner background color on scrolling
    $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
      if (scrollPosition > 0) {
        $(".banner").addClass("scrolled");
      } else {
        $(".banner").removeClass("scrolled");
      }
    });
  });
  