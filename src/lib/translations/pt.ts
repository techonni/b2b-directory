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
        text: "Adicione um ou dois produtos, escolha um tema e veja as configurações de pagamento. Você logo vai saber se a ferramenta serve para você.",
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
      "A Leadpages (e o HTML Pub) serve para criar páginas que transformam visitantes em inscritos ou clientes. A Shopify serve para administrar uma loja: produtos, inventário, pagamentos e envios.",
    steps: [
      {
        title: "Vende vários produtos? Escolha a Shopify",
        text: "Catálogo, inventário, variantes, custos de envio, impostos, pedidos e devoluções: a Shopify cuida de tudo isso. A Leadpages não foi feita para administrar uma loja.",
        alt: "Os planos Shopify Basic, Grow, Advanced e Plus",
      },
      {
        title: "Quer captar e-mails de clientes? Escolha a Leadpages ou o HTML Pub",
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
      "Construir uma loja inteira na Leadpages: administrar pedidos e inventário fica impossível muito rápido.",
      "Enviar um anúncio para a página inicial da loja em vez de uma página centrada numa só oferta.",
    ],
  },
  {
    slug: "choisir-entre-html-pub-et-leadpages",
    localSlug: "html-pub-ou-leadpages",
    question: "Como escolher entre HTML Pub e Leadpages?",
    summary: "Publicar de forma simples ou otimizar as conversões: a oferta certa para a sua necessidade.",
    intro:
      "O HTML Pub e a Leadpages vêm da mesma empresa e usam o mesmo motor. O HTML Pub serve para publicar. A Leadpages acrescenta tudo o que ajuda a converter mais visitantes.",
    steps: [
      {
        title: "Pergunte-se o que quer fazer",
        text: "Quer só pôr online uma página, um pequeno site ou um blog com o seu domínio? O HTML Pub chega. Quer testar duas versões de uma página para saber qual vende mais? Precisa da Leadpages.",
      },
      {
        title: "Veja as três ofertas HTML Pub",
        text: "Starter: 5 páginas e 1 domínio. Pro: 25 páginas, 1 blog e acesso API, para um criador sozinho. Business: 50 páginas, 2 domínios e 2 blogs, para pequenas empresas ou agências. A publicação a partir do Claude está incluída em todas as ofertas.",
        alt: "Página de preços: as ofertas HTML Pub (Publish) e Leadpages (Optimize) lado a lado",
      },
      {
        title: "Veja as três ofertas Leadpages",
        text: "Grow acrescenta os testes A/B manuais, a substituição dinâmica de texto e o enriquecimento dos dados de clientes. Optimize acrescenta o Smart Traffic, os mapas de calor e a personalização automática. Scale acrescenta a otimização automática completa e um suporte dedicado.",
      },
      {
        title: "Comece pequeno",
        text: "As suas páginas e domínios acompanham-no se mudar de oferta. Pode começar com o HTML Pub e passar para a Leadpages no dia em que tiver visitantes suficientes para testar.",
      },
      {
        title: "Confirme o preço no próprio dia",
        text: "Os preços mudam com as promoções e com o pagamento mensal ou anual (cerca de 20 % menos por ano). Consulte a página de preços antes de escolher.",
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
        text: "Na página de preços, escolha o pagamento mensal ou anual e depois a oferta que lhe interessa. Teste aquela que pensa mesmo manter: o teste dá acesso a todas as suas funções.",
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
        text: "Crie uma página real, conecte o seu domínio e a sua ferramenta de e-mail. Você logo vai saber se a ferramenta serve para você.",
      },
      {
        title: "Mantenha ou cancele",
        text: "Se gostar, não faça nada: a assinatura começa. Se não, cancele antes do 7.º dia nas configurações da conta. As suas páginas continuam salvas.",
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
    summary: "Descrever a página, deixar a IA construí-la e depois melhorá-la numa conversa.",
    intro:
      "O assistente de criação (Piper, o « Page Agent ») constrói uma página a partir de uma simples descrição. Depois corrige-a a falar com ele, como numa conversa.",
    steps: [
      {
        title: "Abra a página de criação",
        text: "No menu da esquerda, clique em « Create ». O Piper pergunta « What are you making? »: escolha « Landing page ».",
        alt: "Página Create: o Piper pergunta « What are you making? »",
      },
      {
        title: "Descreva a página com precisão",
        text: "No campo de baixo, diga a quem se dirige a página, o que oferece, o tom, as cores e as secções que quer (título, vantagens, opiniões, formulário). Quanto mais preciso, melhor o resultado. Clique em « Send ».",
        alt: "Descrição de uma landing page escrita na barra de texto",
      },
      {
        title: "Escolha as imagens",
        text: "O Piper pergunta o que usar nas imagens: as suas, imagens geradas por IA (mais créditos) ou nenhuma por agora. O custo estimado em créditos aparece no canto superior direito. « Skip images for now » é a opção que gasta menos créditos.",
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
        title: "Corrija numa conversa",
        text: "Clique em « Open in editor ». No campo « Ask Piper to edit this page… », peça uma alteração de cada vez. O Piper lista o que mudou e os créditos usados.",
        alt: "Editor: o Piper aplica uma alteração pedida",
      },
      {
        title: "Verifique no smartphone e publique",
        text: "Os ícones no canto inferior direito do editor mostram a página em computador, tablet e smartphone. Para a pôr online, mantenha o endereço gratuito em pubhtml.com ou conecte o seu domínio (« Where should this live? »). Depois, « Update » publica as alterações.",
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
        text: "O menu da esquerda reúne tudo: pedidos, produtos, clientes, descontos, loja online e configurações. A página inicial mostra o estado da loja e uma barra para pedir ajuda ao Sidekick.",
        alt: "Página inicial da administração Shopify com o menu e o Sidekick",
      },
      {
        title: "Adicione os primeiros produtos",
        text: "Em « Produtos », adicione pelo menos um produto com foto, descrição e preço.",
      },
      {
        title: "Escolha um tema",
        text: "Na loja online, escolha um tema e personalize as cores, o logo e a página inicial.",
      },
      {
        title: "Configure pagamentos e envios",
        text: "Nas configurações, defina os pagamentos, os envios e os impostos do seu país.",
      },
      {
        title: "Ponha a loja online",
        text: "Escolha um plano, conecte o seu domínio e retire a senha da loja para a abrir ao público.",
      },
    ],
    pitfalls: [
      "Abrir a loja sem testar um pedido do começo ao fim.",
      "Esquecer as páginas legais (condições de venda, reembolso, privacidade).",
    ],
  },
  {
    slug: "combien-coute-shopify",
    localSlug: "quanto-custa-shopify",
    question: "Quanto custa a Shopify em 2026: planos e taxas?",
    summary: "O preço dos planos Shopify, a oferta de 1 €, as taxas por venda e os custos que se esquecem.",
    intro:
      "O preço da Shopify é o plano, mais taxas em cada venda, mais os aplicativos que você adiciona. Estes valores foram vistos na página de preços a 27 de setembro de 2026, na Bélgica: no seu país podem ser diferentes.",
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
        alt: "Configurações de pagamentos: Shopify Payments ativo e PayPal como prestador adicional",
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
      "Desativar o Shopify Payments sem saber que a Shopify cobra então taxas de transação.",
      "Contar só o plano e esquecer as aplicações pagas.",
    ],
  },
  {
    slug: "attirer-des-clients-avec-une-landing-page",
    localSlug: "atrair-clientes-com-landing-page",
    question: "Como atrair clientes para a sua loja Shopify com uma landing page?",
    summary: "Uma página simples, uma oferta clara, um formulário e depois um link para a loja.",
    intro:
      "Uma landing page apresenta uma só oferta a um só público. Transforma os visitantes que chegam das redes ou de um anúncio em inscritos e, depois, em clientes da sua loja.",
    steps: [
      {
        title: "Escolha uma só oferta",
        text: "Um produto de destaque ou um desconto de boas-vindas. Crie primeiro o código na Shopify, por exemplo 10 % no primeiro pedido: é a razão para deixar o e-mail.",
        alt: "Código de boas-vindas BIENVENUE10 criado na Shopify",
      },
      {
        title: "Crie a página com a IA",
        text: "No HTML Pub ou na Leadpages, clique em « Create » e descreva a página: o produto, o público, a oferta e o botão pretendido. Mantenha um título curto, três vantagens e uma foto do produto.",
        alt: "Página Create: o assistente pergunta « What are you making? »",
      },
      {
        title: "Adicione um formulário e um botão",
        text: "Um formulário para captar o e-mail em troca do código, e um botão que leva ao produto ou à loja Shopify.",
      },
      {
        title: "Conecte a página às suas ferramentas",
        text: "Em « Connectors », envie os inscritos para a sua ferramenta de e-mail e conecte a Shopify para ter os clientes no mesmo lugar.",
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
    localSlug: "captar-emails-antes-do-lancamento",
    question: "Como captar e-mails antes de um lançamento?",
    summary: "Uma página de espera, um formulário de e-mail, uma boa razão para se inscrever e os inscritos na sua ferramenta de e-mail.",
    intro:
      "Antes de lançar um produto, uma página de espera permite reunir pessoas interessadas. No dia do lançamento escreve-lhes: são os seus primeiros clientes.",
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
        title: "Peça o consentimento",
        text: "Para enviar e-mails comerciais a particulares é preciso o acordo deles. Adicione uma caixa de seleção desmarcada e uma frase que diga para que serve o e-mail e como cancelar a inscrição.",
      },
      {
        title: "Encontre os inscritos",
        text: "Cada inscrição chega a « Submissions ». Pode consultá-las e exportá-las em CSV.",
        alt: "Página Submissions com as respostas do formulário",
      },
      {
        title: "Envie-os para a sua ferramenta de e-mail",
        text: "Em « Connectors », conecte o Mailchimp, o Brevo ou outra ferramenta para que cada inscrito chegue lá automaticamente. Prepare um e-mail de boas-vindas e o e-mail do dia do lançamento.",
        alt: "Página Connectors com os aplicativos de e-mail para conectar",
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
    localSlug: "conectar-dominio-leadpages",
    question: "Como conectar o seu domínio à Leadpages?",
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
        text: "No fornecedor do domínio, adicione as entradas DNS indicadas pela Leadpages: um CNAME para www (ou o seu subdomínio), um TXT para a segurança e, para o domínio principal, duas entradas A. Copie os valores mostrados na sua conta.",
      },
      {
        title: "Espere pela ativação",
        text: "O estado passa por várias etapas até « Active ». O HTTPS pode demorar até 48 horas.",
      },
    ],
    pitfalls: [
      "Esquecer a entrada TXT: sem ele, o HTTPS não fica ativo.",
      "Alterar o domínio principal quando outro site já o usa: prefira um subdomínio.",
    ],
  },
  {
    slug: "ajouter-un-formulaire-de-contact-shopify",
    localSlug: "formulario-de-contato-shopify",
    question: "Como adicionar um formulário de contato na Shopify?",
    summary: "Uma página « Contato » com formulário, ligada ao menu, e mensagens que chegam mesmo à sua caixa de entrada.",
    intro:
      "Antes de comprar, muitos clientes querem saber que podem falar com você. A Shopify já tem um modelo de página « contact » pronto: basta criar a página, escolher esse modelo e adicioná-la ao menu. Sem código e sem aplicativos.",
    steps: [
      {
        title: "Crie uma página",
        text: "No painel da Shopify, clique em « Loja virtual » e depois em « Páginas » (em algumas versões, « Páginas » fica em « Conteúdo »). Clique em « Adicionar página » e dê-lhe o título « Contato ».",
      },
      {
        title: "Escreva um texto curto",
        text: "No conteúdo, diga em duas frases quando responde (por exemplo « em até 24 horas, de segunda a sexta ») e para que escrever: pedido, devolução, dúvida sobre um produto.",
      },
      {
        title: "Escolha o modelo « contact »",
        text: "À direita, em « Modelo de tema », escolha « contact ». É este modelo que adiciona o formulário (nome, e-mail, telefone, mensagem) debaixo do seu texto. Confira que a página está « Visível » e clique em « Salvar ».",
      },
      {
        title: "Adicione a página ao menu",
        text: "Em « Conteúdo » e depois « Menus », abra o menu principal ou o do rodapé. Clique em « Adicionar item ao menu », escreva « Contato » e escolha a página « Contato » como destino. Salve.",
        alt: "Conteúdo > Menus: menu principal e menu do rodapé, onde adicionar o link « Contato »",
      },
      {
        title: "Confira para onde vão as mensagens",
        text: "As mensagens do formulário vão para o e-mail da loja, indicado em « Configurações ». Confira que está correto e envie uma mensagem de teste a partir da página: ela deve chegar à sua caixa de entrada (veja também o spam).",
      },
      {
        title: "Mantenha a proteção contra spam",
        text: "Em « Loja virtual » e depois « Preferências », a seção « Proteção contra spam » ativa o hCaptcha no formulário de contato. Deixe-a ativada: bloqueia as mensagens automáticas sem atrapalhar os clientes reais.",
      },
    ],
    pitfalls: [
      "Criar a página sem escolher o modelo « contact »: a página aparece, mas sem formulário.",
      "Nunca testar o formulário: se o e-mail da loja estiver errado, as mensagens dos clientes perdem-se.",
      "Esconder a página: sem link no menu ou no rodapé, ninguém a encontra.",
    ],
  },
  {
    slug: "ajouter-des-variantes-shopify",
    localSlug: "variantes-de-produto-shopify",
    question: "Como adicionar variantes (tamanho, cor) a um produto na Shopify?",
    summary: "Um só produto, vários tamanhos ou cores, cada um com o seu preço, estoque e foto.",
    intro:
      "Uma camiseta em três tamanhos e duas cores é um só produto com seis variantes. O cliente escolhe na página do produto, e você acompanha o estoque de cada variante.",
    steps: [
      {
        title: "Abra o produto",
        text: "No menu à esquerda, clique em « Produtos » e depois no produto a alterar, ou em « Adicionar produto » para criar um. Preencha primeiro o título, a descrição e as fotos.",
        alt: "Página « Adicionar produto » no painel da Shopify",
      },
      {
        title: "Adicione uma opção",
        text: "Desça até à seção « Variantes » e clique em « Adicionar opções como tamanho ou cor ». Em « Nome da opção », escreva por exemplo « Tamanho ».",
      },
      {
        title: "Escreva os valores",
        text: "Em « Valores da opção », escreva um valor por linha: P, depois M, depois G. Clique em « Concluído ». Adicione uma segunda opção, como « Cor », da mesma forma: a Shopify cria todas as combinações.\n\nUm produto pode ter até 3 opções (por exemplo tamanho, cor e material).",
      },
      {
        title: "Defina o preço e o estoque de cada variante",
        text: "A Shopify mostra a lista das variantes. Clique numa variante para mudar o preço (um GG pode custar mais), a referência (SKU) e a quantidade em estoque. Use « Agrupar por » para alterar todas as variantes de uma cor de uma só vez.",
        alt: "Seções Preço e Estoque, a preencher para cada variante",
      },
      {
        title: "Associe uma foto a cada cor",
        text: "Na lista das variantes, clique no quadrado de imagem de uma variante e escolha a foto certa. Quando o cliente escolhe « Azul », aparece a foto azul.",
      },
      {
        title: "Salve e confira na loja",
        text: "Clique em « Salvar » e abra o produto na sua loja: os seletores de tamanho e cor aparecem na página. Teste uma variante sem estoque para ver o que o cliente vê.",
      },
    ],
    pitfalls: [
      "Criar um produto separado para cada tamanho: o cliente deixa de ver os outros tamanhos e as estatísticas ficam espalhadas.",
      "Esquecer o estoque de uma variante: aparece disponível quando não está, ou fica bloqueada em 0.",
      "Deixar a mesma foto para todas as cores: o cliente não vê o que está comprando.",
    ],
  },
  {
    slug: "creer-une-page-lien-en-bio-avec-html-pub",
    localSlug: "pagina-link-na-bio-html-pub",
    question: "Como criar uma página « link na bio » com o HTML Pub?",
    summary: "Um só endereço na bio do Instagram ou do TikTok, que leva a todos os seus links, numa página sua.",
    intro:
      "O Instagram e o TikTok só aceitam um link na bio. Uma página « link na bio » junta todos: loja, vídeo, inscrição, contato. Com o HTML Pub, fica com o seu nome, as suas cores e pode recolher e-mails.",
    steps: [
      {
        title: "Comece por um modelo « link na bio »",
        text: "Na tela « Create », clique em « Templates » e depois em « Browse all templates ». Escolha um modelo de página « link in bio », veja-o com « Preview » e clique em « Use ».",
        alt: "Painel Templates com « Preview », « Use » e « Browse all templates »",
      },
      {
        title: "Ponha a sua foto e uma frase",
        text: "No topo: a sua foto ou o seu logo, o seu nome e uma frase que diga o que oferece. Pode pedir ao assistente: « Troca a foto pelo meu logo e escreve: bijuteria feita à mão ».",
      },
      {
        title: "Adicione 3 a 5 botões",
        text: "Um botão por link importante: a sua loja, o seu último vídeo, a sua página de inscrição, o seu contato. Ponha o mais importante primeiro, com um texto de ação: « Ver a loja », não « Link 1 ».",
      },
      {
        title: "Adicione um formulário de inscrição",
        text: "Peça ao assistente para adicionar um campo de e-mail debaixo dos botões. As respostas ficam guardadas no HTML Pub: os seus seguidores passam a ser contatos que pode encontrar depois.",
      },
      {
        title: "Confira no celular e publique",
        text: "Quase todos os visitantes chegam pelo celular. Clique no ícone de celular no canto inferior direito do editor, confira que cada botão é fácil de tocar e publique.",
        alt: "Pré-visualização da página em celular no editor",
      },
      {
        title: "Cole o endereço na sua bio",
        text: "Escolha um endereço curto (por exemplo o seu nome), copie-o e cole-o no campo « Site » ou « Link » do seu perfil no Instagram ou no TikTok. Abra-o a partir do aplicativo para conferir.",
      },
    ],
    pitfalls: [
      "Pôr dez botões: o visitante já não sabe onde clicar. Fique pelo essencial.",
      "Esquecer de atualizar a página: um botão para uma promoção que já acabou faz perder confiança.",
      "Um endereço longo e complicado: fica cortado ou é mal copiado.",
    ],
  },
  {
    slug: "ajouter-un-pop-up-d-inscription-leadpages",
    localSlug: "pop-up-de-inscricao-leadpages",
    question: "Como adicionar um pop-up de inscrição na Leadpages?",
    summary: "Uma janela que abre na hora certa para oferecer o seu brinde ou a sua newsletter, sem esconder a página toda.",
    intro:
      "Um pop-up é um pequeno formulário que abre por cima da página: ao clicar num botão, depois de alguns segundos ou quando o visitante está para sair. Na Leadpages, cria-se à parte e depois publica-se nas suas páginas ou no seu site.",
    steps: [
      {
        title: "Crie o pop-up",
        text: "No menu, abra « Conversion Tools », depois « Pop-Ups », e clique em « Create New Pop-Up ». Dê-lhe um nome claro (por exemplo « Checklist – guia grátis ») e clique em « Start Building ».",
      },
      {
        title: "Escreva a oferta numa frase",
        text: "Um título que diga o que a pessoa recebe (« Receba a checklist grátis »), uma frase de explicação, um só campo de e-mail e um botão de ação. Sem nome nem telefone: cada campo a mais faz perder inscritos.",
      },
      {
        title: "Defina para onde vão os inscritos",
        text: "Clique no formulário do pop-up: escolha a ferramenta de e-mail que recebe os contatos (Mailchimp, Brevo…) e o que acontece depois do envio (mensagem ou página de agradecimento). Adicione uma caixa de consentimento que não venha marcada.",
      },
      {
        title: "Escolha quando abre",
        text: "Clique em « Publish », no canto superior direito. Três formas de abrir: ao clicar num botão, link ou imagem; depois de um tempo (« timed »); ou quando o mouse vai para o topo da janela (« exit »). A mais respeitosa é o clique: foi o visitante que pediu.",
      },
      {
        title: "Ligue-o à sua landing page",
        text: "Na sua página Leadpages, selecione o botão e, nas opções de link, escolha abrir o pop-up. Para um pop-up com tempo ou de saída, copie o código dado por « Publish » e cole-o nas configurações da página, na parte de rastreamento / « Head Section Tracking Code ». Atualize a página.",
      },
      {
        title: "Teste no computador e no celular",
        text: "Abra a página publicada, abra o pop-up e inscreva-se com o seu próprio e-mail. Confira que o contato chega à sua ferramenta de e-mail. No celular, os pop-ups com tempo e de saída não abrem: mantenha sempre um botão visível.",
      },
    ],
    pitfalls: [
      "Um pop-up que abre assim que a página carrega: o visitante fecha sem ler, e o Google não gosta de janelas que tapam o conteúdo no celular.",
      "Contar só com o pop-up de saída: não funciona no celular, de onde vem a maioria dos visitantes.",
      "Não testar: um pop-up ligado à ferramenta de e-mail errada perde todos os inscritos.",
    ],
  },
  {
    slug: "combien-coute-leadpages",
    localSlug: "quanto-custa-leadpages",
    question: "Quanto custa a Leadpages (e o HTML Pub) em 2026?",
    summary: "Os preços das ofertas HTML Pub e Leadpages, mensais e anuais, e qual escolher conforme a sua necessidade.",
    intro:
      "O HTML Pub e a Leadpages são vendidos na mesma página de preços, em dólares americanos. Estes são os preços vistos nessa página a 28 de setembro de 2026, e como pagar o menos possível.",
    steps: [
      {
        title: "As ofertas HTML Pub, para publicar",
        text: "A 28 de setembro de 2026, com pagamento anual: o Starter custa 5,58 US$ por mês (7 US$ no pagamento mensal), o Pro 16 US$ por mês (20 US$ no mensal) e o Business 26,42 US$ por mês (33 US$ no mensal).\n\nO HTML Pub serve para publicar landing pages, sites e blogs no seu domínio, com o assistente de IA. Não tem testes A/B.",
        alt: "Página de preços: HTML Pub Pro a 16 US$/mês e Business a 26,42 US$/mês, Leadpages Grow a 53,58 US$/mês e Optimize a 108 US$/mês, com pagamento anual",
      },
      {
        title: "As ofertas Leadpages, para converter mais",
        text: "A 28 de setembro de 2026, com pagamento anual: o Grow custa 53,58 US$ por mês (67 US$ no mensal), o Optimize 108 US$ por mês (135 US$ no mensal) e o Scale, o mais completo, 216,83 US$ por mês (271 US$ no mensal).\n\nO Grow acrescenta os testes A/B. O Optimize acrescenta o Smart Traffic e os mapas de calor. Os preços mudam de vez em quando: veja sempre a página de preços no próprio dia.",
      },
      {
        title: "Pague por ano para poupar 20 %",
        text: "O botão « Monthly / Annual », no topo da página de preços, muda todos os preços. O pagamento anual fica cerca de 20 % mais barato, mas paga o ano todo de uma vez. Comece com o mensal se ainda não sabe se vai ficar com a ferramenta.",
      },
      {
        title: "Experimente 7 dias antes de pagar",
        text: "Cada oferta pode ser testada grátis durante 7 dias, com todas as funções. É pedido um cartão, mas nada é cobrado antes do fim do teste. Anote a data de fim na sua agenda.",
        alt: "Botões « Start 7-Day Free Trial » em cada oferta",
      },
      {
        title: "Escolha conforme o seu tráfego",
        text: "Acabou de começar e ainda tem poucos visitantes? O HTML Pub Pro chega. Já faz publicidade e quer comparar duas versões de uma página? Leadpages Grow. Tem muito tráfego e quer que a ferramenta otimize sozinha? Optimize.",
      },
    ],
    pitfalls: [
      "Comparar um preço anual com um preço mensal: veja a posição do botão « Monthly / Annual ».",
      "Pagar o Optimize sem visitantes suficientes para que os testes e os mapas de calor sirvam para alguma coisa.",
      "Esquecer que os preços são em dólares: o seu banco pode cobrar uma taxa de câmbio (e, no Brasil, IOF).",
    ],
  },
  {
    slug: "suivre-ses-commandes-et-expedier-shopify",
    localSlug: "pedidos-e-envios-shopify",
    question: "Como acompanhar os pedidos e fazer os envios na Shopify?",
    summary: "Do pedido novo ao pacote entregue: verificar, preparar, enviar com um código de rastreio e avisar o cliente.",
    intro:
      "Chegou a sua primeira venda: parabéns! Falta enviar o pacote e dizer ao cliente onde ele está. Na Shopify, tudo se passa em « Pedidos »: cada pedido passa de « Não processado » a « Processado » quando o envia, e o cliente recebe o código de rastreio por e-mail. (Os nomes dos botões podem variar um pouco conforme a língua do painel.)",
    steps: [
      {
        title: "Abra a lista de pedidos",
        text: "No painel, clique em « Pedidos ». Cada linha mostra o cliente, o total, o estado do pagamento (por exemplo « Pago ») e o estado do processamento (« Não processado » enquanto nada foi enviado). Use a aba ou o filtro « Não processados » para ver só os pedidos a preparar.",
      },
      {
        title: "Verifique o pedido antes de preparar",
        text: "Clique no pedido. Verifique os artigos e as variantes (tamanho, cor), o modo de entrega escolhido pelo cliente e o endereço. Se o endereço parecer incompleto, escreva ao cliente antes de enviar: um pacote devolvido custa duas vezes o frete.",
      },
      {
        title: "Prepare e envie o pacote",
        text: "Embale os artigos e entregue o pacote à sua transportadora (Correios, CTT…). Guarde o código de rastreio que ela lhe dá. Conforme o país e o plano, a Shopify também permite comprar a etiqueta diretamente no pedido.",
      },
      {
        title: "Marque o pedido como processado",
        text: "No pedido, clique em « Processar itens ». Cole o código de rastreio: a Shopify reconhece muitas vezes a transportadora sozinha; se não, escolha-a na lista. Deixe marcada a caixa que envia o aviso de envio ao cliente e confirme. O pedido passa a « Processado ».",
      },
      {
        title: "Deixe o cliente acompanhar o pacote",
        text: "O cliente recebe um e-mail de confirmação de envio com o link de rastreio. O código fica visível no pedido: se houver uma pergunta, abra o pedido e veja o rastreio antes de responder. Os modelos destes e-mails estão em « Configurações », depois « Notificações ».",
      },
      {
        title: "Trate uma devolução ou um reembolso",
        text: "Se o cliente devolver um artigo, abra o pedido e use « Devolução » ou « Reembolsar », conforme o caso. Reembolse no mesmo meio de pagamento da compra e siga as regras escritas na sua política de devolução.",
      },
    ],
    pitfalls: [
      "Enviar sem marcar o pedido como processado: o cliente não recebe e-mail nem código de rastreio, e perde a noção do que já saiu.",
      "Não verificar o endereço: um pacote devolvido custa duas vezes o frete.",
      "Prometer um prazo de entrega que não consegue cumprir: escreva prazos realistas nas configurações de envio e nas políticas.",
    ],
  },
  {
    slug: "ajouter-google-analytics-a-une-page-leadpages",
    localSlug: "google-analytics-leadpages",
    question: "Como adicionar o Google Analytics a uma página Leadpages?",
    summary: "Ligar a sua página ao Google Analytics 4 para saber de onde vêm os visitantes, antes de tentar convertê-los.",
    intro:
      "A Leadpages já conta as visitas e as inscrições de cada página. O Google Analytics 4 diz também de onde vêm os visitantes (Google, Instagram, anúncios…) e o que fazem. Basta copiar uma tag do Google Analytics para as configurações da sua página Leadpages.",
    steps: [
      {
        title: "Crie uma propriedade Google Analytics 4",
        text: "Em analytics.google.com, entre com a sua conta Google. Se ainda não tem conta no Analytics, siga o assistente: uma conta, depois uma propriedade (o nome do seu site), depois um fluxo de dados « Web » com o endereço da sua página.",
      },
      {
        title: "Copie a tag do Google",
        text: "Em « Administrador », abra « Fluxos de dados » e clique no seu fluxo Web. Clique em « Ver instruções da tag » e depois em « Instalar manualmente ». Copie todo o código mostrado: começa por <script> e contém o seu ID de medição (G-…).",
      },
      {
        title: "Cole-a nas configurações da página",
        text: "Na Leadpages, abra a página no editor, depois as configurações (« Settings ») e a parte de rastreamento (« Analytics » ou « Tracking Codes », conforme a versão). Cole a tag no campo do código de cabeçalho, « Head Section Tracking Code ».",
      },
      {
        title: "Atualize a página",
        text: "Guarde e clique em « Update » (ou « Publish »): enquanto a página não for publicada de novo, a tag não fica online. Faça o mesmo em cada página que quer acompanhar, com a mesma tag.",
      },
      {
        title: "Verifique se as visitas chegam",
        text: "Abra a página publicada noutra aba. No Google Analytics, vá a « Relatórios » e depois « Tempo real »: a sua visita deve aparecer em menos de um minuto. Se nada aparecer, confira se a tag está no cabeçalho e se a página foi atualizada.",
      },
      {
        title: "Use links com UTM",
        text: "Para saber que post ou que anúncio traz contatos, junte parâmetros UTM aos seus links, por exemplo ?utm_source=instagram&utm_medium=social. No Google Analytics, o relatório « Aquisição » agrupa-os por origem.",
      },
    ],
    pitfalls: [
      "Esquecer de publicar a página de novo: a tag fica no editor e nenhuma visita é contada.",
      "Colar só o ID de medição (G-…) no campo do código de cabeçalho: é preciso o código completo da tag.",
      "Esquecer o consentimento: a LGPD (Brasil) e o RGPD (Europa) pedem que o visitante seja informado e, na Europa, que aceite os cookies de medição.",
    ],
  },
  {
    slug: "creer-un-code-de-reduction-shopify",
    localSlug: "codigo-de-desconto-shopify",
    question: "Como criar um código de desconto na Shopify?",
    summary: "Um código promocional em percentagem ou valor fixo, com as suas condições e limites.",
    intro:
      "Um código de desconto ajuda a conseguir uma primeira compra. Na Shopify, cria-se em poucos minutos e aplica-se no momento do pagamento. (Os nomes dos botões podem variar um pouco conforme a língua do painel.)",
    steps: [
      {
        title: "Abra « Descontos »",
        text: "No menu da esquerda, clique em « Descontos » e depois em « Criar desconto ».",
      },
      {
        title: "Escolha o tipo de desconto",
        text: "Há quatro opções: desconto nos produtos, « Compre X e ganhe Y », desconto no pedido ou envio grátis. Para um código de boas-vindas, escolha o desconto no pedido.",
      },
      {
        title: "Escreva o código e o valor",
        text: "Mantenha o método « Código de desconto », escreva um código fácil de lembrar (por exemplo BEMVINDO10) e escolha « Percentagem » ou « Valor fixo » e o valor. O resumo à direita atualiza-se logo.",
        alt: "Formulário « Criar desconto » com o código BIENVENUE10 e 10 % de desconto no pedido (painel em francês)",
      },
      {
        title: "Defina as condições",
        text: "Elegibilidade: todos os clientes ou só alguns. Requisitos mínimos de compra: um valor ou número de artigos mínimo. Utilizações máximas: limite o número total de utilizações ou uma só por cliente.",
      },
      {
        title: "Escolha as datas e guarde",
        text: "Indique uma data de início e, se quiser, uma data de fim. Clique em « Guardar » (ou « Salvar »): o código aparece na lista de descontos.",
      },
    ],
    pitfalls: [
      "Esquecer de limitar a uma utilização por cliente num código de boas-vindas: pode ser usado em todas as compras.",
      "Divulgar o código sem o testar numa encomenda de teste.",
    ],
  },
  {
    slug: "regler-l-expedition-shopify",
    localSlug: "custos-de-envio-shopify",
    question: "Como configurar os custos de envio na Shopify?",
    summary: "Zonas de envio, preços fixos ou por peso, e envio grátis a partir de um valor.",
    intro:
      "Os custos de envio configuram-se uma só vez, por zona. Preços simples e justos evitam que o cliente desista no momento de pagar.",
    steps: [
      {
        title: "Abra « Envio e entrega »",
        text: "No painel, clique em « Configurações », em baixo à esquerda, e depois em « Envio e entrega ». O perfil geral aplica-se a todos os produtos: é esse que vai configurar.",
        alt: "Configurações > Envio e entrega: perfil geral, datas de entrega estimadas e embalagens (painel em francês)",
      },
      {
        title: "Crie as suas zonas de envio",
        text: "Uma zona junta os países com os mesmos preços. Comece simples: uma zona para o seu país e, se envia para fora, uma zona para os países vizinhos. Um cliente de um país sem zona não consegue comprar.",
      },
      {
        title: "Junte um preço a cada zona",
        text: "Numa zona, clique em « Adicionar tarifa ». Dê-lhe um nome claro que o cliente vai ver no pagamento, como « Entrega em casa (3 a 5 dias) », e um preço. Um preço fixo é o mais fácil de entender.",
      },
      {
        title: "Junte condições se precisar",
        text: "Clique em « Adicionar condições » para que um preço dependa do peso dos artigos ou do valor do pedido. Exemplo: uma tarifa « Envio grátis » a 0, só para pedidos a partir de 50. Muitas vezes é isso que leva o cliente a pôr mais um artigo no carrinho.",
      },
      {
        title: "Indique a sua embalagem habitual",
        text: "Em « Embalagens », escreva as medidas e o peso da sua caixa mais usada. Com o peso de cada produto, a Shopify calcula assim o peso real de cada pedido.",
      },
      {
        title: "Teste no pagamento",
        text: "Faça um pedido de teste com um endereço de cada zona e veja os preços propostos. Confira também o limite do envio grátis, logo abaixo e logo acima do valor.",
      },
    ],
    pitfalls: [
      "Deixar o peso dos produtos a 0: os preços por peso ficam errados.",
      "Esquecer um país onde quer vender: os clientes desse país ficam bloqueados no pagamento.",
      "Propor demasiados preços diferentes: o cliente hesita em vez de pagar.",
    ],
  },
  {
    slug: "creer-une-page-de-remerciement-leadpages",
    localSlug: "pagina-de-agradecimento-leadpages",
    question: "Como criar uma página de agradecimento depois de um formulário Leadpages?",
    summary: "A página que aparece depois da inscrição: agradecer, entregar o brinde e propor o passo seguinte.",
    intro:
      "Depois de preencher o formulário, o visitante tem de ver logo que a inscrição funcionou. Uma página de agradecimento tranquiliza-o, diz-lhe o que fazer a seguir e permite-lhe contar as inscrições com precisão.",
    steps: [
      {
        title: "Crie uma página nova a partir de um modelo",
        text: "Na Leadpages, crie uma nova landing page. Na galeria de modelos, filtre pelas páginas de agradecimento (« Thank You ») e escolha um modelo simples. Dê-lhe um nome claro, por exemplo « Obrigado – checklist ».",
      },
      {
        title: "Escreva uma mensagem curta e útil",
        text: "Um título que confirme (« Pronto, está inscrito! ») e o que vai acontecer: « Abra o e-mail que enviamos agora para confirmar o seu endereço. » Peça também para ver a pasta de spam.",
      },
      {
        title: "Entregue o brinde prometido",
        text: "Se prometeu um guia ou uma checklist, ponha um botão « Descarregar » (ou « Baixar ») que leve ao ficheiro. O visitante recebe-o logo, sem esperar pelo e-mail.",
      },
      {
        title: "Proponha o passo seguinte",
        text: "Aproveite este momento de confiança: um link para a sua loja Shopify com um código de boas-vindas, um vídeo de apresentação ou as suas redes sociais. Um só botão principal, não cinco.",
      },
      {
        title: "Publique-a e ligue-a ao formulário",
        text: "Publique a página de agradecimento. Depois abra a página que tem o formulário, clique no formulário e procure o que acontece depois do envio (« After submitting » ou « Form actions », conforme a versão). Escolha mostrar uma página Leadpages e selecione a sua página de agradecimento. Atualize a página do formulário.",
      },
      {
        title: "Teste e conte as inscrições",
        text: "Inscreva-se com o seu próprio e-mail: deve chegar à página de agradecimento e o contato deve chegar à sua ferramenta de e-mail. Cada visita a esta página corresponde a uma inscrição: no Google Analytics, pode torná-la um evento principal para acompanhar as conversões.",
      },
    ],
    pitfalls: [
      "Deixar a mensagem padrão « Thank you »: o visitante não sabe o que fazer a seguir.",
      "Esquecer de atualizar a página do formulário depois de escolher a página de agradecimento: a configuração antiga continua online.",
      "Pôr demasiados links: um só botão principal converte melhor.",
    ],
  },
  {
    slug: "vendre-sur-instagram-avec-shopify",
    localSlug: "vender-no-instagram-com-shopify",
    question: "Como vender no Instagram com a Shopify?",
    summary: "Ligar a loja ao Instagram, marcar os produtos nas publicações e manter um link na bio que vende.",
    intro:
      "O Instagram é muitas vezes a primeira fonte de visitantes de uma loja que começa. Com a aplicação oficial da Meta para a Shopify, os seus produtos entram num catálogo que pode marcar nas publicações. Enquanto isso, um bom link na bio já chega para vender.",
    steps: [
      {
        title: "Passe a conta do Instagram a conta profissional",
        text: "Na aplicação do Instagram, abra as configurações da conta e mude para uma conta profissional (« Empresa » ou « Criador de conteúdo »). Ligue-a a uma página do Facebook: a Meta precisa dela para o catálogo de produtos.",
      },
      {
        title: "Instale a aplicação Facebook & Instagram",
        text: "No painel da Shopify, abra a App Store da Shopify e procure « Facebook & Instagram », publicada pela Meta. Instale-a: é adicionada como canal de vendas, sem custo.",
      },
      {
        title: "Ligue as suas contas Meta",
        text: "No canal Facebook & Instagram, siga o assistente: a sua conta do Facebook, a sua conta Meta Business (Business Manager), a sua página do Facebook e a sua conta profissional do Instagram. Aceite os termos e inicie a sincronização do catálogo.",
      },
      {
        title: "Confira as fichas dos produtos",
        text: "Só os produtos ativos, com foto, preço e descrição, passam bem para o catálogo. Escolha na aplicação que produtos partilhar: comece pelos mais vendidos em vez do catálogo inteiro.",
      },
      {
        title: "Marque os produtos nas publicações",
        text: "Quando a Meta aprovar a sua conta (pode levar alguns dias), pode marcar os produtos nas publicações e nos stories, como se marca uma pessoa. Um toque na etiqueta mostra o preço e leva à ficha do produto. Conforme o país, algumas funções de compra não estão disponíveis: a aplicação mostra o que existe para si.",
      },
      {
        title: "Mantenha um link na bio que vende",
        text: "Enquanto espera a aprovação, ou além dela: ponha na bio um só link para uma página que reúna a loja, a oferta do momento e a inscrição por e-mail. Junte parâmetros UTM a esse link para ver no Google Analytics o que o Instagram lhe traz.",
      },
    ],
    pitfalls: [
      "Partilhar o catálogo inteiro de uma vez com fichas incompletas: os produtos sem foto ou sem preço são recusados.",
      "Contar só com as etiquetas de produto: dependem da aprovação da Meta e do país. O link na bio funciona logo.",
      "Mandar os visitantes do Instagram para a página inicial: um link direto para o produto ou uma página dedicada converte melhor.",
    ],
  },
  {
    slug: "relancer-les-paniers-abandonnes-shopify",
    localSlug: "recuperar-carrinhos-abandonados-shopify",
    question: "Como enviar um e-mail aos clientes que abandonam o carrinho na Shopify?",
    summary: "Ativar o e-mail automático da Shopify, escolher o atraso certo e contactar à mão os carrinhos mais importantes.",
    intro:
      "Muitos visitantes enchem o carrinho, começam o pagamento e depois saem. A Shopify guarda esses checkouts abandonados e pode enviar sozinha um e-mail com um link que leva o cliente de volta ao carrinho, sem aplicação paga.",
    steps: [
      {
        title: "Abra a lista de checkouts abandonados",
        text: "No painel da Shopify, clique em « Pedidos » e depois em « Checkouts abandonados ». Você vê cada cliente que deixou o e-mail no pagamento sem terminar o pedido, com o conteúdo do carrinho.\n\nA coluna do estado do e-mail mostra se já saiu uma mensagem, e o estado de recuperação mostra se o cliente acabou por comprar.",
      },
      {
        title: "Ative o e-mail automático",
        text: "Vá a « Apps » > « Messaging » e depois « Automações ». Na automação de checkouts abandonados da Shopify, clique em « Mostrar ações » > « Editar configurações » e marque o envio automático dos e-mails de checkout abandonado.",
      },
      {
        title: "Escolha para quem e quando o e-mail sai",
        text: "Em « Enviar para », escolha quem recebe o e-mail: só os clientes inscritos nos seus e-mails de marketing, ou todos os que abandonaram o pagamento. Em « Enviar após », escolha o atraso (por exemplo 1 hora, 6 horas, 10 horas ou 24 horas).\n\nUm atraso curto (poucas horas) chega ao cliente enquanto ele ainda pensa na compra. Salve.",
      },
      {
        title: "Personalize a mensagem",
        text: "Abra o modelo do e-mail para adicionar o seu logo, as suas cores e um texto com a sua cara. Mantenha um só botão bem visível para o carrinho: é ele que traz o cliente de volta.\n\nPara dar um empurrão, pode pôr um código de desconto no texto, mas não sempre: senão os clientes aprendem a abandonar de propósito.",
      },
      {
        title: "Contacte à mão os carrinhos grandes",
        text: "Para um carrinho importante, abra-o em « Checkouts abandonados » e envie você mesmo o e-mail de recuperação a partir da página do checkout. Pode juntar uma palavra pessoal ou responder a uma dúvida sobre a entrega.",
      },
      {
        title: "Meça o que os e-mails trazem",
        text: "Volte a « Checkouts abandonados » todas as semanas: o estado de recuperação mostra os carrinhos que viraram pedido. Se poucos clientes voltam, experimente outro atraso ou um assunto de e-mail mais claro antes de dar um desconto.",
      },
    ],
    pitfalls: [
      "Enviar o e-mail a toda a gente sem ver as regras do seu país: na Europa (e no Brasil, com a LGPD), uma mensagem comercial a quem não aceitou os seus e-mails pode dar problemas. Na dúvida, fique com « inscritos no marketing ».",
      "Pôr um desconto em todos os e-mails: os clientes passam a esperar pelo e-mail antes de comprar.",
      "Não testar: faça você mesmo um pedido até ao pagamento com o seu e-mail, saia, e confirme que o e-mail chega e que o link reabre o carrinho.",
    ],
  },
  {
    slug: "ajouter-un-produit-shopify",
    localSlug: "adicionar-produto-shopify",
    question: "Como adicionar um produto na Shopify?",
    summary: "Título, fotos, preço, quantidade e envio: a ficha do produto bem preenchida.",
    intro:
      "Uma boa ficha de produto faz vender. A Shopify guia-o campo a campo, e as alterações guardadas aparecem logo na loja. (Os nomes dos botões podem variar um pouco conforme a língua do painel.)",
    steps: [
      {
        title: "Abra « Adicionar produto »",
        text: "No menu da esquerda, clique em « Produtos » e depois em « Adicionar produto ».",
        alt: "Formulário « Adicionar produto »: título, descrição, multimédia (painel em francês)",
      },
      {
        title: "Escreva o título e a descrição",
        text: "Um título claro e uma descrição que responda às perguntas do comprador: material, tamanho, uso, prazo de entrega.",
      },
      {
        title: "Junte as fotos",
        text: "Na secção de multimédia, clique para carregar os ficheiros. Imagens, vídeos e modelos 3D são aceites.",
      },
      {
        title: "Defina o preço e a quantidade",
        text: "Indique o preço e, se quiser, um preço de comparação (o preço antes do desconto). Na parte do inventário, escreva a quantidade disponível.",
        alt: "Secções Preço e Inventário da ficha do produto (painel em francês)",
      },
      {
        title: "Configure o envio e as variantes",
        text: "Para um produto físico, indique o peso. Junte variantes (tamanho, cor) se precisar. Para um ficheiro digital, desative « Produto físico ».",
      },
      {
        title: "Escolha o estado e guarde",
        text: "O estado « Ativo » torna o produto visível. Clique em « Guardar » (ou « Salvar »).",
      },
    ],
    pitfalls: ["Deixar o peso a 0: os custos de envio ficam errados.", "Fotos de tamanhos diferentes: a loja parece menos profissional."],
  },
  {
    slug: "choisir-un-theme-shopify",
    localSlug: "escolher-tema-gratis-shopify",
    question: "Como escolher e instalar um tema grátis na Shopify?",
    summary: "Encontrar um tema grátis na Theme Store, experimentá-lo e publicá-lo.",
    intro:
      "O tema decide a aparência da sua loja. A Shopify tem temas grátis, criados e mantidos pela própria Shopify: são o melhor ponto de partida.",
    steps: [
      {
        title: "Abra a Theme Store",
        text: "Vá a themes.shopify.com ou, no painel, a « Loja virtual » (ou « Loja online ») e depois « Temas ». No filtro « Price », marque « Free » para ver só os temas grátis.",
        alt: "Theme Store da Shopify filtrada nos temas grátis: Horizon, Colorblock, Tinker",
      },
      {
        title: "Filtre conforme a sua atividade",
        text: "Use o filtro « Industry » (roupa, beleza, casa, alimentação…) e olhe sobretudo para a forma como o tema mostra os produtos, não para as fotos de demonstração.",
      },
      {
        title: "Adicione o tema à sua loja",
        text: "Abra a ficha do tema e clique em « Adicionar ». Vai para a sua biblioteca de temas, sem substituir o que está online.",
      },
      {
        title: "Pré-visualize e personalize",
        text: "Clique em « Personalizar »: junte o seu logo, as cores, as fontes e as secções da página inicial. Veja também a pré-visualização no smartphone.",
      },
      {
        title: "Publique-o",
        text: "Quando tudo estiver bem, clique em « Publicar ». Só um tema está online de cada vez; o antigo fica na biblioteca e pode voltar atrás.",
      },
    ],
    pitfalls: [
      "Comprar um tema pago logo no início: os temas grátis chegam para uma primeira loja.",
      "Publicar sem ver como fica no smartphone, quando a maioria das visitas vem do smartphone.",
    ],
  },
  {
    slug: "changer-ou-annuler-son-offre-leadpages",
    localSlug: "mudar-ou-cancelar-plano-leadpages",
    question: "Como mudar de plano ou cancelar a assinatura da Leadpages?",
    summary: "Subir ou descer de plano, parar a assinatura, e o que acontece com as suas páginas.",
    intro:
      "Pode mudar de plano ou cancelar a qualquer momento, sem multa. Só o proprietário da conta pode gerir a faturação.",
    steps: [
      {
        title: "Abra a faturação",
        text: "No fundo do menu da esquerda, clique no nome do seu espaço e depois em « Billing ». Entre com a conta do proprietário se o link não aparecer.",
      },
      {
        title: "Mude de plano",
        text: "A página mostra todas as ofertas, com « Current Plan » na sua. Escolha o plano acima ou abaixo. A mudança vale a partir do próximo ciclo de faturação.",
        alt: "Página Billing: ofertas, « Current Plan », « Manage Subscription » e « Cancel »",
      },
      {
        title: "Ou cancele",
        text: "Ainda em « Billing », use « Manage Subscription » ou « Cancel ». Durante um teste, a data de fim aparece por baixo do seu plano: cancele antes dela para não ser cobrado.",
      },
      {
        title: "Saiba o que acontece com as suas páginas",
        text: "Se a assinatura parar, as páginas publicadas voltam a rascunho. Não se perdem: pode publicá-las de novo ao reativar uma assinatura.",
      },
    ],
    pitfalls: [
      "Descer de plano sem verificar os limites: número de páginas, domínios ou blogs incluídos.",
      "Cancelar quando ainda há anúncios a enviar visitantes para as suas páginas.",
    ],
  },
  {
    slug: "creer-sa-landing-page-leadpages-de-a-a-z",
    localSlug: "criar-landing-page-leadpages-completo",
    question: "Como criar a sua primeira landing page Leadpages do início ao fim?",
    summary: "O guia completo: do teste grátis a uma página online que capta contatos, com cada tela.",
    intro:
      "Este guia segue a ordem real de uma primeira landing page: preparar a oferta, criar a página com IA, revê-la, publicá-la no seu domínio, depois captar e acompanhar os contatos. Conte meio dia de trabalho, durante os 7 dias de teste grátis.",
    steps: [
      {
        title: "Prepare a sua oferta antes de começar",
        text: "Uma landing page tem um só objetivo. Decida-o antes de abrir a ferramenta: captar e-mails, vender um produto, marcar reuniões.\n\nEscreva numa folha: para quem é a página, o problema que resolve, o que o visitante recebe e a única ação que espera dele (por exemplo « Receber o guia grátis »).\n\nJunte também o seu logo, 2 ou 3 fotos, as suas cores e, se tiver, algumas opiniões de clientes reais. Vai ganhar tempo e créditos de IA.\n\nPlaneie por fim a estrutura da página. A que funciona melhor numa primeira página cabe em seis blocos, por esta ordem: um título que diz o resultado, uma frase que diz para quem é, três vantagens concretas, uma prova (opinião, número real, logo de um cliente), o formulário ou o botão, e depois duas ou três perguntas frequentes para tirar as últimas dúvidas.\n\nNo título, parta do resultado que o visitante quer, não do seu produto. « Receba 10 ideias de refeições prontas em 20 minutos » diz mais do que « Descubra o meu guia de cozinha ». Escreva três versões e fique com a mais clara: pode testar as outras mais tarde.",
      },
      {
        title: "Escolha o plano e comece o teste",
        text: "Na página de preços há duas famílias de ofertas. O HTML Pub serve para publicar páginas, sites e blogs. A Leadpages junta as ferramentas para melhorar os resultados: testes A/B a partir do plano Grow, e Smart Traffic e mapas de calor a partir do Optimize.\n\nPara uma primeira página, o HTML Pub muitas vezes basta. Se quiser testar duas versões da página, escolha Leadpages Grow.\n\nClique em « Start 7-Day Free Trial ». É pedido um cartão, mas nada é cobrado antes do 7.º dia. Anote a data de fim na sua agenda. Os preços mudam muitas vezes: leia os do dia na página oficial.",
        alt: "Botões « Start 7-Day Free Trial » em cada oferta",
      },
      {
        title: "Abra a tela de criação",
        text: "No menu da esquerda, clique em « Create ». O assistente de IA, Piper, pergunta « What are you making? »: escolha « Landing page ».\n\nPrefere partir de uma base pronta? Clique em « Templates » para escolher um modelo e depois em « Use ». O resto do guia é igual.",
        alt: "Tela Create: o Piper pergunta « What are you making? »",
      },
      {
        title: "Descreva a página em detalhe",
        text: "No campo de baixo, use as notas do passo 1: o público, a oferta, o tom, as cores e as secções que quer. Por exemplo: um título, três vantagens, uma opinião de cliente, uma pergunta frequente e um formulário com um só campo de e-mail.\n\nQuanto mais precisa for a descrição, menos créditos gasta em correções. Clique em « Send ».\n\nExemplo de descrição completa: « Landing page em português para um guia PDF grátis para personal trainers independentes que querem encontrar os primeiros clientes online. Tom simples e motivador. Cores: azul-escuro e laranja. Secções: título com o resultado prometido, três vantagens, um texto curto sobre o autor, duas perguntas frequentes, um formulário com um só campo de e-mail e uma caixa de consentimento não marcada. Botão: Receber o guia. »\n\nTambém pode colar o endereço de uma página existente ou código HTML: o Piper usa-o como ponto de partida.",
        alt: "Descrição de uma landing page escrita na barra de texto",
      },
      {
        title: "Escolha as imagens e o estilo",
        text: "O Piper pergunta que imagens usar: as suas, imagens geradas por IA (gastam mais créditos) ou nenhuma por agora. O custo estimado aparece no canto superior direito.\n\nDepois propõe três direções visuais. Clique na que prefere e em « Build it ». A página fica pronta em cerca de um minuto.",
        alt: "Três direções de estilo propostas pelo Piper",
      },
      {
        title: "Corrija a página conversando",
        text: "Clique em « Open in editor ». No campo « Ask Piper to edit this page… », peça uma só mudança de cada vez: « Troque o título por… », « Ponha o botão verde », « Apague a secção de preços ».\n\nO Piper lista o que mudou e os créditos usados. Releia cada texto você mesmo: a IA pode inventar números ou opiniões. Troque-os pelos verdadeiros, ou apague-os.\n\nAlguns pedidos úteis numa primeira página: « Encurte todos os parágrafos para duas frases no máximo », « Ponha o botão também no topo da página », « Ponha o meu logo no canto superior esquerdo » (depois de o enviar em « Assets »), « Use as cores do meu Brand Kit ».\n\nPara uma pequena mudança de texto, clicar diretamente na página é muitas vezes mais rápido do que pedir à IA. Guarde o Piper para mudanças de estrutura ou de estilo.",
        alt: "Editor: o Piper aplica uma mudança pedida",
      },
      {
        title: "Verifique o formulário e o consentimento",
        text: "O formulário é o coração da página. Peça o mínimo de informação: muitas vezes basta o e-mail.\n\nSe vai enviar e-mails comerciais, junte uma caixa de seleção que não venha marcada e uma frase que explique para que serve o endereço e como cancelar a inscrição.\n\nVerifique por fim o texto do botão: deve dizer o que a pessoa recebe (« Receber o guia »), e não só « Enviar ».\n\nPense no que acontece depois do envio: uma mensagem de agradecimento que diz o que fazer a seguir (« Veja a sua caixa de e-mail, o guia chega em 2 minutos »), ou uma página de agradecimento própria. É o lugar certo para propor o passo seguinte, por exemplo um link para a sua loja ou para marcar uma reunião.\n\nSe promete um arquivo (guia PDF, lista, modelo), prepare-o agora e envie-o no e-mail de boas-vindas da sua ferramenta de e-mail (passo 11).",
      },
      {
        title: "Confira a página no celular",
        text: "A maioria dos visitantes chega pelo celular. No canto inferior direito do editor, clique no ícone de celular. Verifique que o título se lê sem zoom, que o botão se vê sem descer muito e que o formulário se preenche facilmente com o polegar.\n\nVeja também a velocidade: imagens pesadas deixam a página lenta numa rede móvel, e cada segundo de espera faz sair visitantes. Use fotos de tamanho razoável e evite vídeos com reprodução automática no topo da página.\n\nPor fim, leia tudo em voz alta uma última vez. Os erros e as frases longas demais notam-se muito melhor assim.",
        alt: "Pré-visualização da página no celular dentro do editor",
      },
      {
        title: "Defina o endereço e o SEO",
        text: "No editor, o menu « … » no canto superior direito mostra o endereço da página (o slug). Escolha um curto e legível, por exemplo guia-gratis.\n\nEm « SEO & Social », indique o título e a descrição que aparecem no Google e quando alguém partilha a página, e o ícone do separador. Se a página só serve para um anúncio, pode pedir ao Google para não a indexar.",
        alt: "Janela SEO & Social",
      },
      {
        title: "Publique no seu próprio domínio",
        text: "Ao publicar, aparece a pergunta « Where should this live? ». Pode ficar com o endereço grátis ou conectar o seu domínio para passar mais confiança.\n\nPara conectar um domínio, abra « Domains » no menu da esquerda e depois « Connect Domain ». Um subdomínio como oferta.meusite.com é o mais simples. A configuração automática trata do domínio por si. O HTTPS é grátis e pode demorar até 48 horas.\n\nSe a configuração automática não for possível no seu fornecedor de domínio, junte à mão os registos que a Leadpages mostra: um CNAME para o subdomínio e um TXT para a segurança. Copie os valores exatos da sua conta.\n\nDepois de cada mudança, clique em « Update » para pôr a página online.",
        alt: "Escolha do endereço de publicação: grátis ou o seu domínio",
      },
      {
        title: "Envie os contatos para a sua ferramenta de e-mail",
        text: "No menu da esquerda, abra « Connectors ». Procure a sua ferramenta (Mailchimp, Brevo, MailerLite, HubSpot…) e clique em « Connect ».\n\nNo separador « Automations », clique em « Create automation », escolha o gatilho « Form submitted » e depois a ferramenta que recebe os contatos. Cada novo inscrito chega lá sozinho. Prepare lá um e-mail de boas-vindas.",
        alt: "Página Connectors com as aplicações para conectar",
      },
      {
        title: "Faça você mesmo um teste completo",
        text: "Abra a página publicada no celular, preencha o formulário com o seu próprio endereço e verifique três coisas.\n\nA resposta aparece em « Submissions », de onde também a pode exportar em CSV. O contato chega à sua ferramenta de e-mail. O e-mail de boas-vindas é enviado. Se algo falhar, « View execution logs » em « Connectors » mostra o motivo.",
        alt: "Página Submissions com as respostas do formulário",
      },
      {
        title: "Traga os primeiros visitantes",
        text: "Uma página online não recebe visitas sozinha. Comece pelas pessoas que já o conhecem: envie o link aos seus contatos, ponha-o na assinatura de e-mail e na bio das suas redes sociais.\n\nDepois publique com regularidade onde o seu público procura ideias. No Pinterest, um pin vertical com o resultado prometido e o link da página pode trazer visitas durante meses. No Instagram, no LinkedIn ou no Facebook, uma dica curta e útil seguida do link funciona melhor do que um simples anúncio da página.\n\nPara saber que canal funciona, junte uma marca no fim do link conforme o lugar onde o partilha, por exemplo ?utm_source=pinterest ou ?utm_source=instagram. O separador « Acquisition » do passo seguinte mostra então de onde vêm os inscritos.\n\nSe passar à publicidade paga, comece pequeno, com um orçamento diário que pode perder sem pena, e só aumente quando a taxa de conversão da página for boa.",
      },
      {
        title: "Acompanhe os resultados",
        text: "Abra « Analytics ». Os números principais estão no topo: « Sessions » (as visitas), « Form submissions » (os formulários enviados), « Conversions » e « Conv. rate » (a taxa de conversão).\n\nEscolha o período (7, 14 ou 30 dias) e uma página específica com « All Pages ». O separador « Acquisition » mostra de onde vêm os visitantes. Espere pelo menos uma centena de visitas antes de tirar conclusões.\n\nSe vem muita gente mas poucos se inscrevem, o problema costuma ser o título ou a oferta: a promessa não é clara ou útil o suficiente. Se quase ninguém vem, é a divulgação que precisa de trabalho: partilhe o link nos seus e-mails, nas redes, na bio do Instagram ou num pin do Pinterest.\n\nPara acompanhar anúncios, « Scripts & Pixels », no menu « … » do editor, permite juntar o pixel da Meta ou do Google Ads.",
        alt: "Página Analytics: conversões, taxa de conversão, formulários enviados e sessões",
      },
      {
        title: "Melhore a página com um teste A/B",
        text: "Com Leadpages Grow ou superior, duplique a página para criar uma versão B e mude uma só coisa: o título, o botão ou a oferta.\n\nEscolha o objetivo (formulário enviado, clique, compra), divida o tráfego 50/50 e espere pelo resultado « vencedor claro ». Fique depois com a melhor versão e comece um novo teste. No plano Optimize, o Smart Traffic pode enviar cada visitante para a versão com mais hipóteses de lhe agradar.\n\nPor onde começar? Pelo título, quase sempre: é o que toda a gente lê. Depois, o texto do botão, e por fim a própria oferta (um guia ou uma lista, um desconto ou um brinde). Anote cada teste e o resultado numa tabela simples: ao fim de alguns meses, vai saber exatamente o que faz o seu público reagir.\n\nEstá no HTML Pub? Pode passar para Leadpages Grow nas configurações da conta quando estiver pronto: as suas páginas e domínios ficam.",
        alt: "Criação de uma variante B e troca entre A e B",
      },
    ],
    pitfalls: [
      "Pôr vários objetivos na mesma página (inscrever-se, comprar, seguir no Instagram): o visitante hesita e não faz nada.",
      "Deixar online números, opiniões ou depoimentos inventados pela IA.",
      "Publicar sem testar o formulário você mesmo: descobre tarde demais que os contatos não chegavam.",
      "Esquecer o fim do teste de 7 dias e ser cobrado sem ter decidido.",
    ],
  },
  {
    slug: "partir-d-un-modele-leadpages",
    localSlug: "usar-modelo-leadpages",
    question: "Como partir de um modelo na Leadpages?",
    summary: "Escolher um modelo pronto a usar e adaptá-lo ao seu negócio.",
    intro:
      "Um modelo evita começar de uma página em branco. Mantém a estrutura que funciona e troca os textos, as imagens e as cores.",
    steps: [
      {
        title: "Abra os modelos",
        text: "Na tela « Create », clique em « Templates » por cima da barra de texto, ou em « Browse all templates » para ver todos.",
        alt: "Painel Templates com « Preview », « Use » e « Browse all templates »",
      },
      {
        title: "Pré-visualize antes de escolher",
        text: "Clique em « Preview » para ver o modelo em grande. Escolha aquele cuja estrutura se parece com o que quer vender, não só aquele cujas cores lhe agradam.",
      },
      {
        title: "Use-o",
        text: "Clique em « Use ». Abre-se uma cópia do modelo, que pode editar sem estragar nada.",
      },
      {
        title: "Adapte o conteúdo",
        text: "Peça ao assistente para trocar os textos pelos seus, ou edite-os diretamente. Ponha o seu logo, as suas fotos e as suas cores.",
      },
      {
        title: "Reveja no celular e publique",
        text: "A maioria dos visitantes chega pelo celular. No editor, clique no ícone de celular no canto inferior direito para verificar, e depois publique.",
        alt: "Pré-visualização da página no celular dentro do editor",
      },
    ],
    pitfalls: [
      "Deixar online textos de exemplo do modelo.",
      "Manter todas as secções do modelo quando algumas não servem a sua oferta.",
    ],
  },
  {
    slug: "publier-du-html-sur-html-pub",
    localSlug: "publicar-html-no-html-pub",
    question: "Como publicar uma página HTML já pronta no HTML Pub?",
    summary: "Colar código ou enviar um arquivo .html, sem gastar créditos de IA.",
    intro:
      "Já tem uma página em HTML, feita por si ou por uma IA? O HTML Pub põe-na online em segundos. Este método não gasta créditos.",
    steps: [
      {
        title: "Abra a tela de criação",
        text: "Clique em « Create » no menu da esquerda, ou em « Create Page » a partir da lista das suas páginas.",
      },
      {
        title: "Junte o seu código",
        text: "Cole o HTML no campo « Describe the page you want, or paste a URL or HTML… », ou use o ícone de envio de arquivo da barra para enviar um arquivo .html.",
        alt: "Barra de texto onde colar HTML, com o ícone de envio de arquivo",
      },
      {
        title: "Verifique a pré-visualização",
        text: "Confirme que as imagens aparecem. Se estão no seu computador, junte-as primeiro aos arquivos (« Assets ») da página.",
      },
      {
        title: "Publique",
        text: "Envie, verifique e publique. A página fica online no endereço grátis do seu espaço, ou no seu domínio se o conectou.",
      },
    ],
    pitfalls: [
      "Colar uma página que usa imagens ou arquivos que ficaram no seu computador.",
      "Enviar um formulário para outro serviço: o HTML Pub deixa de receber as respostas.",
    ],
  },
  {
    slug: "creer-un-site-web-avec-html-pub",
    localSlug: "criar-site-html-pub",
    question: "Como criar um site com várias páginas no HTML Pub?",
    summary: "Uma página inicial, e depois as outras páginas com o mesmo menu e o mesmo estilo.",
    intro:
      "Um site junta várias páginas no mesmo domínio, com um menu comum. A IA cria primeiro a página inicial, e depois cada página quando pedir.",
    steps: [
      {
        title: "Escolha « Website »",
        text: "No menu da esquerda, abra a seta ao lado de « Create » e escolha « Site ». Ou, na tela « Create », selecione « Website ».",
        alt: "Menu « What are you creating? » com a opção « New website »",
      },
      {
        title: "Descreva o seu site",
        text: "Explique o seu negócio, o seu público, o estilo que quer e as páginas desejadas, e clique em « Send ». Escreva tudo numa só linha: cada mudança de linha envia uma mensagem separada.",
        alt: "Descrição de um site escrita com « New website »",
      },
      {
        title: "Valide a lista de páginas",
        text: "O Piper propõe as páginas do menu. Mude o nome, retire (« Remove ») ou junte páginas (« Add a page »), e clique em « These pages ».",
        alt: "Lista das páginas propostas para o site",
      },
      {
        title: "Escolha imagens e estilo, e construa a página inicial",
        text: "Como numa landing page, escolha as imagens e uma direção de estilo e clique em « Build it ». Nesta fase só a página inicial é construída.",
      },
      {
        title: "Construa as outras páginas",
        text: "O cartão « The rest of the site » lista as páginas que faltam com uma estimativa de créditos. « Build 3 pages » constrói-as uma a uma, com o cabeçalho e o estilo da página inicial. « Skip for now » deixa para mais tarde.",
        alt: "Cartão « The rest of the site » com o botão para construir as páginas",
      },
    ],
    pitfalls: [
      "Construir todas as páginas de uma vez sem rever a página inicial: os erros de estilo repetem-se em todo o lado.",
      "Ultrapassar o número de páginas incluído no seu plano.",
    ],
  },
  {
    slug: "creer-un-blog-avec-html-pub",
    localSlug: "criar-blog-html-pub",
    question: "Como criar um blog com o HTML Pub?",
    summary: "Criar o blog no HTML Pub, escrever um primeiro artigo e publicá-lo no seu site, passo a passo.",
    intro:
      "Um blog traz visitantes do Google e das redes sociais. Com o HTML Pub, cria-se num minuto e os artigos ficam online assim que os publica.",
    steps: [
      {
        title: "Crie o blog",
        text: "No menu da esquerda, abra « Blog » e clique em « New Blog ». Dê um título; o endereço (slug) preenche-se sozinho. A descrição e o nome do autor são opcionais. Clique em « Create Blog ».",
        alt: "Janela New Blog com título, slug e descrição",
      },
      {
        title: "Conheça o painel do blog",
        text: "A página do blog mostra o design da página inicial do blog (« Feed layout ») e dos artigos (« Post layout »), e depois os seus artigos publicados, em rascunho ou agendados.",
        alt: "Painel de um blog",
      },
      {
        title: "Escreva um artigo",
        text: "Clique em « New post ». O editor abre com o Penn, o assistente de escrita: escolha uma sugestão (« Write a how-to guide »…) ou escreva você mesmo.",
        alt: "Editor de artigo com o assistente Penn",
      },
      {
        title: "Preencha as configurações do artigo",
        text: "O ícone de documento em baixo abre « Post Settings »: título, conteúdo, autor, imagem de capa e SEO. Clique em « Save changes ».",
        alt: "Painel Post Settings de um artigo",
      },
      {
        title: "Publique",
        text: "Clique em « Publish » no canto superior direito. O artigo fica online de imediato.",
      },
      {
        title: "Ligue-o ao seu site",
        text: "Se tem um site HTML Pub, pode mostrar o blog no endereço /blog do seu domínio.",
      },
    ],
    pitfalls: [
      "Publicar artigos sem imagem de capa: têm menos cliques nas redes sociais.",
      "Escolher um plano sem blog: confirme que o seu inclui pelo menos um.",
    ],
  },
  {
    slug: "modifier-l-adresse-d-une-page-leadpages",
    localSlug: "mudar-endereco-pagina-leadpages",
    question: "Como mudar o endereço de uma página ou protegê-la com senha?",
    summary: "O título, o endereço (slug), a senha e as etiquetas de uma página.",
    intro:
      "Cada página tem algumas configurações simples, no menu « … » do seu cartão, em « Pages ». Servem para ter um endereço legível, esconder uma página em preparação ou arrumar as suas páginas.",
    steps: [
      {
        title: "Abra o menu da página",
        text: "Em « Pages », clique em « … » no fundo do cartão da página. O menu junta as estatísticas, as respostas, a partilha e as configurações.",
        alt: "Menu « … » de uma página: Settings, Set Password, Tags",
      },
      {
        title: "Mude o título e o endereço",
        text: "Escolha « Settings ». No endereço (slug), use minúsculas, números e hífenes, por exemplo oferta-coaching-setembro.",
      },
      {
        title: "Ou faça-o no editor",
        text: "No editor da página, o menu « … » no canto superior direito mostra o endereço (slug, editável com o lápis), o endereço publicado e as opções « SEO & Social » e « Scripts & Pixels ».",
        alt: "Menu « … » do editor: slug, SEO & Social, Scripts & Pixels",
      },
      {
        title: "Proteja com senha",
        text: "Escolha « Set Password ». Os visitantes terão de escrever a senha para ver a página. Útil para uma página de cliente ou uma página ainda não pronta.",
      },
      {
        title: "Arrume com etiquetas",
        text: "Escolha « Tags », ou clique em « + tag » no cartão, para encontrar as páginas por campanha ou por cliente.",
      },
      {
        title: "Cuide do SEO",
        text: "« SEO & Social » define o ícone do separador (favicon), a indexação pelo Google, e o título e a descrição que aparecem nos resultados de pesquisa.",
        alt: "Janela SEO & Social",
      },
    ],
    pitfalls: [
      "Mudar o endereço de uma página já partilhada ou usada num anúncio: o link antigo deixa de funcionar.",
      "Esquecer de retirar a senha no dia do lançamento.",
    ],
  },
  {
    slug: "recuperer-les-formulaires-html-pub",
    localSlug: "ver-respostas-formularios-html-pub",
    question: "Como ver os contatos dos seus formulários?",
    summary: "Ver as respostas, exportá-las em CSV e apagá-las se for preciso.",
    intro:
      "O HTML Pub deteta sozinho os formulários das suas páginas e guarda as respostas. Não precisa de configurar nada.",
    steps: [
      {
        title: "Junte um formulário à página",
        text: "Peça ao assistente « junte um formulário com nome e e-mail », ou use um modelo que já tenha um.",
      },
      {
        title: "Abra « Submissions »",
        text: "No menu da esquerda, clique em « Submissions ». A página « Leads » junta todas as respostas: nome, e-mail, página de origem e data.",
        alt: "Página Submissions (Leads) com as respostas dos formulários",
      },
      {
        title: "Consulte as respostas",
        text: "Para uma só página, abra o menu « … » dela em « Pages » e escolha « Submissions ». Abra uma linha para ver todos os campos preenchidos.",
      },
      {
        title: "Exporte em CSV",
        text: "Exporte as respostas em CSV para as abrir no Excel ou no Google Sheets.",
      },
      {
        title: "Apague se lhe pedirem",
        text: "O ícone do lixo apaga uma resposta para sempre. Útil se uma pessoa pedir que os seus dados sejam apagados.",
      },
    ],
    pitfalls: [
      "Enviar o formulário para um serviço externo: o HTML Pub deixa de ver as respostas.",
      "Nunca exportar os contatos: guarde uma cópia com regularidade.",
    ],
  },
  {
    slug: "connecter-leadpages-a-son-outil-e-mail",
    localSlug: "conectar-leadpages-ferramenta-email",
    question: "Como enviar os contatos para o Mailchimp, o Brevo ou o seu CRM?",
    summary: "Conectar uma integração para que cada novo contato chegue ao lugar certo.",
    intro:
      "Um conector envia cada resposta de formulário para outra ferramenta, sem copiar e colar. O HTML Pub tem mais de 20: Mailchimp, Brevo, MailerLite, Kit, ActiveCampaign, HubSpot, Pipedrive, Slack, Zapier, Stripe…",
    steps: [
      {
        title: "Abra « Connectors »",
        text: "No menu da esquerda, clique em « Connectors ». Procure a sua ferramenta pelo nome ou pela categoria (e-mail, CRM, publicidade…) e clique em « Connect ».",
        alt: "Página Connectors com as aplicações para conectar",
      },
      {
        title: "Autorize a conexão",
        text: "Entre na ferramenta ou cole a chave de API dela, conforme o que for pedido. O estado passa a « Connected ».",
      },
      {
        title: "Configure a automação",
        text: "No separador « Automations », clique em « Create automation ». Escolha o gatilho (« Form submitted », « Checkout completed » ou « Visitor identified ») e a aplicação conectada que recebe os contatos.",
        alt: "Criação de uma automação: escolha do gatilho",
      },
      {
        title: "Teste com o seu próprio e-mail",
        text: "Preencha o formulário você mesmo e confirme que o contato chega à ferramenta.",
      },
      {
        title: "Vigie os erros",
        text: "« View execution logs » mostra cada envio: com sucesso, pendente ou falhado, com o motivo.",
      },
    ],
    pitfalls: [
      "Não testar: descobre semanas depois que os contatos não chegavam.",
      "Ultrapassar o número de integrações ativas do seu plano.",
    ],
  },
  {
    slug: "faire-un-test-ab-leadpages",
    localSlug: "teste-ab-leadpages",
    question: "Como fazer um teste A/B com a Leadpages?",
    summary: "Comparar duas versões de uma página e ficar com a que converte mais.",
    intro:
      "Um teste A/B mostra duas versões de uma página aos visitantes e mede qual dá mais resultados. Está incluído a partir do plano Leadpages Grow.",
    steps: [
      {
        title: "Crie uma variante",
        text: "Duplique a página com um clique, ou deixe a IA propor uma variante. Mude uma só coisa importante: o título, o botão ou a oferta.",
        alt: "Criação de uma variante B e troca entre A e B",
      },
      {
        title: "Escolha o objetivo",
        text: "Indique o que conta como sucesso: envio do formulário, clique num botão, compra ou conversão noutro site.",
      },
      {
        title: "Divida o tráfego",
        text: "50/50 é o mais simples. Também pode escolher 70/30 ou qualquer divisão entre 10 e 90 %. Depois publique.",
      },
      {
        title: "Espere por um resultado claro",
        text: "Os resultados aparecem em direto com três níveis: tendência, provável, vencedor claro. Espere por « vencedor claro » antes de decidir.",
      },
      {
        title: "Fique com a vencedora",
        text: "Envie 100 % do tráfego para a melhor versão com um clique, e comece um novo teste.",
      },
    ],
    pitfalls: [
      "Mudar várias coisas de uma vez: deixa de saber o que fez a diferença.",
      "Parar o teste depois de poucas visitas: o resultado muitas vezes é sorte.",
    ],
  },
  {
    slug: "lire-une-carte-de-chaleur-leadpages",
    localSlug: "mapa-de-calor-leadpages",
    question: "Como ler um mapa de calor (heatmap) na Leadpages?",
    summary: "Ver onde os visitantes clicam, até onde descem e o que leem.",
    intro:
      "Um mapa de calor pinta a página conforme a atividade dos visitantes. Está incluído nos planos Leadpages Optimize e Scale, sem código para instalar.",
    steps: [
      {
        title: "Espere por visitas suficientes",
        text: "Abaixo de cerca de 30 visitas, os dados são poucos demais para concluir.",
      },
      {
        title: "Ative o modo mapa de calor",
        text: "No editor da página, clique no ícone em forma de chama na barra de ferramentas.",
        alt: "Mapa de calor dos cliques, com os separadores Clicks, Scroll e Attention",
      },
      {
        title: "Leia os cliques",
        text: "Vermelho: muitos cliques. Azul: zonas ignoradas. Se as pessoas clicam numa imagem que não é um link, transforme-a num link.",
      },
      {
        title: "Leia a rolagem",
        text: "O mapa de rolagem mostra a parte dos visitantes que chega a 25, 50, 75 e 100 % da página. Se poucos chegam ao formulário, suba-o.",
      },
      {
        title: "Corrija logo",
        text: "Edite a página ou comece um teste A/B a partir da mesma tela.",
      },
    ],
    pitfalls: [
      "Tirar conclusões com poucas visitas.",
      "Procurar o mapa de atenção no celular: só existe no computador (no celular há cliques e rolagem).",
    ],
  },
  {
    slug: "utiliser-smart-traffic-leadpages",
    localSlug: "smart-traffic-leadpages",
    question: "Como funciona o Smart Traffic da Leadpages?",
    summary: "A IA envia cada visitante para a versão da página com mais hipóteses de lhe agradar.",
    intro:
      "Um teste A/B clássico divide o tráfego por igual. O Smart Traffic escolhe, para cada visitante, a variante com mais hipóteses de o converter. Está incluído a partir do Leadpages Optimize.",
    steps: [
      {
        title: "Prepare pelo menos duas variantes",
        text: "Crie versões realmente diferentes: outra oferta, outro ângulo ou outro público.",
      },
      {
        title: "Defina o objetivo",
        text: "Formulário, clique ou compra: o Smart Traffic aprende a partir desse objetivo.",
      },
      {
        title: "Ative o Smart Traffic",
        text: "Clique em « Let AI optimize this for me ». Em vez de uma divisão fixa, a IA encaminha cada visitante e melhora com o tempo.",
        alt: "Painel Optimize: divisão automática do tráfego entre o original e a variante",
      },
      {
        title: "Acompanhe os resultados",
        text: "Compare a taxa de conversão global antes e depois. Junte uma nova variante quando outra perder força.",
      },
    ],
    pitfalls: [
      "Usá-lo com variantes quase iguais: a IA não tem nada para escolher.",
      "Esperar resultados em poucos dias com pouco tráfego.",
    ],
  },
  {
    slug: "ameliorer-le-taux-de-conversion-de-ses-pages-de-a-a-z",
    localSlug: "melhorar-taxa-de-conversao-completo",
    question: "Como melhorar a taxa de conversão das suas landing pages do início ao fim?",
    summary: "Guia completo para analisar, otimizar e aumentar a taxa de conversão das suas landing pages Leadpages e HTML Pub, passo a passo.",
    intro:
      "A sua página está online, mas a taxa de conversão continua baixa. Antes de criar outra página ou mudar de ferramenta, há um caminho lógico: perceber de onde vem o problema, corrigir os bloqueios um a um e medir cada melhoria. Este guia segue esse caminho do início ao fim, com as funções da Leadpages e do HTML Pub.",
    steps: [
      {
        title: "Perceba o que é a taxa de conversão",
        text: "A taxa de conversão é a percentagem de visitantes que faz a ação esperada: preencher um formulário, clicar num botão ou comprar. Se 100 pessoas visitam a página e 3 preenchem o formulário, a taxa é de 3 %. Uma boa taxa depende do setor, mas a média das landing pages anda pelos 3 a 5 %. O objetivo é passar acima disso trabalhando cada elemento da página.",
      },
      {
        title: "Leia as suas estatísticas atuais",
        text: "Antes de mudar seja o que for, anote a taxa de conversão atual. Na Leadpages, abra o painel da página: vê os visitantes únicos, as conversões e a taxa. É o seu ponto de partida.\n\nSe acabou de lançar a página e o tráfego é baixo, espere pelo menos 200 visitantes antes de tirar conclusões. Abaixo disso, os números não são fiáveis.",
        alt: "Painel Leadpages: visitantes únicos, conversões e taxa de conversão",
      },
      {
        title: "Use os mapas de calor para encontrar os bloqueios",
        text: "Os mapas de calor mostram onde os visitantes clicam e até onde descem. Se ninguém chega ao formulário, o problema está acima dele. Se toda a gente clica num elemento que não é um link, é uma oportunidade perdida.\n\nNa Leadpages, os mapas de calor existem a partir do plano Optimize. Ative-os nas configurações da página e deixe-os correr alguns dias antes de os ler.",
        alt: "Mapa de calor Leadpages: zonas de cliques e profundidade de rolagem",
      },
      {
        title: "Reescreva o título principal",
        text: "O título é a primeira coisa que o visitante lê. Deve responder a uma pergunta simples: « O que é que eu ganho com isto? ». Um bom título fala do resultado, não do seu produto.\n\nMau: « A nossa solução inovadora de marketing digital ». Bom: « Duplique as suas inscrições em 30 dias sem aumentar o orçamento de anúncios ». Teste um título centrado no principal benefício da sua oferta.",
      },
      {
        title: "Simplifique o formulário",
        text: "Cada campo a mais num formulário baixa a taxa de conversão. Se pede nome, apelido, e-mail, telefone e empresa, reduza ao e-mail para começar. Pode pedir o resto mais tarde, quando já tiver o contato.\n\nNa Leadpages, abra o formulário no editor e apague os campos inúteis. Mantenha um só botão de ação com um texto claro: « Receber o guia », e não « Submeter ».",
        alt: "Editor de formulário Leadpages: campos e botão de ação",
      },
      {
        title: "Junte prova social",
        text: "Os visitantes confiam nos outros visitantes. Junte depoimentos de clientes, logos de parceiros, o número de utilizadores ou avaliações. A prova social tranquiliza e tira dúvidas.\n\nPonha os depoimentos perto do formulário ou do botão de compra, onde o visitante hesita. Um depoimento com nome, foto e um resultado em números vale mais do que uma citação anónima.",
      },
      {
        title: "Alinhe o anúncio com a página",
        text: "Se o anúncio promete um ebook grátis e a página fala de um webinar, o visitante vai embora. A mensagem do anúncio, o título da página e a oferta devem contar a mesma história.\n\nVerifique cada fonte de tráfego: o texto do anúncio no Facebook, o assunto do e-mail, o link na bio do Instagram. Cada um deve corresponder exatamente ao que a página oferece.",
      },
      {
        title: "Otimize para celular",
        text: "Mais de metade do tráfego vem do celular. Se a página é difícil de ler ou o botão é pequeno demais no celular, perde conversões.\n\nNa Leadpages, use a pré-visualização de celular do editor. Confirme que o título se lê sem zoom, que o formulário se preenche facilmente com o polegar e que o botão é grande o suficiente para tocar sem esforço.",
        alt: "Pré-visualização de celular no editor Leadpages: verificação do layout no telefone",
      },
      {
        title: "Crie uma página de agradecimento eficaz",
        text: "A página de agradecimento é a mais subestimada. O visitante acabou de converter: está envolvido. Aproveite para propor uma ação seguinte: partilhar nas redes, inscrever-se num webinar, conhecer um produto.\n\nNa Leadpages, defina a página de agradecimento nas configurações do formulário. Crie uma página a sério com uma oferta seguinte, em vez de uma simples mensagem « Obrigado ».",
      },
      {
        title: "Junte uma urgência verdadeira",
        text: "A urgência funciona quando é verdadeira. Uma contagem regressiva para uma oferta que nunca acaba destrói a confiança. Use limites reais: um número de vagas, uma data de fim de promoção, um stock limitado.\n\nSe não tem um limite natural, crie um: « Os 50 primeiros inscritos recebem um bónus ». O importante é ser verificável e honesto.",
      },
      {
        title: "Lance um teste A/B",
        text: "Não mude tudo de uma vez. Crie uma variante com uma só mudança: outro título, um botão de outra cor, um formulário mais curto. Deixe o teste correr até ter pelo menos 100 conversões por variante para um resultado fiável.\n\nNa Leadpages, duplique a página, mude um elemento e lance o teste no separador Optimize. A Leadpages divide o tráfego automaticamente.",
        alt: "Interface de teste A/B Leadpages: variante original e variante de teste com divisão do tráfego",
      },
      {
        title: "Ative o Smart Traffic para automatizar",
        text: "Quando tiver várias variantes que funcionam, o Smart Traffic assume. Em vez de dividir o tráfego por igual, a IA envia cada visitante para a variante com mais hipóteses de o converter, conforme o aparelho, a localização e o comportamento.\n\nO Smart Traffic existe a partir do Leadpages Optimize. Ative-o no separador Optimize da página depois de criar pelo menos duas variantes.",
        alt: "Painel Optimize: ativação do Smart Traffic para uma divisão inteligente do tráfego",
      },
      {
        title: "Otimize o SEO da página",
        text: "Uma página bem posicionada recebe tráfego grátis e qualificado. Preencha o título SEO, a meta-descrição e o URL com as suas palavras-chave principais. Junte um texto alternativo a cada imagem.\n\nNa Leadpages, abra as configurações de SEO da página. O título deve conter a palavra-chave principal e ter menos de 60 caracteres. A descrição deve dar vontade de clicar em menos de 155 caracteres.",
        alt: "Configurações de SEO e redes sociais na Leadpages: título, descrição e imagem de partilha",
      },
      {
        title: "Crie um acompanhamento semanal",
        text: "Otimizar a taxa de conversão não é um projeto pontual, é um processo contínuo. Todas as semanas, anote a taxa de conversão, o número de visitantes e os resultados dos testes em curso.\n\nCrie uma tabela simples com a data, a taxa, a mudança testada e o resultado. Ao fim de algumas semanas, vai ver que tipo de mudanças tem mais impacto nas suas páginas.",
      },
    ],
    pitfalls: [
      "Mudar vários elementos de uma vez: impossível saber qual teve efeito.",
      "Tirar conclusões com menos de 200 visitantes por variante.",
      "Copiar a página de um concorrente sem perceber porque funciona para o público dele.",
      "Ignorar o celular: mais de metade do tráfego passa por lá.",
      "Juntar uma contagem regressiva falsa que recomeça a cada visita.",
    ],
  },
  {
    slug: "publier-une-page-depuis-claude",
    localSlug: "publicar-pagina-a-partir-do-claude",
    question: "Como publicar uma página HTML Pub diretamente a partir do Claude?",
    summary: "Conectar o HTML Pub ao Claude para criar e editar as suas páginas conversando.",
    intro:
      "O HTML Pub tem um conector para o Claude (MCP). Depois de conectado, pede uma página ao Claude e ele publica-a na sua conta.",
    steps: [
      {
        title: "Confirme o seu plano",
        text: "O conector MCP está incluído em todas as ofertas HTML Pub e Leadpages, a partir do Starter.",
      },
      {
        title: "Junte o conector no Claude",
        text: "Em claude.ai, abra Configurações e depois Conectores, escolha « Adicionar conector personalizado » e cole o endereço https://mcp.htmlpub.com/mcp.",
      },
      {
        title: "Autorize o acesso",
        text: "Entre na sua conta HTML Pub quando o Claude pedir. Não precisa de chave de API. O Claude aparece depois em « Connected Apps », no menu do seu espaço.",
        alt: "Página Connected Apps, onde o Claude aparece depois de conectado",
      },
      {
        title: "Peça a sua página",
        text: "Por exemplo: « Cria e publica no HTML Pub uma landing page para o meu workshop de fotografia, com um formulário de inscrição. » O Claude dá-lhe o endereço da página.",
      },
      {
        title: "Edite conversando",
        text: "Peça correções ao Claude: ele edita a página existente sem refazer tudo.",
      },
    ],
    pitfalls: [
      "Juntar um endereço de conector errado: copie-o da ajuda oficial.",
      "Publicar sem rever: confira sempre a página online.",
    ],
  },
  {
    slug: "creer-une-pub-video-avec-ad-studio",
    localSlug: "criar-anuncio-video-ad-studio",
    question: "Como criar um anúncio em vídeo com o Ad Studio?",
    summary: "Uma imagem de partida, um storyboard e depois o vídeo final, validando cada etapa.",
    intro:
      "O Ad Studio transforma uma descrição curta num anúncio. Propõe anúncios centrados no produto ou no estilo UGC, com um criador gerado por IA. Só existe nos planos Leadpages Optimize e Scale.",
    steps: [
      {
        title: "Abra « Ads »",
        text: "No menu da esquerda, clique em « Ads ». Descreva o produto, o público e o estilo que quer: anúncio de produto ou vídeo no estilo UGC.",
        alt: "Página Ads (Ad Studio): « Ad Studio is available on Optimize and above »",
      },
      {
        title: "Valide a imagem de partida",
        text: "O Ad Studio cria uma imagem que define o cenário, o produto e o criador. Peça ajustes: esta etapa não gasta créditos de vídeo.",
      },
      {
        title: "Valide o storyboard",
        text: "Releia os planos, as legendas e os movimentos de câmara que contam a história.",
      },
      {
        title: "Lance a gravação",
        text: "Antes da renderização, um orçamento mostra o número de créditos conforme o número de planos e a resolução. Valide para receber o vídeo final.",
      },
    ],
    pitfalls: [
      "Lançar a renderização sem rever bem o storyboard: é esta etapa que gasta créditos.",
      "Estranhar um vídeo sem música: se a música não for livre de direitos, é retirada.",
      "Procurar o Ad Studio num plano HTML Pub: é preciso passar para Leadpages Optimize.",
    ],
  },
  {
    slug: "choisir-son-forfait-shopify",
    localSlug: "escolher-plano-shopify",
    question: "Como escolher o seu plano Shopify?",
    summary: "Basic, Grow, Advanced ou Plus: qual escolher conforme o seu negócio.",
    intro:
      "A Shopify tem quatro planos. Para começar sozinho, o Basic quase sempre basta. Os planos mais caros servem sobretudo equipes e grandes volumes.",
    steps: [
      {
        title: "Compare os quatro planos",
        text: "Basic para quem trabalha sozinho, Grow para pequenas equipes (até 5 contas de funcionários), Advanced para vender para outros países com mais ferramentas (até 15 contas), Plus para grandes empresas.",
        alt: "Os planos Basic, Grow, Advanced e Plus na página de preços",
      },
      {
        title: "Escolha pagamento anual ou mensal",
        text: "O pagamento anual sai mais barato por mês. O mensal dá mais liberdade para parar. Compare os dois preços mostrados.",
      },
      {
        title: "Veja as taxas por venda",
        text: "Com o Shopify Payments, as taxas de cartão baixam quando o plano sobe. Se usar outro prestador de pagamento, a Shopify junta taxas de transação, mais altas no Basic.",
      },
      {
        title: "Comece pequeno",
        text: "Comece no Basic. Pode mudar de plano mais tarde, quando as vendas o justificarem.",
      },
    ],
    pitfalls: [
      "Escolher o Advanced logo de início sem precisar.",
      "Esquecer o custo das aplicações pagas, que se soma ao plano.",
    ],
  },
  {
    slug: "creer-sa-boutique-shopify-de-a-a-z",
    localSlug: "criar-loja-shopify-completo",
    question: "Como criar a sua loja Shopify do início ao fim?",
    summary: "O guia completo: da inscrição à primeira venda, com cada tela da administração.",
    intro:
      "Este guia segue a ordem real de uma primeira loja: preparar, inscrever-se, encher a loja, configurar a venda, testar e abrir ao público. Conte um dia de trabalho, distribuído pelos 3 dias de teste grátis.",
    steps: [
      {
        title: "Prepare tudo antes de se inscrever",
        text: "O teste grátis só dura 3 dias: prepare o conteúdo antes de criar a conta, para passar esse tempo a construir e não a procurar.\n\nJunte: o nome da loja, um logo (mesmo simples), 3 a 5 produtos com fotos, um preço e uma descrição para cada um, o peso e o tamanho das embalagens se envia objetos, e o número da empresa se tiver.\n\nPrepare também a conta bancária que vai receber as vendas: a Shopify pede-a para ativar os pagamentos. Por fim, anote o que quer escrever nas condições de devolução: prazo, reembolso, quem paga o envio de volta.",
      },
      {
        title: "Comece o teste grátis",
        text: "Em shopify.com, abra a página de preços. A 27 de setembro de 2026, a oferta mostrada na Bélgica era: 3 dias de teste grátis, depois 1 € por mês durante 3 meses. As ofertas mudam muitas vezes e dependem do país: leia a do dia antes de começar.\n\nClique no botão para começar grátis, introduza o seu e-mail e responda às perguntas sobre o projeto. As respostas só servem para preparar a administração: pode mudar tudo depois.\n\nAnote já duas datas na agenda: o fim dos 3 dias de teste e o fim da oferta de lançamento, quando começa o preço normal do plano.",
        alt: "Página de preços da Shopify: 3 dias de teste grátis, depois 1 € por mês durante 3 meses",
      },
      {
        title: "Conheça a administração",
        text: "Tudo acontece na administração da Shopify. O menu da esquerda junta as secções que vai usar todos os dias: « Pedidos », « Produtos », « Clientes », « Descontos », « Conteúdo » e « Loja virtual ». As configurações da loja estão todas em « Configurações », no canto inferior esquerdo.\n\nNo centro da página inicial, uma barra permite fazer perguntas ao Sidekick, o assistente de IA da Shopify. Ele conhece a sua loja: pergunte por exemplo « Como oferecer frete grátis a partir de 50? ». Mesmo assim, confirme as respostas na ajuda oficial antes de mudar uma configuração importante.",
        alt: "Página inicial da administração Shopify com o menu da esquerda e a barra do Sidekick",
      },
      {
        title: "Junte o seu primeiro produto",
        text: "Clique em « Produtos » e depois em « Adicionar produto ». Escreva um título claro, como o cliente o procuraria no Google: « Pôster Bauhaus A3 » em vez de « Modelo 12 ».\n\nA descrição responde às perguntas do comprador: o que é, o material, o tamanho, o uso, o prazo de envio. Frases curtas e uma lista de pontos leem-se melhor no celular.\n\nEm « Mídia », clique em « Carregar » e junte várias fotos: o produto sozinho em fundo claro, e depois em uso. Mantenha o mesmo formato em todas as fotos da loja: é isso que dá um aspeto profissional.",
        alt: "Formulário « Adicionar produto »: título, descrição e mídia",
      },
      {
        title: "Defina preço, estoque, peso e variantes",
        text: "Em « Preço », indique o preço de venda. O campo « Preço comparativo » mostra um preço riscado: use-o só numa promoção verdadeira.\n\nEm « Estoque », indique a quantidade disponível para a Shopify parar a venda quando não houver mais. Num objeto para enviar, indique o peso com a embalagem: é ele que calcula o frete. Num arquivo para baixar, desative « Produto físico ».\n\nSe o produto existe em vários tamanhos ou cores, junte variantes: cada uma pode ter o seu preço, o seu estoque e a sua foto. Por fim, defina o status como « Ativo » e clique em « Salvar ». Repita para os outros produtos.",
        alt: "Secções Preço e Estoque da ficha de produto Shopify",
      },
      {
        title: "Escolha e personalize o tema",
        text: "O tema decide o aspeto de toda a loja. Em « Loja virtual » e depois « Temas », ou em themes.shopify.com, filtre pelos temas grátis: são feitos e atualizados pela Shopify e chegam bem para começar.\n\nEscolha um tema pela forma como mostra os produtos, não pelas fotos de demonstração. Clique em « Adicionar »: o tema entra na sua biblioteca sem substituir o que está online.\n\nClique em « Personalizar » para pôr o seu logo, as cores, as fontes e organizar a página inicial: uma imagem grande, os produtos principais, uma frase que diz o que vende. Veja sempre a pré-visualização no celular e depois clique em « Publicar ».",
        alt: "Theme Store da Shopify filtrada pelos temas grátis",
      },
      {
        title: "Organize os menus da loja",
        text: "Os menus ligam as páginas entre si. Abra « Conteúdo » e depois « Menus ». Já existem dois: o menu principal, no topo da loja, e o menu do rodapé.\n\nNo menu principal, mantenha poucas entradas: a página inicial, o catálogo ou as coleções, e uma página de contato. No rodapé, ponha as páginas práticas: envio, devoluções, condições de venda, informações legais.\n\nClique num menu para juntar, mudar o nome ou mover um item arrastando-o, e salve.",
        alt: "Conteúdo > Menus: menu principal, menu do rodapé e menu da conta do cliente",
      },
      {
        title: "Configure o envio e a entrega",
        text: "Clique em « Configurações » e depois em « Frete e entrega ». O « Perfil geral » aplica-se a todos os produtos: abra-o para ver as zonas de entrega (por exemplo o seu país e depois o resto do mundo) e as tarifas de cada zona.\n\nEm cada zona, crie tarifas simples: um preço fixo, ou um preço conforme o peso do pedido. Uma tarifa de « Frete grátis » a partir de um certo valor leva muitas vezes o cliente a juntar mais um artigo.\n\nEm « Embalagens », indique as medidas da sua embalagem habitual: a Shopify usa-as para estimar o frete. Se só vende produtos digitais, não precisa de tarifa de envio.",
        alt: "Configurações > Frete e entrega: perfil geral, datas de entrega estimadas e embalagens",
      },
      {
        title: "Verifique os impostos",
        text: "Em « Configurações », abra « Impostos e taxas alfandegárias ». O serviço fiscal da Shopify calcula os impostos conforme o país do cliente, nas regiões onde entrega.\n\nConfirme que as suas regiões de entrega aparecem na lista. As suas obrigações dependem do seu estatuto e do seu país: um trabalhador independente não fatura os impostos da mesma forma que uma empresa.\n\nA própria Shopify o diz nesta tela: em caso de dúvida sobre as suas obrigações fiscais, fale com um contador antes de abrir a loja.",
        alt: "Configurações > Impostos e taxas: serviços fiscais da Shopify ativos e regiões fiscais",
      },
      {
        title: "Ative os pagamentos",
        text: "Em « Configurações » e depois « Pagamentos », ative o Shopify Payments. A Shopify pede informações sobre o seu negócio e a conta bancária que recebe os repasses. A autenticação em dois fatores é obrigatória.\n\nCom o Shopify Payments, aceita cartões e meios de pagamento locais sem prestador externo. O Shopify Payments não existe em todos os países: se não aparecer, use um dos prestadores propostos. No plano Basic, as taxas de cartão começavam em 1,8 % + 0,30 € por venda (tarifas mostradas na Bélgica a 27 de setembro de 2026). Se usar outro prestador em vez dele, a Shopify junta taxas de transação.\n\nO PayPal pode ser adicionado em « Provedores de pagamento adicionais ».",
        alt: "Configurações > Pagamentos: Shopify Payments, meios de pagamento, repasses e PayPal",
      },
      {
        title: "Escolha os meios de pagamento dos clientes",
        text: "Ainda em « Pagamentos », clique em « Formas de pagamento ». Ative as que os seus clientes usam de verdade: cartões Visa e Mastercard, Apple Pay, Shop Pay, e os meios de pagamento locais do seu país.\n\nO botão para ver as tarifas de pagamento mostra as taxas de cada meio: alguns custam mais do que outros. Não vale a pena ativar tudo; logos a mais podem até confundir o comprador na hora de pagar.",
        alt: "Lista dos meios de pagamento online: Shop Pay, Visa, Mastercard, American Express, Apple Pay",
      },
      {
        title: "Escreva as suas políticas e informações legais",
        text: "Em « Configurações », abra « Políticas ». As políticas escritas aparecem no rodapé do checkout: o cliente vê-as antes de comprar.\n\nPreencha no mínimo a política de devolução e reembolso, os termos de serviço, a política de envio e as informações legais. Os « Dados de contato » são obrigatórios: são as informações que permitem ao cliente falar consigo.\n\nSe a Shopify propuser um modelo de texto, parta daí, mas adapte-o à sua forma real de trabalhar. As regras de devolução dependem do país: na União Europeia, o cliente tem em geral 14 dias para desistir de uma compra online, e no Brasil o Código de Defesa do Consumidor dá 7 dias. Depois, junte estas páginas ao menu do rodapé.",
        alt: "Configurações > Políticas: regras de devolução e políticas escritas (devolução, privacidade, termos de serviço, envio, contato, informações legais)",
      },
      {
        title: "Crie um código de boas-vindas",
        text: "Um pequeno desconto ajuda a fazer o primeiro pedido acontecer. Clique em « Descontos », depois em « Criar desconto » e escolha « Valor do pedido ».\n\nEscreva um código fácil de lembrar, como BEMVINDO10, e o valor: 10 % por exemplo. Em « Máximo de usos », marque o limite de um uso por cliente, senão o código serve em todos os pedidos. Salve: o código funciona logo no checkout.\n\nEste código também serve nas suas páginas de promoção e nas redes sociais.",
        alt: "Formulário « Criar desconto » com um código de 10 % no pedido",
      },
      {
        title: "Faça um pedido de teste",
        text: "Antes de abrir, compre você mesmo na sua loja, como um cliente real: no celular, passando pela página inicial, um produto, o carrinho e o pagamento, com o seu código de desconto.\n\nVerifique em cada passo: o frete está certo? Os impostos aparecem bem? O e-mail de confirmação chega, e dá vontade de voltar? Pode fazer um pedido real com o seu cartão, e depois cancelá-lo e reembolsá-lo em « Pedidos ».\n\nCorrija tudo o que o fez hesitar: se você hesitou, os seus clientes também vão hesitar.",
      },
      {
        title: "Escolha um plano",
        text: "Para manter a loja depois do teste, escolha um plano em « Configurações » e depois « Plano ». Para quem trabalha sozinho, o Basic quase sempre basta: a 27 de setembro de 2026, custava na Bélgica 27 € por mês em pagamento mensal, ou o equivalente a 19 € por mês em pagamento anual. Os preços mudam conforme o país: veja os seus na página de preços.\n\nA oferta de lançamento aplica-se então durante 3 meses, e depois começa o preço normal. Grow e Advanced servem sobretudo equipes e grandes volumes: pode mudar de plano mais tarde, quando as vendas o justificarem.\n\nNão se esqueça de que as aplicações pagas se somam ao preço do plano.",
        alt: "Os planos Shopify Basic, Grow, Advanced e Plus na página de preços",
      },
      {
        title: "Conecte o seu domínio",
        text: "A loja já tem um endereço grátis em .myshopify.com, mas o seu próprio domínio passa mais confiança. Em « Configurações » e depois « Domínios », escolha conectar um domínio existente, transferir um domínio ou comprar um novo.\n\nEm muitos fornecedores de domínio, a Shopify faz a conexão automaticamente. Senão, indica os registos DNS a mudar no seu fornecedor. A conexão demora muitas vezes menos de duas horas, às vezes até dois dias. O certificado HTTPS é grátis.\n\nSe tiver vários domínios conectados, escolha o que os clientes vão ver como « Principal ».",
        alt: "Configurações > Domínios com os domínios conectados",
      },
      {
        title: "Abra a loja ao público",
        text: "Enquanto está em preparação, a loja está protegida por senha. Para a abrir, vá a « Loja virtual » e depois « Preferências ». Em « Acesso à loja », desative o modo privado (a proteção por senha): a loja fica visível para toda a gente.\n\nNa mesma página, preencha o título e a meta-descrição da página inicial: é o que o Google e as redes sociais mostram quando alguém partilha a sua loja.\n\nA página inicial da administração mostra então que a loja está online, com o número de visitas e de visitantes em direto.",
        alt: "Loja virtual > Preferências: secção de acesso à loja com a opção de modo privado",
      },
      {
        title: "Atraia os primeiros clientes",
        text: "Uma loja online não recebe visitas sozinha. Escolha um produto principal e uma oferta (o seu código de boas-vindas), e crie uma landing page que só fala dessa oferta, com o HTML Pub ou a Leadpages.\n\nPartilhe o endereço dessa página nas redes, na bio, no Pinterest ou nos anúncios. O botão da página leva diretamente à ficha do produto Shopify, não à página inicial da loja.\n\nVeja todas as semanas quantos visitantes chegam e quantos compram, e melhore a página que converte menos. O guia « atrair clientes com uma landing page » explica esta etapa em detalhe.",
        alt: "Criação de uma landing page com IA: o assistente pergunta « What are you making? »",
      },
    ],
    pitfalls: [
      "Passar os 3 dias de teste a afinar detalhes sem ter juntado um único produto.",
      "Abrir a loja sem pedido de teste: é o cliente que descobre o frete errado.",
      "Deixar as políticas vazias: devoluções, condições de venda e contatos tranquilizam o comprador na hora de pagar.",
      "Esquecer que o preço normal do plano começa depois da oferta de lançamento.",
      "Encher o menu principal com dezenas de links: o visitante já não sabe onde clicar.",
    ],
  },
  {
    slug: "connecter-son-domaine-shopify",
    localSlug: "conectar-dominio-shopify",
    question: "Como conectar o seu domínio à Shopify?",
    summary: "Usar o seu próprio endereço em vez do endereço em myshopify.com.",
    intro:
      "Cada loja tem um endereço grátis em .myshopify.com. Com o seu próprio domínio, passa mais confiança. O certificado SSL (HTTPS) é grátis.",
    steps: [
      {
        title: "Abra « Domínios »",
        text: "Clique em « Configurações » no canto inferior esquerdo e depois em « Domínios ». Três opções: conectar um domínio existente, transferir um domínio ou comprar um novo.",
        alt: "Configurações > Domínios com os domínios conectados",
      },
      {
        title: "Conecte um domínio existente",
        text: "Escolha conectar um domínio existente e escreva o seu domínio. Em muitos fornecedores de domínio, a Shopify propõe uma conexão automática.",
      },
      {
        title: "Senão, mude os DNS à mão",
        text: "No seu fornecedor de domínio, atualize os registos indicados pela Shopify (registo A e CNAME para www).",
      },
      {
        title: "Espere pela verificação",
        text: "A conexão funciona muitas vezes em menos de duas horas, mas pode demorar até dois dias. O estado passa a « Conectado ».",
      },
      {
        title: "Escolha o domínio principal",
        text: "Se tiver vários domínios conectados, marque como « Principal » o que os clientes vão ver.",
      },
    ],
    pitfalls: [
      "Apagar registos DNS antigos usados pelos seus e-mails.",
      "Esquecer que a renovação do domínio se faz no seu fornecedor, não na Shopify.",
    ],
  },
  {
    slug: "accepter-les-paiements-shopify",
    localSlug: "aceitar-pagamentos-shopify",
    question: "Como aceitar pagamentos na Shopify?",
    summary: "Shopify Payments, meios de pagamento locais, PayPal: as configurações e as taxas a conhecer.",
    intro:
      "O Shopify Payments permite aceitar cartões, Apple Pay e outros meios de pagamento sem prestador externo. É também o que evita as taxas de transação extra. Não existe em todos os países: se não aparecer, a Shopify propõe outros prestadores.",
    steps: [
      {
        title: "Abra « Pagamentos »",
        text: "Clique em « Configurações » e depois em « Pagamentos ». Vê o estado do Shopify Payments, os meios de pagamento, os repasses e os prestadores extra, como o PayPal.",
        alt: "Configurações > Pagamentos: Shopify Payments, meios de pagamento, repasses e PayPal",
      },
      {
        title: "Ative o Shopify Payments",
        text: "Siga a configuração: informações sobre o seu negócio e conta bancária para receber os repasses. É pedida a autenticação em dois fatores.",
      },
      {
        title: "Escolha os meios de pagamento",
        text: "Clique em « Formas de pagamento » e ative os que os seus clientes usam: cartões, Shop Pay, Apple Pay e os meios locais do seu país. O botão das tarifas de pagamento mostra as taxas de cada meio.",
        alt: "Lista dos meios de pagamento online: Shop Pay, Visa, Mastercard, American Express, Apple Pay",
      },
      {
        title: "Junte o PayPal se precisar",
        text: "Em « Provedores de pagamento adicionais », pode juntar o PayPal ou outros prestadores.",
      },
      {
        title: "Faça um pedido de teste",
        text: "Antes de abrir a loja, faça uma compra de teste para confirmar que tudo funciona.",
      },
    ],
    pitfalls: [
      "Usar outro prestador em vez do Shopify Payments sem saber que a Shopify junta taxas de transação (até 2 % no Basic).",
      "Não ativar o meio de pagamento que os seus clientes mais usam no país deles.",
    ],
  },
  {
    slug: "connecter-html-pub-a-shopify",
    localSlug: "conectar-html-pub-shopify",
    question: "Como ligar o HTML Pub ou a Leadpages à Shopify?",
    summary: "O conector Shopify do HTML Pub, e os botões que levam à sua loja.",
    intro:
      "As suas páginas HTML Pub ou Leadpages atraem os visitantes, a Shopify recebe as vendas. Há duas ligações possíveis: o conector Shopify, e botões que levam ao checkout da Shopify.",
    steps: [
      {
        title: "Abra « Connectors »",
        text: "No menu do seu espaço HTML Pub, clique em « Connectors » e escreva « Shopify » na pesquisa. O cartão Shopify serve para enviar os dados dos clientes do checkout HTML Pub para a Shopify.",
      },
      {
        title: "Indique o endereço da sua loja",
        text: "Clique em « Connect », escreva o endereço .myshopify.com da sua loja e clique em « Connect Shopify ». Depois valide a autorização na Shopify.",
        alt: "Connectors HTML Pub: cartão Shopify com o campo « Your Shopify store domain »",
      },
      {
        title: "Junte um botão para a Shopify",
        text: "Para vender um produto a partir de uma página, junte um botão e, na ação de clique, escolha um link externo: cole o endereço do produto ou um link de checkout da Shopify.",
      },
      {
        title: "Ou cole um Buy Button da Shopify",
        text: "Na Shopify, junte o canal de vendas « Buy Button », crie um botão para um produto, copie o código HTML e cole-o num bloco HTML da sua página.",
      },
      {
        title: "Teste o percurso completo",
        text: "Publique a página, clique no botão e vá até ao pagamento para confirmar que abre o produto certo.",
      },
    ],
    pitfalls: [
      "Achar que a Leadpages conta as vendas da Shopify: as estatísticas dela param no clique no botão.",
      "Escrever o seu próprio domínio em vez do endereço .myshopify.com no conector.",
    ],
  },
  {
    slug: "creer-une-page-de-vente-pour-un-produit-shopify",
    localSlug: "pagina-de-vendas-produto-shopify",
    question: "Como criar uma página de vendas para um produto Shopify?",
    summary: "Uma página com uma só oferta, criada com a IA do HTML Pub, que leva ao seu produto Shopify.",
    intro:
      "A ficha de produto da Shopify mostra o produto; uma página de vendas conta a história dele. Serve sobretudo quando faz anúncios ou vídeos para um produto específico.",
    steps: [
      {
        title: "Prepare o produto na Shopify",
        text: "O produto deve estar ativo, com fotos, preço e estoque. Abra-o na loja online e copie o endereço da página: é para lá que o botão vai levar.",
      },
      {
        title: "Descreva a página à IA",
        text: "No HTML Pub ou na Leadpages, crie uma página com IA e descreva-a com precisão: o produto, para quem é, 3 vantagens, opiniões de clientes, perguntas frequentes e um botão « Comprar agora ».",
        alt: "Descrição de uma página de vendas para um produto Shopify no assistente de IA do HTML Pub",
      },
      {
        title: "Ligue o botão ao produto",
        text: "No editor, escolha a ação do botão « link externo » e cole o endereço do produto Shopify. Também pode colar um Buy Button da Shopify num bloco HTML.",
      },
      {
        title: "Dê uma razão para comprar agora",
        text: "Um código de desconto por tempo limitado, frete grátis ou um brinde. Crie-o primeiro na Shopify para funcionar no pagamento.",
        alt: "Criação de um código de desconto na Shopify",
      },
      {
        title: "Publique e teste no celular",
        text: "Publique a página, abra-a no celular, clique no botão e vá até ao pagamento. Depois partilhe o endereço da página nos seus anúncios e vídeos.",
      },
    ],
    pitfalls: [
      "Vários produtos e vários botões na mesma página: o visitante hesita e não clica.",
      "Um botão que leva à página inicial da loja em vez do produto.",
      "Opiniões de clientes inventadas: use só opiniões verdadeiras.",
    ],
  },
  {
    slug: "rediger-les-politiques-shopify",
    localSlug: "politicas-loja-shopify",
    question: "Como juntar as condições de venda e as políticas na Shopify?",
    summary: "Devoluções, termos de serviço, envio, contatos e informações legais, mostrados no checkout.",
    intro:
      "As políticas tranquilizam o comprador e, em muitos países, são obrigatórias por lei para vender online. A Shopify mostra-as no checkout; falta escrevê-las e pô-las no menu.",
    steps: [
      {
        title: "Abra « Políticas »",
        text: "Na administração, clique em « Configurações » e depois em « Políticas ». Encontra as regras de devolução e a lista das políticas escritas.",
        alt: "Configurações > Políticas: regras de devolução e políticas escritas (devolução, privacidade, termos de serviço, envio, contato, informações legais)",
      },
      {
        title: "Defina as regras de devolução",
        text: "Indique o prazo de devolução, quem paga o envio de volta e como reembolsa. O prazo mínimo depende do país: na União Europeia, o cliente tem em geral 14 dias para desistir de uma compra online, e no Brasil o Código de Defesa do Consumidor dá 7 dias. Não proponha menos do que a lei do seu país.",
      },
      {
        title: "Preencha os contatos",
        text: "Os « Dados de contato » são obrigatórios. Escreva o nome da empresa, a morada, o e-mail e o número da empresa: é o que permite ao cliente falar consigo.",
      },
      {
        title: "Escreva as outras políticas",
        text: "Abra cada política: devolução e reembolso, privacidade, termos de serviço, envio e informações legais. Se a Shopify propuser um modelo, parta daí e adapte cada frase à sua forma real de trabalhar. Salve.",
      },
      {
        title: "Junte-as ao rodapé",
        text: "As políticas aparecem no checkout, mas não necessariamente na loja. Em « Conteúdo » e depois « Menus », abra o menu do rodapé e junte um link para cada uma.",
      },
    ],
    pitfalls: [
      "Deixar o modelo tal como está: pode prometer coisas que não faz.",
      "Políticas que não batem com as configurações reais (prazo de devolução, frete).",
      "Esquecer o link no rodapé: o cliente não encontra as suas condições antes de comprar.",
    ],
  },
  {
    slug: "creer-un-menu-shopify",
    localSlug: "editar-menu-shopify",
    question: "Como editar o menu da sua loja Shopify?",
    summary: "Juntar, mudar o nome e mover links, e criar um menu suspenso.",
    intro:
      "O menu ajuda o visitante a encontrar os seus produtos com um clique. A Shopify cria dois no início: o menu principal, no topo, e o menu do rodapé.",
    steps: [
      {
        title: "Abra « Menus »",
        text: "Na administração, clique em « Conteúdo » e depois em « Menus ». Clique no menu a editar, por exemplo o menu principal.",
        alt: "Conteúdo > Menus: menu principal, menu do rodapé e menu da conta do cliente",
      },
      {
        title: "Junte um link",
        text: "Clique em « Adicionar item de menu ». Escreva o nome mostrado e escolha o destino: uma coleção, um produto, uma página ou uma política. Clique em « Salvar ».",
      },
      {
        title: "Mova ou crie um menu suspenso",
        text: "Arraste um item para mudar a ordem. Para um menu suspenso, arraste um item para baixo de outro e um pouco para a direita: passa a ser um submenu.",
      },
      {
        title: "Mude o nome ou apague",
        text: "Clique num item para mudar o nome ou o destino. O ícone do lixo tira-o do menu, sem apagar a página em si.",
      },
      {
        title: "Confira no celular",
        text: "Salve e abra a loja no celular. O menu principal aparece muitas vezes atrás de um ícone: use nomes curtos e poucas entradas.",
      },
    ],
    pitfalls: [
      "Um menu principal com dez links ou mais: o visitante já não sabe onde clicar.",
      "Páginas práticas (envio, devoluções) no menu do topo em vez do rodapé.",
    ],
  },
  {
    slug: "ouvrir-sa-boutique-shopify-au-public",
    localSlug: "abrir-loja-shopify-ao-publico",
    question: "Como retirar a senha da sua loja Shopify?",
    summary: "Abrir a loja ao público desativando o modo privado, e o que verificar antes.",
    intro:
      "Uma loja Shopify nova está protegida por senha: ninguém pode comprar. Para a abrir, primeiro escolha um plano e depois desative o modo privado.",
    steps: [
      {
        title: "Escolha um plano",
        text: "A senha só pode ser retirada depois de escolher um plano. Em « Configurações » e depois « Plano », escolha um. Durante o teste grátis, a assinatura só começa no fim do teste.",
        alt: "Os planos Shopify Basic, Grow, Advanced e Plus na página de preços",
      },
      {
        title: "Abra as preferências da loja",
        text: "No menu da esquerda, clique em « Loja virtual » e depois em « Preferências ». Desça até à secção de acesso à loja.",
      },
      {
        title: "Desative o modo privado",
        text: "Desative o modo privado (a proteção por senha) e salve. A loja fica visível para toda a gente, sem senha.",
        alt: "Loja virtual > Preferências: secção de acesso à loja com a opção de modo privado",
      },
      {
        title: "Preencha o título e a descrição para o Google",
        text: "Na mesma página, escreva o título e a meta-descrição da página inicial. É o que o Google e as redes sociais mostram quando alguém partilha a loja.",
      },
      {
        title: "Confira a partir de outro aparelho",
        text: "Abra o endereço da loja num celular onde não tenha sessão iniciada: a página inicial deve aparecer diretamente, sem pedir senha.",
      },
    ],
    pitfalls: [
      "Abrir a loja sem pedido de teste: é o primeiro cliente que descobre os erros.",
      "Abrir com políticas vazias ou produtos de demonstração ainda ativos.",
    ],
  },
  {
    slug: "creer-un-tunnel-de-vente-avec-leadpages-et-shopify-de-a-a-z",
    localSlug: "funil-de-vendas-leadpages-shopify-completo",
    question: "Como criar um funil de vendas com a Leadpages e a Shopify do início ao fim?",
    summary: "Guia completo para montar um funil de vendas que capta contatos com a Leadpages e os transforma em clientes na Shopify, passo a passo.",
    intro:
      "Um funil de vendas é o caminho que um visitante faz entre descobrir a sua oferta e comprar. Em vez de mandar toda a gente diretamente para a loja Shopify, começa por captar o e-mail com uma landing page Leadpages, convence por e-mail, e depois envia para a Shopify para comprar. Este guia monta o funil completo, da primeira página ao primeiro pagamento.",
    steps: [
      {
        title: "Perceba a estrutura de um funil de vendas",
        text: "Um funil de vendas tem quatro etapas: atrair a atenção, captar o contato, alimentar a relação por e-mail e propor a compra. Cada etapa tem a sua ferramenta.\n\nA Leadpages trata das duas primeiras: a landing page que atrai e o formulário que capta o e-mail. O seu serviço de e-mail marketing trata da terceira. A Shopify trata da última: o pagamento e a entrega. O conjunto forma um sistema automático que vende enquanto dorme.",
      },
      {
        title: "Prepare a oferta na Shopify",
        text: "Antes de montar o funil, o produto tem de estar pronto na Shopify. Crie o produto com fotos, preço, descrição e variantes. Confirme que o pagamento funciona com um pedido de teste.\n\nCopie o link direto para o produto ou para a coleção: vai precisar dele para o botão de compra nos e-mails e na página de vendas.",
        alt: "Página de produto Shopify: título, descrição, preço e imagens do produto",
      },
      {
        title: "Crie um brinde irresistível",
        text: "O brinde (lead magnet) é o que oferece em troca do e-mail. Um guia em PDF, uma checklist, um código de desconto, um acesso antecipado. Deve resolver um problema concreto do seu cliente ideal e estar diretamente ligado ao seu produto pago.\n\nExemplo: vende acessórios de cozinha na Shopify. O brinde pode ser « 10 receitas rápidas para a semana » em PDF. O visitante dá o e-mail, recebe as receitas, e depois os seus e-mails apresentam os seus acessórios.",
      },
      {
        title: "Monte a landing page de captura",
        text: "Na Leadpages, crie uma página nova a partir de um modelo ou com IA. A página tem um só objetivo: convencer o visitante a deixar o e-mail em troca do brinde.\n\nO título anuncia o benefício do brinde. O formulário só pede o e-mail. O botão diz exatamente o que o visitante recebe: « Receber as 10 receitas » em vez de « Inscrever-me ». Tire tudo o que distrai: sem menu, sem links para outras páginas.",
        alt: "Criação de uma landing page com o assistente de IA da Leadpages",
      },
      {
        title: "Conecte o seu serviço de e-mail",
        text: "Na Leadpages, abra as integrações da página e conecte o seu serviço de e-mail marketing: Mailchimp, Kit (ex-ConvertKit), ActiveCampaign ou outro. Cada novo inscrito entra automaticamente numa lista ou tag específica.\n\nCrie uma lista ou tag só para este funil, para que os e-mails de venda cheguem apenas a quem pediu este brinde.",
        alt: "Painel de integrações da Leadpages: conexão com os serviços de e-mail",
      },
      {
        title: "Escreva a sequência de e-mails",
        text: "Prepare 4 a 6 e-mails automáticos enviados ao longo de 7 a 10 dias. O primeiro entrega o brinde. Os seguintes dão valor e apresentam aos poucos o seu produto Shopify.\n\nE-mail 1: entrega do brinde + apresentação rápida de si. E-mail 2: uma dica ligada ao tema do brinde. E-mail 3: a história de um cliente que resolveu o problema com o seu produto. E-mail 4: apresentação do produto com o link para a Shopify. E-mail 5: lembrete com um código de desconto por tempo limitado.",
      },
      {
        title: "Crie um código de desconto na Shopify",
        text: "Na Shopify, vá a Descontos e crie um código promocional só para os inscritos do funil. Um código como BEMVINDO15 com 15 % de desconto na primeira compra dá uma razão para comprar agora e não mais tarde.\n\nLimite o código a um uso por cliente e defina uma data de fim para criar uma urgência verdadeira.",
        alt: "Criação de um código de desconto na Shopify: percentagem, condições e limites",
      },
      {
        title: "Monte a página de vendas",
        text: "Crie uma segunda página na Leadpages: a página de vendas. É para ela que os e-mails levam os contatos prontos a comprar. Apresenta o produto em detalhe com um botão que leva à Shopify.\n\nEsta página é mais longa do que a de captura: depoimentos, detalhes do produto, garantia, perguntas frequentes. O botão de compra usa o link direto para o produto Shopify.",
        alt: "Página de vendas HTML Pub com botão de compra ligado à Shopify",
      },
      {
        title: "Configure a página de agradecimento",
        text: "Depois da inscrição na página de captura, o visitante chega a uma página de agradecimento. Use-a para reforçar o envolvimento: lembre de ver o spam, convide a seguir as suas redes, ou mostre um vislumbre do seu produto Shopify.\n\nNa Leadpages, defina o redirecionamento depois do formulário para a página de agradecimento. Também pode pôr lá diretamente a oferta com o código de desconto para os mais apressados.",
      },
      {
        title: "Teste o funil completo",
        text: "Antes de enviar tráfego, percorra você mesmo cada etapa. Inscreva-se com um endereço de teste, confirme que o e-mail de boas-vindas chega, clique em cada link da sequência e faça um pedido de teste na Shopify com o código de desconto.\n\nConfira também no celular: a maior parte do tráfego vem daí. Se um e-mail aparece mal ou um botão é pequeno demais, corrija antes de lançar.",
      },
      {
        title: "Envie tráfego para a página de captura",
        text: "O funil está pronto: agora é preciso trazer visitantes. As fontes mais comuns: um anúncio no Facebook ou no Instagram dirigido ao seu público, um post nas redes com o link da página, um artigo de blog que leva ao brinde, ou uma parceria com um criador de conteúdo do seu nicho.\n\nComece com um orçamento de anúncios pequeno para confirmar que o funil converte antes de gastar mais.",
      },
      {
        title: "Acompanhe os resultados em cada etapa",
        text: "Um funil de vendas mede-se etapa a etapa. Anote a taxa de conversão da landing page, a taxa de abertura dos e-mails, a taxa de clique para a Shopify e a taxa de compra final.\n\nNa Leadpages, o painel dá a taxa de conversão da página. No serviço de e-mail, vê as aberturas e os cliques. Na Shopify, as vendas com o código de desconto mostram quantas vendas vêm do funil.",
        alt: "Painel Leadpages: acompanhamento das conversões e do tráfego",
      },
      {
        title: "Otimize com testes A/B",
        text: "Quando o funil já funciona e gera dados, melhore cada etapa. Teste dois títulos na página de captura. Teste dois assuntos de e-mail. Teste dois preços ou duas ofertas na página de vendas.\n\nNa Leadpages, use os testes A/B na página de captura e na página de vendas. Mude um só elemento de cada vez e espere pelo menos 100 conversões por variante antes de escolher a vencedora.",
        alt: "Interface de teste A/B Leadpages: comparação entre duas variantes da página",
      },
    ],
    pitfalls: [
      "Enviar o tráfego diretamente para a Shopify sem captar o e-mail primeiro: os visitantes que saem ficam perdidos para sempre.",
      "Escrever uma sequência de e-mails 100 % promocional: os contatos cancelam a inscrição antes de comprar.",
      "Não testar o funil no celular antes de lançar os anúncios.",
      "Usar um código de desconto sem data de fim: não há urgência nenhuma em comprar.",
      "Lançar anúncios pagos antes de confirmar que cada etapa do funil funciona.",
    ],
  },
];
