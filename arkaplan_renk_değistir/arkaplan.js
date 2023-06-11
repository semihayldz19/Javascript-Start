let renk = document.querySelector(".btn");

renk.addEventListener("click", () => {
  document.body.style.background = rastgele();
});

function rastgele() {
  return `hsl( ${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
