$(document).ready(function() {
    $('#slider').nivoSlider();
});
$.getJSON("https://jsonip.com?callback=?", function (response) {
    $("#ip").text(response.ip);
});