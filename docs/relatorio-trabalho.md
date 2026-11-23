# Projeto de interface Encontre um Lar

**Disciplina:** Desenvolvimento de Interfaces 2/2026  
**Professor:** Prof. Dr. Felipe Batista da Silva  
**Estudante:** Enzo Dollabella de Souza Magalhães  
**RA:** ____________________  
**Entrega da parte escrita:** 25 de novembro de 2026

## Apresentação

Este relatório descreve a concepção e a construção do Encontre um Lar, um protótipo de interface para aproximar pessoas interessadas em adotar cães e gatos de responsáveis que desejam divulgar animais no Distrito Federal. O projeto foi desenvolvido com HTML, CSS e JavaScript, com atenção à hierarquia visual, à facilidade de pesquisa e aos requisitos de acessibilidade indicados no enunciado.

A versão documentada é um protótipo acadêmico. Os animais são fictícios, as fotografias são carregadas do Unsplash e os formulários mostram uma confirmação na própria página, sem transmitir dados. As telas e avaliações deste relatório devem corresponder à versão efetivamente conferida antes da entrega.

## Parte A — Paletas de cores e WCAG

### Paletas escolhidas

O site oferece um tema claro e um tema escuro. Os dois usam fundos neutros, texto de alto contraste e verde-oliva nos principais elementos de ação. A terracota funciona como detalhe visual. O modo escuro troca a base clara por tons profundos e ajusta as cores de texto e de ação para conservar a leitura.

| Papel na interface | Tema claro | Tema escuro |
|---|---|---|
| Fundo da página | `#F7F5EF` | `#20231E` |
| Cartões e modais | `#FFFEFA` | `#292D26` |
| Texto principal | `#262820` | `#F2F0E8` |
| Texto secundário | `#6F7168` | `#C2C2B5` |
| Verde de ação e marca | `#61744C` | `#A6BD84` |
| Terracota decorativa | `#C87756` | `#D99170` |

### Psicologia das cores e identidade visual

A identidade visual usa tons de verde e terra para remeter a natureza e acolhimento, assuntos próximos ao cuidado animal. O fundo marfim reduz a aparência clínica de uma página branca pura, enquanto a terracota acrescenta calor em detalhes como corações e pequenos realces. O verde-oliva identifica ações principais e ajuda a construir consistência entre botões, links e a marca.

Essas escolhas representam a intenção de design deste projeto. Estudos sobre cor e emoção relatam associações entre cores e estados afetivos, mas também apontam variações de contexto e cultura. Por isso, a paleta não é apresentada como uma regra universal nem substitui a clareza dos rótulos, a organização da página ou a análise de contraste [6][7].

### Contraste e acessibilidade

A WCAG 2.2 estabelece no critério 1.4.3 uma razão mínima de 4,5:1 para texto normal e 3:1 para texto grande. O critério 1.4.1 orienta que a cor não seja o único meio de transmitir uma informação ou indicar uma ação [1][2][3]. As razões abaixo foram calculadas pela fórmula de luminância relativa definida nas orientações WCAG e serão recalculadas se a paleta mudar.

| Elemento e combinação medida | Razão | Resultado preliminar |
|---|---:|---|
| Texto principal claro `#262820` sobre fundo `#F7F5EF` | 13,69:1 | Acima de 4,5:1 |
| Texto secundário claro `#6F7168` sobre fundo `#F7F5EF` | 4,55:1 | Acima de 4,5:1 |
| Texto branco `#FFFEFA` em botão verde `#61744C` | 5,06:1 | Acima de 4,5:1 |
| Texto principal escuro `#F2F0E8` sobre fundo `#20231E` | 13,94:1 | Acima de 4,5:1 |
| Texto secundário escuro `#C2C2B5` sobre fundo `#20231E` | 8,84:1 | Acima de 4,5:1 |
| Texto escuro `#20231E` em botão verde claro `#A6BD84` | 7,75:1 | Acima de 4,5:1 |
| Indicador de foco claro `#AD5839` sobre fundo `#F7F5EF` | 4,55:1 | Acima de 3:1 para indicador não textual |
| Indicador de foco escuro `#E29A78` sobre fundo `#20231E` | 6,91:1 | Acima de 3:1 para indicador não textual |

As medições cobrem combinações representativas de texto, botões e foco. A verificação final também deve considerar os estados de hover, os textos sobre cartões e modais, os campos de formulário e a visualização em imagens. Os filtros mantêm rótulos escritos, os cartões identificam a espécie por texto e os controles de acessibilidade têm nomes acessíveis, de forma que a cor não carrega sozinha essas informações.

