---
name: Isa Pupo
description: Refúgio visual para a jornada interior — terroso e humano, com toques simbólicos junguianos.
colors:
  bege: "#EDBF9F"
  bege-light: "#EFDDD1"
  rosa: "#CF6A61"
  laranja: "#BC2F0A"
  roxo-claro: "#725093"
  roxo-escuro: "#53346B"
  marrom: "#2D1605"
  verde-claro: "#6E7C59"
  verde-escuro: "#2D3322"
  cinza: "#9E9E9E"
  branco: "#FFFFFF"
typography:
  display-hero:
    fontFamily: "Berliana, cursive"
    fontSize: "clamp(52px, 9vw, 96px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "normal"
  display-xl:
    fontFamily: "Berliana, cursive"
    fontSize: "clamp(42px, 6.5vw, 76px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "normal"
  display-lg:
    fontFamily: "Berliana, cursive"
    fontSize: "clamp(34px, 5vw, 60px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "normal"
  display-md:
    fontFamily: "Berliana, cursive"
    fontSize: "clamp(28px, 3.8vw, 46px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "normal"
  title:
    fontFamily: "Amaranth, sans-serif"
    fontSize: "clamp(24px, 3.2vw, 34px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: "Amaranth, sans-serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  body:
    fontFamily: "Amaranth, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Amaranth, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Amaranth, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.18em"
rounded:
  full: "9999px"
  organic: "36px 80px 36px 36px"
  blob-1: "58% 42% 55% 45% / 45% 52% 48% 55%"
  blob-2: "45% 55% 48% 52% / 55% 44% 56% 45%"
spacing:
  gutter-sm: "24px"
  gutter-md: "40px"
  gutter-lg: "64px"
  gutter-xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.bege}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.bege}"
  button-dark:
    backgroundColor: "{colors.verde-escuro}"
    textColor: "{colors.bege}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "46px"
  button-purple:
    backgroundColor: "{colors.roxo-escuro}"
    textColor: "{colors.bege}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "46px"
  button-outline-dark:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.verde-escuro}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "46px"
  tag:
    backgroundColor: "rgba(207, 106, 97, 0.15)"
    textColor: "{colors.marrom}"
    rounded: "{rounded.full}"
    padding: "7px 16px"
---

# Design System: Isa Pupo

## 1. Overview

**Creative North Star: "O Refúgio Interior"**

Este é o santuário visual de uma terapeuta, não a vitrine de uma clínica. O sistema inteiro é organizado por uma única tensão deliberada: o claro acolhe e o escuro aterra. Blocos claros e quentes (bege, bege-light) recebem o visitante como quem abre a porta de casa; blocos escuros full-bleed (verde-escuro, marrom) fecham a experiência com a gravidade de quem sabe o que faz. Nenhuma página pende só para um lado — a meta de ~40% de superfície escura é o mecanismo que entrega "confiança e seriedade" sem nunca perder o calor humano. É um refúgio: caloroso na entrada, sério no fundamento.

A paleta é terrosa e humana — bege como argila e pele, marrom como terra, verde como folhagem — pontuada por toques simbólicos raros: os roxos evocam o inconsciente e os sonhos, o laranja é a faísca de consciência. As formas são orgânicas, nunca mecânicas: pílulas totalmente arredondadas, blobs, e transições em onda (WaveDivider) que dissolvem o limite entre uma seção e a próxima, como estados de consciência que se sucedem. A tipografia de display é a Berliana, uma escrita que parece feita à mão — íntima, presente, humana. O movimento é sereno: brilhos que piscam devagar, elementos que flutuam, revelações linha a linha; encantamento, não espetáculo.

Este sistema rejeita explicitamente três coisas. Não é uma **clínica fria ou corporativa** — sem azuis hospitalares, sem stock photos genéricas de terapia, sem tom institucional sem alma. Não é um **coach de autoajuda** — sem frases motivacionais gritantes, sem CTAs agressivos, sem promessa de transformação em 7 dias. E não é um **template genérico de SaaS** — sem cards idênticos repetidos, sem gradientes decorativos, sem a cara de "IA fez isso".

**Key Characteristics:**
- Tensão claro×escuro como sistema, não como acidente (~40% de blocos escuros full-bleed por página).
- Paleta terrosa e humana com roxos/laranja como acentos simbólicos raros.
- Formas orgânicas: pílulas, blobs, transições em onda entre seções.
- Berliana (script) só em títulos curtos; Amaranth em todo o resto.
- Movimento sereno e simbólico; nunca frio, nunca gritante.

