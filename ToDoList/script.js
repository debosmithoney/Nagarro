$("#newData").submit(function (e) {
  e.preventDefault();
  var todoText = $("#addnew").val();
  $("#addnew").val("");
  $("#listContent").append(
    "<li class='flex justify-around text-xl'>" +
      todoText +
      "<span><i class='fa-solid fa-trash cursor-pointer hover:scale-120' ></i></span></li>"
  );
});

$("ul").on("click", "i", function (e) {
  $(this)
    .closest("li")
    .fadeOut(500, function () {
      $(this).remove();
    });
});