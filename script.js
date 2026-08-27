/* =====================================================================
   UivoPets — landing page
   ---------------------------------------------------------------------
   TUDO que aparece na página está no objeto PRODUCT abaixo.
   Para trocar de produto, edite SOMENTE este objeto. Não é preciso
   mexer no HTML nem no CSS.
   ===================================================================== */

const PRODUCT = {

  /* ------------------------------------------------------------------
     1. MARCA
     O topo da página tem fundo claro de propósito: é onde entra o arquivo
     original da sua logo, sem precisar de versão branca. O rodapé, que é
     escuro, usa só o logotipo em texto — como fazem as marcas grandes.
  ------------------------------------------------------------------ */
  marca: {
    nome: 'UivoPets',

    // Recortes feitos a partir de assets/LogoUivo.png — o original continua
    // lá, intacto. A logo veio empilhada (símbolo em cima, texto embaixo) e
    // no topo do site ela precisa ficar deitada: por isso as duas peças.
    // As versões "Claro" são brancas, para o rodapé escuro.
    // Se algum arquivo faltar, a página cai sozinha no logotipo em texto.
    logo: {
      simbolo: 'assets/logo-simbolo.png',
      texto: 'assets/logo-texto.png',
      simboloClaro: 'assets/logo-simbolo-claro.png',
      textoClaro: 'assets/logo-texto-claro.png'
    }
  },

  /* ------------------------------------------------------------------
     2. SEO — título da aba, descrição do Google e imagem de compartilhamento
  ------------------------------------------------------------------ */
  seo: {
    titulo: 'Escova a Vapor 3 em 1 para Cães e Gatos | UivoPets',
    descricao: 'Escova a vapor 3 em 1 que solta o pelo morto, escova e massageia no mesmo movimento — sem nuvem de pelo pela casa. Envio do Brasil, compra 100% segura e troca fácil.',
    imagem: 'assets/placeholder-produto.svg'
  },

  /* ------------------------------------------------------------------
     3. CONTATO E REDES
     whatsapp: só números, com 55 + DDD. Ex: 5511987654321
  ------------------------------------------------------------------ */
  contato: {
    whatsapp: '5592984188792',
    whatsappMensagem: 'Olá! Vim pelo site e quero saber mais sobre o produto.',
    whatsappVisivel: '(92) 98418-8792',
    email: 'uivopets@gmail.com',
    instagram: 'https://www.instagram.com/uivopets/',
    facebook: '',
    tiktok: 'https://www.tiktok.com/@uivopets'
  },

  /* ------------------------------------------------------------------
     4. CHECKOUT — YAMPI
     urlCheckout: o link do checkout da Yampi. Os TRÊS botões "Comprar agora"
     da página (hero, bloco de preço e barra fixa do celular) leem daqui.
     Se o link do produto mudar na Yampi, é só este campo que muda.
     urlCarrinho: para onde o ícone de carrinho do topo leva. Vazio = rola
     a página até o bloco de preço — o certo para página de produto único.
     Se quiser mandar direto pro checkout, repita o link acima.
  ------------------------------------------------------------------ */
  integracao: {
    urlCheckout: 'https://uivopets.pay.yampi.com.br/r/4YRIH7WDSD',
    urlCarrinho: ''
  },

  /* ------------------------------------------------------------------
     5. HERO (primeira dobra)
     Em títulos e textos você pode usar:
       <span class="destaque">palavra</span>  → pinta de laranja
       <strong>palavra</strong>               → deixa em negrito
       <br>                                   → quebra de linha
       <i data-icone="coracao"></i>           → insere um ícone
     Ícones disponíveis: uivo, pata, coracao, escova, ondas, brilho,
     caminhao, escudo, troca, cadeado, medalha, headset, carrinho, estrela,
     chevron, whatsapp, email, instagram, facebook, tiktok
  ------------------------------------------------------------------ */
  hero: {
    badge: 'Escova a vapor 3 em 1',
    badgeIcone: 'uivo',       // ícone da tarja: 'uivo', 'pata', 'brilho'…
    titulo: 'Chega de pelo<br>em <span class="destaque">todo canto.</span>',
    texto: 'Escova a vapor 3 em 1 para cães e gatos: o <strong>vapor solta o pelo morto</strong> enquanto você escova e massageia — o pelo para na escova, não no sofá.',
    imagem: {
      src: 'assets/hero-produto.webp',
      alt: 'Gato de pelo longo sendo escovado com a escova a vapor 3 em 1 UivoPets'
    },

    // Vídeo curto em loop do produto em uso (grave você mesmo — 6 a 10s,
    // sem áudio, .mp4 ou .webm, de preferência abaixo de 2 MB).
    // Com src vazio, o hero usa a imagem acima. Com src preenchido, o vídeo
    // toca em loop e o poster aparece enquanto ele carrega.
    video: {
      src: 'assets/hero-video.mp4',
      poster: ''   // vazio = usa a foto do hero acima como primeiro quadro
    },
    cta: 'Comprar agora',
    selo: 'Compra 100% segura e garantida',

    beneficios: [
      { icone: 'ondas', texto: 'Vapor que<br>solta o pelo' },
      { icone: 'escova', texto: 'Escova e<br>recolhe' },
      { icone: 'brilho', texto: 'Massagem<br>que acalma' }
    ]
  },

  /* ------------------------------------------------------------------
     6. FAIXA DE CONFIANÇA (logo abaixo do hero)
  ------------------------------------------------------------------ */
  confianca: [
    { icone: 'brilho', titulo: 'Frete grátis', texto: 'Para todo o Brasil' },
    { icone: 'caminhao', titulo: 'Envio do Brasil', texto: 'Sem espera de importação' },
    { icone: 'escudo', titulo: 'Pagamento seguro', texto: 'Ambiente protegido' },
    { icone: 'troca', titulo: 'Troca fácil', texto: 'Até 7 dias após o recebimento' }
  ],

  /* ------------------------------------------------------------------
     7. BLOCO DE PREÇO
     "de" e "desconto" são opcionais: deixe "" e eles somem da página.
     Só anuncie um preço "de" que você realmente praticou antes (CDC).
  ------------------------------------------------------------------ */
  preco: {
    etiqueta: 'Preço de lançamento',
    // Âncora visual: R$ 57,99 aparece riscado só para dar contraste com o
    // preço real. Não é um preço praticado — decisão sua, ciente do CDC 37.
    // O checkout e os dados estruturados seguem em 45,99, que é o "por".
    // Para tirar o gatilho, é só voltar os dois campos abaixo para ''.
    desconto: '20% OFF',
    de: 'R$ 57,99',
    moeda: 'R$',
    por: '45,99',
    parcelamento: 'ou <strong>3x</strong> de <strong>R$ 15,33</strong> sem juros',
    cta: 'Comprar agora',
    selo: 'Ambiente 100% seguro'
  },

  /* ------------------------------------------------------------------
     8. AVALIAÇÕES
     ATENÇÃO — LEIA ANTES DE PUBLICAR: a nota, o total e os três depoimentos
     abaixo foram copiados LITERALMENTE do anúncio do fornecedor no AliExpress
     (Cisne 168 Store). São avaliações reais de compradores reais, mas NÃO são
     avaliações da UivoPets. Exibi-las como se fossem da sua loja é propaganda
     enganosa (CDC art. 37) e derruba conta no Meta Ads.
     Decida uma das três saídas antes de subir a página:
       a) apagar a seção até você ter avaliações próprias;
       b) manter e deixar explícito que são avaliações do produto, não da loja;
       c) substituir pelas suas assim que as primeiras vendas chegarem.
  ------------------------------------------------------------------ */
  avaliacoes: {
    eyebrow: 'Avaliações',
    titulo: `O que dizem quem já <span class="destaque">comprou</span>`,
    nota: 4.7,
    notaMaxima: 'de 5',
    base: 'Baseado em 221 avaliações do produto',
    verMais: 'Ver mais avaliações',

    // Sem fotos de cliente. Lista vazia = o bloco some sozinho da pagina e a
    // nota passa a ocupar o cartao inteiro. Se um dia chegarem fotos reais de
    // clientes, e so adicionar { src, alt } aqui que o bloco volta.
    fotos: [],

    // Textos LITERAIS do anúncio de origem — não reescreva, não embeleze.
    // A nota individual de cada um não veio na página salva; ficaram como 5
    // porque os três textos são positivos. Confira no anúncio antes de publicar.
    lista: [
      { nota: 5, texto: 'O produto chegou bem rápido, veio desmontado a parte das cerdas, mas consegui colocar no lugar, já testei e realmente sai um vaporzinho, o que vai ajudar bastante na limpeza dos meus felinos. Recomendo o produto, muito bom.', autor: 'Comprador verificado', verificado: true },
      { nota: 5, texto: 'Gostei muito, minhas gatinhas deixaram escovar de boa, amei', autor: 'B***r', verificado: true },
      { nota: 5, texto: 'Chegou direitinho, minha esposa gostou', autor: 'Comprador verificado', verificado: true }
    ]
  },

  /* ------------------------------------------------------------------
     9. FUNCIONALIDADES DO PRODUTO
  ------------------------------------------------------------------ */
  funcionalidades: {
    eyebrow: 'Como funciona',
    titulo: '<span class="destaque">3 funções</span> no mesmo movimento',
    apoio: 'Vapor, escovação e massagem de uma vez só — a higiene do seu pet em um passo, não em três.',
    itens: [
      {
        imagem: { src: 'assets/funcao-vapor.webp', alt: 'Escova a vapor UivoPets liberando vapor sobre a pelagem — funciona com água ou essência' },
        titulo: 'Vapor que solta o pelo',
        texto: 'O vapor umedece a pelagem enquanto você escova. O pelo morto se desprende com mais facilidade e fica preso na escova, em vez de levantar pela casa.'
      },
      {
        imagem: { src: 'assets/funcao-escova.webp', alt: 'Dedo apertando o botão da escova enquanto ela recolhe os pelos soltos da pelagem' },
        titulo: 'Escova e recolhe',
        texto: 'As cerdas passam pela pelagem recolhendo o que já estava solto, em cães e gatos, do focinho ao rabo.'
      },
      {
        imagem: { src: 'assets/funcao-massagem.webp', alt: 'Cabeça da escova com 84 cerdas arredondadas de silicone, que massageiam sem machucar a pele' },
        titulo: 'Massagem que acalma',
        texto: 'O movimento sobre a pele vira massagem. Nas avaliações do produto, tutores de gato contam que os bichos deixaram escovar sem briga.'
      }
    ]
  },

  /* ------------------------------------------------------------------
     10. SELOS DE CONFIANÇA
  ------------------------------------------------------------------ */
  selos: [
    { icone: 'escudo', titulo: 'Satisfação garantida', texto: 'Se não amar, devolvemos seu dinheiro.' },
    { icone: 'cadeado', titulo: 'Compra segura', texto: 'Seus dados sempre protegidos.' },
    { icone: 'medalha', titulo: 'Qualidade comprovada', texto: 'Produto testado e aprovado.' },
    { icone: 'headset', titulo: 'Suporte humanizado', texto: 'Atendimento rápido e eficiente.' }
  ],

  /* ------------------------------------------------------------------
     11. PERGUNTAS FREQUENTES
  ------------------------------------------------------------------ */
  faq: {
    eyebrow: 'Dúvidas',
    titulo: 'Perguntas frequentes',
    itens: [
      {
        pergunta: 'A escova serve para cães e para gatos?',
        resposta: 'Serve para os dois. Nas avaliações do produto aparecem tutores de cachorro e de gato, e "aprovado pelo gato" é uma das marcações mais repetidas. Com gato, faça sessões curtas nas primeiras vezes até ele se acostumar com o som.'
      },
      {
        pergunta: 'A escova vem montada?',
        resposta: 'Em parte dos envios a peça das cerdas vem separada e você encaixa antes do primeiro uso. É um encaixe simples, sem ferramenta nenhuma. Se ficar em dúvida, chama a gente no WhatsApp que a gente te mostra.'
      },
      {
        pergunta: 'Como uso o vapor pela primeira vez?',
        resposta: 'Ligue a escova longe do seu pet primeiro, só para ele ouvir o som. Depois comece pelas costas, em movimentos curtos, e vá avançando conforme ele relaxa. A maioria se acostuma logo na primeira escovação.'
      },
      {
        pergunta: 'Em quanto tempo recebo meu pedido?',
        // TODO: troque pelo prazo real do seu envio. O produto já está em
        // estoque no Brasil, então não há espera de importação.
        resposta: 'O produto sai do Brasil, sem espera de importação. O prazo médio é de 3 a 8 dias úteis, conforme a sua região. Você recebe o código de rastreio por e-mail assim que o pedido é enviado.'
      },
      {
        pergunta: 'Posso trocar ou devolver?',
        resposta: 'Pode. Você tem até 7 dias após o recebimento para solicitar a troca ou a devolução, conforme o Código de Defesa do Consumidor. É só falar com a gente no WhatsApp.'
      },
      {
        pergunta: 'Quais formas de pagamento vocês aceitam?',
        // TODO: confira no painel da Yampi quais formas você realmente
        // habilitou e em quantas parcelas. O texto tem que bater com o
        // checkout — prometer 3x e entregar 1x gera chargeback e reclamação.
        resposta: 'Cartão de crédito em até 3x sem juros, Pix e boleto bancário. O pagamento é processado em ambiente seguro pela Yampi.'
      }
    ]
  },

  /* ------------------------------------------------------------------
     12. RODAPÉ
  ------------------------------------------------------------------ */
  rodape: {
    texto: 'Produtos que fazem o seu pet uivar de felicidade. Mais praticidade e cuidado no dia a dia.',
    tituloContato: 'Fale conosco',
    tituloRedes: 'Siga a UivoPets',
    direitos: '© {ano} UivoPets — Todos os direitos reservados.'
  },

  /* ------------------------------------------------------------------
     13. OPÇÕES (true = ligado, false = desligado)
  ------------------------------------------------------------------ */
  opcoes: {
    ctaFixoMobile: true,      // barra de compra fixa no rodapé do celular
    animacoes: true,          // seções aparecem suavemente ao rolar
    dadosEstruturados: false  // marcação de produto para o Google.
                              // DESLIGADO de propósito: ligado, ele publicaria
                              // no Google a nota 4,7/221 avaliações como se
                              // fossem da UivoPets. O Google pune rich snippet
                              // de avaliação que não é da loja. Ligue quando
                              // as avaliações forem suas.
  }
};


