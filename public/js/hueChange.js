

var deg = 0;

function changeHue(){

    document.querySelector('.brush-background-two').style.filter = `hue-rotate(${deg}deg)`
    deg++;

    if(deg == 360){
        deg = 0;
    }

    setTimeout(changeHue, 200);
}
changeHue();