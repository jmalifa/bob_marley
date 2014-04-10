function playPause() {
    var audioPlayer = document.getElementById('audio');
    $('.pause-btn').hide();

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