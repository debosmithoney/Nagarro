var counter = 1;

document.getElementById("left-arrow").addEventListener("click", function () {
  counter--;
  document.getElementById("radio" + counter).checked = true;
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
  counter++;
  document.getElementById("radio" + counter).checked = true;
  if (counter > 4) {
    counter = 1;
  }
  console.log(
    "Right arrow clicked" +
      " " +
      counter +
      " " +
      document.getElementById("radio" + counter).checked
  );
});
