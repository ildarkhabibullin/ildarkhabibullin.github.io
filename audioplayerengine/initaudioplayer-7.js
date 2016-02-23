jQuery(document).ready(function(){

    var scripts = document.getElementsByTagName("script");

    var jsFolder = "";

    for (var i= 0; i< scripts.length; i++)

    {

        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-7\.js/i))

            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);

    }

    jQuery("#amazingaudioplayer-7").amazingaudioplayer({

        jsfolder:jsFolder,

        skinsfoldername:"",

        titleinbarwidthmode:"fixed",

        timeformatlive:"%CURRENT% / LIVE",

        volumeimagewidth:24,

        barbackgroundimage:"",

        showtime:false,

        titleinbarwidth:50,

        showprogress:false,

        random:false,

        titleformat:"%TITLE%",

        height:600,

        loadingformat:"Loading...",

        prevnextimage:"prevnext-24-24-1.png",

        showinfo:false,

        imageheight:100,

        skin:"BarWhiteTitle",

        loopimage:"loop-24-24-2.png",

        loopimagewidth:24,

        showstop:false,

        prevnextimageheight:24,

        infoformat:"By %ARTIST% %ALBUM%<br />%INFO%",

        stopotherplayers:true,

        showloading:false,

        forcefirefoxflash:false,

        showvolumebar:false,

        imagefullwidth:false,

        width:80,

        showtitleinbar:false,

        showloop:false,

        volumeimage:"volume-24-24-0.png",

        playpauseimagewidth:48,

        loopimageheight:24,

        tracklistitem:10,

        tracklistitemformat:"%ID%. %TITLE% <span style='position:absolute;top:0;right:0;'>%DURATION%</span>",

        prevnextimagewidth:24,

        tracklistarrowimage:"tracklistarrow-48-16-1.png",

        playpauseimageheight:48,

        showbackgroundimage:false,

        imagewidth:100,

        stopimage:"stop-24-24-1.png",

        playpauseimage:"playpause-48-48-1.png",

        showprevnext:false,

        backgroundimage:"",

        autoplay:false,

        volumebarpadding:8,

        progressheight:8,

        showtracklistbackgroundimage:false,

        titleinbarscroll:true,

        showtitle:false,

        defaultvolume:80,

        tracklistarrowimageheight:16,

        heightmode:"auto",

        titleinbarformat:"%TITLE%",

        showtracklist:false,

        stopimageheight:24,

        volumeimageheight:24,

        stopimagewidth:24,

        volumebarheight:50,

        noncontinous:false,

        tracklistbackgroundimage:"",

        showbarbackgroundimage:false,

        showimage:false,

        tracklistarrowimagewidth:48,

        timeformat:"%CURRENT% / %DURATION%",

        showvolume:false,

        fullwidth:false,

        loop:1,

        preloadaudio:true

    });

});