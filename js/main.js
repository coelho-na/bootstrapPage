window.onload = [videoPop(), navBarShrink(), toCaroussel(), scrollIt()];

function videoPop() {
  const atributte = document.querySelector("#player-1").getAttribute("src");
  const playBtn = document.querySelector(".video-play-btn");
  const videoPopUp = document.querySelector(".video-popup");
  const videoPopUpCLose = document.querySelector(".video-popup-close");

  playBtn.addEventListener("click", function () {
    videoPopUp.classList.add("open");
  });
  videoPopUpCLose.addEventListener("click", function () {
    videoPopUp.classList.remove("open");
    if (atributte > "") {
      document.querySelector("#player-1").setAttribute("src", atributte);
    }
    // entender
  });
}

//

function navBarShrink() {
  const navBar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (this.scrollY > 75) {
      navBar.classList.add("navbar-shrink");
    } else {
      navBar.classList.remove("navbar-shrink");
    }
  });
}

function toCaroussel() {
  // Features Carousel
  $(".features__carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // App Screenshots Carousel
  $(".app-screenshots__carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Testimonials Carousel
  $(".testimonials__carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Team Carousel

  $(".team__carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  //
  $.scrollIt({
    topOffset: -50,
  });
}

// Nav Bar Shrink Function with Jquery
// $(document).ready(function () {
//   $(window).on("scroll", function () {
//     if ($(this).scrollTop() > 90) {
//       $(".navbar").addClass("navbar-shrink");
//     } else {
//       $(".navbar").removeClass("navbar-shrink");
//     }
//   });
// });

// Videop Pop UP Function with Jquery
// const videoSrc = $("#player-1").attr("src");
// $(".video-play-btn").on("click", function(){
//   if($(".video-popup").hasClass("open")){
//   $(".video-popup").removeClass("open");
//   $("#player-1").attr("src", "")
//   } else{
//     $(".video-popup").addClass("open");
//     if($("#player-1").attr("src") == ""){
//       $("#player-1").attr("src", videoSrc)
//     }
//   }
// })
