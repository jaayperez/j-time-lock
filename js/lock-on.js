let elem = document.querySelector(".locks-on");

function screenLock() {
  elem.classList.add("lock")
  elem.classList.remove("unlock")
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function screenUnlock() {
  elem.classList.add("unlock")
  elem.classList.remove("lock")
  setTimeout(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }, 1000);
}
