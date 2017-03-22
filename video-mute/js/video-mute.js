function soupENH_initVideoMute()
{
    var videos = document.getElementsByTagName('video');
    for(var i = 0; i < videos.length ; i++)
    {
        videos[i].muted = true;
    }
}