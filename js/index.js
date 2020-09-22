console.log("Your index.js file is loaded correctly");

$(".btn").on("click", function(){
    $("#talk-soon-confirmation").addClass("active");
});

$(".text-change").on("click", function(){
    $("#talk-soon-confirmation").css("display", "block");
});
