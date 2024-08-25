const imagem = document.querySelectorAll('.imagem');
const btnvoltar = document.getElementById('voltar');
const btnproximo = document.getElementById('proximo');

let imagem1 = 0;

function slider1() {
    imagem.forEach(item => item.classList.remove('on'));  
    imagem[imagem1].classList.add('on');  
}

function proximoSlider() {
    if(imagem1 === imagem.length - 1) {
        imagem1 = 0; 
    } else {
        imagem1++;  
    }
    slider1();  
}

function voltarSlider() {
    if(imagem1 === 0) {
        imagem1 = imagem.length - 1;  
    } else {
        imagem1--;
    }
    slider1();  
}

btnproximo.addEventListener('click', proximoSlider);  
btnvoltar.addEventListener('click', voltarSlider);  
