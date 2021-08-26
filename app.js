const header = document.querySelector('.navbar-inverse');
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor='rgba(0, 0, 0, 0.941)';
	} else {
		header.style.backgroundColor='transparent';
	}
});



// ===================================VIDEO===================================================
let videoPlaying = false
let videoEnded = false

function setInitialStateOfVideos() {
  document
    .querySelectorAll(`.video-projects .video .play-btn`)
    .forEach((btn) => {
      btn.classList.add("show");
      btn.classList.remove("hide");
    });

  const otherVideos = document.querySelectorAll(`.video-projects .video video`);
  otherVideos.forEach((video) => {
    video.removeAttribute("controls");
    video.pause();
  });
}

function videoControlDisplay(e) {
  setInitialStateOfVideos();
  e.target.parentNode.classList.add("hide");
  e.target.parentNode.classList.remove("show");
  const className = e.target.parentNode.classList[1];
  const video = document.querySelector(`.video-projects .${className} video`);
  console.log(video);
  video.setAttribute("controls", "");
  video.play();
  clearInterval(autoslide)
  focusVideo = Number(className.replace("video", ""))
  document
    .querySelector(`.video-projects .video-container .video${focusVideo}`)
    .scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  let videos = document.querySelectorAll(`.video-projects .video`);
  videos.forEach((video) => {
    video.style.transform = "scale(0.9)";
  });
  document.querySelector(
    `.video-projects .video-container .video${focusVideo}`
  ).style.transform = "scale(1)";
  videoPlaying = true
    video.addEventListener("ended", (event) => {
      console.log(e.target.parentNode.classList);
      e.target.parentNode.classList.add("show");
      e.target.parentNode.classList.remove("hide");
      video.removeAttribute("controls");
      videoEnded = true;
      videoPlaying = false
      return
    });
}

let playBtns = document.querySelectorAll(".video-projects .video .play-btn");
playBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => videoControlDisplay(e));
});

let focusVideo = 1;
let prevScroll = 0;

function autoslide() {

  if (!videoPlaying) {
    setInitialStateOfVideos();
  }
  let currentScroll = document.querySelector(
    ".video-projects .slide-container"
  ).scrollLeft;

  if (currentScroll === prevScroll && !videoPlaying) {
    let videos = document.querySelectorAll(`.video-projects .video`);
    videos.forEach((video) => {
      video.style.transform = "scale(0.9)";
      video.classList.remove("focus");
    });

    if (focusVideo === 7) {
      focusVideo = 1;
    }
    console.log(focusVideo)
    document.querySelector(
      `.video-projects .video-container .video${focusVideo}`
    ).style.transform = "scale(1)";

    document.querySelector(
      `.video-projects .video-container .video${focusVideo}`
    ).classList.add("focus");

    document
      .querySelector(`.video-projects .video-container .video${focusVideo}`)
      .scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    prevScroll = document.querySelector(
      ".video-projects .slide-container"
    ).scrollLeft;

    focusVideo += 1;
  } else {
    prevScroll = document.querySelector(
      ".video-projects .slide-container"
    ).scrollLeft;
  }
}
setInterval(() => {
  isInViewport(document.querySelector(`.video-projects .slide-container`)) ? autoslide() : "";
}, 3000);


function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
}




var slide = document.getElementById("slider");
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

btn1.onclick = function () {
    slide.style.transform = "translateX(0px)";
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remive('active');
};
btn2.onclick = function () {
    slide.style.transform = "translateX(-100%)";
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
};
btn3.onclick = function () {
    slide.style.transform = "translateX(-200%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    btn4.classList.remove('active');
};
btn4.onclick = function () {
    slide.style.transform = "translateX(-300%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.add('active');
};