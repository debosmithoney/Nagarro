var counter = 1;
document.getElementById("left-arrow").addEventListener("click", function () {
  document.getElementById("radio" + counter).checked = true;
  counter--;
  if (counter < 1) {
    counter = 4;
  }
  console.log(
    "left arrow clicked" +
      " " +
      document.getElementById("radio" + counter).checked
  );
});
document.getElementById("right-arrow").addEventListener("click", function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
  console.log(
    "Right arrow clicked" +
      " " +
      document.getElementById("radio" + counter).checked
  );
});
