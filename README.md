  # Analisador de Texto

## Índice

- [1. Preâmbulo](#1-preâmbulo)
- [2. Funcionalidades](#2-funcionalidades)
- [3. Testes](#3-testes)
- [4. Meu Projeto](#4-meuprojeto)
- 
---

## 1. Preâmbulo

![Uma lupa sobre texto de livro](https://github.com/Laboratoria/curriculum/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Créditos: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_em [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

Um analisador de texto é uma aplicação para extrair informações úteis de um
texto utilizando diversas técnicas, como o processamento de linguagem natural
(PLN),aprendizado de máquina (ML) e análise estatística. Essas aplicações podem
fornecer uma variedade de métricas que oferecem informações básicas sobre
o comprimento e a estrutura do texto, como contagem de palavras, contagem de
caracteres, contagem de sentenças e contagem de parágrafos. Outras métricas
incluem análise de sentimentos, que utiliza técnicas de PLN para determinar
o tom geral positivo, negativo ou neutro do texto, e análise de legibilidade,
que utiliza algoritmos para avaliar a complexidade e legibilidade do texto.

Em geral, as aplicações de análise de texto fornecem informações valiosas e métricas
sobre os textos que podem ajudar os usuários a tomar decisões informadas e tirar
conclusões significativas. Por meio do uso dessas ferramentas de análise, os usuários
podem obter uma compreensão mais profunda dos textos.


## 2. Funcionalidades

A lista de funcionalidades é a seguinte:

1. A aplicação deve permitir que a usuária insira um texto escrevendo-o
    em uma caixa de texto.

2. A aplicação deve calcular as seguintes métricas e atualizar o
    resultado em tempo real conforme a usuária escreve o texto:

    - **Contagem de palavras**: a aplicação deve ser capaz de contar o número de
    palavras no texto de entrada e mostrar essa contagem para a usuária.
    - **Contagem de caracteres**: a aplicação deve ser capaz de contar o número de
    caracteres no texto de entrada, incluindo espaços e sinais de
    pontuação, e mostrar essa contagem para a usuária.
    - **Contagem de caracteres excluindo espaços e sinais de pontuação**:
    a aplicação deve ser capaz de contar o número de caracteres no texto de
    entrada, excluindo espaços e sinais de pontuação, e mostrar essa contagem
    para a usuária.
    - **Contagem de números**: a aplicação deve contar quantos números há no
    texto de entrada e mostrar essa contagem para a usuária.
    - **Soma total dos números**: a aplicação deve somar todos os números que
    estão no texto de entrada e mostrar o resultado para a usuária.
    - **Comprimento médio das palavras**: a aplicação deve calcular o
    comprimento médio das palavras no texto de entrada e mostrar esse valor para a usuária.

3. A aplicação deve permitir limpar o conteúdo da caixa de texto ao clicar
    em um botão.

![Demonstração do analisador de texto](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650556-988dcd6f-bc46-473b-894c-888a66c9fe2d.gif "Demonstração do analisador de texto")


## 3. Testes 

Esses testes analisaram meus arquivos
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
e
[`style.css`](src/style.css)

Cada critério está relacionado a um objetivo de aprendizado.

Você pode executar todos esses testes com o comando `npm run test:oas`
como mostrado na imagem a seguir:

![npm run test oas](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650602-f0ca9170-7563-4edc-9e78-874fa012c4fd.gif "npm run test oas")

Você também pode executar os testes de cada grupo de objetivos de aprendizado
individualmente com os seguintes comandos:

- `npm run test:oas-html`
- `npm run test:oas-css`
- `npm run test:oas-web-api`
- `npm run test:oas-js`

#### Testes End-to-End

Um teste end-to-end (E2E) é uma técnica de teste de software na qual se verifica
o funcionamento de todo o sistema, do início ao fim. Em outras palavras, é testado
o fluxo completo do software, simulando a interação da usuária com a aplicação,
para garantir que todas as partes do sistema funcionem corretamente em conjunto.

Você pode executar esses testes com o comando `npm run test:e2e` como mostrado
na imagem a seguir:

![npm run test e2e](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650622-a4da630e-8d39-4dd8-9fde-1a38c31a53e2.gif "npm run test e2e")

### GitHub Actions

Este repositório usa o GitHub Actions para executar automaticamente
os testes unitários, testes de critérios mínimos de aceitação e
testes end-to-end toda vez que você fizer um _push_ no ramo
_main_ do seu repositório.

Você pode verificar o resultado desta GitHub Action
na aba _Actions_ do seu repositório no GitHub,
como mostrado na seguinte imagem:

![GitHub Action](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650640-a8a8ed26-6f48-4053-8b3b-7dec7e35a9f8.gif "GitHub Action")

## 4. Meu Projeto
 Foto de [Katharine](https://vscode.dev/github/kcamelo/SAP012-text-analyzer/blob/main/Projeto%201.png)_
_em [Unsplash](https://vscode.dev/github/kcamelo/SAP012-text-analyzer/blob/main/Projeto%201.png)_

