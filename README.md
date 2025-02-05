# 📄 Gerador de Croqui

Este projeto é uma aplicação web interativa para gerar croquis personalizados em formato PDF. Ele permite inserir um número específico de tratamentos, definir um título para o ensaio e escolher se deseja ou não cores nos elementos gráficos. O sistema utiliza **Web Workers** para melhorar o desempenho na geração de dados, garantindo uma experiência fluida para o usuário.

## 🤔 O que é um Croqui?
Croqui é um esboço ou desenho simplificado usado para representar uma ideia de forma visual. No contexto agrícola, um croqui pode ser utilizado para mapear experimentos, distribuindo tratamentos de maneira organizada.

## 🌱 Croqui na Experimentação Agrícola
Na experimentação agrícola, um croqui é essencial para planejar e visualizar a disposição dos tratamentos em campo. Ele permite:
- Organizar os diferentes tratamentos em um experimento.
- Garantir uma distribuição equilibrada para evitar viés nos resultados.
- Facilitar a identificação e a análise dos tratamentos aplicados.

## 🚀 Funcionalidades
- **Geração de Croquis em PDF** com base nos parâmetros fornecidos.
- **Uso de Web Workers** para processamento paralelo e melhor desempenho.
- **Opção de personalização de cores** ativada por checkbox.
- **Validação de entrada** para garantir que apenas valores entre 5 e 40 sejam aceitos.
- **Interface moderna e responsiva** utilizando **HTML, CSS e Bootstrap Icons**.
- **Pré-visualização e recarregamento dinâmico** para facilitar novos ensaios.
- **Links para os desenvolvedores** na seção de rodapé.
- **Geração totalmente aleatória**, sem repetição de valores em colunas, linhas ou diagonais.

## 🛠 Tecnologias Utilizadas
- **JavaScript (ES6+)**
- **Web Workers** (para processamento em segundo plano)
- **jsPDF** (para geração e manipulação de PDFs)
- **HTML5 e CSS3**
- **Google Fonts** (Open Sans)
- **Bootstrap Icons**

## 📦 Como Usar
1. **Acesse a página** e preencha os seguintes campos:
   - **Quantidade de tratamentos** (entre 5 e 40).
   - **Nome do ensaio** para ser inserido no PDF.
   - Marque ou desmarque a opção de **Gerar com cores**.
2. **Gerar o PDF:**
   - Clique no botão **Gerar PDF**.
   - O Web Worker processará os dados e criará o arquivo.
3. **Baixar o arquivo:**
   - O PDF será salvo automaticamente com o nome digitado.
   - Caso deseje gerar um novo croqui, clique no botão **Gerar novamente?**.

## 📜 Estrutura do Código
- `worker.js` → Responsável pelo cálculo da matriz de dados.
- `main.js` → Comunicação com o Web Worker e geração do PDF.
- `index.html` → Interface do usuário e estrutura dos formulários.
- `style.css` → Estilos da interface e elementos gráficos.
- `imagem/icon.ico` → Ícone do site.

## 📝 Notas Importantes
- O Web Worker melhora a performance ao processar a matriz sem travar a interface.
- As cores das células são definidas por um objeto `cores`, garantindo diversidade visual.
- A largura do PDF é dinâmica e se ajusta ao número de tratamentos inserido.
- O croqui gerado é **totalmente aleatório**, garantindo que não haja repetição de valores em colunas, linhas ou diagonais.
- A aplicação é responsiva e compatível com diferentes dispositivos.

## 🌍 Acesse o Site
Acesse o projeto em: https://geradordecroqui.netlify.app/

## 👨‍💻 Criadores
Este projeto foi desenvolvido por:
- [Guilherme R.](https://www.instagram.com/guilhermer.dev/)

Ideia de:
- [Denilson O.](https://www.instagram.com/denilson_oliveira_br/)

Siga-nos para acompanhar mais projetos e novidades! 🚀

