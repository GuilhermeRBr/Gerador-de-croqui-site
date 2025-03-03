import { generatePdf} from './utils.js';


export function abrirJanela() {
    const modal = document.getElementById("janela_modal");
    modal.classList.add("abrir"); 

    modal.addEventListener("click", function(e) {
        if(e.target.id == "janela_modal" || e.target.className == "fechar") {
            modal.classList.remove("abrir");
        }
    });
}

export function clickPdf() {
    
  const tratamento = Number(document.getElementById('tratamentos').value)
  
  if (Number.isInteger(tratamento)) { 
    
    if (tratamento >= 5 && tratamento <= 40){ 

        this.innerHTML = '<div class="loading"></div>'

        const worker = new Worker('js/worker.js');
        worker.postMessage({ rows: 4, cols: tratamento });

        worker.onmessage = function (e) {
          const matriz = e.data;
          const texto = document.getElementById('input_titulo')
        
          const checkbox = document.getElementById('checkbox_cores');
          const semcor = checkbox.checked ? true : false
          
          
          const pdf = generatePdf(matriz, texto, semcor, tratamento);
          
          document.querySelector('.loading').classList.remove('loading')
          const botao = document.querySelector('#generatePdf')
          botao.innerHTML = 'Pronto'
          botao.style = 'background: #f1f5f4; color: #333; pointer-events: none;'
        
          pdf.save(texto.value)
          
          document.querySelector('.reload').innerHTML = '<button id="recarregar">Gerar novamente?</button>'
          
          document.getElementById('recarregar').addEventListener('click', function(){
          location.reload()
          })
        };

      } else {
        alert('Por favor! Digite valores entre 5 e 40')
      }}
  
      else{
        alert('Digite numeros inteiros')
      } 
  }