## Parte B — Design do site

### Finalidade e público

O Encontre um Lar é uma vitrine demonstrativa de adoção responsável voltada a moradores do Distrito Federal. O público principal inclui pessoas que procuram cães ou gatos e responsáveis que precisam divulgar animais. O catálogo ajuda a comparar perfis e a iniciar uma conversa de interesse. A área de divulgação demonstra como um responsável poderia apresentar um animal.

### Percurso de uso

Quem deseja adotar pode percorrer os destaques, abrir o catálogo, pesquisar por nome, selecionar espécie e região, conhecer um perfil e preencher a manifestação de interesse. Quem deseja divulgar pode abrir o formulário de cadastro demonstrativo. A navegação não exige conta para consultar os animais. O login aparece como uma tela ilustrativa e não autentica usuários nesta versão.

### Recursos e elementos

- Cabeçalho com navegação e controles de tema, tamanho do texto e acesso demonstrativo.
- Seção de apresentação com chamada principal e ação para localizar animais.
- Carrossel de animais em destaque com controles anterior e próximo.
- Catálogo de cartões com busca por nome e filtros por espécie e região.
- Perfil detalhado com idade, porte, sexo, região e temperamento.
- Formulário demonstrativo de interesse em adoção.
- Formulário demonstrativo para divulgar um animal.
- Cartões explicativos sobre conhecer o animal, conversar com o responsável e preparar o lar.
- Formulário de contato demonstrativo e rodapé com navegação.
- Menu móvel e layout responsivo.

### Registros visuais

Inserir capturas da versão conferida, com legendas curtas e descrição do que cada tela demonstra.

**Figura 1 — Página inicial e chamada para adoção.**  
`[Inserir captura da página inicial]`

**Figura 2 — Catálogo com filtros aplicados.**  
`[Inserir captura de uma busca por espécie e região]`

**Figura 3 — Perfil de um animal e início do formulário de interesse.**  
`[Inserir captura do perfil e do formulário]`

**Figura 4 — Controles de tema e tamanho do texto.**  
`[Inserir capturas dos estados claro, escuro e texto ampliado]`

## Parte C — Processo de construção

### WCAG, heurísticas de Nielsen e UI/UX aplicadas

As WCAG são recomendações técnicas para tornar conteúdo web mais perceptível, operável, compreensível e robusto. Neste site, isso orienta o contraste de texto, os rótulos de campos, a indicação de foco por teclado e o uso de texto junto aos sinais visuais [1]. A análise de contraste deste relatório registra combinações verificadas no CSS e informa quais estados ainda precisam de inspeção.

As heurísticas de Nielsen são princípios gerais para avaliar a usabilidade de interfaces [4]. O protótipo aplica visibilidade do estado do sistema ao informar a quantidade de resultados e mostrar confirmações dos formulários; correspondência com o mundo real ao usar palavras como “adotar”, “região” e “porte”; reconhecimento em vez de memorização ao manter os filtros visíveis; e prevenção de erros ao usar campos identificados e validação nativa do navegador. Essas decisões precisam ser avaliadas em testes de uso e podem ser ajustadas conforme os resultados.

UI, ou interface do usuário, reúne os elementos com os quais a pessoa interage, como botões, cartões, formulários e menus. UX, ou experiência do usuário, considera a experiência mais ampla durante o uso do produto, incluindo a facilidade de encontrar um animal, entender seu perfil e manifestar interesse. A ISO 9241-210 descreve o design centrado no ser humano como uma abordagem que considera usuários, necessidades e contexto de uso ao longo do desenvolvimento [5].

No projeto, a relação entre UI e UX aparece no caminho de busca: os controles visíveis permitem filtrar o catálogo e abrir perfis sem exigir uma conta. A linguagem simples e os estados de confirmação ajudam a pessoa a entender o resultado de cada ação. O design responsivo considera que o site pode ser consultado em celular ou computador.

### Branding, cores, acessibilidade e usabilidade

O nome Encontre um Lar, o símbolo simples e a paleta verde-oliva e terracota formam uma identidade visual coerente com o tema de cuidado animal. A psicologia das cores orienta a intenção dos tons, enquanto o branding mantém essa identidade consistente ao longo das telas. A escolha final também considera legibilidade, contraste, distinção entre estados e clareza das ações. Assim, a cor apoia a compreensão e a identidade, sem substituir conteúdo textual ou navegação previsível.

