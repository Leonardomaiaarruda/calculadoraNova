import modalResultado from './modalResultado.js'

export default function click(){

    
    const homem = document.querySelector('[data-sexo="masculino"]');
    const mulher = document.querySelector('[data-sexo="feminino"]');
    const fechar = document.querySelector('[data-fechar="fechar"]');
    const clicked = ['click', 'touchstart'];

    clicked.forEach((e) => {
        homem.addEventListener('click', () =>{
            homem.classList.add('active')
            mulher.classList.remove('active')
        });

        mulher.addEventListener('click', () =>{
            mulher.classList.add('active')
            homem.classList.remove('active')
        });

      fechar.addEventListener(e, modalResultado);
    })


}