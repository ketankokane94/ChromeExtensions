// fetch the vide tag
// if multiple videos are playing then just get the first one
// Should I simply increase playback speed of all the videos on the page ?

var video = document.getElementsByTagName("video")[0];
if (video != undefined){
    if(video.playbackRate >= 2 ){
        video.playbackRate = 1;
    }
    else{
        video.playbackRate = video.playbackRate + 0.25;
    }
}
