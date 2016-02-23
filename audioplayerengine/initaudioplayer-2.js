jQuery(document).ready(function(){

    var scripts = document.getElementsByTagName("script");

    var jsFolder = "";

    for (var i= 0; i< scripts.length; i++)

    {

        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-2\.js/i))

            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);

    }

    jQuery("#amazingaudioplayer-2").amazingaudioplayer({

        jsfolder:jsFolder,

        skinsfoldername:"",

        titleinbarwidthmode:"fixed",

        timeformatlive:"%CURRENT% / LIVE",

        volumeimagewidth:24,

        barbackgroundimage:"ff213ccd727a.jpg",

        showtime:false,

        titleinbarwidth:80,

        showprogress:true,

        random:false,

        titleformat:"%TITLE%",

        height:300,

        loadingformat:"Loading...",

        prevnextimage:"prevnext-48-48-1.png",

        showinfo:true,

        imageheight:180,

        skin:"LightBox",

        loopimage:"loop-24-24-2.png",

        loopimagewidth:24,

        showstop:false,

        prevnextimageheight:48,

        infoformat:"%ARTIST% %ALBUM%<br />%INFO%",

        stopotherplayers:true,

        showloading:false,

        forcefirefoxflash:false,

        showvolumebar:true,

        imagefullwidth:true,

        width:300,

        showtitleinbar:false,

        showloop:true,

        volumeimage:"volume-24-24-2.png",

        playpauseimagewidth:48,

        loopimageheight:24,

        tracklistitem:10,

        tracklistitemformat:"%ID%. %TITLE% <span style='position:absolute;top:0;right:0;'>%DURATION%</span>",

        prevnextimagewidth:48,

        tracklistarrowimage:"tracklistarrow-48-16-1.png",

        playpauseimageheight:48,

        showbackgroundimage:true,

        imagewidth:300,

        stopimage:"stop-48-48-0.png",

        playpauseimage:"playpause-48-48-1.png",

        showprevnext:true,

        backgroundimage:"low_day.jpg",

        autoplay:false,

        volumebarpadding:8,

        progressheight:8,

        showtracklistbackgroundimage:false,

        titleinbarscroll:true,

        showtitle:true,

        defaultvolume:-1,

        tracklistarrowimageheight:16,

        heightmode:"fixed",

        titleinbarformat:"%TITLE%",

        showtracklist:false,

        stopimageheight:48,

        volumeimageheight:24,

        stopimagewidth:48,

        volumebarheight:80,

        noncontinous:false,

        tracklistbackgroundimage:"",

        showbarbackgroundimage:false,

        showimage:true,

        tracklistarrowimagewidth:48,

        timeformat:"%CURRENT% / %DURATION%",

        showvolume:true,

        fullwidth:false,

        loop:1,

        preloadaudio:true

    });

});