## 2. Colors

Uma paleta terrosa e humana, aquecida pela luz e aterrada pela sombra, com acentos simbólicos usados com parcimônia.

### Primary
- **Bege Argila** (`#EDBF9F`): a cor-assinatura quente. Preenche blobs atrás da foto da Isa, serve como cor de texto sobre blocos escuros e é o "bege" que dá nome ao acolhimento. É a pele do sistema.
- **Bege Névoa** (`#EFDDD1`): o fundo padrão do corpo (`body`). Um bege mais claro e enevoado que recebe o visitante; a maior parte das seções claras repousa sobre ele.

### Secondary
- **Verde Bosque** (`#2D3322`): o escuro profissional. Blocos full-bleed de credibilidade ("O que esperar", seções de atendimento), header e footer. Carrega a seriedade sem frieza.
- **Marrom Terra** (`#2D1605`): a cor de texto padrão sobre fundos claros e o mais escuro dos blocos (CtaBand). Aterra tudo; é a terra sob o refúgio.

### Tertiary
- **Laranja Faísca** (`#BC2F0A`): o acento de consciência. Reservado ao CTA primário (botões de agendar) e ao eyebrow das seções. Raro por princípio — sua escassez é o que o torna um chamado, não um ruído.
- **Roxo Inconsciente** (`#53346B`) e **Roxo Sonho** (`#725093`): o par simbólico junguiano. Botões e blocos temáticos, sparkles decorativos. Sugerem o inconsciente e os sonhos; nunca dominam a superfície.
- **Rosa Acolhida** (`#CF6A61`): usado quase sempre em transparência (15%) como fundo das tags e em sparkles. Um calor suave, de baixa saturação percebida.

### Neutral
- **Verde Folha** (`#6E7C59`): verde-claro para ícones e detalhes botânicos discretos.
- **Cinza Bruma** (`#9E9E9E`): neutro utilitário para bordas e estados desativados. Nunca como cor de texto de corpo.
- **Branco** (`#FFFFFF`): fundo de respiro pontual (ex.: teaser do blog) e texto sobre os escuros mais profundos.

### Named Rules
**A Regra da Faísca.** O laranja (`#BC2F0A`) é a faísca, não a fogueira. Ele aparece no CTA primário e no eyebrow — em nada mais. Se o laranja estiver preenchendo áreas grandes ou competindo por atenção, o sistema perdeu a voz.

**A Regra dos 40% Escuros.** Toda página completa carrega ~40% de superfície escura (verde-escuro ou marrom) em blocos full-bleed. O claro sozinho vira leveza sem lastro; o escuro é o que assina a competência. Nunca entregue uma página só clara.

## 3. Typography

**Display Font:** Berliana (com fallback `cursive`)
**Body Font:** Amaranth (com fallback `sans-serif`)

**Character:** Um par de contraste real. A Berliana é uma escrita de traço fluido, quase manuscrita — íntima, presente, a voz pessoal da Isa dizendo "é um prazer ter você aqui". A Amaranth é uma humanista sans arredondada e calorosa, legível e sem pretensão, que sustenta todo o corpo e os títulos longos. Script + humanist sans: nunca dois sans parecidos.

A escala de display é **contida por princípio**: nenhum passo passa de 96px (o hero), para transmitir "confiança e seriedade" sem gritar. Os clamps são fluidos, do celular ao desktop, com ratio ~1.26 entre passos.

