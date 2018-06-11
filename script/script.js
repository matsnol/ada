
// only animate fish when on desktop
if (window.matchMedia('(min-width: 1200px)').matches)
{
  var pixelsScrolled = 0
  var prevPixelScrolled
  var fish1 = 0.3
  var fish2 = 0.2
  var fish3 = 0.15
  var fish4 = 0.5
  var fish5 = 0.36
  var fish6 = 0.1
  var dir = 1
  var fish = document.getElementsByClassName("seacreature");
    document.getElementById("body").onscroll = function scroll_functions() {
    pixelsScrolled = $('html,body').scrollTop();
    if ((dir===1)&&(pixelsScrolled < prevPixelScrolled)) {
      for(i = 0; i < fish.length-1;i++){
        $(fish[i]).css("transform", "rotateY(180deg)")}
      dir=-1
    }else if ((dir===-1)&&(pixelsScrolled > prevPixelScrolled)) {
      for(i = 0; i < fish.length-1;i++){
        $(fish[i]).css("transform", "rotateY(0deg)")}
      dir=1
    }

    $("#fish1").css("left", fish1*pixelsScrolled+"px")
    $("#fish2").css("right", fish2*pixelsScrolled+"px")
    $("#fish3").css("left", fish3*pixelsScrolled+"px")
    $("#fish4").css("right", -500+fish4*pixelsScrolled+"px")
    $("#fish5").css("left", 1000+fish5*pixelsScrolled+"px")
    $("#fish6wrapper").css("transform", "rotateZ("+fish6*pixelsScrolled+"deg)")

    prevPixelScrolled = pixelsScrolled
  }
}




// NEXT FUNCTIONALITY GOTTEN FROM:
// https://stackoverflow.com/questions/33486228/how-to-fade-in-reveal-one-letter-at-a-time

// Texts used in about section. Each line of the array is one page on aboutTxt
var texts = [
  "Ada Hoel is a Norwegian noise performer and producer. She is currently doing the Music Technology Master’s program at NTNU, Trondheim, where she’s researching cross-adaptive processing as a production and composition tool. She creates software to do this, and processes vocal, acoustic and electric bass, drum, synthetic sounds and field recordings",
  "To amplify the sonic aspects of her expression she also works with video art. The images are adapting to the sounds in a mix of high and low quality video footage through adaptive processing. These stong yet minimalistic visual impressions are combined with experimental soundscapes",
  "To be continued.."
          ];

// Variable used to cycle through different texts
var t = 0;
var n = texts.length;
var el = $('#fill_with_js');
playAboutTxt(0);

// Computer game text reveal function
function playAboutTxt(direction) {
  // SETTING WHAT TEXT TO PICK
  // +1 for next page, -1 for prev. Goes to last if -1 from first and vice versa
  t = (t+n+direction)%n;

  // Fjerner én av buttons når på siste/første side
  if (t==0)            {$("#prev_button").css("visibility","hidden");}
  else if((t>0)&&(t<(n-1))){ $("#prev_button").css("visibility","visible");
                        $("#next_button").css("visibility","visible");}
  else                 {$("#next_button").css("visibility","hidden");}


  // Partially writing effect
  var textElements = texts[t].split("").map(function(c) {
    return $('<span id="' + c + '">' + c + '</span>');
  });

  // Remove old text from element
  $('#fill_with_js').empty();

  var delay = 30; // Tune this for different letter delays.
  textElements.forEach(function(e, i) {
    el.append(e);
    e.hide();
    setTimeout(function() {
      e.fadeIn(0)
    }, 200 + i * delay)
  })
}



// Arrays and variable used in move_menu_box
var menu_boxes = [".one",".two",".three"]
var slides = ["#selected_performances","#bands","#audio_engineer"]

var current_slide;
move_menu_box(1);
function move_menu_box(n) {
  current_slide = n-1;
  // Setting new slide/menu and resetting the others
  for (var i = 0; i < menu_boxes.length; i++) {
    if (i==current_slide) {
      // $(menu_boxes[i]).css({"color":"#F9CF00","font-size":"2.5vw"});
      $(menu_boxes[i]).addClass("active");
      $(slides[i]).css("display","block");
    }else {
      $(menu_boxes[i]).removeClass("active");
      $(slides[i]).css("display","none");
    }
  }
}


// Animated button that shows/hides lyrics for video
// automaticly adjusts if margin changes

var shown = 0
var temp
var temp2
var margin_num_txt
var margin_txt
var margin_button

function show_lyrics(reset) {

  temp = $(".text_wrapper").css("margin-top")
  temp2 = $(".show_lyrics_button").css("bottom")
  margin_num_txt = parseInt(temp.match(/-?\d+\.?\d*/))
  if (margin_num_txt){
    margin_txt = temp
    margin_button = temp2
  }

  if(margin_num_txt){
    $(".text_wrapper").css("margin-top","0")
    $(".show_lyrics_button").css({"transform":"rotateX(180deg)","bottom":"0"})
    $(".show_lyrics_button p").css("transform","rotateX(180deg)")
  }else {
    $(".text_wrapper").css("margin-top",margin_txt)
    $(".show_lyrics_button").css({"transform":"rotateX(0deg)","bottom":margin_button})
    $(".show_lyrics_button p").css("transform","rotateX(0deg)")
  }
}
