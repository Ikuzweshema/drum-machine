export default function Drum({ audioClip }) {
    function playSound() {
    (document.getElementById(audioClip.keyTrigger)).play().catch(e=>{
        console.log(e);
    })
    }
    return (
        <button className="drum-pad" onClick={playSound} id={`drum-${audioClip.keyTrigger}`}>
            <audio src={audioClip.url} id={audioClip.keyTrigger}>{audioClip.keyTrigger}</audio>
        </button>
    )
}