# UivoPets — Landing page

Página estática de produto único, mobile-first, pronta para receber tráfego pago
e mandar o cliente para o checkout da Yampi.

```
index.html     estrutura (não tem texto de produto aqui)
styles.css     visual
script.js      TODO o conteúdo fica no objeto PRODUCT, no topo do arquivo
assets/        logo, imagens e vídeo
```

Para ver a página, é só abrir o `index.html` no navegador.

---

## 1. A logo

Sua logo original está em **`assets/LogoUivo.png`** e continua intacta. Como ela
é empilhada (símbolo em cima, texto embaixo) e o topo do site tem só 62 px de
altura, ela foi recortada em duas peças que o site monta deitadas:

| Arquivo | O que é | Onde aparece |
|---|---|---|
| `logo-simbolo.png` | o lobo + as ondas | topo |
| `logo-texto.png` | o logotipo "UivoPets" | topo |
| `logo-simbolo-claro.png` | mesma coisa, em branco | rodapé (fundo escuro) |
| `logo-texto-claro.png` | mesma coisa, em branco | rodapé (fundo escuro) |

Os quatro têm fundo transparente e já vieram redimensionados para 3× o tamanho
de exibição — nítidos em tela retina, leves para carregar.

Os caminhos ficam em `PRODUCT.marca.logo`. Se algum arquivo faltar, o site
mostra o logotipo em texto automaticamente — nunca aparece imagem quebrada.

**Se você refizer a logo:** gere os quatro recortes de novo com o mesmo
enquadramento e, se a proporção mudar, ajuste os dois `aspect-ratio` no
`styles.css` (busque por `.logo__simbolo`).

## 2. Trocar o produto

Abra **`script.js`**. Tudo o que aparece na página está no objeto `PRODUCT`, nas
primeiras ~210 linhas, dividido em 13 blocos numerados:

| Bloco | O que controla |
|---|---|
| 1 · marca | nome e arquivo da logo |
| 2 · seo | título da aba, descrição no Google, imagem de compartilhamento |
| 3 · contato | WhatsApp, e-mail, redes sociais |
| 4 · integracao | link de checkout e do carrinho |
| 5 · hero | tarja, título, texto, imagem, **vídeo**, CTA e os 3 benefícios |
| 6 · confianca | a faixa de 3 ícones (entrega, pagamento, troca) |
| 7 · preco | preço, parcelamento, "de/por" e desconto |
| 8 · avaliacoes | nota, quantidade, fotos e depoimentos |
| 9 · funcionalidades | os 3 blocos numerados com imagem |
| 10 · selos | os 4 selos de garantia |
| 11 · faq | as perguntas do acordeão |
| 12 · rodape | textos do rodapé |
| 13 · opcoes | liga/desliga recursos |

Nada abaixo da linha `↓↓↓ DAQUI PARA BAIXO É O MOTOR DA PÁGINA ↓↓↓` precisa ser
tocado para trocar de produto.

**Nos textos você pode usar:**

- `<span class="destaque">palavra</span>` → pinta de laranja
- `<strong>palavra</strong>` → negrito
- `<br>` → quebra de linha
- `<i data-icone="coracao" class="icone-inline"></i>` → insere um ícone

Ícones disponíveis: `uivo`, `pata`, `coracao`, `escova`, `ondas`, `brilho`,
`caminhao`, `escudo`, `troca`, `cadeado`, `medalha`, `headset`, `carrinho`,
`estrela`, `chevron`, `whatsapp`, `email`, `instagram`, `facebook`, `tiktok`.

As listas (benefícios, selos, FAQ, funcionalidades…) aceitam quantos itens você
quiser — é só adicionar ou remover itens do array. O layout se ajusta sozinho.

## 3. Vídeo do hero

O hero aceita um vídeo curto em loop no lugar da foto. Em `PRODUCT.hero.video`:

```js
video: {
  src: 'assets/produto-em-uso.mp4',
  poster: 'assets/produto-primeiro-quadro.jpg'
}
```

Com `src` vazio, o hero usa a imagem normal. Com `src` preenchido, o vídeo toca
sozinho, mudo, em loop — e o poster aparece enquanto ele carrega.

**Como gravar:** 6 a 10 segundos, o produto sendo usado no pet, celular na
horizontal ou quadrado, boa luz, **sem áudio**, exportado em `.mp4` (H.264).
Mire em menos de 2 MB — é um vídeo que toca em cima do anúncio, cada megabyte
atrasa a primeira dobra.

Quem tem "reduzir movimento" ligado no sistema recebe o poster parado, sem o
vídeo. Isso já está tratado no código.