### Hierarchy
- **Display / Hero** (Berliana 400, `clamp(52px, 9vw, 96px)`, lh 0.98): o nome "Isa Pupo" e aberturas de página. Teto de 96px. Reservado a **palavras ou frases muito curtas** — a Berliana só respira em pouca extensão.
- **Display / XL** (Berliana 400, `clamp(42px, 6.5vw, 76px)`, lh 1.02): títulos de página ("Terapia Junguiana", "Sobre Mim" display).
- **Display / LG** (Berliana 400, `clamp(34px, 5vw, 60px)`, lh 1.05): títulos de seção curtos ("Pronta para começar?", "Atendimentos").
- **Display / MD** (Berliana 400, `clamp(28px, 3.8vw, 46px)`, lh 1.08): títulos secundários (teaser do ebook).
- **Title / Longo** (Amaranth 700, `clamp(24px, 3.2vw, 34px)`, lh 1.2): quando o título é longo, ele NÃO vai em Berliana — vai em Amaranth Bold. Inclui a citação de Jung e títulos de seção longos ("Para quem é este ebook?", "O que esperar das sessões").
- **Body** (Amaranth 400, 16–21px, lh 1.5): texto corrido. 21px = lead/intro, 17px = padrão, 16px = denso/secundário. Limite de linha 65–75ch.
- **Label / Eyebrow** (Amaranth 700, 14px, tracking `0.18em`, uppercase): o eyebrow acompanhado de sparkle ✦, sempre em laranja. Um sistema de marca deliberado, não um enfeite repetido.

### Named Rules
**A Regra do Teto de 96px.** Nenhum texto de display passa de 96px (o hero). Acima disso a página grita em vez de desenhar. Os títulos secundários descem em cascata (76 → 60 → 46) mantendo hierarquia clara sem volume excessivo.

**A Regra da Berliana Curta.** Berliana só em palavras/frases curtas (um nome, 2–3 palavras). Frase ou título longo é sempre Amaranth Bold — nunca Berliana display. Uma frase inteira em script esticado vira ilegível e perde a forma. Onde um componente compartilhado renderiza títulos de comprimento variável (`SectionTitle`), a prop `displayFont="sans"` troca para Amaranth Bold nos casos longos.

**A Regra do Eyebrow Nomeado.** O eyebrow (sparkle + label tracked em laranja) é um elemento de marca com identidade — não a scaffolding de "kicker em toda seção". Use quando a seção ganha com a assinatura, não por reflexo em cada bloco.

## 4. Elevation

O sistema é fundamentalmente plano: a profundidade principal vem da **estratificação por cor** — blocos full-bleed que se sucedem, costurados por transições em onda (WaveDivider) que eliminam o fio de subpixel entre um bloco e o próximo. Sobre essa base, o sistema adota **sombras ambientes sutis** para dar uma profundidade macia e constante a elementos elevados (cards de conteúdo, botões em repouso), sempre tingidas de marrom — nunca preto puro — para permanecerem dentro da paleta terrosa. A sombra é um sussurro, não uma borda dura.

### Shadow Vocabulary
- **Ambient Suave** (`box-shadow: 0 2px 12px rgba(45, 22, 5, 0.06)`): repouso de cards e superfícies levemente elevadas. Presença mínima, apenas o suficiente para descolar do fundo.
- **Ambient Média** (`box-shadow: 0 8px 28px rgba(45, 22, 5, 0.10)`): cards de destaque e containers de conteúdo (posts, teasers).
- **Lift de Hover** (`box-shadow: 0 6px 20px rgba(45, 22, 5, 0.18)`): resposta a hover em botões preenchidos e cards, combinada a `translateY(-2px a -7px)`.

### Named Rules
**A Regra da Sombra Terrosa.** Nenhuma sombra usa preto. Toda sombra é `rgba(45, 22, 5, α)` (marrom) em baixa opacidade — a luz do refúgio é quente, então a sombra também é. Preto puro (`rgba(0,0,0,α)`) é proibido; frio e alheio à paleta.

## 5. Components

### Buttons
Sereno e confiante — pílulas totalmente arredondadas que convidam sem intimidar; a transição é suave, o repouso é calmo.
- **Shape:** pílula total (`rounded-full`, 9999px).
- **Primary:** fundo laranja (`#BC2F0A`), texto bege (`#EDBF9F`), padding `0 24px`, alturas 34/46/56px (sm/md/lg). Reservado ao CTA de agendar.
- **Dark / Purple:** variantes preenchidas em verde-escuro e roxo-escuro, ambas com texto bege — para blocos e contextos temáticos.
- **Outline (dark / orange / purple):** fundo transparente, borda e texto na cor, preenchendo na cor com texto bege no hover.
- **Hover / Focus:** `brightness(0.96)`, `translateY(-2px)`, sombra Lift de Hover; ícone à direita desliza `+4px`. `active` retorna ao repouso. Tudo neutralizado sob `prefers-reduced-motion`.

