self.onmessage = function (e) {
  const { rows, cols } = e.data;

  // Função para gerar a matriz
  function geradorMatrix(rows, cols) {
    while (true) {
      const matrix = [];
      for (let r = 0; r < rows; r++) {
        const row = Array.from({ length: cols }, (_, i) => i + 1);
        row.sort(() => Math.random() - 0.5);  // Embaralha os números
        matrix.push(row);
      }

      if (matrix.every(row => new Set(row).size === cols) &&
        Array.from({ length: cols }, (_, c) => new Set(matrix.map(row => row[c])).size).every(size => size === rows)) {
        
        let isValid = true;
        for (let i = 0; i < rows - 1; i++) {
          for (let j = 0; j < cols - 1; j++) {
            if (matrix[i][j] === matrix[i + 1][j + 1] || matrix[i + 1][j] === matrix[i][j + 1]) {
              isValid = false;
              break;
            }
          }
          if (!isValid) break;
        }

        if (isValid) {
          self.postMessage(matrix);  // Envia o resultado de volta
          return;
        }
      }
    }
  }

  // Gera a matriz e envia para o script principal
  geradorMatrix(rows, cols);
};
