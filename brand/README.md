# Identidade visual — Mezon

## Conceito

O símbolo é uma **trajetória**: entra por baixo à esquerda em âmbar, muda de direção
no vértice marcado e sai à direita em claro. É o dado atravessando o sistema — a
Mezon como o trecho que conecta uma ponta à outra. A forma resultante lê como "M".

O nome também sustenta a leitura: **méson** é a partícula que medeia a força entre
outras partículas. Mediação é o negócio da empresa.

## Verbal

**Descritor:** `Sistemas sob medida`
Anda colado ao logo. O nome "Mezon" é abstrato e não comunica o ramo — o descritor
resolve isso em meio segundo para quem nunca ouviu falar da empresa. Linguagem de
alfaiataria, que dono de empresa entende sem saber nada de tecnologia.

**Tagline:** `A gente constrói junto`
Não faz parte do logo. Vive no site, na proposta, na assinatura e em campanha.
Comunica parceria e acompanhamento — o oposto do fornecedor que entrega e some.
Como ela não diz o que a empresa faz, **nunca use a tagline sozinha em contexto
onde a pessoa não sabe o que é a Mezon**: nesses casos, use o lockup com descritor.

Regra prática: descritor informa, tagline dá o tom. Não use os dois na mesma linha.

## Arquivos

| Arquivo | Uso |
|---|---|
| `mezon-lockup.svg` | Principal. Fundo escuro. |
| `mezon-lockup-fundo-claro.svg` | Fundo claro. |
| `mezon-lockup-mono-claro.svg` | Uma cor sobre fundo escuro. |
| `mezon-lockup-mono-escuro.svg` | Uma cor sobre fundo claro. |
| `mezon-simbolo.svg` | Símbolo isolado (avatar, app, selo). |
| `mezon-simbolo-fundo-claro.svg` | Símbolo em fundo claro. |
| `mezon-simbolo-mono-*.svg` | Gravação, carimbo, bordado, fax, patrocínio. |
| `mezon-favicon.svg` | Favicon e usos abaixo de 24px. |
| `mezon-lockup-descritor.svg` | Com "Sistemas sob medida". Use quando o público não conhece a marca. |
| `mezon-lockup-descritor-fundo-claro.svg` | Idem, fundo claro. |

O wordmark é **desenhado**, não digitado: as letras são paths geométricos com o mesmo
traço do símbolo, e o "O" repete o chanfro do design system. Por isso não depende de
nenhuma fonte instalada e renderiza igual em qualquer máquina.

## Regras

**Zona de proteção** — margem livre em todos os lados igual à altura do quadrado
marcador do símbolo. Nada invade: nem texto, nem borda, nem imagem.

**Tamanho mínimo** — lockup simples: 120px de largura. Lockup com descritor: 220px
(abaixo disso o descritor fica ilegível — troque pela versão sem descritor).
Símbolo: 24px. Abaixo de 24px use `mezon-favicon.svg`, que é massa sólida.

**Cores** (paleta Adobe Color da marca)

| Hex | Papel | Regra de contraste |
|---|---|---|
| `#021757` | Navy — superfície de ênfase | texto branco |
| `#003698` | Azul profundo — blocos | texto branco |
| `#006DFF` | Primária — CTA e blocos sólidos | **sempre texto branco** (4,53x). Não use para texto pequeno |
| `#00BAFF` | Acento — rótulos, linhas, logo | ótima como texto sobre escuro (8,86x); como fundo pede texto escuro |
| `#98E9FD` | Gelo — destaque de texto | 14,42x sobre fundo escuro |

Fundo do site: `#070b16` (grafite azulado derivado do navy).

**Fundo** — sobre foto ou padrão, use a versão monocromática, sempre com contraste
suficiente. Nunca aplique o lockup colorido sobre fundo de baixo contraste.

## Não faça

- Não recomponha o lockup (mudar distância entre símbolo e wordmark)
- Não troque as cores nem inverta âmbar e claro
- Não aplique sombra, gradiente, contorno ou brilho
- Não distorça: escale sempre proporcionalmente
- Não gire o símbolo
- Não redesenhe o wordmark com fonte — use o SVG
- Não coloque a tagline dentro do lockup nem junto do descritor
- Não use o lockup com descritor abaixo de 220px

## Onde já está aplicado

- `public/favicon.svg` — conceito favicon
- `src/layouts/Layout.astro` — header e footer (SVG inline, herda `currentColor`)
- `public/og-mezon.png` — imagem de compartilhamento
