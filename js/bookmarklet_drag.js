console.log('Loaded background changing bookmarklet!!!');


javascript:(function(){


var v ="2.2.4"; // version of jquery we want to use

if (window.jQuery== undefined || window.jQuery.fn.jquery < v){

    var done = false;
    var script = document.createElement("script");
    script.src="http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js"; // load version of jQuery we specify
    script.onload = script.onreadystatechange = function(){

        if (!done && (!this.readyState || this.readyState=="loaded" || this.readyState =="complete")){

        done = true;
        initMyBookmarklet(); //If jquery is loaded now run my script

        }
    };
document.getElementsByTagName("head")[0].appendChild(script);


}else{
    initMyBookmarklet();
}

function initMyBookmarklet(){
    (window.myBookmarklet = function (){

        //YOUR CODE GOES HERE!
       script = document.createElement( "script" );
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js";
document.body.appendChild( script );
UIscript = document.createElement( "script" );
UIscript.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js";
UIscript.onload = runBookmarklet;
document.body.appendChild( UIscript );

function runBookmarklet() {
    $( "*" ).draggable();
}
    })();

}

})();

