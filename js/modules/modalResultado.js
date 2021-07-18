
export default function modalResultado(){
    const fechar = document.querySelector('[data-fechar="fechar"]');
    const resultado = document.querySelector('.resultado');
    resultado.classList.remove('active');
    fechar.classList.remove('active');

    const idade = document.getElementById('idade').value = '';
    const altura = document.getElementById('altura').value = '';
    const peso = document.getElementById('peso').value = '';
}
