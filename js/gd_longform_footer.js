//Livefyre Callbacks
jQuery(function() {
    if (jQuery("#livefyre").length !== 0) {
        // Render Lifefyre Comment Stream
       // CN.livefyre.main.loader().loadLivefyre();
        var paramsObj = {}; paramsObj.renderCallback = function () {
        if (typeof window.skrollr.refresh == "undefined") {
              window.skrollr=window.skrollr.init();
              setTimeout(function(){window.skrollr.refresh();},1000);
        }else{
            setTimeout(function(){window.skrollr.refresh();},1000);console.log("callback livefyre2");

        }
}
CN.livefyre.main.loader().loadLivefyre(paramsObj);
    }
    if (jQuery(".livefyre-commentcount").length !== 0) {
        // Render Livefyre Comment Count
        CN.livefyre.commentCountStyle();
    }
    if (jQuery("#commented").length !== 0) {
        CN.livefyre.mostCommented = new CN.livefyre.widgets("commented");
        CN.livefyre.mostCommented.init();
        CN.livefyre.mostCommented.mostCommented();
    }
});

MAGNET.userNav = (function($M, $) {
    var uiInfo = {
        omnitureTrack : 'personalization bar:',
        splitReg : '',
        loginUri : '/login',
        regUri : '/registration',
        updateAccountUri : '/update'
    }, track = function(e) {
        CN.stats.omniture.trackActionEvar('commentLayer', this, 'eVar40',
                uiInfo.omnitureTrack + ' ' + e.data.track);
    };
    return {
        init : function() {
            $('#loginbx').find('a#ui-logout').attr({
                href : '/user' + uiInfo.splitReg + '/logout'
            }).bind('click', {
                track : 'logout click'
            }, track).end().find('a#ui-profile').attr({
                href : "/user" + uiInfo.splitReg + uiInfo.updateAccountUri
            }).bind('click', {
                track : 'update profile click'
            }, track).end().find('a#ui-register').attr({
                href : "/user" + uiInfo.splitReg + uiInfo.regUri
            }).bind('click', {
                track : 'register click'
            }, track).end().find('a#ui-login').attr({
                href : "/user" + uiInfo.splitReg + uiInfo.loginUri
            }).bind('click', {
                track : 'login click'
            }, track);
            if ($M.user.isLoggedIn()) {
                this.setLoggedIn();
            } else {
                this.setLoggedOut();
            }
        },
        setLoggedIn : function() {
            $("#opts-login").find('#ui-username').html($M.user.username())
                    .show();
            $("#opts-login").show();
            $("#opts-logout").hide();
        },
        setLoggedOut : function() {
            $("#opts-logout").show();
            $("#opts-login").hide();
        }
    }
})(MAGNET, jQuery)