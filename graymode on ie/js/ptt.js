document.createElement("picture");

$(document).ready(function() {
var bw = get_browser();

    if (bw == 'msie' || bw == 'safari') {
       grayscale(document.getElementsByTagName('div'));
       grayscale(document.getElementsByTagName('body'));  
       grayscale(document.getElementsByTagName('img')); 
    }

});