### Documentação do processo

1. Leitura do enunciado e identificação dos itens obrigatórios.
2. Delimitação da proposta como catálogo demonstrativo de adoção no DF.
3. Estruturação da página com HTML semântico.
4. Definição da paleta, tipografia e layout responsivo em CSS.
5. Implementação da pesquisa, filtros, carrossel, modais e formulários em JavaScript.
6. Teste manual do filtro combinado, do perfil e da manifestação de interesse.
7. Identificação de um defeito no controle A+ e ajuste dos tamanhos tipográficos para acompanhar uma variável de escala.
8. Registro das etapas no Git e preparação da publicação no GitHub.

O README do projeto explica a finalidade, o escopo, as tecnologias e a forma de abrir a página. O guia de publicação documenta como conectar o repositório local ao GitHub. As próximas mudanças devem ser acompanhadas por commits com mensagens que descrevam cada etapa. A publicação remota e os testes finais de responsividade ainda devem ser registrados depois de realizados.

## Parte D — Referências, IA e ferramentas

### Ferramentas utilizadas

- HTML, CSS e JavaScript para implementar o protótipo.
- Git para manter o histórico local do código.
- GitHub previsto para armazenar o histórico remoto do projeto após a publicação.
- Navegador web para conferir o funcionamento das interações.
- Unsplash como origem das fotografias temporárias dos cartões e das seções visuais.

### Uso de inteligência artificial

O ChatGPT foi usado como apoio para interpretar o enunciado, planejar a estrutura inicial e produzir a primeira versão de HTML, CSS e JavaScript. Durante a conferência manual, o estudante identificou que o controle A+ não ampliava de modo perceptível o texto. A correção foi incorporada ao código e precisa ser confirmada visualmente pelo estudante. O relatório registra essa contribuição de forma transparente. O estudante deve revisar e compreender o código entregue.

### Referências consultadas

[1] W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. 2023. Disponível em: https://www.w3.org/TR/WCAG22/. Acesso em: 23 nov. 2026.

[2] W3C. *Understanding Success Criterion 1.4.3: Contrast (Minimum)*. Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum. Acesso em: 23 nov. 2026.

[3] W3C. *Understanding Success Criterion 1.4.1: Use of Color*. Disponível em: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color. Acesso em: 23 nov. 2026.

[4] NIELSEN, Jakob. *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group. Disponível em: https://www.nngroup.com/articles/ten-usability-heuristics/. Acesso em: 23 nov. 2026.

[5] ISO. *ISO 9241-210:2019 — Human-centred design for interactive systems*. Disponível em: https://www.iso.org/standard/77520.html. Acesso em: 23 nov. 2026.

[6] JONAUSKAITE, Domicele; MOHR, Christine. *Do we feel colours? A systematic review of 128 years of psychological research linking colours and emotions*. Psychonomic Bulletin & Review, 2025. DOI: https://doi.org/10.3758/s13423-024-02615-z.

[7] ELLIOT, Andrew J.; MAIER, Markus A. *Color Psychology: Effects of Perceiving Color on Psychological Functioning in Humans*. Annual Review of Psychology, v. 65, p. 95–120, 2014. DOI: https://doi.org/10.1146/annurev-psych-010213-115035.

[8] UNSPLASH. Fotografias usadas no protótipo. Disponível em: https://unsplash.com/. Acesso em: 23 nov. 2026. Inserir aqui os links individuais das fotografias mantidas na versão final.

## Parte E — Síntese e apêndice

O Encontre um Lar apresenta um protótipo responsivo para pesquisar animais e conhecer seus perfis, com formulários demonstrativos e controles de acessibilidade. O desenvolvimento relaciona decisões de interface a WCAG, usabilidade, experiência do usuário, identidade e contraste. As próximas verificações incluem confirmar o controle A+, testar a página em diferentes larguras, medir os estados finais da paleta, inserir as capturas e publicar o histórico no GitHub.

### Arquivos de código

Os scripts estão no repositório do projeto: `index.html`, `styles.css` e `script.js`. Como o código ocupa vários arquivos, eles podem ser enviados como anexo junto ao documento, conforme autorizado pelo enunciado.

### Links de acesso

- Repositório GitHub: `[inserir link depois de publicar]`
- Site publicado: `[inserir link depois da publicação, se houver]`

