$( document ).ready(function() {

$( ".cross" ).hide();
$( ".popin" ).hide();
$( ".hamburger" ).click(function() {
$( ".popin" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".popin" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});