/*Inicio da Rolagem do site*/

$("#home").click(function() {
    $('html,body').animate({
        scrollTop: $(".Letreiro").offset().top},
        'slow');      
});

$("#solucoes").click(function() {
    $('html,body').animate({
        scrollTop: $("#primeiro").offset().top},
        'slow');      
});

$("#cases").click(function() {
    $('html,body').animate({
        scrollTop: $("#segundo").offset().top},
        'slow');      
});

$("#quemsomos").click(function() {
    $('html,body').animate({
        scrollTop: $("#terceiro").offset().top +49},
        'slow');      
});


$("#Clientes").click(function() {
    $('html,body').animate({
        scrollTop: $("#quarto").offset().top+49},
        'slow');      
});

$("#Contatos").click(function() {
    $('html,body').animate({
        scrollTop: $("#quinto").offset().top},
        'slow');      
});

/*Fim da Rolagem do site*/

/*Começo do header fixo site*/
var lastScroll = 0;
var isScrolled = false;
window.addEventListener("scroll", function () {
  var topHeader = document.querySelector("header");
  var currentScroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  var scrollDirection = currentScroll < lastScroll;
  var shouldToggle = isScrolled && scrollDirection;
  isScrolled = currentScroll > 1;
  topHeader.classList.toggle("active", shouldToggle);
  lastScroll = currentScroll;
});
/*Fim do header fixo site*/




/*Inicio da troca de imagens*/

let images =  ['IMGS/bhub_img_01.jpg', 'IMGS/bhub_img_02.jpg', 'IMGS/bhub_img_03.jpg', 'IMGS/bhub_img_04.jpg','IMGS/bhub_img_05.jpg'];
let images2 = ['IMGS/bcontent_img_01.jpg', 'IMGS/bcontent_img_02.jpg', 'IMGS/bcontent_img_03.jpg', 'IMGS/bcontent_img_04.jpg','IMGS/bcontent_img_05.jpg'];
let images3 = ['IMGS/bbooth_img_01.jpg', 'IMGS/bbooth_img_02.jpg', 'IMGS/bbooth_img_03.jpg', 'IMGS/bbooth_img_04.jpg','IMGS/bbooth_img_05.jpg'];
let images4 = ['IMGS/bpodcast_img_01.jpg', 'IMGS/bpodcast_img_02.jpg', 'IMGS/bpodcast_img_03.jpg', 'IMGS/bpodcast_img_04.jpg','IMGS/bpodcast_img_05.jpg'];
let images5 = ['IMGS/bchroma_img_01.jpg', 'IMGS/bchroma_img_02.jpg', 'IMGS/bchroma_img_03.jpg', 'IMGS/bchroma_img_04.jpg','IMGS/bchroma_img_05.jpg'];

let index = 0;
const imgElement = document.querySelector('#b1');
const imgElement2 = document.querySelector('#b2');
const imgElement3 = document.querySelector('#b3');
const imgElement4 = document.querySelector('#b4');
const imgElement5 = document.querySelector('#b5');

function change() {
   imgElement.src = images[index],  imgElement2.src = images2[index],  imgElement3.src = images3[index],  imgElement4.src = images4[index],  imgElement5.src = images5[index] ;
   index > 3 ? index = 0 : index++;
}
window.onload = function () {
    setInterval(change, 2500);
};

/*Fim da troca de imagens*/


