# Pendências — UivoPets

Última atualização: **25/08/2026**
Site no ar: **https://uivopets.shop** (GitHub Pages, servindo a versão atual)
Checkout: **https://uivopets.pay.yampi.com.br/r/4YRIH7WDSD** (testado, HTTP 200)
Produto: escova a vapor 3 em 1 — AliExpress item `1005007422216091`, Cisne 168 Store

Ordenado por urgência. O que está em cima pode custar dinheiro ou conta.

---

## 1. Trava a venda

### [ ] 1.1 — HTTPS não está sendo forçado

`http://uivopets.shop` responde **200 direto**, sem redirecionar para HTTPS.
Página de venda em HTTP perde selo de segurança no navegador e o Meta reprova
anúncio.

**Como resolver:** GitHub → repositório UivoPets → Settings → Pages → marcar
**Enforce HTTPS**. Se a opção estiver cinza, espere o certificado do domínio
terminar de emitir e volte depois.

### [ ] 1.2 — Formas de pagamento do FAQ podem não bater com a Yampi

O FAQ promete: *"cartão de crédito em até 3x sem juros, Pix e boleto bancário"*.
Esse texto veio do rascunho antigo, ninguém conferiu no painel.

Prometer 3x e o checkout oferecer só à vista gera chargeback e reclamação.

**Onde:** `script.js`, seção 11, última pergunta (tem um `TODO` no comentário).
**O que fazer:** abrir o painel da Yampi, ver o que está habilitado, e ajustar o
texto — ou me passar a lista que eu ajusto.

### [ ] 1.3 — Prazo de entrega é um chute

O FAQ diz *"3 a 8 dias úteis"*. Inventei com base no fato de o produto já estar
em estoque no Brasil. **Não é um prazo que você confirmou.**

**Onde:** `script.js`, seção 11, pergunta "Em quanto tempo recebo meu pedido?"
(tem `TODO` no comentário).

### [ ] 1.4 — Margem de R$ 18,00 por venda

Custo R$ 27,99 · venda R$ 45,99 · **bruto R$ 18,00**. Tirando taxa da Yampi e o
frete que você banca, sobram uns R$ 12–14.

Custo por venda com tráfego pago no nicho pet costuma passar disso. Do jeito que
está, cada venda vinda de anúncio pode dar prejuízo.

**Decisão sua.** Saídas possíveis: subir o preço, montar kit de 2 unidades para
diluir o frete, ou vender só por orgânico/WhatsApp até validar.

---

## 2. Risco legal e de conta

### [ ] 2.1 — As avaliações são do fornecedor, não da UivoPets

A nota **4,7**, o total de **221 avaliações** e os **três depoimentos** foram
copiados literalmente do anúncio da Cisne 168 Store no AliExpress. São reais,
mas são do produto — **não são da sua loja**.

Exibir como se fossem suas é CDC art. 37 (propaganda enganosa) e derruba conta
no Meta Ads.

**Onde:** `script.js`, seção 8 — o aviso completo está comentado no código.
**Três saídas:**
- a) apagar a seção até você ter avaliações próprias;
- b) manter, mas deixar escrito na página que são avaliações **do produto**;
- c) trocar pelas suas assim que as primeiras vendas chegarem.

Enquanto não decidir, **não rode anúncio apontando para a página**.

### [ ] 2.2 — Dados estruturados desligados de propósito

`PRODUCT.opcoes.dadosEstruturados` está **`false`**.

Ligado, ele publicaria no Google a nota 4,7/221 avaliações como se fossem da
UivoPets. O Google pune rich snippet de avaliação que não é da loja.

**Religar só depois de resolver a 2.1** com avaliações próprias.

### [ ] 2.3 — Preço "de" e desconto vazios

`preco.de` e `preco.desconto` estão em `''` e somem da página. Está certo: você
nunca praticou um preço maior.

**Só preencha depois de ter vendido mais caro de verdade.** Preço "de" fictício
é infração ao CDC.

---

## 3. Conteúdo que falta

### [ ] 3.1 — Fotos do produto (você ia mandar)

