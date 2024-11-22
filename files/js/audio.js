Audio_soundEffectPath = "./files/audio/soundEffect_arc.mp3";
// Audio_soundEffectPath = "../musicplayer/audio/KING(Yuuma).mp3";

Audio_auideElement =  
`
<audio id='Audio_audio'>
    <source src="${Audio_soundEffectPath}" type="audio/mpeg" class="hidden">
</audio>
`

document.getElementById('bg').innerHTML += Audio_auideElement;
var Audio_audioaudio = document.getElementById('Audio_audio')

// document.getElementById('musicplayerConrol').addEventListener('click', function() {
document.body.addEventListener('click', function() {
    Audio_audioaudio.currentTime = 0.05
    Audio_audioaudio.play();
    // alert('Audio played!');
});