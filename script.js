window.addEventListener("load", sidenVises);

let points;
let liv;
let myRand;
const krop = document.querySelector("#krop_container");
const havfrue = document.querySelector("#havfrue_container");
const armL = document.querySelector("#arm_left_container");
const armR = document.querySelector("#arm_right_container");
const benL = document.querySelector("#ben_left_container");
const benR = document.querySelector("#ben_right_container");
const elefandtL = document.querySelector("#elefandt_left_container");
const elefandtR = document.querySelector("#elefandt_right_container");
const fuglL = document.querySelector("#fugl_left_container");
const fuglR = document.querySelector("#fugl_right_container");
const eyes = document.querySelector("#eyes_container");
const hale = document.querySelector("#hale_container");
const hovede = document.querySelector("#hovede_container");
const tyr = document.querySelector("#tyr_container");


const tid = document.querySelector("#tid_container");
const lvlComSreen = document.querySelector("#level_complete");
const gameOverSreen = document.querySelector("#game_over");
const gameOverknap = document.querySelector("#genstart1");
const lvlComKnap = document.querySelector("#genstart2");
const startKnap = document.querySelector("#play");
const start = document.querySelector("#start");
const gameOverPoints = document.querySelector("#game_over_points");
const lvlComPoints = document.querySelector("#level_complete_points");





const yah = document.querySelector("#sound_yah");
const bottle = document.querySelector("#sound_bottle");
const baggrund = document.querySelector("#sound_baggrund")

function sidenVises() {
    console.log("siden vises");

    startKnap.addEventListener("mousedown", startGame);
    lvlComSreen.classList.add("hide");
    gameOverSreen.classList.add("hide");


}

function startGame() {
    console.log("startGame");
    baggrund.play();


    startKnap.removeEventListener("mousedown", startGame);
    startKnap.classList.add("hide")
    start.classList.add("hide")
    lvlComSreen.classList.add("hide");
    gameOverSreen.classList.add("hide");

    points = 0;
    document.querySelector("#point_sprite").innerHTML = points;




    liv = 3;

    liv1.classList.remove("gray")
    liv2.classList.remove("gray")
    liv3.classList.remove("gray")


    //start en timer-animation
    tid.firstElementChild.classList.add("time");
    tid.addEventListener("animationend", stopSpillet);


    //Alle de elementer som har flyv som class
    krop.classList.add("flyv");
    krop.addEventListener("mousedown", clickGood);
    armL.classList.add("flyv");
    armL.addEventListener("mousedown", clickGood);
    benR.classList.add("flyv");
    benR.addEventListener("mousedown", clickGood);
    elefandtR.classList.add("flyv");
    elefandtR.addEventListener("mousedown", clickBad);
    fuglL.classList.add("flyv");
    fuglL.addEventListener("mousedown", clickBad);
    eyes.classList.add("flyv");
    eyes.addEventListener("mousedown", clickGood);
    tyr.classList.add("flyv");
    tyr.addEventListener("mousedown", clickBad);

    //delay 1-7 på alle elementerne som flyv på

    //    krop.classList.add("delay1");
    armL.classList.add("delay2");
    benR.classList.add("delay3");
    elefandtR.classList.add("delay4");
    fuglL.classList.add("delay5");
    eyes.classList.add("delay7");
    tyr.classList.add("delay6");


    //Alle de elementer som har flyv_2 som class

    havfrue.classList.add("flyv_2");
    havfrue.addEventListener("mousedown", clickBad);

    armR.classList.add("flyv_2");
    armR.addEventListener("mousedown", clickGood);
    benL.classList.add("flyv_2");
    benL.addEventListener("mousedown", clickGood);
    hovede.classList.add("flyv_2");
    hovede.addEventListener("mousedown", clickGood);
    hale.classList.add("flyv_2");
    hale.addEventListener("mousedown", clickBad);
    elefandtL.classList.add("flyv_2");
    elefandtL.addEventListener("mousedown", clickBad);
    fuglR.classList.add("flyv_2");
    fuglR.addEventListener("mousedown", clickBad);

    //delay 1-7 på alle elementerne som flyv_2 på
    havfrue.classList.add("delay1");
    armR.classList.add("delay2");
    benL.classList.add("delay3");
    hovede.classList.add("delay4");
    hale.classList.add("delay5");
    elefandtL.classList.add("delay6");
    fuglR.classList.add("delay7");

}


function clickGood() {
    console.log("clickGood");
    this.removeEventListener("mousedown", clickGood);

    this.classList.add("pause");
    this.firstElementChild.classList.add("forsvind_god");
    this.addEventListener("animationend", goodReset);

    points++;
    document.querySelector("#point_sprite").textContent = points;

    if (points >= 10) {
        console.log("points >= 10");
    }

    yah.play();

}


function goodReset() {
    console.log("goodReset");

    const left = this.classList.contains("flyv");

    this.classList = "";
    this.firstElementChild.classList = "";


    this.offsetLeft;

    if (left) {
        this.classList.add("flyv");
    } else {
        this.classList.add("flyv_2");
    }

    this.firstElementChild.classList.remove("forsvind_god");
    this.addEventListener("animationend", goodReset);
    this.addEventListener("mousedown", clickGood);

}



function clickBad() {
    console.log("clickBad");
    bottle.currentTime = 0;
    bottle.play();
    this.removeEventListener("mousedown", clickBad);

    this.classList.add("pause");
    this.firstElementChild.classList.add("forsvind");
    this.firstElementChild.classList.add("forsvind_bad");
    this.addEventListener("animationend", badReset);


    console.log("liv - " + liv);
    document.querySelector("#liv" + liv).classList.add("gray");
    liv--;


    if (liv <= 0) {
        console.log("liv <= 0");
        stopSpillet();

    }


}




function badReset() {
    console.log("badReset");
    const right = this.classList.contains("flyv_2");

    this.classList = "";
    this.firstElementChild.classList = "";


    this.offsetLeft;

    if (right) {
        this.classList.add("flyv_2");
    } else {
        this.classList.add("flyv");
    }


    this.firstElementChild.classList.remove("forsvind");
    this.firstElementChild.classList.remove("forsvind_bad");
    this.removeEventListener("animationend", badReset);
    this.addEventListener("mousedown", clickBad);
    //    this.addEventListener("mousedown", badReset);


}

function stopSpillet() {
    console.log("stopSpillet")


    tid.firstElementChild.classList.remove("time");
    tid.removeEventListener("animationend", stopSpillet);


    this.classList = "";
    this.removeEventListener("mousedown", clickGood);
    this.removeEventListener("animationend", goodReset);


    this.removeEventListener("mousedown", clickBad);
    this.removeEventListener("animationend", badReset);




    if (liv <= 0) {
        gameOver();
    } else if (points >= 10) {
        levelComplete();
    } else {
        gameOver();
    }


}

function gameOver() {
    console.log("gameOver")

        gameOverPoints.textContent = "Du fik kun " + points + " kropsdele...";    gameOverSreen.classList.remove("hide");
    gameOverknap.addEventListener("mousedown", startGame);


}


function levelComplete() {
    console.log("levelComplete")

    lvlComPoints.textContent = "Du fik samlet " + points + " kropsdele";
    lvlComSreen.classList.remove("hide");
    lvlComKnap.addEventListener("mousedown", startGame);
}








//jhioj
