function pullHandle() {
  window.scrollBy({
    top: 400,
    behavior: "smooth",
  });
}

function hideArrow() {
  document.getElementById("arrow").style.opacity = 1 - window.scrollY / 100;
  document.getElementById("arrow").style.height = `${
    2 - window.scrollY / 100
  }rem`;
  document.getElementById("pullHandle").style.paddingTop = `${
    1.5 - window.scrollY / 100
  }rem`;
}
