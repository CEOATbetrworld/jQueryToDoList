// strike through specifc to-do

$("li").click(function () {
    $(this).toggleClass("done")
})

// Click on X to delete to-do

$("span").click(function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    });
})