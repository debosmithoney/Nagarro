document.querySelector("#copy-btn").addEventListener("click", () => {
  var text = document.querySelector("#copy-text").value;
  navigator.clipboard.writeText(text);
  console.log(text);
});
