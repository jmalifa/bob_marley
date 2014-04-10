function playPause() {
    var audioPlayer = document.getElementById('audio');

    if (audioPlayer.paused) {
        audioPlayer.play(); 
        $('.pause-btn').show();
        $('.play-btn').hide();
    } else {
        audioPlayer.pause(); 
        $('.play-btn').show();
        $('.pause-btn').hide();
    }


}

$('#wrap').animate({opacity: 0}, 0).css({
    'background-image': 'url(../images/bob.jpg)'}).animate({opacity: 1  }, 3000);