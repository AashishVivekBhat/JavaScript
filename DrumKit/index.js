function playAudio(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; //skip the non-matching keys
    audio.currentTime = 0; //reset timing
    audio.play();

    key.classList.add("play"); //adds the class when key is pressed

       /*  optional-code:
        not efficient since depends on timing(also of transition)
        eg - try increasing the transition and check results */
    //setTimeout(()=>key.classList.remove("play"),200);

}


//efficient alternative to "setTimeOut()"
function removeClass(e){  //here "e" is the different transition-ends of various css properties applied on the selected key
    if(e.propertyName!=="transform") return; // skip if not "transform"
    this.classList.remove("play"); //removes the class from the selected key("this") after "transitionEnd"
}

window.addEventListener('keydown', playAudio);

const allKeys = document.querySelectorAll(".key");
// since its "NodeList" hence can't put eventListener individually on every key
allKeys.forEach(key => key.addEventListener("transitionend", removeClass)); 
