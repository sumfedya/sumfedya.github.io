var video = document.querySelector("#video1"),
    button = document.querySelector("#video-play-btn1");
    
button.addEventListener("click", function () {
    video.play()
    video.setAttribute("controls", "controls");
}, false);

$(".video-play-btn").click(function () {
    $(".video-play-btn").addClass('video-play-btn--hide');
    $(".video-header").addClass('video-play-btn--hide');
    $(".video-txt").addClass('video-play-btn--hide');
    $(".video-time").addClass('video-play-btn--hide');
    $(".video1").addClass('video--filter');
})
