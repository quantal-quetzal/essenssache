setCorrectViewportHeight();

function setCorrectViewportHeight() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty(
    "--app-viewport-height",
    `${vh}px`
  );
  console.log(`${vh}px`);
}

function pullHandle() {
  window.scrollBy({
    top: 400,
    behavior: "smooth"
  });
}
