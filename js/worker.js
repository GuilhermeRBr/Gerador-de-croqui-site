self.onmessage = function (e) {
  const { rows, cols } = e.data;
  function geradorMatrix(rows, cols) {
    while (true) {
      const matriz = [];
      for (let r = 0; r < rows; r++) {
        const row = Array.from({ length: cols }, (_, i) => i + 1);
        row.sort(() => Math.random() - 0.5);
        matriz.push(row);
      }

      if (matriz.every(row => new Set(row).size === cols) &&
        Array.from({ length: cols }, (_, c) => new Set(matriz.map(row => row[c])).size).every(size => size === rows)) {
        
        let isValid = true;
        for (let i = 0; i < rows - 1; i++) {
          for (let j = 0; j < cols - 1; j++) {
            if (matriz[i][j] === matriz[i + 1][j + 1] || matriz[i + 1][j] === matriz[i][j + 1]) {
              isValid = false;
              break;
            }
          }
          if (!isValid) break;
        }

        if (isValid) {
          self.postMessage(matriz); 
          return;
        }
      }
    }
  }

  geradorMatrix(rows, cols);
};
