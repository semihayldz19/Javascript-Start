let bas = document.getElementById("bas");

var i = 0;
while (i <= 5) {
  bas.addEventListener("click", function () {
    bas.classList.add("kaydır_sağ");
  });

  bas.addEventListener("click", function () {
    bas.classList.add("kaydır_sol");
  });

  i++;
}
