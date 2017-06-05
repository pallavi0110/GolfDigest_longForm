var scrollindex2=1,scrollindex3=1,scrollindex4=1,scrollindex5=1,scrollindex6=1,scrollindex7=1;
var mapscrollindex=1;
var screenlock=0;
var scrollindex=1;
var scrollindex1=1;
var currentlock=0;
var previousSvalue=0;

function trigger() {
        var checkscrollpos = $(window).scrollTop();

        if (screenlock ==1) {
                scrollTo(0,currentlock);
               // alert("hii");
        }else{
                navupdateLink(checkscrollpos);
                changebackgroundImage(checkscrollpos,31750,38730,40,170);


        scrollock(checkscrollpos,4806,4740,"scrollindex",1000);
        scrollock(checkscrollpos,15998,15398,"scrollindex2",1000);
        scrollock(checkscrollpos,9971,9000,"scrollindex1",1000);
        scrollock(checkscrollpos,24663,23900,"scrollindex4",1000);
        scrollock(checkscrollpos,29458,28300,"scrollindex5",1000);
        scrollock(checkscrollpos,32423,31700,"scrollindex6",1000);
        scrollock(checkscrollpos,21000,20000,"scrollindex3",1000);


        $("#checkscrollpos1").text(checkscrollpos);
        if (checkscrollpos > 700 ) {
            $('.shell').show();
        }
        else {
            $('.shell').hide();
        }
        if((checkscrollpos >= 0 && checkscrollpos < 4875)){
               console.log("background1 display at -- "+checkscrollpos);
                imgshow('.backstretch img.background1');
                imghide('.backstretch img.background2');
                imghide('.backstretch img.sunset');

        }
        if(checkscrollpos > 4875 && checkscrollpos< 30400){
                imgshow('.backstretch img.background2');
                imghide('.backstretch img.background1');
                imghide('.backstretch img.sunset');
        }

        //image scroll
        if(checkscrollpos <= 1981){
                jQuery(".chucktaylorimg").removeClass("chucktaylorimg-class1")
                jQuery(".chucktaylorimg").removeClass("chucktaylorimg-class");
        }
        if(checkscrollpos >= (2050 - window.innerHeight +jQuery(".chucktaylorimg").height() + 80)){
                jQuery(".chucktaylorimg").removeClass("chucktaylorimg-class1")
                jQuery(".chucktaylorimg").addClass("chucktaylorimg-class");
                var fixleft = jQuery(".chucktaylordesc:eq(0)").offset().left+jQuery(".chucktaylordesc:eq(0)").width()+39;
                jQuery(".chucktaylorimg").css("left",fixleft+"px");
        }
        if(checkscrollpos > (2698 + (929 -window.innerHeight))){
                jQuery(".chucktaylorimg").removeClass("chucktaylorimg-class")
                jQuery(".chucktaylorimg").addClass("chucktaylorimg-class1");
                jQuery(".chucktaylorimg").css("left",537+"px");
        }

        //scroll next image
        if(checkscrollpos <= (14463 - window.innerHeight +jQuery(".section3title").height() + 119)){
                jQuery(".section3title").removeClass("section3title-class1")
                jQuery(".section3title").removeClass("section3title-class");
        }
        if(checkscrollpos >= (14463 - window.innerHeight +jQuery(".section3title").height() + 120)){
                jQuery(".section3title").removeClass("section3title-class1")
                jQuery(".section3title").addClass("section3title-class");
        }
        if(checkscrollpos > (14965 + (578 -window.innerHeight))){
                jQuery(".section3title").removeClass("section3title-class")
                jQuery(".section3title").addClass("section3title-class1");
        }

      //scroll position for infographics 2
        var handinfo =jQuery('#infographicssection6').length >0?($('#infographicssection6').offset().top) - (window.innerHeight):20600;
      var handinfo_interval=Math.ceil(window.innerHeight*0.7/10);
        var perviousInfoindex=0;
        for(var infoindex=1;infoindex<=10;infoindex++){

          if(checkscrollpos > handinfo+(handinfo_interval*perviousInfoindex) && checkscrollpos <= handinfo+(handinfo_interval*(perviousInfoindex+1))){
                $('#infographicssection6 img').attr('src', 'images/Section6/GD_Longform_infographic_'+infoindex+'.jpg');
          }
          perviousInfoindex =infoindex+1;
        }

        if(checkscrollpos < 24800 && mapscrollindex == 0){
                mapscrollindex =1;
                $('#mapinfographics img').attr('src','images/GD_Longform_map_infographic/GD_Longform_map_infographic_0000_1.png');
        }
        if((checkscrollpos >= 25960 && checkscrollpos <= 28000 ) && mapscrollindex==1){

                 scrollTo(0,25960);
                screenlock =1;
                mapscrollindex=0;
                setTimeout(function(){screenlock=0;},1800);
                currentlock=25960;
                if(!jQuery.browser.mozilla || (jQuery.browser.mozilla && jQuery.browser.version > '19.0')){

                        jQuery("html").css("overflow","hidden");
                        setTimeout(function(){jQuery("html").css("overflow","visible");},1800);
                }
                var mapIndex=1;
                var myVar=setInterval(function(){
                        $('#mapinfographics img').attr('src', 'images/GD_Longform_map_infographic/GD_Longform_map_infographic_0000_'+mapIndex+'.png');
                         mapIndex=mapIndex+1;
                         if (mapIndex ==19) {
                                clearInterval(myVar);
                         }
                        },80);

        }

    }
    previousSvalue=checkscrollpos;

    }

       // trigger();   // If the page loads in the middle.


