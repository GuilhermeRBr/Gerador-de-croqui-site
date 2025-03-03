const cores = {
  1: '#ff8566',  
  2: '#a366ff',  
  3: '#66ff66',  
  4: '#ffff66',  
  5: '#ff3300',  
  6: '#66b3ff',  
  7: '#ff66ff',  
  8: '#a3a3c2',  
  9: '#ccff99',  
  10: '#ffbb99',  
  11: '#33ffcc',  
  12: '#ff6699',  
  13: '#6699ff',  
  14: '#ffff99',  
  15: '#ff9966',  
  16: '#9966ff',  
  17: '#66cc99',  
  18: '#cc99ff',  
  19: '#99ccff',  
  20: '#99ffcc',  
  21: '#ffcc33',  
  22: '#ccff66',  
  23: '#ff66cc',  
  24: '#33ccff',  
  25: '#9966cc',  
  26: '#66ff99',  
  27: '#ff33cc',  
  28: '#cc33ff',  
  29: '#ffcc99',  
  30: '#66ffcc',  
  31: '#ff99cc',  
  32: '#99ff66',  
  33: '#ff33ff',  
  34: '#66cc33',  
  35: '#3399ff',  
  36: '#ff3366',  
  37: '#66ff33',  
  38: '#ccff33',  
  39: '#33ff99',  
  40: '#ff99ff'  
  };

export function generatePdf(matriz, texto, semcor, tratamento) {
  console.log(matriz)
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: 'l', 
    unit: 'mm',
    format: [580, 300]
    });
  
    // Definindo o número de tratamentos

    const aleatorio = matriz
    let posX = 0;
    let posY = 40;
    // Centralizar
    let centro_x = (580 - (13.9 * tratamento)) / 2

  
    // Desenhando os retângulos e preenchendo com cores
    aleatorio.forEach(row => {
      posY += 35;  // Ajuste da posição vertical
      posX = centro_x;// Reiniciando a posição X

      row.forEach(num => {
        if(semcor == false){
          var cor = 'FFFFFF'
        } else{
          var cor = cores[num];
        }
        doc.setFillColor(cor);
        doc.rect(posX, posY, 11, 25,'F');  // Desenhando o retângulo com a cor de fundo
        doc.rect(posX, posY, 11, 25,'S');
        // Movendo a posição X para o próximo retângulo
        posX += 14;
      });
    });
  
    // Desenhando os números sobre os retângulos
    posY = 50;
    aleatorio.forEach(row => {
      posY += 35;
      posX = centro_x; 
      row.forEach(num => {
        doc.setTextColor(0, 0, 0);  // Cor do texto (preto)
        if (num > 9){
          doc.text(`T${num}`, posX+0.8, posY+5);
        } else {
          doc.text(`T${num}`, posX+2, posY+5);  // Desenha o texto centralizado
        }
        
        posX += 14;
      });
    });
    
    
    //letras
    const letras = {
      1: 'D',
      2: 'C',
      3: 'B',
      4: 'A'
    }
     
  
    // Enumerando colunas e adicionando letras
    posY = 50;
    let posnum = centro_x + 4 
    for (let i = 1; i <= tratamento; i++){
      doc.setTextColor(0, 0, 0,)
      if(i >= 1 && i < 10) {
        doc.setFontSize(20)
        doc.text(`${i}`, posnum, 212)
      }
      if (i <= 4){
        posY += 35;
        doc.setFontSize(20)
        const letra = letras[i];
        doc.text(`${letra}`, centro_x - 7, posY + 5) 
      }
      if(i > 9){
        doc.text(`${i}`, posnum -2.5, 212)
      }
      posnum+= 14;
    }
    // Escrever titulo
    doc.setFontSize(40)
    const titulo = texto.value.toUpperCase()
    const largura_texto = doc.getTextWidth(titulo);
    const centro_texto = (580 - largura_texto) / 2;
    doc.setTextColor(0, 0, 0)
    doc.text(titulo, centro_texto, 50)
  
    return doc
    }