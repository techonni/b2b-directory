// Versões em português dos guias mais lidos. As capturas, as fontes e as ferramentas vêm do guia
// francês (mesmo `slug`) ; aqui só está o texto. Cada etapa corresponde, pela ordem, a uma etapa do guia francês.
import type { TranslatedGuide } from "../i18n";

export const ptGuides: TranslatedGuide[] = [
  {
    slug: "essayer-shopify-gratuitement",
    localSlug: "experimentar-shopify-gratis",
    question: "Como experimentar a Shopify grátis?",
    summary: "O teste de 3 dias, depois 1 € por mês durante 3 meses: como aproveitar.",
    intro:
      "A Shopify pode ser experimentada gratuitamente durante 3 dias. Depois, a oferta de lançamento permite continuar por 1 € por mês durante 3 meses (oferta vista a 27 de setembro de 2026), o suficiente para montar a loja sem grandes custos.",
    steps: [
      {
        title: "Abra a página de preços",
        text: "Em shopify.com, a página de preços mostra a oferta do momento: 3 dias grátis, depois 1 € por mês durante 3 meses. A oferta pode mudar e depender do país: leia-a no próprio dia.",
        alt: "Página de preços da Shopify: 3 dias de teste, depois 1 €/mês durante 3 meses",
      },
      {
        title: "Clique no botão para começar grátis",
        text: "Introduza o seu e-mail e crie a conta. A Shopify faz algumas perguntas sobre o seu projeto para preparar a loja.",
      },
      {
        title: "Prepare o essencial durante os 3 dias",
        text: "Adicione um ou dois produtos, escolha um tema e veja as definições de pagamento. Vai perceber depressa se a ferramenta lhe serve.",
      },
      {
        title: "Escolha um plano para continuar",
        text: "Para manter a loja depois do teste, escolha um plano. A oferta de 1 € aplica-se então durante 3 meses, e depois começa o preço normal do plano.",
      },
      {
        title: "Aponte a data de fim",
        text: "Ponha um lembrete antes do fim dos 3 meses a 1 €: é aí que começa o preço normal.",
      },
    ],
    pitfalls: [
      "Esquecer que, depois de 3 meses a 1 €, o plano passa ao preço normal.",
      "Passar o teste a configurar tudo sem adicionar um único produto: não se vê o funcionamento real.",
    ],
  },
  {
    slug: "choisir-entre-leadpages-et-shopify",
    localSlug: "leadpages-ou-shopify",
    question: "Leadpages ou Shopify: qual escolher?",
    summary: "Páginas que convertem, uma loja completa, ou as duas juntas.",
    intro:
      "A Leadpages (e o HTML Pub) serve para criar páginas que transformam visitantes em contactos ou clientes. A Shopify serve para gerir uma loja: produtos, stock, pagamentos e envios.",
    steps: [
      {
        title: "Vende vários produtos? Escolha a Shopify",
        text: "Catálogo, stock, variantes, portes, impostos, encomendas e devoluções: a Shopify trata de tudo isso. A Leadpages não foi feita para gerir uma loja.",
        alt: "Os planos Shopify Basic, Grow, Advanced e Plus",
      },
      {
        title: "Quer recolher contactos? Escolha a Leadpages ou o HTML Pub",
        text: "Página de inscrição, página de espera antes de um lançamento, webinar, guia gratuito: basta uma landing page com um formulário, sem loja.",
        alt: "As ofertas HTML Pub e Leadpages lado a lado",
      },
      {
        title: "Tem um só produto ou um serviço? Comece simples",
        text: "Uma página HTML Pub com um botão de pagamento pode chegar para um produto único, uma formação ou um serviço. Passe para a Shopify quando o catálogo crescer.",
      },
      {
        title: "Faz publicidade? Use as duas",
        text: "Envie os visitantes para uma landing page Leadpages centrada numa oferta e, depois, para o produto na sua loja Shopify. Com a Leadpages pode testar duas versões da página.",
      },
      {
        title: "Experimente antes de pagar",
        text: "A Leadpages e o HTML Pub têm 7 dias de teste; a Shopify tem um teste e depois uma oferta de lançamento. Confirme as condições do dia nas páginas de preços.",
      },
    ],
    pitfalls: [
      "Construir uma loja inteira na Leadpages: gerir encomendas e stock torna-se rapidamente impossível.",
      "Enviar um anúncio para a página inicial da loja em vez de uma página centrada numa só oferta.",
    ],
  },
  {
    slug: "choisir-entre-html-pub-et-leadpages",
    localSlug: "html-pub-ou-leadpages",
    question: "Como escolher entre HTML Pub e Leadpages?",
    summary: "Publicar de forma simples ou otimizar as conversões: a oferta certa para a sua necessidade.",
    intro:
      "O HTML Pub e a Leadpages vêm da mesma empresa e usam o mesmo motor. O HTML Pub serve para publicar. A Leadpages junta tudo o que ajuda a converter mais visitantes.",
    steps: [
      {
        title: "Pergunte-se o que quer fazer",
        text: "Quer só pôr online uma página, um pequeno site ou um blog com o seu domínio? O HTML Pub chega. Quer testar duas versões de uma página para saber qual vende mais? Precisa da Leadpages.",
      },
      {
        title: "Veja as três ofertas HTML Pub",
        text: "Starter: 5 páginas e 1 domínio. Pro: 25 páginas, 1 blog e acesso API, para um criador sozinho. Business: 50 páginas, 2 domínios e 2 blogs, para uma pequena equipa ou agência. A publicação a partir do Claude está incluída em todas as ofertas.",
        alt: "Página de preços: as ofertas HTML Pub (Publish) e Leadpages (Optimize) lado a lado",
      },
      {
        title: "Veja as três ofertas Leadpages",
        text: "Grow junta os testes A/B manuais, a substituição dinâmica de texto e o enriquecimento de contactos. Optimize junta o Smart Traffic, os mapas de calor e a personalização automática. Scale junta a otimização automática completa e um suporte dedicado.",
      },
      {
        title: "Comece pequeno",
        text: "As suas páginas e domínios acompanham-no se mudar de oferta. Pode começar com o HTML Pub e passar para a Leadpages no dia em que tiver visitantes suficientes para testar.",
      },
      {
        title: "Confirme o preço no próprio dia",
        text: "Os preços mudam com as promoções e com a faturação mensal ou anual (cerca de 20 % menos por ano). Consulte a página de preços antes de escolher.",
      },
    ],
    pitfalls: [
      "Escolher Leadpages Optimize logo no início, sem tráfego: os testes e os mapas de calor precisam de visitantes para serem úteis.",
      "Pensar que o HTML Pub faz testes A/B: não faz, os testes começam na Leadpages Grow.",
    ],
  },
  {
    slug: "essayer-leadpages-gratuitement",
    localSlug: "experimentar-leadpages-gratis",
    question: "Como experimentar a Leadpages grátis?",
    summary: "O teste de 7 dias, o que inclui e como não ser cobrado.",
    intro:
      "Cada oferta HTML Pub e Leadpages pode ser experimentada durante 7 dias com todas as funções. É pedido um cartão bancário, mas nada é cobrado antes do 7.º dia.",
    steps: [
      {
        title: "Escolha a oferta a testar",
        text: "Na página de preços, escolha a faturação mensal ou anual e depois a oferta que lhe interessa. Teste aquela que pensa mesmo manter: o teste dá acesso a todas as suas funções.",
      },
      {
        title: "Clique em « Start 7-Day Free Trial »",
        text: "Crie a conta com o seu e-mail e indique um cartão bancário. Só serve para continuar depois do teste.",
        alt: "Botões « Start 7-Day Free Trial » em cada oferta",
      },
      {
        title: "Aponte a data de fim",
        text: "Ponha um lembrete na agenda um ou dois dias antes do fim dos 7 dias. É o momento de decidir se fica com a oferta.",
      },
      {
        title: "Use o teste a sério",
        text: "Crie uma página real, ligue o seu domínio e a sua ferramenta de e-mail. Vai perceber depressa se a ferramenta lhe serve.",
      },
      {
        title: "Mantenha ou cancele",
        text: "Se gostar, não faça nada: a assinatura começa. Se não, cancele antes do 7.º dia nas definições da conta. As suas páginas ficam guardadas.",
      },
    ],
    pitfalls: [
      "Esquecer a data de fim e ser cobrado sem querer.",
      "Passar o teste a ver modelos sem publicar: não se descobrem os limites reais da ferramenta.",
    ],
  },
  {
    slug: "creer-une-landing-page-avec-l-ia",
    localSlug: "criar-landing-page-com-ia",
    question: "Como criar uma landing page com a IA da Leadpages?",
    summary: "Descrever a página, deixar a IA construí-la e depois melhorá-la a conversar.",
    intro:
      "O assistente de criação (Piper, o « Page Agent ») constrói uma página a partir de uma simples descrição. Depois corrige-a a falar com ele, como numa conversa.",
    steps: [
      {
        title: "Abra o ecrã de criação",
        text: "No menu da esquerda, clique em « Create ». O Piper pergunta « What are you making? »: escolha « Landing page ».",
        alt: "Ecrã Create: o Piper pergunta « What are you making? »",
      },
      {
        title: "Descreva a página com precisão",
        text: "No campo de baixo, diga a quem se dirige a página, o que oferece, o tom, as cores e as secções que quer (título, vantagens, opiniões, formulário). Quanto mais preciso, melhor o resultado. Clique em « Send ».",
        alt: "Descrição de uma landing page escrita na barra de texto",
      },
      {
        title: "Escolha as imagens",
        text: "O Piper pergunta o que usar nas imagens: as suas, imagens geradas por IA (mais créditos) ou nenhuma por agora. O custo estimado em créditos aparece em cima à direita. « Skip images for now » é a opção mais económica.",
        alt: "Escolha das imagens com a estimativa de créditos",
      },
      {
        title: "Escolha um estilo",
        text: "São propostas três direções visuais. Clique na que prefere, ajuste « How far should I push it? » se quiser e clique em « Build it ».",
        alt: "Três direções de estilo propostas pelo Piper",
      },
      {
        title: "Deixe o Piper construir",
        text: "A construção faz-se em seis etapas, em cerca de um minuto: leitura do pedido, secções, textos, imagens, montagem e verificação.",
        alt: "Construção da página, etapa a etapa",
      },
      {
        title: "Corrija a conversar",
        text: "Clique em « Open in editor ». No campo « Ask Piper to edit this page… », peça uma alteração de cada vez. O Piper lista o que mudou e os créditos usados.",
        alt: "Editor: o Piper aplica uma alteração pedida",
      },
      {
        title: "Verifique no telemóvel e publique",
        text: "Os ícones em baixo à direita do editor mostram a página em computador, tablet e telemóvel. Para a pôr online, mantenha o endereço gratuito em pubhtml.com ou ligue o seu domínio (« Where should this live? »). Depois, « Update » publica as alterações.",
        alt: "Escolha do endereço de publicação: gratuito ou o seu domínio",
      },
    ],
    pitfalls: [
      "Escrever uma descrição vaga (« uma página bonita »): gastam-se créditos em correções.",
      "Esquecer o formulário ou o botão de ação: uma landing page sem objetivo não serve para nada.",
    ],
  },
  {
    slug: "creer-sa-boutique-shopify",
    localSlug: "criar-loja-shopify",
    question: "Como criar uma loja Shopify?",
    summary: "Da inscrição à loja online: conta, tema, produtos e pagamentos, pela ordem.",
    intro:
      "Criar uma loja Shopify demora uma hora para uma primeira versão. A administração guia-o, e o assistente de IA Sidekick responde às suas perguntas.",
    steps: [
      {
        title: "Crie a sua conta",
        text: "Em shopify.com, clique no botão para começar grátis, introduza o seu e-mail e responda às perguntas sobre o projeto.",
      },
      {
        title: "Conheça a administração",
        text: "O menu da esquerda reúne tudo: encomendas, produtos, clientes, descontos, loja online e definições. A página inicial mostra o estado da loja e uma barra para pedir ajuda ao Sidekick.",
        alt: "Página inicial da administração Shopify com o menu e o Sidekick",
      },
      {
        title: "Adicione os primeiros produtos",
        text: "Em « Produtos », adicione pelo menos um produto com foto, descrição e preço.",
      },
      {
        title: "Escolha um tema",
        text: "Na loja online, escolha um tema e personalize as cores, o logótipo e a página inicial.",
      },
      {
        title: "Configure pagamentos e envios",
        text: "Nas definições, configure os pagamentos, os envios e os impostos do seu país.",
      },
      {
        title: "Ponha a loja online",
        text: "Escolha um plano, ligue o seu domínio e retire a palavra-passe da loja para a abrir ao público.",
      },
    ],
    pitfalls: [
      "Abrir a loja sem testar uma encomenda do princípio ao fim.",
      "Esquecer as páginas legais (condições de venda, reembolso, privacidade).",
    ],
  },
  {
    slug: "combien-coute-shopify",
    localSlug: "quanto-custa-shopify",
    question: "Quanto custa a Shopify em 2026: planos e taxas?",
    summary: "O preço dos planos Shopify, a oferta de 1 €, as taxas por venda e os custos que se esquecem.",
    intro:
      "O preço da Shopify é o plano, mais taxas em cada venda, mais as aplicações que junta. Estes valores foram vistos na página de preços a 27 de setembro de 2026, na Bélgica: no seu país podem ser diferentes.",
    steps: [
      {
        title: "A oferta de partida: 3 dias grátis, depois 1 € por mês",
        text: "A 27 de setembro de 2026, a Shopify mostrava 3 dias de teste grátis, depois 1 € por mês durante 3 meses. Depois desses 3 meses começa o preço normal do plano escolhido.",
        alt: "Página de preços da Shopify: 3 dias de teste grátis, depois 1 €/mês durante 3 meses",
      },
      {
        title: "O preço dos quatro planos",
        text: "Com pagamento anual: Basic 19 € por mês, Grow 56 € por mês, Advanced 289 € por mês e Plus a partir de 2100 € por mês. Com pagamento mensal, o Basic custa 27 € por mês.\n\nPara quem começa sozinho, o Basic chega quase sempre.",
        alt: "Planos Shopify com pagamento anual: Basic 19 €/mês, Grow 56 €/mês, Advanced 289 €/mês, Plus a partir de 2100 €/mês",
      },
      {
        title: "As taxas em cada venda",
        text: "Com o Shopify Payments, cada pagamento com cartão tem uma taxa: no Basic, a partir de 1,8 % + 0,30 € por venda (valor visto na Bélgica a 27 de setembro de 2026). Estas taxas descem quando o plano sobe.\n\nSe usar outro prestador de pagamento em vez do Shopify Payments, a Shopify junta taxas de transação, até 2 % no Basic.",
        alt: "Definições de pagamentos: Shopify Payments ativo e PayPal como prestador adicional",
      },
      {
        title: "Os custos que se esquecem",
        text: "As aplicações pagas somam-se ao plano, muitas vezes todos os meses. O domínio paga-se à parte, todos os anos. Um tema pago paga-se uma vez. Faça a conta antes de escolher.",
      },
      {
        title: "Mensal ou anual?",
        text: "O pagamento anual fica mais barato por mês, mas obriga a um ano. Comece com o mensal durante a oferta de 1 € e passe ao anual quando a loja vender.",
      },
    ],
    pitfalls: [
      "Esquecer o fim dos 3 meses a 1 €: o preço normal começa sem aviso.",
      "Desativar o Shopify Payments sem saber que a Shopify junta então taxas de transação.",
      "Contar só o plano e esquecer as aplicações pagas.",
    ],
  },
  {
    slug: "attirer-des-clients-avec-une-landing-page",
    localSlug: "atrair-clientes-com-landing-page",
    question: "Como atrair clientes para a sua loja Shopify com uma landing page?",
    summary: "Uma página simples, uma oferta clara, um formulário e depois um link para a loja.",
    intro:
      "Uma landing page apresenta uma só oferta a um só público. Transforma os visitantes que chegam das redes ou de um anúncio em contactos e, depois, em clientes da sua loja.",
    steps: [
      {
        title: "Escolha uma só oferta",
        text: "Um produto de destaque ou um desconto de boas-vindas. Crie primeiro o código na Shopify, por exemplo 10 % na primeira encomenda: é a razão para deixar o e-mail.",
        alt: "Código de boas-vindas BIENVENUE10 criado na Shopify",
      },
      {
        title: "Crie a página com a IA",
        text: "No HTML Pub ou na Leadpages, clique em « Create » e descreva a página: o produto, o público, a oferta e o botão pretendido. Mantenha um título curto, três vantagens e uma foto do produto.",
        alt: "Ecrã Create: o assistente pergunta « What are you making? »",
      },
      {
        title: "Junte um formulário e um botão",
        text: "Um formulário para recolher o e-mail em troca do código, e um botão que leva ao produto ou à loja Shopify.",
      },
      {
        title: "Ligue a página às suas ferramentas",
        text: "Em « Connectors », envie os contactos para a sua ferramenta de e-mail e ligue a Shopify para ter os clientes no mesmo sítio.",
        alt: "Conector Shopify no HTML Pub",
      },
      {
        title: "Traga tráfego e meça",
        text: "Partilhe o endereço da página nas publicações, na bio e nos anúncios. Veja a taxa de conversão da página; com a Leadpages, teste dois títulos com um teste A/B.",
      },
    ],
    pitfalls: [
      "Pôr a loja inteira na página: uma landing page = uma oferta, um botão.",
      "Enviar o tráfego para a página inicial da loja em vez da página do produto em destaque.",
      "Prometer um código de desconto que ainda não existe na Shopify.",
    ],
  },
  {
    slug: "recolter-des-e-mails-avant-un-lancement",
    localSlug: "recolher-emails-antes-do-lancamento",
    question: "Como recolher e-mails antes de um lançamento?",
    summary: "Uma página de espera, um formulário de e-mail, uma boa razão para se inscrever e os contactos na sua ferramenta de e-mail.",
    intro:
      "Antes de lançar um produto, uma página de espera permite juntar pessoas interessadas. No dia do lançamento escreve-lhes: são os seus primeiros clientes.",
    steps: [
      {
        title: "Dê uma razão para se inscreverem",
        text: "Um desconto de lançamento, acesso antes de toda a gente ou uma oferta. Escreva-a claramente no título ou logo acima do formulário.",
      },
      {
        title: "Crie a página de espera com a IA",
        text: "No HTML Pub ou na Leadpages, descreva a página: o produto que vem aí, a data, o que recebem os inscritos e um formulário com um só campo de e-mail.",
        alt: "Descrição de uma página de espera com formulário de e-mail no assistente de IA do HTML Pub",
      },
      {
        title: "Junte o consentimento",
        text: "Para enviar e-mails comerciais a particulares é preciso o acordo deles. Junte uma caixa de seleção não marcada e uma frase que diga para que serve o e-mail e como anular a inscrição.",
      },
      {
        title: "Encontre os inscritos",
        text: "Cada inscrição chega a « Submissions ». Pode consultá-las e exportá-las em CSV.",
        alt: "Página Submissions com as respostas do formulário",
      },
      {
        title: "Envie-os para a sua ferramenta de e-mail",
        text: "Em « Connectors », ligue o Mailchimp, o Brevo ou outra ferramenta para que cada inscrito chegue lá automaticamente. Prepare um e-mail de boas-vindas e o e-mail do dia do lançamento.",
        alt: "Página Connectors com as aplicações de e-mail a ligar",
      },
    ],
    pitfalls: [
      "Pedir nome, telefone e cidade: cada campo a mais faz descer as inscrições.",
      "Uma caixa de consentimento já marcada: não é válida.",
      "Não enviar nada antes do lançamento: escreva pelo menos um e-mail de boas-vindas para se lembrarem de si.",
    ],
  },
  {
    slug: "connecter-son-nom-de-domaine-leadpages",
    localSlug: "ligar-dominio-leadpages",
    question: "Como ligar o seu domínio à Leadpages?",
    summary: "Mostrar as suas páginas no seu próprio endereço, com HTTPS incluído.",
    intro:
      "Por defeito, as suas páginas têm um endereço HTML Pub. Com o seu próprio domínio inspiram mais confiança. O certificado de segurança (HTTPS) é gratuito.",
    steps: [
      {
        title: "Abra « Domains »",
        text: "No menu da esquerda, clique em « Domains » e depois em « Connect Domain ». Ainda não tem domínio? Conforme a sua oferta, « Claim Free Domain » dá-lhe um.",
        alt: "Página Domains com « Connect Domain » e « Claim Free Domain »",
      },
      {
        title: "Escreva o seu domínio",
        text: "Pode ser o domínio principal (osite.com) ou um subdomínio (www.osite.com, oferta.osite.com). Um subdomínio é o mais simples.",
      },
      {
        title: "Escolha o que ele mostra",
        text: "Em « Homepage », escolha « Page », « Site » ou « Blog » e depois o elemento a mostrar. Também pode escolher uma página de erro (« Custom 404 page »). Clique em « Add & Configure Domain ».",
        alt: "Formulário Connect Your Domain",
      },
      {
        title: "Deixe a configuração automática trabalhar",
        text: "Uma janela (Entri) propõe configurar o domínio por si. Clique em « Continue », verifique as alterações e depois « Authorize ». A mensagem « is now configured! » confirma.",
      },
      {
        title: "Senão, configure o DNS à mão",
        text: "No fornecedor do domínio, junte os registos indicados pela Leadpages: um CNAME para www (ou o seu subdomínio), um TXT para a segurança e, para o domínio principal, dois registos A. Copie os valores mostrados na sua conta.",
      },
      {
        title: "Espere pela ativação",
        text: "O estado passa por várias etapas até « Active ». O HTTPS pode demorar até 48 horas.",
      },
    ],
    pitfalls: [
      "Esquecer o registo TXT: sem ele, o HTTPS não fica ativo.",
      "Alterar o domínio principal quando outro site já o usa: prefira um subdomínio.",
    ],
  },
];
