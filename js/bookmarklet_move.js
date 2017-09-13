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
       

       / the css rules that we want to copy
var all_styles = ["background","backgroundAttachment","backgroundColor","backgroundImage","backgroundPosition","backgroundRepeat","border","borderBottom","borderBottomColor","borderBottomStyle","borderBottomWidth","borderCollapse","borderColor","borderLeft","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRight","borderRightColor","borderRightStyle","borderRightWidth","borderSpacing","borderStyle","borderTop","borderTopColor","borderTopStyle","borderTopWidth","borderWidth","borderImage","borderRadius","bottom","boxShadow","captionSide","clear","clip","color","content","cssFloat","cursor","direction","display","fill","font","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","height","left","letterSpacing","lineHeight","listStyle","listStyleImage","listStylePosition","listStyleType","margin","marginBottom","marginLeft","marginRight","marginTop","maxHeight","maxWidth","minHeight","minWidth","opacity","outline","outlineColor","outlineStyle","outlineWidth","overflow","padding","paddingBottom","paddingLeft","paddingRight","paddingTop","position","quotes","right","size","tableLayout","textAlign","textDecoration","textIndent","textOutline","textShadow","textTransform","top","transform","verticalAlign","visibility","whiteSpace","width","wordSpacing","zIndex"];

i = 0;

// get all elements, not including scripts and styles
elements = document.querySelectorAll("body *:not(script):not(style)");

// run the scrambler
scrambler = setInterval(function(){

 // end when all elements have been scrambled
  if( i >= elements.length-1 ){
    clearInterval(scrambler);
    return;
  }  

 // computed style of the source element
  computed_style = window.getComputedStyle(elements[i+1]);
  
 // copy styles from source to destination element one by one
  all_styles.forEach(function(style_name){
    style_value = computed_style[style_name];
    if( style_value !== undefined && style_value !== "" ){

     // try to prevent hidden elements
      if( style_name == "display"  && style_value == "none"   ){ style_value = "block";   }
      if( style_name == "overflow" && style_value == "hidden" ){ style_value = "visible"; }
      if( style_name == "opacity" ){ style_value = "1"; }
  
     // give everything cool animated transitions
      elements[i].style.transition = "all 0.5s ease";
      
     // set the copied style
      elements[i].style[style_name] = style_value;
    }
  });  

 i++;

},50);


    })();

}

})();

