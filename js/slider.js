const imgArry = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg'
];

let imgSlid = 0;
const imgShow = document.getElementById('slider-img');
setInterval(() =>{
    if(imgSlid >= imgArry.length){
        imgSlid = 0;
    }
    const imgUrl = imgArry[imgSlid]
    imgShow.setAttribute('src', imgUrl);
    imgSlid++;
}, 1500);