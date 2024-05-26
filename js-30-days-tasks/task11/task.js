document.addEventListener("DOMContentLoaded", function() {
    const play = document.querySelector('.player__button.toggle');
    const video =document.querySelector('.player__video.viewer');
    const progress=document.querySelector('.progress');
    const progressBar=document.querySelector('.progress__filled');

   
    const skipBack=document.querySelector('.skip-backward');
    const skipFor=document.querySelector('.skip-forward');

    const ranges=document.querySelectorAll('.player__slider');
    // const skips=document.querySelectorAll('[data-skip]');

    

    play.addEventListener("click", playVideo);
    video.addEventListener("click", playVideo);

    skipBack.addEventListener("click", skipBackwardVideo);
    skipFor.addEventListener("click", skipforwardVideo);
    video.addEventListener('timeupdate',handleProgress);
    
    let x= false;
    function playVideo(){
       
        if(!x){
        video.play();
        play.innerHTML='❚❚'; 
        x= true; 
    } else {
        video.pause();
        x  = false;
        play.innerHTML='►'; 

        let currentTime = 0;
    }
    }

    function skipBackwardVideo(){
        video.currentTime -=parseFloat(this.dataset.skip)
    }
    function skipforwardVideo(){
        video.currentTime +=parseFloat(this.dataset.skip)

    }
    function handleRangeUpdate(){
        // console.log(this.value);
        video[this.name] = this.value;
       
    }
    function handleProgress(){
        const percent = (video.currentTime / video.duration) *100;
        progressBar.style.flexBasis =`${percent}%`;
    }
    // skips.forEach( button.addEventListener('click',skip));
    // function skip(){
    //     video.currentTime +=parseFloat(this.dataset.skip);
    // }
    ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

});