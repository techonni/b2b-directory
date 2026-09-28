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
];
