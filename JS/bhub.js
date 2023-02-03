let images = ['IMGS/bhub_img_01.jpg', 'IMGS/bhub_img_02.jpg', 'IMGS/bhub_img_03.jpg', 'IMGS/bhub_img_04.jpg','IMGS/bhub_img_05.jpg'];

let index = 0;
const imgElement = document.querySelector('#IMGBHUB');

function change() {
   imgElement.src = images[index];
   index > 3 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};