### Chips / Tags
- **Style:** pílula com fundo rosa a 15% (`rgba(207,106,97,0.15)`), borda `rosa/40`, texto marrom, `14px` uppercase tracking wide, ícone sparkle ✦ à esquerda.
- **State:** estático, informativo (ex.: "Terapeuta Junguiana e Integrativa"). Não é um filtro clicável.

### Cards / Containers
- **Corner Style:** cantos suaves; a assinatura são os raios orgânicos (`36px 80px 36px 36px`) e blobs em elementos decorativos e molduras de imagem.
- **Background:** bege-light ou branco em contexto claro; verde-escuro/marrom em contexto escuro.
- **Shadow Strategy:** Ambient Suave/Média em repouso (ver Elevation); Lift de Hover com `translateY(-7px)` na classe `.card-hover`.
- **Border:** dispensável quando a sombra ambiente já separa do fundo; quando houver, borda inteira de baixo contraste, nunca uma faixa lateral colorida.
- **Internal Padding:** gutter escalonado `24 / 40 / 64 / 96px`.

### Navigation
- **Style:** header sobre verde-escuro, links em Amaranth, âncoras de rolagem (`#sobre`, `#atendimentos`, `#ebook`, `#blog`).
- **States:** hover suave de cor; mobile em menu compacto. Sticky abaixo de modais na escala de z-index.

### Signature: WaveDivider
O componente que define o sistema. Uma onda SVG (variantes `soft` e `organic`, com `flip`) pintada na cor da **próxima** seção, sobreposta ao fundo da anterior, com `margin-bottom` negativa para eliminar a costura de subpixel. É como cada bloco de cor se dissolve no seguinte — a metáfora do refúgio feita transição. Altura fluida `clamp(32px, 5vw, 72px)`.

### Signature: Sparkle & Blob
Sparkles (✦) piscando devagar (`twinkle`, 3s) e blobs orgânicos flutuando (`float`, 6s) são a camada simbólica: sugerem o inconsciente e o encantamento junguiano sem cair no clichê esotérico. Decorativos, sempre `aria-hidden`, sempre sutis.

## 6. Do's and Don'ts

### Do:
- **Do** manter ~40% de cada página em blocos escuros full-bleed (verde-escuro/marrom). O claro acolhe, o escuro assina a competência — a **Regra dos 40% Escuros**.
- **Do** reservar o laranja (`#BC2F0A`) ao CTA primário e ao eyebrow — a **Regra da Faísca**. Sua raridade é o ponto.
- **Do** usar Berliana só em títulos curtos; título longo vai em Amaranth Bold — a **Regra da Berliana Curta**.
- **Do** costurar seções com o WaveDivider, pintando a onda na cor da seção seguinte, para transições sem costura.
- **Do** tingir toda sombra de marrom (`rgba(45,22,5,α)`) — a **Regra da Sombra Terrosa**.
- **Do** dar a cada animação uma alternativa sob `prefers-reduced-motion` e manter o conteúdo 100% visível sem JavaScript (anti-FOUC por construção).
- **Do** verificar contraste: marrom sobre bege e qualquer texto muted precisam bater ≥4.5:1.

### Don't:
- **Don't** deixar o site parecer uma **clínica fria ou corporativa** — nada de azuis hospitalares, stock photos genéricas de terapia ou tom institucional sem alma.
- **Don't** derivar para **coach de autoajuda** — sem frases motivacionais gritantes, CTAs agressivos ou urgência fabricada ("transforme sua vida em 7 dias").
- **Don't** cair no **template genérico de SaaS / cara de "IA fez isso"** — sem cards idênticos repetidos, sem hero-metric (número gigante + label + stats), sem gradientes decorativos.
- **Don't** usar `background-clip: text` com gradiente (texto em gradiente). Cor sólida sempre; ênfase por peso ou tamanho.
- **Don't** usar faixa lateral colorida (`border-left`/`border-right` > 1px) em cards, listas ou alertas. Borda inteira, tinta de fundo ou ícone — nunca a listra.
- **Don't** usar glassmorphism decorativo nem sombras pretas (`rgba(0,0,0,α)`); frias e alheias à paleta.
- **Don't** repetir o eyebrow tracked em toda seção como scaffolding. É um sistema de marca deliberado, usado quando agrega — não gramática automática.
- **Don't** alterar o copy, as 11 cores da paleta ou as fontes Amaranth/Berliana — invariantes aprovados pela cliente.