> Não use vídeo ou foto de banco de imagens sem licença: além do risco jurídico,
> o Meta reprova anúncio com material de terceiros em nome de outra marca.

## 4. Trocar as imagens

Coloque os arquivos em `assets/` e troque o caminho no `PRODUCT`:

| Onde | Tamanho | Formato |
|---|---|---|
| `hero.imagem` | 1200 × 1200 px | PNG com fundo transparente rende melhor |
| `funcionalidades[].imagem` | 800 × 600 px | JPG/WebP |
| `avaliacoes.fotos[]` | 600 × 600 px | JPG/WebP |

Use **WebP** sempre que der e mantenha cada imagem abaixo de ~200 KB.

Depois de definir a foto do hero, adicione no `<head>` do `index.html` para ela
carregar mais rápido:

```html
<link rel="preload" as="image" href="assets/sua-foto-hero.webp">
```

---

## 5. Checkout — Yampi

O checkout é só um link. Não tem app para instalar nem script para colar.

Os **três** botões "Comprar agora" da página — hero, bloco de preço e barra fixa
do celular — leem todos o mesmo campo no `PRODUCT.integracao`:

```js
integracao: {
  urlCheckout: 'https://uivopets.pay.yampi.com.br/r/4YRIH7WDSD',
  urlCarrinho: ''
}
```

Se o link do produto mudar na Yampi, **é só esse campo que muda**. Não encoste
no HTML: nenhum botão tem link escrito nele.

`urlCarrinho` é para onde o ícone de carrinho do topo leva. Vazio, ele rola a
página até o bloco de preço — o comportamento certo para uma página de produto
único, já que não existe carrinho de verdade aqui. Se preferir mandar direto
para o checkout, repita o link da Yampi nesse campo.

Todos os botões de compra têm a classe **`.btn-comprar`**, caso alguma
ferramenta te peça um seletor.

E, se quiser disparar algo próprio no clique, a página emite um evento:

```js
document.addEventListener('uivopets:comprar', () => { /* seu código */ });
```

Se um dia a página ganhar um carrinho com contador no topo:

```js
UivoPets.setCarrinho(2);
```

### Pixel do Meta / Google

Cole o script do pixel no `<head>` do `index.html`. O clique nos botões de compra
já dispara `InitiateCheckout` no Meta Pixel e `uivopets_InitiateCheckout` no
dataLayer do GTM automaticamente — não precisa configurar nada.

---

## 6. Como o visual foi montado

Caso você vá mexer no `styles.css`, o que sustenta a aparência de marca:

- **Tipografia em dois papéis:** Plus Jakarta Sans (800) nos títulos, Figtree
  (400/500/600) no texto corrido. Os títulos usam entreletras negativo com
  `word-spacing` compensando — se mexer em um, mexa no outro.
- **Ritmo vertical proposital:** os espaçamentos vêm dos tokens `--s-xs` a
  `--s-xl`. As seções não têm todas o mesmo respiro: `secao--respiro` marca as
  que abrem assunto novo.
- **Profundidade em camadas:** nenhuma sombra é única. `--sombra-cartao` e
  `--sombra-alta` empilham três sombras para dar volume sem borrar.
- **Microinterações:** brilho que atravessa o botão no hover, imagens que dão um
  zoom leve, topo que ganha borda ao rolar, seções que entram em cascata.
  Tudo desligado automaticamente para quem pediu "reduzir movimento".
- **Um único ornamento:** as ondas do uivo, em marca d'água no bloco de preço.
  Resista a espalhar mais — é ele que faz a página parecer desenhada, não enfeitada.

## 7. Opções (bloco 13 do `PRODUCT`)

```js
opcoes: {
  ctaFixoMobile: true,      // barra de compra fixa no rodapé do celular
  animacoes: true,          // seções entram suavemente ao rolar
  dadosEstruturados: true   // marcação de produto para o Google
}
```

---

## 8. Antes de subir tráfego

- [x] Logo aplicada no topo e no rodapé
- [ ] Trocar as imagens placeholder pelas fotos reais do produto
- [ ] Gravar o vídeo do hero (opcional, mas é o que mais separa loja improvisada
      de marca de verdade)
- [ ] Trocar os depoimentos de exemplo por **avaliações reais** — avaliação
      inventada infringe o CDC e derruba conta no Meta Ads
- [ ] Conferir se o preço "de" foi realmente praticado antes (senão, deixe
      `de: ''` e `desconto: ''` — os dois somem da página)
- [ ] Colocar o WhatsApp e o e-mail reais no bloco `contato`
- [ ] Testar o botão "Comprar agora" até o fim do checkout
- [ ] Publicar em HTTPS (Vercel, Netlify ou Cloudflare Pages hospedam de graça:
      é só arrastar a pasta)
