$(document).ready(function () {
   
   $( "div" ).hover(
    function() {
        $( this ).css('background-color', "yellow");
    }, function() {
        $( this ).css('background-color', "red")
    }
    );
    
})