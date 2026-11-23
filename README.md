# Casa CERV

Site institucional da Casa CERV - Centro Evangélico de Reabilitação de Vidas.

Esta é a primeira versão do site, desenvolvida com HTML5, CSS3 e JavaScript puro. Não há backend ou banco de dados nesta etapa. A página apresenta uma chave Pix institucional informada no conteúdo atual do projeto.

## Objetivo

Apresentar a Casa CERV, seu trabalho de recuperação de vidas, o apoio às famílias e formas de colaboração. O conteúdo foi adaptado para comunicação institucional a partir do material disponibilizado pela instituição.

## Estrutura

```text
.
├── docs/                 # Materiais institucionais de referência
├── img cerv/             # Fotografias reais selecionadas para o site
├── index.html            # Estrutura e conteúdo da página
├── styles.css            # Estilos, responsividade e componentes visuais
├── script.js             # Menu móvel e pequenas interações
└── README.md             # Documentação do projeto
```

## Como executar

O site é estático. Abra `index.html` diretamente no navegador ou inicie um servidor local na pasta do projeto:

```powershell
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

Se o comando `python` não estiver disponível, use uma extensão de servidor local do seu editor ou abra o arquivo diretamente no navegador.

## Conteúdo institucional

O site apresenta informações sobre a atuação da Casa CERV em Águas Lindas de Goiás, sua trajetória, valores e atividades descritas nos documentos de referência.

Antes da publicação pública, confirmar com a instituição:

- Canais oficiais de atendimento, endereço e horários.
- Processo de acolhimento, público atendido e duração do programa.
- Demais formas de contribuição e informações de prestação de contas.
- Nomes, fotos, relatos e parcerias que tenham autorização para divulgação.

O site não publica testemunhos ou dados pessoais de pessoas atendidas nesta versão.

As fotografias utilizadas ficam em `img cerv/`. A seleção atual prioriza registros do espaço, convivência, atividades e rotina, aplicados com cortes responsivos nos blocos existentes.

## Dependências

Não são necessárias bibliotecas ou dependências para executar o projeto. A tipografia utiliza Google Fonts quando há conexão com a internet e possui fontes de sistema como alternativa.
