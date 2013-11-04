// Set up the image files to be used.
var theImages = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array.

theImages[0] = './img/img1.jpg'
theImages[1] = './img/img2.jpg'
theImages[2] = './img/img3.jpg'
theImages[3] = './img/img4.jpg'

// do not edit anything below this line

var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.write('<img class="picture" src="'+theImages[whichImage]+'">');
}