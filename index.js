const listAudio = [];
const listOfKeys = ["w", "a", "s", "d", "j", "k", "l"];
const buttonW = document.querySelectorAll('.drum')[0];

listAudio.push("sounds/crash.mp3");
listAudio.push("sounds/kick-bass.mp3");
listAudio.push("sounds/snare.mp3");
listAudio.push("sounds/tom-1.mp3");
listAudio.push("sounds/tom-2.mp3");
listAudio.push("sounds/tom-3.mp3");
listAudio.push("sounds/tom-4.mp3");


for(let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", ()=> {
        var buttonAudio = new Audio(listAudio[i]);
        buttonAudio.play();
    })
}

document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "w":
            var audio = new Audio(listAudio[0]);
            audio.play();
            break;

        case "a":
            var audio = new Audio(listAudio[1]);
            audio.play();
            break;

        case "s":
            var audio = new Audio(listAudio[2]);
            audio.play();
            break;
            
        case "d":
            var audio = new Audio(listAudio[3]);
            audio.play();
            break;

        case "j":
            var audio = new Audio(listAudio[4]);
            audio.play();
            break;
                
        case "k":
            var audio = new Audio(listAudio[5]);
            audio.play();
            break;
        
        case "l":
            var audio = new Audio(listAudio[6]);
            audio.play();
            break;
                
        default: 
    }
})
