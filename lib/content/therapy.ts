export interface TherapySection {
  title: string;
  items: string[];
}

export interface TherapyData {
  slug: string;
  tagText: string;
  tagIcon: "moon-stars-fill" | "stars";
  title: string;
  lead: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  imageWrapperClassName?: string;
  sections: TherapySection[];
  whatsappMessage: string;
  metaDescription: string;
}

export const TERAPIA_JUNGIANA: TherapyData = {
  slug: "jungiana",
  tagText: "Psicologia analítica de Carl Jung",
  tagIcon: "moon-stars-fill",
  title: "Terapia Junguiana",
  lead: "A análise junguiana é uma abordagem terapêutica baseada na psicologia de Carl Gustav Jung. Através do equilíbrio entre os diferentes aspectos da personalidade, trabalhamos para desenvolver uma identidade mais autêntica e equilibrada, compreendendo os significados profundos por trás de suas vivências e emoções.",
  image: "/imgs/pag-terapia-jungiana.webp",
  imageAlt: "Isa Pupo em blusa vermelha com fundo com elementos naturais, concentrada anotando em um caderno.",
  intro: [
    "As sessões ocorrem de forma online, uma vez por semana, com duração de 50 minutos a 1 hora. Neste espaço seguro, você é convidado a falar livremente sobre o cotidiano, memórias, sonhos, dores e o que você não conseguiria dizer para mais ninguém.",
    "Atuamos através de técnicas projetivas ao invés de imaginação ativa. O objetivo é acessar o inconsciente, transformando sintomas em consciência e promovendo o fortalecimento da sua autonomia.",
    "O foco não é apenas aliviar o sintoma, mas despertar o potencial de individuação e uma relação mais íntegra com a sua própria história.",
  ].join("\n"),
  sections: [
    {
      title: "O que trabalhamos",
      items: [
        "Equilíbrio entre luz e sombra",
        "Compreensão de sonhos e afetos",
        "Descobertas de padrões repetitivos",
        "Acesso a imagens, fantasias e intuições",
        "Fortalecimento do \"Eu\"",
        "Sentido de Vida",
      ],
    },
    {
      title: "Benefícios",
      items: [
        "Clareza sobre quem você realmente é",
        "Mudança na forma de lidar com as emoções",
        "Viver de acordo com sua verdade interna",
        "Nova perspectiva sobre a própria história",
      ],
    },
    {
      title: "Para quem é indicado",
      items: [
        "Pessoas em processos de transição ou crise existencial",
        "Quem deseja explorar o universo dos sonhos e símbolos",
        "Quem se sente \"preso\" em mesmos ciclos emocionais",
        "Pessoas que buscam uma vida mais consciente e plena",
        "Auxílio em casos de depressão, ansiedade e traumas",
      ],
    },
  ],
  whatsappMessage: "Olá Isa! Gostaria de saber mais sobre Terapia Junguiana.",
  metaDescription:
    "Conheça a Psicologia Analítica Jungiana e como ela pode transformar sua relação consigo mesmo através do autoconhecimento e da individuação.",
};

export const TERAPIA_INTEGRATIVA: TherapyData = {
  slug: "integrativa",
  tagText: "Saúde Holística e Bem-estar",
  tagIcon: "stars",
  title: "Terapia Integrativa",
  lead: "O atendimento integrativo é um espaço de acolhimento e respeito à individualidade. Sem fórmulas fixas ou roteiros, cada processo é guiado pela escuta sutil da intuição e pela confiança no que o momento pede. Aqui, a espiritualidade é parte viva, criando um ambiente seguro e amoroso para a sua jornada.",
  image: "/imgs/pag-terapia-integrativa.webp",
  imageAlt: "Polaroids da Isa Pupo organizando e efetuando a terapia integrativa, com esteira de ervas e muito cuidado e carinho.",
  imageFit: "contain",
  imageWrapperClassName: "h-[560px] md:h-[760px]",
  intro: [
    "Cada sessão é conduzida com presença absoluta. O trabalho é um somar de saberes que une sensibilidade e entrega, sempre guiado pelo coração e pelo que se revela no aqui e agora.",
    "As práticas se entrelaçam com o uso do Reiki, como ferramenta de canalização de energia vital para restabelecer o fluxo do corpo, e com a sabedoria ancestral. Utilizamos o poder das plantas e dos elementos da natureza através de esteiras de ervas e benzimentos, honrando as tradições para realizar uma limpeza e harmonização profunda.",
    "O objetivo é promover um relaxamento restaurador, aliviando tensões e respeitando a energia singular de cada ser.",
  ].join("\n"),
  sections: [
    {
      title: "O que trabalhamos",
      items: [
        "Restabelecimento do fluxo vital do corpo",
        "Uso de propriedades botânicas para purificação",
        "Relaxamento profundo através do Reiki e presença",
        "Integração com os elementos ancestrais",
        "Práticas que honram a fé e a espiritualidade",
      ],
    },
    {
      title: "Benefícios",
      items: [
        "Redução imediata do estresse e da carga mental",
        "Sensação de leveza e clareza espiritual",
        "Sentir-se visto em sua total individualidade",
        "Liberação de energias estagnadas",
        "Recuperação do ânimo através da natureza",
      ],
    },
    {
      title: "Para quem é indicado",
      items: [
        "Quem precisa de um espaço seguro e amoroso",
        "Quem se sente sobrecarregado ou \"pesado\" emocionalmente",
        "Quem se identifica com a força das ervas e elementos naturais",
        "Quem busca um atendimento que considere a alma e a intuição",
        "Quem deseja silenciar a mente e cuidar do espírito",
      ],
    },
  ],
  whatsappMessage: "Olá Isa! Gostaria de saber mais sobre Terapia Integrativa.",
  metaDescription:
    "Conheça a Terapia Integrativa com Isa Pupo — uma abordagem que une corpo, mente e espiritualidade através de práticas ancestrais e Reiki.",
};