Tudo ainda é placeholder SVG. Onde entra foto de verdade:

| Onde | Campo em `script.js` |
|---|---|
| Imagem do hero | `hero.imagem.src` (linha ~87) |
| Imagem de compartilhamento | `seo.imagem` (linha ~39) |
| 3 fotos de avaliação | `avaliacoes.fotos` (linhas ~157-159) |
| 3 imagens das funções | `funcionalidades.itens[].imagem` (linhas ~181-191) |

**Atalho disponível:** as 6 fotos oficiais do anúncio já estão baixadas em
`assets/…AliExpress_files/` (formato `.avif`). Dá para usar como provisórias e
trocar pelas suas depois. É só pedir.

### [ ] 3.2 — Como o produto funciona (ninguém sabe ainda)

O anúncio do AliExpress **não tem ficha técnica** — a única especificação é
"Tipo: Cães". Não sabemos:

- É elétrico? Bateria recarregável, pilha, ou tomada?
- Tem reservatório de água? De quanto?
- Qual o material das cerdas? Dimensões? Peso?

Isso importa porque o FAQ que escrevi **presume que a escova faz barulho ao
ligar** (a resposta manda ligar longe do pet primeiro para ele se acostumar com
o som). Se não for elétrica, a resposta está errada.

**Dá para descobrir olhando as fotos do anúncio.** Confirma e me avisa.

### [ ] 3.3 — Vídeo do hero

`hero.video.src` está vazio, então o hero usa a imagem estática. Um vídeo curto
(6–10s, sem áudio, abaixo de 2 MB) do vapor saindo converte bem melhor que foto
parada nesse tipo de produto.

### [ ] 3.4 — Pixel do Meta / Google

Nada instalado. O lugar de colar já está preparado e comentado no fim do
`index.html`, antes do `<script src="script.js">`.

Os botões já disparam `InitiateCheckout` sozinhos assim que o pixel existir —
não precisa configurar evento.

---

## 4. Ajustes finos

### [ ] 4.1 — Link da Yampi cai no carrinho, não no pagamento

`https://uivopets.pay.yampi.com.br/r/4YRIH7WDSD` redireciona para
`/cart` — o cliente vê o carrinho com o produto dentro e precisa de mais um
clique até pagar.

Se a Yampi oferecer um link de **checkout direto**, troca em
`PRODUCT.integracao.urlCheckout` (é o único lugar; os três botões leem de lá).

### [ ] 4.2 — Ícone de carrinho do topo

`integracao.urlCarrinho` está vazio, então o ícone rola a página até o bloco de
preço. Para página de produto único isso faz sentido. Se preferir mandar direto
pra Yampi, é só repetir o link nesse campo.

### [ ] 4.3 — Facebook sem página

`contato.facebook` está `''` e o ícone some sozinho do rodapé. Quando existir
página, é só preencher.

### [ ] 4.4 — E-mail no Gmail, tendo domínio próprio

Hoje: `uivopets@gmail.com`. Você é dono de `uivopets.shop` — um
`contato@uivopets.shop` passa mais confiança numa página de venda.

### [ ] 4.5 — Página do AliExpress ocupando 10 MB na pasta

`assets/…AliExpress.html` + `assets/…AliExpress_files/` são a página salva que
serviu de fonte. Já estão no `.gitignore`, então **não vão para o site**.

Pode apagar quando não precisar mais consultar.

---

## Onde mexer em cada coisa

Todo o conteúdo da página vive no objeto `PRODUCT`, no topo do `script.js`.
Nada de texto fica no HTML.

| Seção do `PRODUCT` | O que controla |
|---|---|
| 2. `seo` | título da aba, descrição do Google |
| 3. `contato` | WhatsApp, e-mail, redes |
| 4. `integracao` | **link do checkout** |
| 5. `hero` | primeira dobra |
| 7. `preco` | preço e parcelamento |
| 8. `avaliacoes` | nota e depoimentos |
| 9. `funcionalidades` | as 3 funções |
| 11. `faq` | perguntas frequentes |
| 13. `opcoes` | liga/desliga recursos |
