const atributte = document.querySelector("#player-1").getAttribute("src");
const playBtn = document.querySelector(".video-play-btn");
const videoPopUp = document.querySelector(".video-popup");
const videoPopUpCLose = document.querySelector(".video-popup-close");

window.onload = videoPop();

function videoPop() {
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

/*
const videoSrc = $("#player-1").attr("src");
$(".video-play-btn").on("click", function(){
  if($(".video-popup").hasClass("open")){
  $(".video-popup").removeClass("open");
  $("#player-1").attr("src", "")
  } else{
    $(".video-popup").addClass("open");
    if($("#player-1").attr("src") == ""){
      $("#player-1").attr("src", videoSrc) 
    }
  }
})
*/
