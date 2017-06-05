var scrollindex=1;
var scrollindex1=1;
var scrollindex2=1,scrollindex3=1,scrollindex4=1,scrollindex5=1,scrollindex6=1;
var mapscrollindex=1;
var screenlock=0;
var currentlock=0;
var previousSvalue=0;

    function trigger() {

    var checkscrollpos = $(window).scrollTop();
    if (screenlock ==1) {
                scrollTo(0,currentlock);
               // alert("hii");
        }else{
    navupdateLink(checkscrollpos);
    changebackgroundImage(checkscrollpos,34380,42450,40,190);
    if (checkscrollpos < 31250) {
        jQuery("#section9 .section_image").addClass("test-class32");
        jQuery("#section9 .section_image").removeClass("test-class321");
        jQuery("#section9 .section_image").removeClass("test-class322");
    }
    if (checkscrollpos <= 33430 && checkscrollpos >= 31250) {
        jQuery("#section9 .section_image").removeClass("test-class32");
        jQuery("#section9 .section_image").removeClass("test-class322");
        jQuery("#section9 .section_image").addClass("test-class321");
    }
    if (checkscrollpos >= 33435) {
        jQuery("#section9 .section_image").removeClass("test-class32");
        jQuery("#section9 .section_image").removeClass("test-class321");
        jQuery("#section9 .section_image").addClass("test-class322");
    }
        scrollock(checkscrollpos,4591,3500,"scrollindex",1000);
        scrollock(checkscrollpos,16755,15777,"scrollindex2",1000);
        scrollock(checkscrollpos,9892,8900,"scrollindex1",1000);
        scrollock(checkscrollpos,26450,25570,"scrollindex4",1000);
        scrollock(checkscrollpos,31730,29800,"scrollindex5",1000);
        scrollock(checkscrollpos,35063,33470,"scrollindex6",1000);
        scrollock(checkscrollpos,22209,20000,"scrollindex3",1000);




    //image scroll
       if(checkscrollpos <= (2133 - window.innerHeight +jQuery(".chucktaylorimg").height() + 79)){
                jQuery(".chucktaylorimg").removeClass("chucktaylorimg-class1")
                jQuery(".chucktaylorimg").removeClass("chucktaylorimg-class");
        }


        if( checkscrollpos >= (2133 - window.innerHeight +jQuery(".chucktaylorimg").height() + 80)){
                jQuery(".chucktaylorimg").removeClass("chucktaylorimg-class1")
                jQuery(".chucktaylorimg").addClass("chucktaylorimg-class");
                var fixleft = jQuery(".chucktaylordesc:eq(0)").offset().left+jQuery(".chucktaylordesc:eq(0)").width()+39;
                jQuery(".chucktaylorimg").css("left",fixleft+"px");
        }
        if(checkscrollpos > (3186 + (630 -window.innerHeight))){
                jQuery(".chucktaylorimg").removeClass("chucktaylorimg-class")
                jQuery(".chucktaylorimg").addClass("chucktaylorimg-class1");
                jQuery(".chucktaylorimg").css("left",537+"px");
        }

         $("#checkscrollpos1").text(checkscrollpos);
        if (checkscrollpos > 700 ) {
            $('.shell').show();
        }
        else {
            $('.shell').hide();
        }
        if (checkscrollpos > 1640 && checkscrollpos < 3511 || checkscrollpos > 4984 && checkscrollpos < 6083 || checkscrollpos > 7766 && checkscrollpos < 10887 ) {
            $('.blocker').show();
        }
        else {
            $('.blocker').hide();
        }

        if (checkscrollpos > 6430 ) {
          // console.log(checkscrollpos);
        }
            if (checkscrollpos > 600 ) {
            $('#languagechange').show();
        }
        else {
            $('#languagechange').hide();
        }

        if((checkscrollpos >= 0 && checkscrollpos < 4644)){
                imghide('.backstretch img.background2');
                imgshow('.backstretch img.background1');
                imghide('.backstretch img.sunset');
        }

        if(checkscrollpos > 4643 && checkscrollpos< 32600){
                imgshow('.backstretch img.background2');
                imghide('.backstretch img.background1');
                imghide('.backstretch img.sunset');
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

        if(checkscrollpos < 25950 && mapscrollindex == 0){
                mapscrollindex =1;
               $('#mapinfographics img').attr('src','images/GD_Longform_map_infographic_spanish/GD_Longform_map_infographic_0000_1.png');
        }
        if((checkscrollpos >= 27950 && checkscrollpos <= 30000) && mapscrollindex==1){
                scrollTo(0,27950);
                screenlock =1;
                mapscrollindex=0;
                setTimeout(function(){screenlock=0;},1800);
                currentlock=27950;
                if(!jQuery.browser.mozilla || (jQuery.browser.mozilla && jQuery.browser.version > '19.0')){

                        jQuery("html").css("overflow","hidden");
                        setTimeout(function(){jQuery("html").css("overflow","visible");},1800);
                }
                var mapIndex=1;
                var myVar=setInterval(function(){
                        $('#mapinfographics img').attr('src', 'images/GD_Longform_map_infographic_spanish/GD_Longform_map_infographic_0000_'+mapIndex+'.png');
                         mapIndex=mapIndex+1;
                         if (mapIndex ==19) {
                                clearInterval(myVar);
                         }
                        },100);

        }


           //scroll next image
        if(checkscrollpos <= (14894 - window.innerHeight +jQuery(".section3title").height() + 119)){
                jQuery(".section3title").removeClass("section3title-class1")
                jQuery(".section3title").removeClass("section3title-class");
        }


        if(checkscrollpos >= (14894 - window.innerHeight +jQuery(".section3title").height() + 120)){
                jQuery(".section3title").removeClass("section3title-class1")
                jQuery(".section3title").addClass("section3title-class");
        }
        if(checkscrollpos > (15553 + (618 -window.innerHeight))){
                jQuery(".section3title").removeClass("section3title-class")
                jQuery(".section3title").addClass("section3title-class1");
        }

        }
        previousSvalue=checkscrollpos;
    }