/* =====================================================================
   ↓↓↓  DAQUI PARA BAIXO É O MOTOR DA PÁGINA  ↓↓↓
   Você não precisa editar nada abaixo desta linha para trocar de produto.
   ===================================================================== */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* --------------------------- ÍCONES -------------------------------- */
  const T = 'fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"';

  const ICONES = {
    pata: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><ellipse cx="5.8" cy="11" rx="2.2" ry="2.9"/><ellipse cx="10.4" cy="7.8" rx="2.3" ry="3.1"/><ellipse cx="15.6" cy="7.8" rx="2.3" ry="3.1"/><ellipse cx="20.2" cy="11" rx="2.2" ry="2.9"/><path d="M13 12.2c2.7 0 6 3 6 5.9 0 2.1-1.7 3.4-3.7 3.4-1.2 0-2.2-.5-3.3-.5s-2.1.5-3.3.5c-2 0-3.7-1.3-3.7-3.4 0-2.9 5.3-5.9 8-5.9z" transform="translate(-1)"/></svg>`,

    coracao: `<svg viewBox="0 0 24 24" ${T} stroke-width="2.1" aria-hidden="true"><path d="M12 20.6S3.4 15.3 3.4 9.5A4.7 4.7 0 0 1 12 6.8a4.7 4.7 0 0 1 8.6 2.7c0 5.8-8.6 11.1-8.6 11.1z"/></svg>`,

    uivo: `<svg viewBox="0 0 24 24" ${T} stroke-width="2.2" aria-hidden="true"><path d="M7.9 7.4A6 6 0 0 1 7.9 16.6"/><path d="M10.8 4A10.5 10.5 0 0 1 10.8 20"/><path d="M13.6.5A15 15 0 0 1 13.6 23.5"/></svg>`,

    escova: `<svg viewBox="0 0 24 24" ${T} aria-hidden="true"><rect x="6.5" y="4" width="11" height="9" rx="3.4"/><path d="M4 13.4h16"/><path d="M6.8 13.4V19M10.3 13.4V20M13.8 13.4V20M17.3 13.4V19"/></svg>`,

    ondas: `<svg viewBox="0 0 24 24" ${T} aria-hidden="true"><path d="M3 8.4c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M3 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M3 17.6c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg>`,

    brilho: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10.5 2.6l1.9 5 5 1.9-5 1.9-1.9 5-1.9-5-5-1.9 5-1.9z"/><path d="M18 14l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1z"/></svg>`,

    caminhao: `<svg viewBox="0 0 24 24" ${T} aria-hidden="true"><path d="M2.8 6.4h9.6a1 1 0 0 1 1 1v9.1H2.8z"/><path d="M13.4 9.8h3.4a1 1 0 0 1 .8.4l2.4 3.1a1 1 0 0 1 .2.6v2.6h-6.8z"/><circle cx="7" cy="18.4" r="1.8"/><circle cx="16.6" cy="18.4" r="1.8"/></svg>`,

    escudo: `<svg viewBox="0 0 24 24" ${T} aria-hidden="true"><path d="M12 2.8 4.6 5.9v5.9c0 4.4 3.1 7.9 7.4 9.4 4.3-1.5 7.4-5 7.4-9.4V5.9z"/><path d="m8.9 11.9 2.2 2.2 4.1-4.3"/></svg>`,

    troca: `<svg viewBox="0 0 24 24" ${T} aria-hidden="true"><path d="M3.6 10.4A8.6 8.6 0 0 1 18 6.2l2.6 2.3"/><path d="M20.9 4.4v4.4h-4.4"/><path d="M20.4 13.6A8.6 8.6 0 0 1 6 17.8l-2.6-2.3"/><path d="M3.1 19.6v-4.4h4.4"/></svg>`,

    cadeado: `<svg viewBox="0 0 24 24" ${T} aria-hidden="true"><rect x="4.6" y="10.2" width="14.8" height="10.2" rx="2.6"/><path d="M8.1 10.2V7.4a3.9 3.9 0 0 1 7.8 0v2.8"/></svg>`,

    medalha: `<svg viewBox="0 0 24 24" ${T} aria-hidden="true"><circle cx="12" cy="9.2" r="5.9"/><path d="m8.6 14.1-1.4 6.4 4.8-2.5 4.8 2.5-1.4-6.4"/><path d="m12 6.3 1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3L8.7 8.7l2.3-.3z"/></svg>`,

    headset: `<svg viewBox="0 0 24 24" ${T} aria-hidden="true"><path d="M4.2 13.4v-1.2a7.8 7.8 0 0 1 15.6 0v1.2"/><rect x="2.4" y="12.8" width="4.4" height="6.6" rx="2.2"/><rect x="17.2" y="12.8" width="4.4" height="6.6" rx="2.2"/><path d="M19.8 19.4v.4a2.4 2.4 0 0 1-2.4 2.4h-3.2"/></svg>`,

    carrinho: `<svg viewBox="0 0 24 24" ${T} aria-hidden="true"><path d="M2.6 3.4h2.3l2.4 11.3a1.8 1.8 0 0 0 1.8 1.4h8.4a1.8 1.8 0 0 0 1.8-1.4L21 7.2H6.1"/><circle cx="9.6" cy="20" r="1.5"/><circle cx="17.4" cy="20" r="1.5"/></svg>`,

    estrela: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.4l2.9 6 6.6.9-4.8 4.6 1.2 6.6L12 17.4l-5.9 3.1 1.2-6.6L2.5 9.3l6.6-.9z"/></svg>`,

    chevron: `<svg viewBox="0 0 24 24" ${T} stroke-width="2.3" aria-hidden="true"><path d="m5.5 8.8 6.5 6.4 6.5-6.4"/></svg>`,

    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.14-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.19.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.34m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.49-8.42"/></svg>`,

    email: `<svg viewBox="0 0 24 24" ${T} aria-hidden="true"><rect x="2.6" y="4.8" width="18.8" height="14.4" rx="2.6"/><path d="m3.4 6.6 8.6 6.2 8.6-6.2"/></svg>`,

    instagram: `<svg viewBox="0 0 24 24" ${T} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5.2"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r=".9" fill="currentColor" stroke="none"/></svg>`,

    facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.6 21.4v-8.2h2.8l.42-3.2h-3.22V7.9c0-.93.26-1.56 1.6-1.56h1.7V3.5c-.3-.04-1.32-.13-2.5-.13-2.48 0-4.18 1.51-4.18 4.3v2.4H7.4v3.2h2.82v8.2z"/></svg>`,

    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.5.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`
  };

  const icone = (nome) => ICONES[nome] || '';

  /* ------------------------------ LOGO --------------------------------
     Sistema de marca em duas peças:
     • topo (fundo claro)  → o arquivo da logo completa
     • rodapé (fundo navy) → só o logotipo em texto
     Se o arquivo da logo não existir, o topo cai no logotipo em texto
     sozinho — a página nunca mostra imagem quebrada.
  ---------------------------------------------------------------------- */
  function marcaHTML() {
    return `<span class="logo__nome">U<span class="logo__i">i</span>vo<span class="logo__pets">Pets</span></span>`;
  }

  /* -------------------------- UTILITÁRIOS ----------------------------- */
  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

  // resolve "hero.badge" dentro de PRODUCT
  function valor(caminho) {
    return caminho.split('.').reduce((obj, chave) => (obj == null ? obj : obj[chave]), PRODUCT);
  }

  function formatar(v) {
    if (typeof v === 'number') return v.toLocaleString('pt-BR');
    return v == null ? '' : String(v);
  }

  const linkWhatsapp = () =>
    `https://wa.me/${PRODUCT.contato.whatsapp}?text=${encodeURIComponent(PRODUCT.contato.whatsappMensagem)}`;

  // dispara evento de pixel se Meta/Google estiverem instalados
  function rastrear(evento) {
    try {
      if (typeof window.fbq === 'function') window.fbq('track', evento);
      if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: 'uivopets_' + evento });
    } catch (e) { /* pixel ausente: segue o jogo */ }
  }

  /* ------------------------ PREENCHIMENTO ----------------------------- */
  function preencherTextos() {
    $$('[data-texto]').forEach((el) => { el.textContent = formatar(valor(el.dataset.texto)); });
    $$('[data-html]').forEach((el) => { el.innerHTML = formatar(valor(el.dataset.html)); });

    $$('[data-imagem]').forEach((el) => {
      const img = valor(el.dataset.imagem) || {};
      el.src = img.src || '';
      el.alt = img.alt || '';
    });
  }

  function preencherIcones(ctx = document) {
    $$('[data-icone]', ctx).forEach((el) => {
      if (!el.dataset.pronto) {
        el.innerHTML = icone(el.dataset.icone);
        el.dataset.pronto = '1';
      }
    });
  }

  function preencherLogos() {
    const logo = PRODUCT.marca.logo || {};

    $$('[data-logo]').forEach((el) => {
      const claro = el.dataset.logo === 'claro';
      const simbolo = claro ? logo.simboloClaro : logo.simbolo;
      const texto = claro ? logo.textoClaro : logo.texto;

      if (!simbolo || !texto) { el.innerHTML = marcaHTML(); return; }

      el.innerHTML = `
        <img class="logo__simbolo" src="${simbolo}" alt="" aria-hidden="true">
        <img class="logo__texto" src="${texto}" alt="${PRODUCT.marca.nome}">`;

      // qualquer arquivo faltando derruba a dupla e volta para o logotipo em texto
      el.querySelectorAll('img').forEach((img) => {
        img.addEventListener('error', () => { el.innerHTML = marcaHTML(); });
      });
    });
  }

  /* Hero: vídeo em loop quando houver, senão a imagem do produto.
     Quem pediu menos movimento no sistema recebe direto o poster. */
  function montarHeroMidia() {
    const alvo = $('#hero-midia');
    const h = PRODUCT.hero;
    const video = h.video || {};
    const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (video.src && !semMovimento) {
      alvo.innerHTML = `
        <div class="hero__quadro">
          <video src="${video.src}" poster="${video.poster || h.imagem.src}"
                 autoplay muted loop playsinline preload="metadata"
                 aria-label="${h.imagem.alt}"></video>
        </div>`;
      return;
    }

    const src = video.src ? (video.poster || h.imagem.src) : h.imagem.src;
    alvo.innerHTML = `
      <div class="hero__quadro hero__quadro--imagem">
        <img src="${src}" alt="${h.imagem.alt}" width="900" height="900"
             fetchpriority="high" decoding="async">
      </div>`;
  }

  function aplicarSeo() {
    const { titulo, descricao, imagem } = PRODUCT.seo;
    document.title = titulo;

    const meta = (seletor, conteudo) => {
      const el = $(seletor);
      if (el) el.setAttribute('content', conteudo);
    };
    meta('meta[name="description"]', descricao);
    meta('meta[property="og:title"]', titulo);
    meta('meta[property="og:description"]', descricao);
    meta('meta[property="og:image"]', imagem);
  }

  /* ------------------------- SEÇÕES DA PÁGINA ------------------------- */
  function montarBadge() {
    const alvo = $('#badge-icone');
    if (alvo) alvo.dataset.icone = PRODUCT.hero.badgeIcone || 'pata';
  }

  function montarBeneficios() {
    $('#hero-beneficios').innerHTML = PRODUCT.hero.beneficios.map((b) => `
      <li class="beneficio">
        <span class="beneficio__icone" data-icone="${b.icone}"></span>
        <span class="beneficio__texto">${b.texto}</span>
      </li>`).join('');
  }

  function montarConfianca() {
    $('#faixa-confianca').innerHTML = PRODUCT.confianca.map((c) => `
      <li class="faixa__item">
        <span class="faixa__icone" data-icone="${c.icone}"></span>
        <span>
          <span class="faixa__titulo">${c.titulo}</span>
          <span class="faixa__texto">${c.texto}</span>
        </span>
      </li>`).join('');
  }

  function montarAvaliacoes() {
    const a = PRODUCT.avaliacoes;
    const cinco = Array.from({ length: 5 }, () => icone('estrela')).join('');

    $('#avaliacoes-estrelas').innerHTML = `
      <div class="estrelas__linha estrelas__base">${cinco}</div>
      <div class="estrelas__linha estrelas__topo" aria-hidden="true">${cinco}</div>`;
    $('#avaliacoes-estrelas').style.setProperty('--preenchido', `${(a.nota / 5) * 100}%`);
    $('#avaliacoes-estrelas').setAttribute('role', 'img');
    $('#avaliacoes-estrelas').setAttribute('aria-label', `Nota ${formatar(a.nota)} de 5`);

    $('#avaliacoes-fotos').innerHTML = a.fotos.map((f) => `
      <li><img src="${f.src}" alt="${f.alt}" loading="lazy" decoding="async" width="400" height="400"></li>`).join('');

    $('#avaliacoes-lista').innerHTML = a.lista.map((av) => `
      <li class="avaliacao">
        <div class="avaliacao__estrelas" role="img" aria-label="${av.nota} de 5 estrelas">
          ${Array.from({ length: av.nota }, () => icone('estrela')).join('')}
        </div>
        <p class="avaliacao__texto">${av.texto}</p>
        <p class="avaliacao__autor">
          ${av.autor}${av.verificado ? ' <span class="avaliacao__verificado">· compra verificada</span>' : ''}
        </p>
      </li>`).join('');
  }

  function montarFuncoes() {
    $('#funcoes-lista').innerHTML = PRODUCT.funcionalidades.itens.map((f, i) => `
      <li class="funcao" data-revelar style="--atraso:${i}">
        <div class="funcao__midia">
          <img src="${f.imagem.src}" alt="${f.imagem.alt}" loading="lazy" decoding="async" width="600" height="600">
          <span class="funcao__numero" aria-hidden="true">${i + 1}</span>
        </div>
        <h3 class="funcao__titulo">${f.titulo}</h3>
        <p class="funcao__texto">${f.texto}</p>
      </li>`).join('');
  }

  function montarSelos() {
    $('#selos-lista').innerHTML = PRODUCT.selos.map((s) => `
      <li class="selo">
        <span class="selo__icone" data-icone="${s.icone}"></span>
        <h3 class="selo__titulo">${s.titulo}</h3>
        <p class="selo__texto">${s.texto}</p>
      </li>`).join('');
  }

  function montarFaq() {
    $('#faq-lista').innerHTML = PRODUCT.faq.itens.map((item, i) => `
      <div class="faq__item">
        <h3>
          <button class="faq__pergunta" type="button" aria-expanded="false"
                  id="faq-btn-${i}" aria-controls="faq-resp-${i}">
            <span>${item.pergunta}</span>
            <span class="faq__seta" data-icone="chevron"></span>
          </button>
        </h3>
        <div class="faq__resposta" id="faq-resp-${i}" role="region" aria-labelledby="faq-btn-${i}">
          <div><p>${item.resposta}</p></div>
        </div>
      </div>`).join('');
  }

  function montarRodape() {
    const c = PRODUCT.contato;

    $('#rodape-contatos').innerHTML = `
      <li><a class="contato" href="${linkWhatsapp()}" target="_blank" rel="noopener">
        ${icone('whatsapp')}<span>${c.whatsappVisivel}</span></a></li>
      <li><a class="contato" href="mailto:${c.email}">
        ${icone('email')}<span>${c.email}</span></a></li>`;

    const redes = [
      { chave: 'instagram', nome: 'Instagram' },
      { chave: 'facebook', nome: 'Facebook' },
      { chave: 'tiktok', nome: 'TikTok' }
    ].filter((r) => c[r.chave]);

    $('#rodape-redes').innerHTML = redes.map((r) => `
      <li><a class="rede" href="${c[r.chave]}" target="_blank" rel="noopener"
             aria-label="${r.nome} da ${PRODUCT.marca.nome}">${icone(r.chave)}</a></li>`).join('') +
      `<li><a class="rede" href="mailto:${c.email}" aria-label="Enviar e-mail">${icone('email')}</a></li>`;

    const direitos = $('[data-texto="rodape.direitos"]');
    if (direitos) direitos.textContent = PRODUCT.rodape.direitos.replace('{ano}', new Date().getFullYear());
  }

  function montarDadosEstruturados() {
    if (!PRODUCT.opcoes.dadosEstruturados) return;

    const preco = Number(PRODUCT.preco.por.replace(/\./g, '').replace(',', '.'));
    const dados = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: PRODUCT.seo.titulo,
      description: PRODUCT.seo.descricao,
      image: [PRODUCT.hero.imagem.src],
      brand: { '@type': 'Brand', name: PRODUCT.marca.nome },
      offers: {
        '@type': 'Offer',
        price: preco.toFixed(2),
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(dados);
    document.head.appendChild(script);
  }

  /* --------------------------- INTERAÇÕES ----------------------------- */

  // FAQ: um aberto por vez, com navegação por setas do teclado
  function ligarFaq() {
    const botoes = $$('.faq__pergunta');

    botoes.forEach((botao, i) => {
      botao.addEventListener('click', () => {
        const item = botao.closest('.faq__item');
        const abrindo = botao.getAttribute('aria-expanded') === 'false';

        botoes.forEach((outro) => {
          outro.setAttribute('aria-expanded', 'false');
          outro.closest('.faq__item').classList.remove('aberto');
        });

        if (abrindo) {
          botao.setAttribute('aria-expanded', 'true');
          item.classList.add('aberto');
        }
      });

      botao.addEventListener('keydown', (e) => {
        const mapa = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: botoes.length - 1 };
        if (!(e.key in mapa)) return;
        e.preventDefault();
        const alvo = botoes[(mapa[e.key] + botoes.length) % botoes.length];
        if (alvo) alvo.focus();
      });
    });
  }

  function ligarVerMais() {
    const botao = $('#btn-ver-avaliacoes');
    const lista = $('#avaliacoes-lista');
    if (!botao || !lista) return;

    botao.addEventListener('click', () => {
      const aberto = botao.getAttribute('aria-expanded') === 'true';
      botao.setAttribute('aria-expanded', String(!aberto));
      lista.hidden = aberto;
    });
  }

  function ligarWhatsapp() {
    const link = $('#whatsapp-flutuante');
    if (link) link.href = linkWhatsapp();
  }

  function ligarCarrinho() {
    const botao = $('#btn-carrinho');
    if (!botao) return;

    botao.addEventListener('click', () => {
      const url = PRODUCT.integracao.urlCarrinho;
      if (url) { window.location.href = url; return; }
      $('.preco').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* -------------------------------------------------------------------
     BOTÕES "COMPRAR AGORA"
     Todos têm a classe .btn-comprar — hero, bloco de preço e barra fixa
     do celular. O clique registra o evento de pixel e manda o cliente
     para integracao.urlCheckout, que é o checkout da Yampi.
  ------------------------------------------------------------------- */
  function ligarBotoesCompra() {
    $$('.btn-comprar').forEach((botao) => {
      botao.addEventListener('click', () => {
        rastrear('InitiateCheckout');
        document.dispatchEvent(new CustomEvent('uivopets:comprar', { detail: { produto: PRODUCT.seo.titulo } }));

        const url = PRODUCT.integracao.urlCheckout;
        if (url) window.location.href = url;
      });
    });
  }

  function ligarBarraFixa() {
    const barra = $('#barra-fixa');
    const hero = $('.hero');
    if (!barra || !hero || !PRODUCT.opcoes.ctaFixoMobile) return;

    barra.hidden = false;

    if (!('IntersectionObserver' in window)) return;

    const observador = new IntersectionObserver(([entrada]) => {
      const mostrar = !entrada.isIntersecting;
      barra.classList.toggle('visivel', mostrar);
      document.body.classList.toggle('barra-ativa', mostrar);
    }, { rootMargin: '-40% 0px 0px 0px' });

    observador.observe(hero);
  }

  /* o topo ganha borda e sombra assim que a página sai do lugar */
  function ligarHeaderScroll() {
    const cabecalho = $('#cabecalho');
    if (!cabecalho) return;

    const marcar = () => cabecalho.classList.toggle('cabecalho--rolado', window.scrollY > 8);
    marcar();
    window.addEventListener('scroll', marcar, { passive: true });
  }

  function ligarRevelacao() {
    const alvos = $$('[data-revelar]');

    // irmãos que revelam juntos entram em cascata, não todos de uma vez
    alvos.forEach((el) => {
      if (el.style.getPropertyValue('--atraso')) return;
      const irmaos = Array.from(el.parentElement.children)
        .filter((filho) => filho.hasAttribute('data-revelar'));
      el.style.setProperty('--atraso', irmaos.indexOf(el));
    });

    if (!PRODUCT.opcoes.animacoes || !('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      alvos.forEach((el) => el.classList.add('visivel'));
      return;
    }

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      });
    }, { threshold: 0.12 });

    alvos.forEach((el) => observador.observe(el));
  }

  /* ----------------------------- INÍCIO ------------------------------- */
  function iniciar() {
    aplicarSeo();
    preencherTextos();
    preencherLogos();

    montarBadge();
    montarHeroMidia();
    montarBeneficios();
    montarConfianca();
    montarAvaliacoes();
    montarFuncoes();
    montarSelos();
    montarFaq();
    montarRodape();

    preencherIcones();          // roda por último: cobre também o que foi montado acima
    montarDadosEstruturados();

    ligarHeaderScroll();
    ligarFaq();
    ligarVerMais();
    ligarWhatsapp();
    ligarCarrinho();
    ligarBotoesCompra();
    ligarBarraFixa();
    ligarRevelacao();
  }

  iniciar();

  /* API pública — se um dia a página ganhar um carrinho com contador no topo:
     UivoPets.setCarrinho(2)  */
  window.UivoPets = {
    config: PRODUCT,
    setCarrinho(quantidade) {
      const el = $('#carrinho-contador');
      if (el) el.textContent = String(quantidade);
    }
  };
})();
