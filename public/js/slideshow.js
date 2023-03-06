
// const imgArr = ['/public/assets/image-1.jpg',
//                 '/public/assets/image-2.jpg',
//                 '/public/assets/image-3.jpg',
//                 '/public/assets/image-4.jpg']

let imagesInContainer = document.querySelectorAll('.slideshow-container img')


let curIndex = 0;
let imageDuration = 3000;

function slideshow(){
    imagesInContainer.forEach(i=>{
        i.classList.add('hide-image');
    });

    imagesInContainer[curIndex].classList.remove('hide-image');
        

    curIndex++;
    if(curIndex == imagesInContainer.length){
        curIndex = 0;
    }
    setTimeout(slideshow, imageDuration);
}
slideshow();

