// alert("Hello");

// $(document).ready(function() {
//     $("h1").css("color", "red");

// });

// $("h1").css("color", "blue");
// $("h1").css("font-size", "50px");

// $("button");

// $("h1").addClass("big-tittle margin-50");

// $("h1").removeCLass("big-tittle");

// $("h1").text("Bye");

// $("button").html("<em>Hey</em>")

// console.log($("img").attr("src"));

// $("a").attr("href", "https://www.yahoo.com");

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    console.log(event.key);
    // $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
});