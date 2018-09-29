var video = document.getElementsByTagName("video")[0];
if (video != undefined){
    if(video.playbackRate >= 2 ){
        video.playbackRate = 1;
    }
    else{
        video.playbackRate = video.playbackRate + 0.25;
    }
    
}


