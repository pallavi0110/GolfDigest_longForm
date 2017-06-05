function imgshow(el) {
        if (!$(el).hasClass("bglongform-show")) {
                $(el).addClass("bglongform-show");
        }
        $(el).removeClass("bglongform-hide");
}
function imghide(el) {
        if (!$(el).hasClass("bglongform-hide")) {
                $(el).addClass("bglongform-hide");
        }
        $(el).removeClass("bglongform-show");
}
function changebackgroundImage(checkposition,startPositon,endPosition,nimages,fqimages){

        for(n=0;n<nimages;n++){
                if(checkposition > startPositon+(n*fqimages) ){

                        imghide('.backstretch img.background1');
                        imghide('.backstretch img.background2')
                        imgshow('.backstretch img.sunset');
                     $('.backstretch img.sunset').attr('src', 'images/sunset/sunset_' + (n+1) + '.jpg');
                }
                if(checkposition>endPosition){
                        $('.backstretch img.sunset').attr('src', '');
                }
        }
}
function scrollock(checkscrollpos,positionValue,unlockPosition,exPression,stime){
        if((checkscrollpos < unlockPosition) && eval(exPression+"== 0")){
                eval(exPression+"=1");
        }
        if((checkscrollpos >= positionValue && checkscrollpos <= (positionValue+300)) && eval(exPression+"== 1")){
                scrollTo(0,positionValue);
                screenlock =1;
                setTimeout(function(){screenlock=0;},stime);
                eval(exPression+"=0");
                currentlock=positionValue;
        if(!jQuery.browser.mozilla || (jQuery.browser.mozilla && jQuery.browser.version > '19.0')){

                jQuery("html").css("overflow","hidden");
                setTimeout(function(){jQuery("html").css("overflow","visible");},1000);
        }
        }

}
function navupdateLink(chkpos){
        chkpos = chkpos+55;

        if (chkpos < jQuery("#sectionbreak1").offset().top) {
                triggerEvent("track-screen-change", {screen : "1"});
        }
        if (chkpos >= jQuery("#sectionbreak1").offset().top && chkpos < jQuery("#sectionbreak2").offset().top) {
                triggerEvent("track-screen-change", {screen : "2"});
        }
        if (chkpos >= jQuery("#sectionbreak2").offset().top && chkpos < jQuery("#sectionbreak3").offset().top) {
                triggerEvent("track-screen-change", {screen : "3"});
        }
        if (chkpos >= jQuery("#sectionbreak3").offset().top && chkpos < jQuery("#sectionbreak5").offset().top) {
                triggerEvent("track-screen-change", {screen : "4"});
        }
        if (chkpos >= jQuery("#sectionbreak5").offset().top && chkpos < jQuery("#sectionbreak6").offset().top) {
                triggerEvent("track-screen-change", {screen : "5"});
        }
        if (chkpos >= jQuery("#sectionbreak6").offset().top && chkpos < jQuery("#sectionbreak7").offset().top) {
                triggerEvent("track-screen-change", {screen : "6"});
        }
        if (chkpos >= jQuery("#sectionbreak7").offset().top && chkpos < jQuery("#sectionbreak9").offset().top) {
                triggerEvent("track-screen-change", {screen : "7"});
        }
        if (chkpos >= jQuery("#sectionbreak9").offset().top) {
                triggerEvent("track-screen-change", {screen : "8"});
        }
}
$(document).ready(function(){

        if(window.innerWidth>=1350){
                $(".fixed_bg").addClass("align-center");
        }
        setTimeout(function(){$( ".black-over" ).fadeOut( 2600, "linear", function() {
                        jQuery(".black-over").css("display","none");
                });},700);

        //fb share
        jQuery('.fbshare').on('click',function(){
                var url=location.href;
                var title =document.title;
                var descr = $("meta[name='description']").attr("content");
                var image ="";
                var winTop = (screen.height / 2) - 175;
                var winLeft = (screen.width / 2) - 260;
                CN.stats.omniture.trackActionEvar('fbcomment', this, 'eVar37', 'facebook');
                window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + 560 + ',height=' + 350);
        });

        //tweet share

        jQuery('.twshare').on('click',function(){
            var url=location.href;
            var title =document.title;
            var descr =  $("meta[name='description']").attr("content")
            var image ="";
            var winTop = (screen.height / 2) - 175;
            var winLeft = (screen.width / 2) - 260;
            CN.stats.omniture.trackActionEvar('fbcomment', this, 'eVar37', 'twitter');
            window.open('http://www.twitter.com/share?text=' + descr + '&url=http://golfdig.st/1itGkAi&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + 560 + ',height=' + 350);
        });

        var triggers = $(".overlay").overlay({

                // some mask tweaks suitable for modal dialogs
                mask: {
                  color: '#fff',
                  loadSpeed: 200,
                  opacity: 0.4
                },

                closeOnClick: false
            });
        $(window).scroll(trigger);

        $(".social-links-down").click(function(){
              $("#socialdropdown").slideToggle(500);
        });



        $(window).scroll(function () {
                $("#socialdropdown").hide();
                $("#caretakerdropdown").hide();
        });
        if ( window.innerHeight  >740) {
                //code

                $("#dialog .dialog-body,#dialog1 .dialog-body,#dialog2 .dialog-body,#dialog3 .dialog-body").addClass("dialog-resize");

        }

        $(document).on("track-screen-change", trackScreenChangeHandler);
        $(document).on("on-screen-change", onScreenChangeHandler);
        $(".overlay").on("click", function(){
           window.console && console.log("overlay clicked");
           CN.stats.omniture.trackAction('overlayOpen', this);
        });
        $(".download-link").on("click", function(){
           window.console && console.log("download link clicked");
           CN.stats.omniture.trackAction('fileDownload', this, {events: 'event19'});
        });
        if((jQuery.browser.msie && parseInt(jQuery.browser.version,10) < 9)){
             jQuery('body').prepend('<div class="unsupported_browser"><div class="warning_msg">Please note: Your web browser will not fully support this longform feature. Please upgrade to the latest version of <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Internet Explorer</a>, <a href="https://www.google.com/intl/en/chrome/browser/">or use Chrome</a>, <a href="http://www.mozilla.org/en-US/firefox/new/">Firefox</a><a href="http://www.apple.com/safari/"> or Safari</a></div></div>');
        }

        jQuery("#livefyre").on("click",function(){
                console.log("clicked in livefyre");
                if (typeof window.skrollr.refresh == "undefined") {
                        window.skrollr=window.skrollr.init();
                        window.skrollr.refresh();

                }else{
                        window.skrollr.refresh();

                }
                });


        });




