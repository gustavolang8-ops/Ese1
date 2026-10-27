
escolhas: [
  { texto: "Começar a história", destino: "infancia" },
  { texto: "Explorar uma vida diferente", destino: "final11" },
  { texto: "Ler a carta final", destino: "final12" }
]

  },

  infancia: {
    capitulo: "CAPÍTULO 01",
    titulo: "Muito antes de tudo",
    texto: "Gustavo e Mariana se conheceram quando ainda eram crianças, no Super Férias. Ele já gostava dela, mas a vida seguiu e os dois deixaram de conversar.\n\nTambém se cruzaram na Igreja das Estrelas, um lugar que, anos depois, passaria a representar um sonho de futuro.\n\nNaquela época, nenhum dos dois sabia o que ainda estava por vir.",
    imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
    pergunta: "O tempo passou. E então, os caminhos voltaram a se cruzar.",
    escolhas: [
      { texto: "Continuar para a noite na Uzna →", destino: "uzna" },
      { texto: "E se eles nunca tivessem se reencontrado?", destino: "final5" }
    ]
  },

  uzna: {
    capitulo: "CAPÍTULO 02",
    titulo: "Uma noite na Uzna",
    texto: "Eles se encontraram novamente em ambientes que ambos frequentavam. Eram conhecidos, mas ainda não existia uma história entre os dois.\n\nNaquela noite, Gustavo tomou a iniciativa e pediu o número de Mariana. Não houve uma grande declaração, nem uma promessa. Apenas a oportunidade de se conhecerem melhor.",
    imagem: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Como essa noite termina?",
    escolhas: [
      { texto: "Ela também quer conhecê-lo melhor.", destino: "gelato" },
      { texto: "Ela quer apenas amizade.", destino: "amizade" },
      { texto: "Ele não toma a iniciativa.", destino: "final7" }
    ]
  },

  amizade: {
    capitulo: "OUTRA REALIDADE",
    titulo: "Só amigos",
    texto: "Mariana foi sincera: gostava de conversar com Gustavo, mas não sentia vontade de começar um relacionamento.\n\nEle poderia ter tentado convencê-la. Em vez disso, respeitou sua resposta. Não havia nada de errado em ela querer apenas amizade.\n\nAos poucos, os contatos ficaram mais raros. A vida de cada um seguiu por um caminho diferente.",
    imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
    pergunta: "O que acontece com uma história que nunca começa?",
    escolhas: [
      { texto: "Descobrir a vida que ele seguiu sem ela.", destino: "final6" },
      { texto: "Imaginar o que poderia ter acontecido.", destino: "final10" }
    ]
  },

  gelato: {
    capitulo: "CAPÍTULO 03",
    titulo: "Um gelato e uma pergunta",
    texto: "Gustavo a convidou para tomar um gelato. Ele preparou uma surpresa: uma mensagem no prato perguntando se ela queria namorar com ele.\n\nNaquele momento, ele não estava apenas fazendo um pedido. Estava abrindo a porta para uma história que, até então, só existia como possibilidade.\n\nAgora, a narrativa entra nas lembranças de quem viveu aqueles momentos.",
    imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1400&q=85",
    pergunta: "E se você pudesse entrar nessa lembrança?",
    escolhas: [
      { texto: "Viver o começo desse amor.", destino: "amor" },
      { texto: "Descobrir o que mudaria com outra escolha.", destino: "final8" }
    ]
  },

  amor: {
    capitulo: "CAPÍTULO 04",
    titulo: "Eu escolhi você",
    narrador: "primeira",
    texto: "Eu me apaixonei pelo seu jeito, pela sua bondade, pelo seu cabelo e pelo brilho dos seus olhos. Eu gostava de estar perto de você e de descobrir os pequenos detalhes que faziam você ser quem é.\n\nEu não sabia como seria o futuro. Mas, quando olhava para você, conseguia imaginar tantas possibilidades bonitas.\n\nNaquela época, eu queria que você soubesse que, para mim, aquilo era real.",
    imagem: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=85",
    pergunta: "O relacionamento começou. E vieram momentos que ficaram na memória.",
    escolhas: [
      { texto: "Continuar para as lembranças.", destino: "cuidado" },
      { texto: "E se a honestidade tivesse vindo primeiro?", destino: "honestidade" }
    ]
  },

  cuidado: {
    capitulo: "CAPÍTULO 05",
    titulo: "As coisas que não se esquecem",
    narrador: "primeira",
    texto: "Eu me lembro de quando machuquei o pé e precisei de muletas. Você cuidou de mim, trocou meus curativos e esteve ao meu lado enquanto eu me recuperava.\n\nEu me lembro também do meu aniversário, quando você ficou comigo mesmo depois de eu passar mal.\n\nEram momentos simples para quem olhasse de fora. Para mim, eram demonstrações de cuidado que eu não queria esquecer.",
    imagem: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Mas uma história também é feita das escolhas difíceis.",
    escolhas: [
      { texto: "Continuar para o primeiro conflito.", destino: "mentira" },
      { texto: "Descobrir uma versão em que ele escolhe a honestidade.", destino: "honestidade" }
    ]
  },

  mentira: {
    capitulo: "CAPÍTULO 06",
    titulo: "Quando a confiança mudou",
    texto: "No começo do relacionamento, Gustavo disse que não conversava com outras garotas, embora isso não fosse verdade. Ele afirma que tentou evitar magoar outras pessoas e acabou magoando Mariana.\n\nEle pediu desculpas, e os dois continuaram juntos. Mas pedir desculpas não fazia a insegurança desaparecer. A confiança, antes espontânea, passou a conviver com dúvidas.",
    imagem: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Uma escolha pode mudar o que vem depois.",
    escolhas: [
      { texto: "Seguir pela história real.", destino: "separacao" },
      { texto: "Ver a alternativa em que ele foi honesto desde o início.", destino: "honestidade" }
    ]
  },

  separacao: {
    capitulo: "CAPÍTULO 07",
    titulo: "Quando tudo ficou incerto",
    texto: "Cerca de um ano e meio depois, Gustavo voltou a trocar mensagens com outra pessoa. Mariana descobriu, e ele acabou admitindo o que aconteceu.\n\nA relação chegou a uma separação. Durante aquela semana, ainda existiam conversas, saudade e sentimentos, mas também havia dor e uma confiança profundamente abalada.\n\nO amor que sentiam não apagava as consequências das escolhas.",
    imagem: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    pergunta: "E se a segunda chance nunca tivesse acontecido?",
    escolhas: [
      { texto: "Seguir para a reconciliação.", destino: "recomeco" },
      { texto: "Imaginar os caminhos separados.", destino: "final4" },
      { texto: "Conhecer uma versão com um desfecho aberto.", destino: "final9" }
    ]
  },

  recomeco: {
    capitulo: "CAPÍTULO 08",
    titulo: "Uma segunda chance",
    texto: "Depois de uma semana difícil, os dois decidiram tentar novamente. Isso não significava que tudo estava resolvido. A decisão abriu uma possibilidade, mas reconstruir a confiança exigiria tempo, honestidade e atitudes consistentes.\n\nMariana ainda podia sentir medo. Gustavo precisava entender que querer mudar era apenas o começo: a mudança teria de aparecer no dia a dia.",
    imagem: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Como você imagina o que vem depois?",
    escolhas: [
      { texto: "Um futuro construído com atitudes.", destino: "final1" },
      { texto: "Um caminho que ainda exige aprendizado.", destino: "final2" },
      { texto: "Um sonho de casamento na Igreja das Estrelas.", destino: "final3" }
    ]
  },

  honestidade: {
    capitulo: "OUTRA ESCOLHA",
    titulo: "Se eu tivesse sido honesto",
    narrador: "primeira",
    texto: "E se eu tivesse falado a verdade desde o início? Talvez tivéssemos conversado sobre limites e expectativas antes de qualquer coisa se transformar em uma ferida.\n\nNão posso garantir que tudo teria dado certo. Mas sei que a honestidade teria permitido que você escolhesse sabendo a verdade.\n\nNessa versão, a história não é perfeita. Ela apenas começa com uma escolha diferente.",
    imagem: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Para onde essa versão da história leva você?",
    escolhas: [
      { texto: "Imaginar um futuro construído com honestidade.", destino: "final1" },
      { texto: "Escolher um final em aberto.", destino: "final10" }
    ]
  },

  final1: {
    final: true,
    capitulo: "FINAL 01 DE 12",
    titulo: "Um amor reconstruído",
    texto: "Nessa versão, o amor não resolve tudo sozinho. Ele aparece nas atitudes, nas conversas difíceis, na transparência e no respeito aos limites.\n\nA confiança não volta por uma promessa bonita, mas por experiências consistentes ao longo do tempo.\n\nTalvez os dois construam algo novo. Não exatamente igual ao que existia antes, mas mais consciente das escolhas que os trouxeram até aqui.",
    imagem: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Um futuro possível, construído um dia de cada vez.",
    escolhas: [{ texto: "Voltar ao início e explorar outra realidade.", destino: "inicio" }]
  },

  final2: {
    final: true,
    capitulo: "FINAL 02 DE 12",
    titulo: "Ainda aprendendo",
    texto: "Os dois continuam tentando compreender o que aconteceu. Há dias leves e dias em que as lembranças voltam.\n\nNão existe uma data exata em que a confiança precisa estar recuperada. Existe a escolha diária de agir com honestidade, conversar e reconhecer quando algo ainda dói.\n\nO futuro continua incerto, mas o aprendizado já faz parte da história.",
    imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Nem toda resposta chega de uma vez.",
    escolhas: [{ texto: "Voltar ao início.", destino: "inicio" }]
  },

  final3: {
    final: true,
    capitulo: "FINAL 03 DE 12",
    titulo: "O sonho na Igreja das Estrelas",
    texto: "Na imaginação de Gustavo, chega o dia em que Mariana atravessa a Igreja das Estrelas. Ele pensa nas promessas, na família que sonhou construir e nos anos que poderiam compartilhar.\n\nÉ um sonho bonito. Mas um casamento não pode ser apenas o desejo de uma pessoa: precisaria ser uma escolha livre e feliz dos dois.\n\nA cena termina como uma possibilidade, não como uma promessa sobre o futuro.",
    imagem: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Alguns sonhos são convites para o futuro, não garantias.",
    escolhas: [{ texto: "Voltar ao início.", destino: "inicio" }]
  },

  final4: {
    final: true,
    capitulo: "FINAL 04 DE 12",
    titulo: "Caminhos separados",
    texto: "Nessa versão, a segunda chance não acontece. Os dois seguem caminhos diferentes, mesmo que o que viveram continue tendo significado.\n\nA separação não transforma tudo em mentira. Houve momentos bons, aprendizados e sentimentos reais. Também houve consequências que não puderam ser apagadas.\n\nAos poucos, cada um constrói uma vida que já não depende do outro.",
    imagem: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Uma história importante também pode chegar ao fim.",
    escolhas: [{ texto: "Voltar ao início.", destino: "inicio" }]
  },

  final5: {
    final: true,
    capitulo: "FINAL 05 DE 12",
    titulo: "Se nunca tivéssemos nos reencontrado",
    texto: "A infância teria ficado apenas como uma lembrança distante. Nenhuma noite na Uzna, nenhum gelato, nenhuma carta de namoro.\n\nCada um teria seguido sua própria vida, conhecendo outras pessoas e criando memórias que jamais incluiriam essa história.\n\nTalvez nunca sentissem falta de algo que não chegaram a conhecer. E essa é a parte curiosa das possibilidades: algumas vidas mudam por causa de encontros; outras nunca chegam a saber o que perderam ou ganharam.",
   imagem: "https://miro.medium.com/v2/resize:fit:1400/1%2AcrfqCZjLG-yH6UrTZ4nAcg.jpeg",
    pergunta: "E se aquele reencontro nunca tivesse acontecido?",
    escolhas: [{ texto: "Explorar outra versão.", destino: "inicio" }]
  },

  final6: {
    final: true,
    capitulo: "FINAL 06 DE 12",
    titulo: "A vida que aconteceu sem nós",
    texto: "Naquela noite, Mariana escolheu apenas amizade. Gustavo respeitou a resposta, e os dois deixaram de se falar com o passar do tempo.\n\nEle seguiu em frente. Vieram novos lugares, novas amizades, conquistas e dias genuinamente felizes. Sua vida não ficou parada naquela noite.\n\nAinda assim, às vezes, uma lembrança o fazia pensar no que poderia ter acontecido. Não porque Mariana lhe devesse outra resposta, mas porque aquela possibilidade nunca chegou a ser vivida.\n\nA vida continuou. Só ficou uma página que ele nunca teve a oportunidade de ler.",
    imagem: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Algumas histórias simplesmente nunca começam.",
    escolhas: [{ texto: "Voltar e descobrir outra realidade.", destino: "inicio" }]
  },

  final7: {
    final: true,
    capitulo: "FINAL 07 DE 12",
    titulo: "A noite em que nada começou",
    texto: "Gustavo não pediu o número dela. A noite terminou como tantas outras, sem que nenhum dos dois soubesse que uma decisão pequena poderia ter aberto uma porta.\n\nOs dias seguintes passaram normalmente. Não houve gelato, pedido de namoro ou lembrança compartilhada daquele jeito.\n\nÀs vezes, uma história alternativa começa com algo que nunca aconteceu.",
    imagem: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Um gesto que nunca aconteceu. Uma história que nunca começou.",
    escolhas: [{ texto: "Voltar ao início.", destino: "inicio" }]
  },

  final8: {
    final: true,
    capitulo: "FINAL 08 DE 12",
    titulo: "A carta que nunca foi entregue",
    texto: "Nessa versão, Gustavo escreve tudo o que gostaria de dizer, mas a carta permanece guardada.\n\nEla contém lembranças, gratidão e perguntas que talvez nunca encontrem resposta. Com o tempo, ele entende que escrever pode ajudar a reconhecer sentimentos, mesmo quando não é necessário entregar cada palavra à pessoa a quem ela se destina.\n\nAlgumas cartas são uma conversa com o passado.",
    imagem: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Nem tudo o que sentimos precisa se transformar em pedido.",
    escolhas: [{ texto: "Voltar ao início.", destino: "inicio" }]
  },

  final9: {
    final: true,
    capitulo: "FINAL 09 DE 12",
    titulo: "Quando o amor não foi suficiente",
    texto: "Existiam sentimentos, lembranças e sonhos. Mas também existiam feridas e consequências.\n\nNessa versão, os dois reconhecem que gostar um do outro não significa que consigam continuar juntos. A história não apaga os dias bons, nem transforma a separação em fracasso absoluto.\n\nÀs vezes, seguir caminhos diferentes é uma decisão difícil que precisa ser respeitada.",
    imagem: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
    pergunta: "O que foi vivido continua fazendo parte da história.",
    escolhas: [{ texto: "Voltar ao início.", destino: "inicio" }]
  },

  final10: {
    final: true,
    capitulo: "FINAL 10 DE 12",
    titulo: "O capítulo que falta",
    texto: "A história termina sem dizer se eles ficam juntos. Não porque falte uma resposta correta, mas porque o futuro ainda não está escrito.\n\nHá coisas que Gustavo pode escolher: ser honesto, assumir as consequências, respeitar os limites e demonstrar mudança.\n\nHá coisas que ele não pode escolher por Mariana. O desfecho pertence aos dois, e não existe promessa capaz de antecipá-lo.",
    imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Alguns capítulos ainda estão sendo escritos.",
    escolhas: [{ texto: "Voltar ao início.", destino: "inicio" }]
  },

  final11: {
    final: true,
    capitulo: "FINAL 11 DE 12",
    titulo: "Uma vida diferente",
    texto: "Gustavo constrói uma vida com novos planos, pessoas queridas e experiências que o transformam. Algumas lembranças continuam existindo, mas deixam de ocupar todos os espaços.\n\nEle aprende que seguir em frente não exige apagar o passado. Pode guardar o que foi importante sem deixar de abrir espaço para o que ainda pode viver.\n\nA história que não aconteceu continua sendo uma possibilidade entre muitas, não a única vida que poderia valer a pena.",
    imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
    pergunta: "Ainda existem muitas páginas pela frente.",
    escolhas: [{ texto: "Voltar ao início.", destino: "inicio" }]
  },

  final12: {
    final: true,
    capitulo: "FINAL 12 DE 12",
    titulo: "Estando aqui ou não",
    narrador: "primeira",
    texto: "Mariana, eu não sei exatamente como será o nosso futuro. Eu tenho sonhos, lembranças e coisas pelas quais sou grato. Também sei que minhas escolhas tiveram consequências e que não posso pedir que você simplesmente deixe de sentir o que sente.\n\nEu gostaria de construir algo bonito com você, inclusive aquele sonho de um dia chegar à Igreja das Estrelas. Mas quero que qualquer futuro seja uma escolha livre e verdadeira dos dois.\n\nEstando aqui ou não, eu vou torcer para que você encontre felicidade, segurança e paz. E vou levar comigo o que aprendi sobre amar, cuidar e assumir a responsabilidade pelas minhas escolhas.\n\nObrigado por fazer parte da minha história.",
    imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85",
    pergunta: "O futuro não precisa ser decidido nesta última cena.",
    escolhas: [{ texto: "Voltar ao início e explorar outra versão.", destino: "inicio" }]
  }
};
