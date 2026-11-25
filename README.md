# Encontre um Lar

Projeto acadêmico da disciplina de Desenvolvimento de Interfaces — 2/2026.

**[Acessar o site](https://enzodollabellasm.github.io/adocao-df/)**

> **Versão atual:** v0.1.0 - Protótipo

---

## Objetivo

Criar uma interface que aproxime pessoas interessadas em adotar cães e gatos de responsáveis que desejam divulgar animais para adoção no Distrito Federal.

## Público e Uso

O site é voltado a pessoas que procuram um animal para adotar e a protetores ou responsáveis que desejam divulgar um animal. Na página inicial, a pessoa pode pesquisar por nome, filtrar por espécie e região, abrir o perfil de um animal e enviar uma manifestação de interesse. O formulário é demonstrativo e não envia dados para um servidor.

## Escopo e Funcionalidades

- Catálogo demonstrativo de cães e gatos.
- Pesquisa por nome e filtros por espécie e região.
- Carrossel de animais em destaque.
- Perfil acessível com informações do animal e formulário de interesse.
- Alternância entre tema claro e escuro e controle de tamanho do texto.
- Formulários demonstrativos para contato, interesse e divulgação.
- Navegação responsiva para celular e computador.

Os perfis e contatos desta versão são fictícios. O site é um protótipo acadêmico e não realiza adoções reais.

## Tecnologias

- HTML semântico
- CSS
- JavaScript sem Dependências

## Como executar

Abra `index.html` em um navegador moderno. Para desenvolvimento local, também é possível usar a extensão Live Server no Visual Studio Code.

## Etapas de Construção

1. Delimitar o problema e o público do projeto, além de escolher os requisitos do enunciado que entram na primeira versão.
2. Organizar o conteúdo da página em HTML semântico, separando apresentação, catálogo, explicações, contato e rodapé.
3. Definir a identidade visual em CSS, incluindo cores, tipografia, estados de foco, tema escuro e ajustes para telas menores.
4. Manter os dados fictícios dos animais e implementar pesquisa, filtros, carrossel, perfis, janelas de diálogo e confirmações em JavaScript.
5. Abrir o protótipo no navegador e percorrer as tarefas principais. Registrar problemas encontrados, correções e capturas de tela no diário do projeto.
6. Revisar contraste, navegação por teclado, rótulos dos formulários e comportamento em celular antes da entrega.
7. Registrar cada mudança concluída em um commit Git com uma mensagem que resuma a alteração. Conectar o repositório local ao GitHub seguindo o guia em `docs/primeiro-push-github.md`.
8. Com a primeira versão em mãos, testei manualmente as principais interações no navegador e registrei as verificações concluídas e as pendências.
9. Identificando os problemas existentes, eu fiz as correções necessárias.
10. Escrevi comentários no código para identificar o papel de cada parte e registrei as alterações com Git.
11. Configurei o GitHub Pages para disponibilizar o site.

## Acessibilidade e Usabilidade

A interface usa regiões semânticas, rótulos associados aos campos, foco visível, navegação por teclado, controles com nomes acessíveis e um controle de contraste por tema. A conformidade WCAG e as razões de contraste serão verificadas e documentadas durante o projeto, com os resultados reais da versão final.

## Histórico do Projeto

As mudanças serão registradas no Git com commits que descrevem cada etapa. Consulte o histórico do repositório para acompanhar a evolução.

Para publicar este repositório no GitHub, siga o guia em [`docs/primeiro-push-github.md`](docs/primeiro-push-github.md). O histórico Git inicial já está incluído no projeto local.

---

## Histórico de Versões

### v0.1.0 - Protótipo Inicial

- Catálogo, filtros, perfis e login demonstrativos.
- Controles de tema e tamaho do texto.
- Publicação pelo GitHub Pages.

### CORREÇÕES v0.1.0! 

- Funcionalidade de ampliar a fonte foi corrigida, anteriormente não estava cumprindo a sua função corretamente.
- Os seletores de filtros no Modo Escuro estavam com a paleta de cores do modo claro num todo, deixando o fundo e os caracteres branco e cinza, impossibilitando a leitura a não ser com o hover. Foi corrigido e agora a cor acompanha o Modo Escuro.
- A navegação por teclado (Tab) estava com um erro no código em que nulificava o foco (contorno), não permitindo o usuário saber exatamente aonde ele estava indo ao clicar "Tab".