function triggerEvent(eventName, params){
    $.event.trigger({
        type: eventName,
        params: params
    });
}


var currentScreenNum = 0;
function trackScreenChangeHandler(event){
    //update Navigation elements
    if(currentScreenNum === 0){
        currentScreenNum = event.params.screen;
    } else if(currentScreenNum != event.params.screen){
        currentScreenNum = event.params.screen;
        triggerEvent("on-screen-change", event.params);
    }
    $('.s1 a').removeClass('active');
    $('#nav'+ event.params.screen+' a').addClass('active');
    window.console && console.log("screen track "+ event.params.screen);
}

function onScreenChangeHandler(event){
    //update Navigation elements

    window.console && console.log("screen change "+ event.params.screen);
    CN.stats.omniture.setContentTitle("Screen "+event.params.screen+" : "+$('title').text());
    CN.stats.omniture.doPageTracking();

    //comscore PV call
    $.ajax({
        type : 'GET',
        url : '/pv.xml',
        dataType : 'xml',
        success : function(data) {
            try {
                COMSCORE.beacon({c1:"2", c2: "6035094"});
                CN.debug.info("Comscore Non-Conventional Page view triggered.");
            } catch(e) {
                CN.debug.error('COMSCORE beacon call page view failed' + e.message);
            }
        },
        error : function(xhr, textStatus) {
            CN.debug.error('page view xml load failed, probably 404: ' + textStatus);
        }
    });
}

