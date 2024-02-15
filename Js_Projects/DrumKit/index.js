//Logic for drumkit

window.addEventListener('keydown', (e)=>{
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if(!audio) return; //skip the non-matching keys
    audio.currentTime = 0; //reset timing
    audio.play();


    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("play"); //adds the class when key is pressed

/* ----optional-code: not efficient since depends on timing(also of transition)
        eg - try increasing the transition and check results
 */    setTimeout(()=>key.classList.remove("play"),200);

});
