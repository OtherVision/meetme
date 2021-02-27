
function hiddenImage() {
    
    const image = document.getElementById("main-img");
    image.addEventListener("mouseover", function( event ) {
    
        event.target.style.visibility = "hidden";
        event.target.style.transition = "2s"
         setTimeout( function() {
            event.target.style.backgroundColor = "";
            event.target.style.visibility = "unset";
         }, 10000);
    },false );

}
hiddenImage();



