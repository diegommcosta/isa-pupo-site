# Design System - Isabella Pupo | Psicoterapia

Este documento define as diretrizes visuais e de interface para o site de Isabella Pupo.

---

## 1. Paleta de Cores

| Nome | Hex | Uso sugerido |
| :--- | :--- | :--- |
| **Bege** | `#EDBF9F` | Textos/Icones (Base), Fundo (Hero 60% opc.) |
| **Bege Light** | `#EFDDD1` | Fundo de Cards e Seções específicas |
| **Rosa** | `#CF6A61` | Detalhes/Tags (15% opacidade) |
| **Laranja** | `#BC2F0A` | Botões (CTA), Destaques |
| **Roxo Claro** | `#725093` | Elementos de apoio |
| **Roxo Escuro** | `#53346B` | Textos/Botões (Ebook) |
| **Marrom** | `#2D1605` | Textos (Corpo e Destaques), Fundo (CTA) |
| **Verde Claro** | `#6E7C59` | Linhas separadoras |
| **Verde Escuro** | `#2D3322` | Fundo (Header, Footer, Atendimentos) |

---

## 2. Tipografia & Animação
* **Fontes:** Berliana (Logos, Títulos Footer) e Amaranth (Corpo, Navegação, Botões).
* **Animação:** Todas as sessões devem utilizar a biblioteca **GSAP** para transições elegantes e fluidas.

---

## 3. Componentes & Sessões

### 3.1. Header
* **Fundo:** Verde Escuro.
* **Textos:** Amaranth Regular 16px, Bege.
* **Responsividade:**
    * **Home:** Logo (Bege) -> Home; Menu (Sobre, Atendimentos, Ebook, Blog); Btn Agendar (Laranja/Bege); Icone Insta (Link).
    * **Páginas Internas:** Logo (Bege) -> Home; Menu (Home, Sobre, Atendimentos, Ebook, Blog).

### 3.2. Hero
* **Layout:** 2 colunas. Desktop: Info/CTAs (Esq), Imagem (Dir). Mobile: Imagem (Topo), Info (Baixo).
* **Fundo:** Bege (60% opacidade).
* **Tag:** Fundo Rosa (15% opacidade), Texto Marrom.
* **Título:** "Isa Pupo" (Berliana 64px, Marrom).
* **Descrição:** Amaranth 16px, Marrom.
* **Imagem:** `hero.png`.
* **Botões:**
    1. Preenchido: Ícone Balão + "Agendar consulta".
    2. Traçado: "Saiba mais" + Ícone Seta Dir.

### 3.3. Divisão (Hero -> Sobre)
* **Fundo:** Roxo.
* **Elemento:** `cerebro_coracao_flores 1.png` (Máx 310px).
* **Texto:** Citação (Amaranth 32px Bold, Bege) + Autor (Amaranth 20px Regular, Bege).

### 3.4. Sobre Mim
* **Fundo:** Branco.
* **Layout:** 2 colunas. Desktop: Foto (Esq), Texto (Dir). Mobile: Foto (Topo), Texto (Baixo).
* **Imagem:** `sobre mim.png`.
* **Texto:** Título "Isa Pupo" (Amaranth 48px, Verde Escuro). Corpo (Amaranth 20px, cores e estilos variáveis conforme referência).

### 3.5. Atendimentos
* **Fundo:** Verde Escuro.
* **Título da Sessão:** Bege, Amaranth Bold 32px, linha Laranja inferior.
* **Cards:** Fundo `Bege Light`, padding 40px, rounded 30px, Img `cerebro_coracao 1.png` (background).
    * **Ícones:** Fundo circular Bege, ícones Marrom (24px, padding 10px). *Moon-star-fill* (Jungiano), *Stars* (Integrativo).
    * **Textos:** Título 36px Marrom, Descrição 20px Marrom.
    * **Lista:** Logo.svg (Laranja), Texto 16px Marrom.
* **Botões:** Laranja (Preenchido/Traçado), texto/ícone Bege. (WhatsApp p/ atendimento específico, Saiba Mais p/ página própria).

### 3.6. Ebook
* **Fundo:** Bege.
* **Título:** Verde Escuro, Amaranth 48px Bold.
* **Layout:** 2 colunas. Mobile: Imagem `livro.png` (Topo), Texto (Baixo).
* **Textos:** Título 48px Roxo Escuro; Descrição 20px Verde Escuro; Título Lista 20px Bold Verde Escuro.
* **Lista:** Ícone *Star-fill* (Roxo Claro), Texto 16px Verde Escuro.
* **Botões:** Roxo Escuro (Preenchido/Traçado).

### 3.7. Blog
* **Fundo:** Branco.
* **Título:** Verde Escuro, Amaranth 32px Bold, Subtítulo (2 linhas, Amaranth 16px, Verde Escuro).
* **Cards:** Fundo `Bege Light`, Padding 30px, rounded 30px.
    * **Imagem:** Topo (altura 190px, rounded top corners).
    * **Conteúdo:** Data (*Calendar* 16px, Verde), Título (24px Verde Escuro Bold), Descrição (16px Marrom), Img fundo `cerebro_coracao 1.png`.
    * **Botão:** Traçado Laranja "Ver mais" + Seta.
* **Footer Blog:** Botão Traçado Verde Escuro "Ver todos".

### 3.8. CTA Final
* **Fundo:** Marrom.
* **Imagem:** `cerebro_lampada 2.png` (Sobre o fundo Marrom).
* **Texto:** Título 32px Bege Bold, Texto 20px Bege Regular.
* **Botão:** Preenchido Laranja + Ícone Chat + "Agende sua consulta" (Bege).

---

> **Nota para o Claude Code/IA:** Este `design.md` deve ser revisado em conjunto com .fig: "D:\isa pupa\SITE\prints\Site Isa Pupo.fig". Por favor, compare a estrutura técnica aqui definida com os elementos visuais do.fig fornecido (layout, proporções, aplicação das cores e hierarquia) para garantir que a implementação final reflita fielmente o design pretendido, focando diretamente nas imagens em vez de ferramentas de extração automáticas.