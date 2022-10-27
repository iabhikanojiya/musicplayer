let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let mastersongName = document.getElementById('mastersongName');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let previous = document.getElementById('previous');
let next = document.getElementById('next');


let songs = [
{songName:"Let Me Down Slowly", filePath:"songs/1.mp3",  coverPath:"covers/1.jpg"},
{songName:"Love Me Like You Do",filePath:"songs/2.mp3",  coverPath:"covers/2.jpg"},
{songName:"Believer", filePath:"songs/3.mp3",  coverPath:"covers/3.jpg"},
{songName:"Billionera", filePath:"songs/4.mp3",  coverPath:"covers/4.jpg"},
{songName:"Tara Rita-Dharia", filePath:"songs/5.mp3",  coverPath:"covers/5.jpg"},

]

masterPlay.addEventListener('click',()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    progressBar.value = progress;
    console.log(progressBar.value);
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;

})



songItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

    })

})

next.addEventListener('click',()=>{
    if(songIndex>4){
        songIndex = 1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})


previous.addEventListener('click',()=>{
    if(songIndex<1){
        songIndex = 5;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})




