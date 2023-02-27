var buton = document.getElementsByClassName("buton");


for (var i = 0; i < buton.length; i++) {
  buton[i].onclick = function () {
    var panel = this.nextElementSibling;
   

    if (panel.style.maxHeight) {
      panel.style.maxHeight = NULL;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}
