export default function calculo(){
    const botaoEnviar = document.querySelector('[data-button="button"]');
    const mulher = document.querySelector('[data-sexo="feminino"]');
    const homem = document.querySelector('[data-sexo="masculino"]');
    const fechar = document.querySelector('[data-fechar="fechar"]'); 
    const grid = document.querySelector('.grid'); 
    const grid2 = document.querySelector('.grid2'); 
    const grid3 = document.querySelector('.grid3'); 
   
    function calculoHomem(){
        const idade = document.getElementById('idade').value;
        const altura = document.getElementById('altura').value;
        const peso = document.getElementById('peso').value;
        const resultado = document.querySelector('.resultado');    
    
    
        const primeiraSoma = parseFloat(66.47 + (13.75 * peso ))
        const segundaSoma = parseFloat(((5 * altura)) - (6.76 * idade))
        const somaFinal = primeiraSoma + segundaSoma

        if(peso !== '' && altura !== '' && peso !== ''){
            resultado.classList.add('active')
            fechar.classList.add('active')
     
            
            grid.innerHTML = `
                    <div class="pergunta"> <h2>Em qual nivel de atividade você se encontra?</h2></div>
                    <div class="grid1">
                       <div class="enquadrando">
                            <h2>Sedentario </h2>
                            <p>as calorias ingeridas por dia serão</p>
                            <p>Perca de peso ${(somaFinal - 500).toFixed(2)} kg  </p>
                            <p>Manter Peso ${(somaFinal + 400).toFixed(2)} kg </p>
                            <p>Ganhar Massa ${(somaFinal + 600).toFixed(2)} kg </br></p>
                       </div>
                    </div>`;

            grid2.innerHTML = `
                <div class="grid2">
                    <div class="enquadrando">
                        <h2>Atividade Moderada</h2>
                        <p>as calorias ingeridas por dia serão</p>
                        <p>Perca de peso ${((somaFinal + 300) - 500).toFixed(2)} kg  </p>
                        <p>Manter Peso ${((somaFinal + 300 ) + 500).toFixed(2)} kg </p>
                        <p>Ganhar Massa ${((somaFinal + 300 ) + 800).toFixed(2)} kg </br></p>
                    </div>
                </div>`;

            grid3.innerHTML = `
                <div class="grid3">
                    <div class="enquadrando">
                        <h2>Atividade Intensa</h2>
                        <p>as calorias ingeridas por dia serão</p>
                        <p>Perca de peso ${((somaFinal + 600) - 500).toFixed(2)} kg  </p>
                        <p>Manter Peso ${((somaFinal + 600 ) + 500).toFixed(2)} kg </p>
                        <p>Ganhar Massa ${((somaFinal + 600 ) + 800).toFixed(2)} kg </br></p>
                    </div>
                </div>`;
        }

    }


    function calculoMulher(){
    const idade = document.getElementById('idade').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.querySelector('.resultado');

    const primeiraSoma = parseFloat(655.1 + (9.56 * peso ))
    const segundaSoma = parseFloat(((1.85 * altura)) - (4.68 * idade))
    const somaFinal = primeiraSoma + segundaSoma

        if(peso !== '' && altura !== '' && peso !== ''){
            resultado.classList.add('active')
            fechar.classList.add('active')
                grid.innerHTML = `
                    <div class="pergunta"> <h2>Em qual nivel de atividade você se encontra?</h2></div>
                    <div class="grid1">
                        <div class="enquadrando">
                            <h2>Sedentario </h2>
                            <p>as calorias ingeridas por dia serão</p>
                            <p>Perca de peso ${(somaFinal - 500).toFixed(2)} kg  </p>
                            <p>Manter Peso ${(somaFinal + 400).toFixed(2)} kg </p>
                            <p>Ganhar Massa ${(somaFinal + 600).toFixed(2)} kg </br></p>
                        </div>
                    </div>`;

                grid2.innerHTML = `
                    <div class="grid2">
                        <div class="enquadrando">
                            <h2>Atividade Moderada</h2>
                            <p>as calorias ingeridas por dia serão</p>
                            <p>Perca de peso ${((somaFinal + 300) - 500).toFixed(2)} kg  </p>
                            <p>Manter Peso ${((somaFinal + 300 ) + 500).toFixed(2)} kg </p>
                            <p>Ganhar Massa ${((somaFinal + 300 ) + 800).toFixed(2)} kg </br></p>
                        </div>
                    </div>`;

                grid3.innerHTML = `
                    <div class="grid3">
                        <div class="enquadrando">
                            <h2>Atividade Intensa</h2>
                            <p>as calorias ingeridas por dia serão</p>
                            <p>Perca de peso ${((somaFinal + 600) - 500).toFixed(2)} kg  </p>
                            <p>Manter Peso ${((somaFinal + 600 ) + 500).toFixed(2)} kg </p>
                            <p>Ganhar Massa ${((somaFinal + 600 ) + 800).toFixed(2)} kg </br></p>
                        </div>
                    </div>`;
        }
    }

    const btnEnviar = document.querySelector('.botao');
    btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(homem.classList.contains('active')){
        calculoHomem()
    }
     if(mulher.classList.contains('active')){
        calculoMulher()
    }
    
    homem.classList.remove('active');
    mulher.classList.remove('active');
})
}