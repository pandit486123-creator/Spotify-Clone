console.log("Welcome to Spotify");

//Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('./song/2 Khatole.mp3');

let masterPlay=document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItems=Array.from(document.getElementsByClassName('songitmes'));
let masterPlay1=document.getElementById("masterPlay1");



let songs =[
    {songName: "2 Khatola Masoom Sharma",filePath:"./song/2 Khatole.mp3",coverPath:"./image/Khatole-2-Haryanvi-2024-20250807223609-500x500.jpg"},
    {songName: "Aap Is Dhoop Mein Gustaakh Ishq ",filePath:"./song/Aap Is Dhoop Mein Gustaakh Ishq 128 Kbps.mp3",coverPath:"./image/Khatole-2-Haryanvi-2024-20250807223609-500x500.jpg"},
    {songName: "Chambal De Daku",filePath:"./song/Chambal De Daku(KoshalWorld.Com).mp3",coverPath:"./image/Khatole-2-Haryanvi-2024-20250807223609-500x500.jpg"},
    {songName: "daru badnaam",filePath:"./song/Daru_Badnaam_1.mp3",coverPath:"./image/Khatole-2-Haryanvi-2024-20250807223609-500x500.jpg"},
    {songName: "Dilbar Ki Aankhon Ka Thamma ",filePath:"./song/Dilbar Ki Aankhon Ka Thamma 128 Kbps.mp3",coverPath:"./image/Khatole-2-Haryanvi-2024-20250807223609-500x500.jpg"},
    {songName: "Gaadi 150",filePath:"./song/Gaadi 150(KoshalWorld.Com).mp3",coverPath:"./image/Khatole-2-Haryanvi-2024-20250807223609-500x500.jpg"},
    {songName: " Ghafoor The Bads Of Bollywood",filePath:"./song/Ghafoor The Bads Of Bollywood 128 Kbps.mp3",coverPath:"./image/Khatole-2-Haryanvi-2024-20250807223609-500x500.jpg"},
    {songName: "Jhoom Sharaabi De De Pyaar De",filePath:"./song/Jhoom Sharaabi De De Pyaar De 2 128 Kbps.mp3",coverPath:"./image/Khatole-2-Haryanvi-2024-20250807223609-500x500.jpg"},
    {songName: "Lofar(KoshalWorld.Com)",filePath:"./song/Lofar(KoshalWorld.Com).mp3",coverPath:"./image/Khatole-2-Haryanvi-2024-20250807223609-500x500.jpg"},
    {songName: "Naach Meri Naagin Paradox",filePath:"./song/Naach Meri Naagin Paradox 128 Kbps.mp3",coverPath:"./image/Khatole-2-Haryanvi-2024-20250807223609-500x500.jpg"},
     
]
songItems.forEach((element,i) => {
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0] .innerText =songs[i].songName
    
});
// audioElement.play();
  
//Handle play/pause click
    masterPlay.addEventListener('click',()=>{
         
        if(audioElement.paused || audioElement.currentTime<=0){
             audioElement.play();

             masterPlay.classList.remove('fa-play-circle');
             masterPlay.classList.add('fa-pause-circle');
             gif.style.opacity=1;
        }
        else{
              audioElement.pause();
           masterPlay.classList.remove('fa-pause-circle');
             masterPlay.classList.add('fa-play-circle');
             gif.style.opacity=0;
        }
                

    })
// Listen to Events

audioElement.addEventListener('timeupdate',()=>{
   
    //update seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     MyProgressBar.value =progress;
})
MyProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=MyProgressBar.value*audioElement.duration/100;
})

const makeAllPlays =() =>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
     
   })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((e)=>{
    e.addEventListener('click',(e)=>{
     makeAllPlays();
     console.log(e.target.id);
     songIndex = parseInt(e.target.id);

     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');

     
           
    
     audioElement.src =songs[songIndex].filePath;
      mastersongName.innerText =songs[songIndex].songName;
     audioElement.currentTime =0;
     audioElement.play();
      gif.style.opacity=1;
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');

    //  if(audioElement.paused || audioElement.currentTime<=0){
    //          audioElement.play();

    //          masterPlay1.classList.remove('fa-play-circle');
    //          masterPlay1.classList.add('fa-pause-circle');
    //          gif.style.opacity=1;
    //     }
    //     else{
    //           audioElement.pause();
    //        masterPlay1.classList.remove('fa-pause-circle');
    //          masterPlay1.classList.add('fa-play-circle');
    //          gif.style.opacity=0;
    //     }

    })
})

// songItems.addEventListener('click',(e)=>
// {
    
//     // element.addEventListener('click',()=>{
//      makeAllPlays();
    
//      songIndex = parseInt(e.target.id);
//      e.target .classList.remove('fa-play-circle');
//      e.target .classList.add('fa-pause-circle');
    
//      audioElement.src =songs[songIndex].filePath;
//       mastersongName.innerText =songs[songIndex].songName;
//      audioElement.currentTime =0;
//      audioElement.play();
//       gif.style.opacity=1;
//      masterPlay.classList.remove('fa-play-circle');
//      masterPlay.classList.add('fa-pause-circle');
// })



document.getElementById('next').addEventListener('click',()=>{
    console.log("hii");
     if(songIndex>=9){
        songIndex =0
     }
     else{
        songIndex +=1;
     }
     audioElement.src = songs[songIndex].filePath;
     mastersongName.innerText =songs[songIndex].songName;
     audioElement.currentTime =0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
     if(songIndex<=0){
        songIndex =0
     }
     else{
        songIndex -=1;
     }
     audioElement.src = songs[songIndex].filePath;
     mastersongName.innerText =songs[songIndex].songName;
     audioElement.currentTime =0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');

})

  masterPlay1.addEventListener('click',()=>{
         
    console.log("hello play1");
        if(audioElement.paused || audioElement.currentTime<=0){
             audioElement.play();

             masterPlay1.classList.remove('fa-play-circle');
             masterPlay1.classList.add('fa-pause-circle');
             gif.style.opacity=1;
        }
        else{
              audioElement.pause();
           masterPlay1.classList.remove('fa-pause-circle');
             masterPlay1.classList.add('fa-play-circle');
             gif.style.opacity=0;
        }
                

    })


