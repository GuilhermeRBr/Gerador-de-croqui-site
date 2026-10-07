<div align="center">

<h1 align="center">Gerador de Croqui</h1>

<p align="center">
  <strong>Gerador de Croqui é uma ferramenta web open-source para gerar croquis de experimentos agrícolas em PDF, com distribuição aleatória de tratamentos, personalização de cores e processamento via Web Workers.</strong>
</p>

<p align="center">
  <a href="#"><img alt="License" src="https://img.shields.io/badge/license-MIT-blue"></a>
  <a href="#"><img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/GuilhermeRBr/Gerador-de-croqui-site?color=green"></a>
  <a href="#"><img alt="Last Commit" src="https://img.shields.io/github/last-commit/GuilhermeRBr/Gerador-de-croqui-site?color=purple"></a>
</p>

<br />

<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js" alt="Tech Stack Icons" />
</p>

</div>

---

> **Este é um dos meus primeiros projetos** — desenvolvido **100% sem o uso de IA**, do zero, com HTML, CSS e JavaScript puro. Está no ar em produção em [geradordecroqui.netlify.app](https://geradordecroqui.netlify.app/).

---

## Sobre o projeto

O **Gerador de Croqui** é uma aplicação web para **planejamento visual de experimentos agrícolas**, permitindo gerar e exportar croquis em PDF de forma rápida e totalmente aleatória.

> Desenvolvido para pesquisadores e técnicos agrícolas que precisam organizar a disposição de tratamentos em campo com praticidade e sem repetição de valores em linhas, colunas ou diagonais.

### O que é um Croqui?

Croqui é um esboço simplificado usado para representar a distribuição de tratamentos em um experimento de campo. Ele permite:

- Organizar os tratamentos de forma visualmente clara
- Garantir uma distribuição equilibrada e evitar viés nos resultados
- Facilitar a comunicação entre pesquisadores, técnicos e demais envolvidos

### Funcionalidades

- Geração de croquis em **PDF** com layout dinâmico baseado no número de tratamentos
- **Distribuição totalmente aleatória** — nenhum tratamento se repete na mesma linha, coluna ou diagonal
- **Opção de cores** por tratamento, com paleta de até 40 cores distintas
- **Web Workers** para processamento em segundo plano, sem travar a interface
- Validação de entrada (aceita de 5 a 40 tratamentos)
- Campo de nome do ensaio inserido diretamente no PDF gerado
- Interface responsiva e moderna
- Botão "Gerar novamente?" para novo ensaio sem recarregar a página

> **Algoritmo de aleatoriedade:** cada geração garante que nenhum tratamento se repete em qualquer linha, coluna ou diagonal do croqui — assegurando a integridade estatística do experimento.

---

## Tecnologias Usadas

| Tecnologia | Descrição |
|------------|-----------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Estrutura da interface |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Estilização e responsividade |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Lógica da aplicação (ES6+) |
| ![Web Workers](https://img.shields.io/badge/-Web%20Workers-gray?style=flat&logo=javascript&logoColor=white) | Processamento paralelo sem travar a UI |
| ![jsPDF](https://img.shields.io/badge/-jsPDF-red?style=flat) | Geração e exportação de PDFs |

---

## Como usar

1. Acesse o site em [geradordecroqui.netlify.app](https://geradordecroqui.netlify.app/)
2. Preencha os campos:
   - **Quantidade de tratamentos** (entre 5 e 40)
   - **Nome do ensaio** (será exibido como título no PDF)
   - Marque **"Gerar com cores"** se quiser células coloridas
3. Clique em **Gerar PDF** — o arquivo será baixado automaticamente
4. Para um novo croqui, clique em **Gerar novamente?**

---

## Como rodar localmente

Não há dependências de instalação. Basta clonar e abrir o arquivo no navegador:

```bash
git clone https://github.com/GuilhermeRBr/Gerador-de-croqui-site.git
cd Gerador-de-croqui-site
# Abra o index.html no seu navegador
```

> Como o projeto usa módulos ES6 (`type="module"`), recomenda-se usar uma extensão como **Live Server** (VS Code) ou qualquer servidor HTTP local para evitar erros de CORS.

---

## Estrutura de Pastas

```
Gerador-de-croqui-site/
├── assets/
│   ├── icons/
│   │   └── favicon.ico
│   └── img/
│       └── fundo.jpg
├── css/
│   ├── animations.css
│   ├── components.css
│   ├── fonts.css
│   ├── layout.css
│   ├── reset.css
│   ├── responsive.css
│   └── style.css
├── js/
│   ├── dom.js
│   ├── main.js
│   ├── utils.js
│   └── worker.js
├── index.html
└── README.md
```

---

## Colaboradores

<table align="center">
  <tr>
    <td align="center">
      <img src="https://github.com/GuilhermeRBr.png" width="100px;" alt="Guilherme Rebouças"/><br />
      <sub><b>Guilherme Rebouças</b></sub><br />
      <a href="https://www.instagram.com/guilhermer.dev/" target="_blank">@guilhermer.dev</a><br />
      <span>Desenvolvedor</span>
    </td>
    <td align="center">
      <img src="assets/img/826046762_18338046211272533_6585128061524541893_n.jpg" width="100px;" alt="Denilson Oliveira"/><br />
      <sub><b>Denilson Oliveira</b></sub><br />
      <a href="https://www.instagram.com/denilson_oliveira_br/" target="_blank">@denilson_oliveira_br</a><br />
      <span>Idealizador</span>
    </td>
  </tr>
</table>

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## Preview

<div align="center">
  <img src="assets/img/image2.png" alt="Preview 3" width="48%" style="vertical-align: top;" />
  &nbsp;
  <img src="assets/img/image.png" alt="Preview 2" width="48%" style="vertical-align: top;" />
</div>

<br />

<div align="center">
  <img src="assets/img/image1.png" alt="Preview do Gerador de Croqui" width="80%" />
</div>
