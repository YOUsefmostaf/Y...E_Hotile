$(document).ready( function ()
{
    $("form > a").click(function () {
        $(".form").slideUp(2000);
        $(".formnewaccount").slideDown(2000);

    })
    $("#sign-up").click(function () {
        alert("Account Created Successfully")
    })
    $("#login").click(function () {
        $(".form").slideDown(2000);
        $(".formnewaccount").slideUp(2000);

    })
});

