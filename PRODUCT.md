# Product

## Register

brand

## Platform

web

## Users

O público principal são pessoas prontas para buscar terapia agora — atravessando um momento difícil (ansiedade, luto, transições de vida) e procurando um profissional em quem confiar para dar o primeiro passo. Em paralelo, há um público secundário de curiosos sobre autoconhecimento, Jung, sonhos e símbolos, que ainda não está pronto para agendar. O site precisa converter o primeiro grupo e nutrir o segundo (via blog e ebook) até que amadureçam para uma consulta. A prioridade, quando há conflito de foco, é sempre quem já quer terapia.

## Product Purpose

Este é o site institucional da Isabella Pupo (Isa), terapeuta especialista na abordagem Junguiana e Terapeuta Integrativa, atualmente em formação em psicologia. O propósito é apresentar a Isa como pessoa e profissional, explicar suas modalidades de atendimento (terapia jungiana e integrativa), oferecer conteúdo de autoconhecimento (blog e ebook) e converter visitantes em consultas agendadas via WhatsApp. Sucesso é um visitante em sofrimento sentir-se seguro o bastante para dar o primeiro passo e agendar — e um curioso voltar para o conteúdo até chegar lá.

## Positioning

Uma relação terapêutica calorosa, próxima e sem julgamento — a Isa como pessoa real, não como "a doutora" numa instituição impessoal. O diferencial não é uma técnica, é o acolhimento humano; toda tela reforça que quem atende é alguém acessível e presente, que por acaso também é séria e competente.

## Conversion & proof

- Primary CTA: "Agendar Consulta" pelo WhatsApp (baixo atrito, conversa direta e humana em vez de um formulário frio).
- Secondary CTA: para quem ainda não está pronto, o ebook e o blog funcionam como porta de entrada de nutrição — o visitante se envolve com o conteúdo de autoconhecimento antes de decidir agendar.
- A impressão que fica após 10 segundos: uma terapeuta próxima e humana que une profundidade junguiana a técnicas integrativas — séria, mas acessível. (Descrição da impressão pretendida; o copy em si é invariante aprovado pela cliente e não deve ser reescrito.)
- Belief ladder — o que o visitante precisa acreditar, em ordem, antes de agendar: (1) "este é um lugar seguro, eu me sinto acolhido aqui"; (2) "a Isa é uma pessoa real e calorosa, alguém em quem eu confiaria"; (3) "ela é séria e competente — sabe o que faz" (junguiana + integrativa, em formação em psicologia); (4) "o primeiro passo é fácil e sem compromisso" (uma mensagem no WhatsApp).
- Proof on hand: nenhum depoimento, case ou logo de imprensa foi fornecido nesta sessão. Quando houver, adicionar em `.impeccable/assets/proof/` e referenciar por caminho. A prova de credibilidade hoje é qualitativa: a apresentação pessoal da Isa, suas formações e a foto humana (Isa com o cão Mike, cercada de elementos do seu universo).

## Brand Personality

Calorosa, próxima e humana no tom; séria e competente na sustentação. Em três palavras: acolhedora, profunda, confiável. A voz fala em primeira pessoa, de forma íntima e sem jargão ("Olá, é um prazer ter você aqui!"), tratando o visitante como alguém que está sendo recebido, não convertido. O sentimento dominante que a experiência deve provocar é confiança e seriedade — competência clínica que faz o visitante pensar "estou em boas mãos" — mas essa credibilidade é sempre entregue por meio do calor humano, nunca de frieza corporativa. Há espaço para um toque de encantamento simbólico (o inconsciente, os sonhos, o autoconhecimento junguiano), desde que sofisticado, não esotérico.

## Anti-references

O site NÃO pode parecer:
- Clínica fria ou corporativa: consultório impessoal, azuis hospitalares, stock photos genéricas de terapia, tom institucional sem alma.
- Coach de autoajuda: frases motivacionais gritantes, CTAs agressivos, promessas de "transforme sua vida em 7 dias".
- Template genérico de SaaS / cara de "IA fez isso": cards idênticos repetidos, eyebrows minúsculas tracked em cada seção, gradientes decorativos, hero-metric.

(O místico/new-age NÃO foi listado como anti-referência: um toque simbólico junguiano é bem-vindo, desde que sofisticado e sem clichê esotérico.)

## Design Principles

Humano antes de clínico: a Isa aparece como pessoa — nome, primeira pessoa, a foto com o cão Mike — nunca como instituição. Toda decisão de design deve aproximar, não formalizar.

Credibilidade pelo equilíbrio: o claro acolhe, o escuro (verde-escuro e marrom, em blocos full-bleed) sustenta a seriedade. Nenhuma página pende só para um lado — a meta de ~40% de blocos escuros, pedida pela cliente, é o mecanismo que entrega "confiança e seriedade" sem perder o calor.

Convidar, não pressionar: o CTA de agendar é caloroso e de baixo atrito (WhatsApp); quem ainda não está pronto é nutrido por blog e ebook, jamais empurrado por urgência fabricada.

Profundidade sem esoterismo raso: o simbolismo junguiano (sparkles, formas orgânicas, blobs) é sofisticação e identidade, não decoração new-age. Sugerir o inconsciente, não ilustrá-lo literalmente.

Preservar a voz: copy, as 11 cores da paleta e as fontes Amaranth (corpo) e Berliana (display) são invariantes aprovados pela cliente. A expressão criativa acontece na composição visual, no ritmo e no movimento — não reescrevendo texto nem trocando a paleta.

## Accessibility & Inclusion

O redesign já assume progressive enhancement por construção: nenhum conteúdo é escondido via `opacity-0` em CSS/markup, então o site é 100% visível e legível mesmo sem JavaScript (nenhuma revelação animada bloqueia conteúdo). Por ser um design com bastante movimento (GSAP/ScrollTrigger, floats, twinkle, marquee, parallax), respeitar `prefers-reduced-motion` é requisito — cada animação precisa de uma alternativa de crossfade ou transição instantânea. Contraste merece atenção redobrada: há muito texto sobre fundos claros e quentes (bege/bege-light) e sobre blocos escuros; alvo de trabalho recomendado é WCAG AA (corpo ≥ 4.5:1, texto grande ≥ 3:1), validar especialmente o marrom sobre bege e qualquer texto muted. O público inclui pessoas em sofrimento emocional, o que reforça clareza, baixa carga cognitiva e ausência de padrões de urgência ou pressão.
