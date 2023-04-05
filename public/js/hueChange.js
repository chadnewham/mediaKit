

let deg = 0;
let rdeg = 0;

function changeHue(){

    document.querySelector('.brush-background-two').style.filter = `hue-rotate(${deg}deg)`
    deg++;

    if(deg == 360){
        deg = 0;
    }

    setTimeout(changeHue, 200);
}
function rotateSVG(){

    document.querySelector('.brush-background-two').style.transform = `rotate(${rdeg}deg)`
    rdeg += .02;

    if(rdeg >= 360){
        rdeg = 0;
    }

    setTimeout(rotateSVG, 20);
}
changeHue();
rotateSVG();