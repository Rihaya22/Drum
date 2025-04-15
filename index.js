const listAudio = [];
listAudio.push("sounds/crash.mp3");
listAudio.push("sounds/kick-bass.mp3");
listAudio.push("sounds/snare.mp3");
listAudio.push("sounds/tom-1.mp3");
listAudio.push("sounds/tom-2.mp3");
listAudio.push("sounds/tom-3.mp3");
listAudio.push("sounds/tom-4.mp3");


for(let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", ()=> {
        var audio = new Audio(listAudio[i]);
        audio.play();
    })
}

console.log(listAudio);
