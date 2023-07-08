for (let index = 0; index < 7; index++) { //querySelector("p").
    document.getElementsByClassName("round")[index].addEventListener("click", function(){
        var buttonName = this.querySelector("p").innerHTML;
        //  alert("hellow world " + buttonName);
        playSound2(buttonName);
    });
}

document.addEventListener("keydown", function(event){
    var keyPressed = event.key;
    playSound2(keyPressed);
});

function playSound2(buttonName){
    myButtonAnimation(buttonName);
    switch (buttonName) {
        case "a":            
            var sound = new Audio("../../resources/Drum Kit Starting Files/sounds/crash.mp3"); //"../../" --> this will u take outside grand-parent folder
            sound.play();            
            break;
        case "s":
            var sound = new Audio("../../resources/Drum Kit Starting Files/sounds/kick-bass.mp3");
            sound.play();
            break; 
        case "d":
            var sound = new Audio("../../resources/Drum Kit Starting Files/sounds/snare.mp3");
            sound.play();
            break;   
        case "w":
            var sound = new Audio("../../resources/Drum Kit Starting Files/sounds/tom-1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("../../resources/Drum Kit Starting Files/sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("../../resources/Drum Kit Starting Files/sounds/tom-3.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("../../resources/Drum Kit Starting Files/sounds/tom-4.mp3");
            sound.play();
            break;
        default:
            break;
    }
}
function playSound2(buttonName){
    myButtonAnimation(buttonName);
    switch (buttonName) {
        case "a":            
            var sound = new Audio("./sounds/crash.mp3"); //"../../" --> this will u take outside grand-parent foldera
            sound.play();            
            break;
        case "s":
            var sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
            break; 
        case "d":
            var sound = new Audio("./sounds/snare.mp3");
            sound.play();
            break;   
        case "w":
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("./sounds/tom-4.mp3");
            sound.play();
            break;
        default:
            break;
    }
}

function myButtonAnimation(myButton){
    document.querySelector("."+myButton).classList.add("activeButton");
    setTimeout(function(){
        document.querySelector("."+myButton).classList.remove("activeButton");
    }, 50);
}
