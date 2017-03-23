function soupENH_initVideoAutoplay()
{
    var videos = document.getElementsByTagName('video');
    for(var i = 0; i < videos.length ; i++)
    {
        videos[i].autoplay = true;
        videos[i].loop = true;
    }
}