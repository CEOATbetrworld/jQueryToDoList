// strike(line) through specifc to-do
// we must use on "click" "li" just because .click() will not work on future elements

$("ul").on("click", "li", function () {
    $(this).toggleClass("done")
})

// Click on X to delete to-do
// we must use on "click" "span" just because .click() will not work on future elements

$("ul").on("click", "span", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    });
})

// Add new to-do

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // grap new to-to text from input
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
    }
});

$("#toggle-input").click(function () {
    $("input[type='text']").fadeToggle();
})