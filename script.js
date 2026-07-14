/* =====================================
   PROJECT AURORA
   SCRIPT.JS FINAL
===================================== */


/* =========================
   GALAXY STAR
========================= */


const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");


canvas.width = innerWidth;
canvas.height = innerHeight;


let stars=[];


for(let i=0;i<250;i++){

    stars.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        size:Math.random()*2,

        speed:Math.random()+0.2

    });

}



function starAnimation(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    stars.forEach(s=>{

        ctx.fillStyle="white";

        ctx.beginPath();

        ctx.arc(
            s.x,
            s.y,
            s.size,
            0,
            Math.PI*2
        );

        ctx.fill();


        s.y += s.speed;


        if(s.y>canvas.height){

            s.y=0;

        }


    });


    requestAnimationFrame(starAnimation);

}


starAnimation();



window.onresize=()=>{

canvas.width=innerWidth;

canvas.height=innerHeight;

};






/* =========================
   SOUND SYSTEM
========================= */


const audio =
new AudioContext();


function sound(freq,time){

    let osc=
    audio.createOscillator();


    let gain=
    audio.createGain();


    osc.frequency.value=freq;


    gain.gain.value=.08;


    osc.connect(gain);

    gain.connect(
    audio.destination
    );


    osc.start();


    osc.stop(
    audio.currentTime+time
    );

}







/* =========================
   LOADING
========================= */


let load=0;


const bar=
document.getElementById("bar");


const loadText=
document.getElementById("loadText");


let loading=setInterval(()=>{


    load++;


    bar.style.width=
    load+"%";


    if(load%10===0){

        sound(600,.1);

    }



    if(load<30){

        loadText.innerHTML=
        "Loading Universe...";

    }


    else if(load<70){

        loadText.innerHTML=
        "Preparing Surprise...";

    }


    else{

        loadText.innerHTML=
        "Almost Ready...";

    }



    if(load>=100){


        clearInterval(loading);


        sound(900,.3);


        setTimeout(()=>{


            showScene("ai");

            startAI();


        },1000);


    }


},40);







/* =========================
   SCENE SYSTEM
========================= */


function showScene(id){


    document
    .querySelectorAll("section")
    .forEach(s=>{

        s.classList.remove(
        "active"
        );

    });



    document
    .getElementById(id)
    .classList.add(
    "active"
    );


}







/* =========================
   AI SCANNER
========================= */


function typing(element,text,speed){

let i=0;

element.innerHTML="";


let t=setInterval(()=>{


element.innerHTML+=text[i];


i++;


if(i>=text.length){

clearInterval(t);

}


},speed);


}





function startAI(){


let terminal=
document.getElementById(
"terminal"
);



typing(
terminal,
"Searching identity...\n\nConnecting...\n\nScanning memories...",
50
);



setTimeout(()=>{


document.getElementById(
"person"
).innerHTML="Zahra";


document.getElementById(
"status"
).innerHTML=
"Birthday Found";


sound(1000,.3);



},4000);



setTimeout(()=>{


showScene(
"meteorScene"
);


sound(700,.4);



},7000);



}






/* =========================
   CAKE SCENE
========================= */


setTimeout(()=>{


showScene(
"cakeScene"
);


let text=

"Happy Birthday Zahra 🎂\n\nSemoga hari ini menjadi hari yang spesial dan penuh kebahagiaan ✨";


typing(

document.getElementById("wish"),

text,

40

);



},12000);








/* =========================
   BLOW CANDLE
========================= */


document
.getElementById("blow")
.addEventListener(
"click",
()=>{


sound(300,.5);



document
.querySelector(".cake")
.innerHTML="🎂";


setTimeout(()=>{


showScene(
"ending"
);


sound(1200,.5);



},2000);



});
