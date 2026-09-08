export type ArticleSection = { heading: string; text: string };
export type Article = { slug:string; title:string; summary:string; sections:ArticleSection[] };
export type ContentCategory = { slug:string; title:string; description:string; articles:Article[] };

export const contentCategories: ContentCategory[] = [
  {
    slug: "abertura-e-organizacao-de-empresas", title: "Abertura e organização de empresas", description: "Conteúdos para quem está começando um negócio ou quer organizar melhor a estrutura da empresa.",
    articles: [
      {
        slug: "como-abrir-uma-empresa", title: "Como abrir uma empresa: o que você precisa definir antes de começar", summary: "Abrir uma empresa começa antes do CNPJ. Atividade, estrutura, sócios, endereço e tributação precisam ser avaliados em conjunto.",
        sections: [
          { heading: "Comece pela atividade que será exercida", text: "A descrição correta das atividades é uma das primeiras definições do negócio. Ela influencia cadastros, licenças, emissão de documentos fiscais e possibilidades de enquadramento tributário. Por isso, vale explicar ao contador não apenas o que a empresa venderá ou prestará, mas como a operação funcionará na prática." },
          { heading: "Defina a estrutura do negócio", text: "É importante avaliar se haverá sócios, qual será a participação de cada um, o capital inicial, o endereço da empresa e a forma de administração. Essas decisões devem refletir a realidade do empreendimento e não apenas atender ao momento da abertura." },
          { heading: "Tributação deve ser analisada antes", text: "O regime tributário não deve ser escolhido apenas pela impressão de que uma opção é sempre mais barata. Atividade, faturamento esperado, folha, despesas e características da operação precisam ser considerados." },
          { heading: "Organização desde o primeiro dia", text: "Separar finanças pessoais e empresariais, guardar documentos, definir uma rotina para notas fiscais e acompanhar os números desde o início facilita a gestão e o trabalho contábil. Uma abertura bem planejada reduz retrabalho e ajuda o empresário a começar com mais clareza." },
        ]
      },
      {
        slug: "mei-microempresa-ou-epp", title: "MEI, Microempresa ou Empresa de Pequeno Porte: quais são as diferenças?", summary: "As expressões MEI, ME e EPP aparecem com frequência, mas representam situações diferentes e não devem ser escolhidas apenas pelo tamanho que o negócio parece ter.",
        sections: [
          { heading: "MEI é uma forma simplificada", text: "O Microempreendedor Individual possui regras próprias, incluindo atividades permitidas, limite de receita e outras condições definidas pela legislação. Nem toda atividade pode ser MEI e o crescimento do negócio pode exigir mudança de enquadramento." },
          { heading: "ME e EPP indicam porte", text: "Microempresa e Empresa de Pequeno Porte são classificações relacionadas ao porte e à receita bruta dentro dos limites legais. Elas não são, por si só, um regime tributário. Uma empresa enquadrada como ME ou EPP ainda precisa ter sua tributação analisada conforme as regras aplicáveis." },
          { heading: "A escolha depende da realidade do negócio", text: "Atividade, previsão de faturamento, necessidade de empregados, existência de sócios e perspectiva de crescimento devem entrar na análise. Começar com uma estrutura coerente evita mudanças precipitadas logo depois da abertura." },
          { heading: "Converse antes de formalizar", text: "Uma conversa com a contabilidade antes do CNPJ permite comparar possibilidades e entender obrigações. A MDCon pode analisar o projeto do negócio e orientar os próximos passos de acordo com a situação concreta." },
        ]
      },
      {
        slug: "sete-decisoes-antes-do-cnpj", title: "Vai abrir uma empresa? 7 decisões que merecem atenção antes do CNPJ", summary: "Antes de formalizar um negócio, algumas escolhas influenciam diretamente a rotina futura da empresa. Veja sete pontos que merecem atenção.",
        sections: [
          { heading: "1. O que a empresa realmente fará", text: "Defina produtos, serviços e a forma de operação. Isso ajuda a identificar atividades e cadastros adequados." },
          { heading: "2. Quem participará do negócio", text: "Se houver sócios, alinhe participação, responsabilidades e administração desde o início." },
          { heading: "3. Onde a empresa funcionará", text: "O endereço pode envolver regras municipais, licenças e compatibilidade com a atividade." },
          { heading: "4. Quanto pretende faturar", text: "Uma projeção realista ajuda na análise do porte e da tributação." },
          { heading: "5. Como serão os custos e a folha", text: "Despesas, contratação de pessoas e margem esperada ajudam a compreender a estrutura econômica do negócio." },
          { heading: "6. Como separar dinheiro pessoal e empresarial", text: "Conta, controles e retiradas devem ser organizados desde o começo." },
          { heading: "7. Como será a rotina contábil", text: "Notas, documentos, informações trabalhistas e obrigações precisam chegar à contabilidade com organização. Planejar essa rotina antes de abrir torna o início da empresa mais simples." },
        ]
      },
    ]
  },
  {
    slug: "impostos-e-planejamento-tributario", title: "Impostos e planejamento tributário", description: "Informações para compreender melhor obrigações tributárias, regimes e decisões fiscais.",
    articles: [
      {
        slug: "simples-lucro-presumido-ou-real", title: "Simples Nacional, Lucro Presumido ou Lucro Real: entenda as diferenças", summary: "Os regimes tributários possuem regras e formas de apuração diferentes. A escolha adequada depende das características de cada empresa.",
        sections: [
          { heading: "Simples Nacional", text: "É um regime voltado a micro e pequenas empresas que atendam às condições legais. Reúne diversos tributos em uma sistemática própria, mas alíquotas e anexos variam conforme atividade, receita e outras características." },
          { heading: "Lucro Presumido", text: "Nesse regime, a legislação utiliza percentuais de presunção para determinar bases de cálculo de determinados tributos. A conveniência depende da atividade, faturamento, margem e demais dados da empresa." },
          { heading: "Lucro Real", text: "A apuração considera o lucro contábil ajustado pelas regras fiscais. É obrigatório em determinadas situações e também pode ser uma opção para algumas empresas." },
          { heading: "Não existe um regime melhor para todos", text: "Comparações precisam considerar números reais e projeções. Uma decisão tributária responsável avalia atividade, receitas, custos, folha e regras vigentes, além dos efeitos das mudanças legislativas." },
        ]
      },
      {
        slug: "o-que-e-planejamento-tributario", title: "O que é planejamento tributário e por que ele deve fazer parte da gestão?", summary: "Planejamento tributário é a análise organizada das regras e alternativas legais aplicáveis à empresa. Ele deve caminhar junto com a gestão, e não aparecer apenas quando surge um problema.",
        sections: [
          { heading: "Planejar não significa procurar atalhos", text: "O objetivo é compreender como a empresa está enquadrada, quais obrigações possui e quais escolhas legais são compatíveis com sua operação." },
          { heading: "Os números da empresa importam", text: "Faturamento, margens, despesas, folha, atividade e perspectivas de crescimento podem alterar o resultado de uma comparação entre regimes ou estruturas." },
          { heading: "O planejamento precisa ser periódico", text: "Uma decisão adequada em determinado momento pode deixar de ser a melhor quando a empresa cresce, muda sua atividade ou quando a legislação é alterada." },
          { heading: "Contabilidade e gestão se encontram", text: "Quando os dados estão organizados, a empresa consegue discutir tributação com antecedência e tomar decisões com mais informação. O planejamento deve ser documentado e baseado na legislação vigente." },
        ]
      },
      {
        slug: "regime-tributario-adequado", title: "Sua empresa está no regime tributário adequado? O que deve ser analisado", summary: "Revisar o enquadramento tributário exige mais do que comparar uma alíquota. É necessário observar o conjunto da operação.",
        sections: [
          { heading: "Atividade e forma de receita", text: "O tipo de serviço, comércio ou produção influencia regras, anexos, presunções e possibilidades de enquadramento." },
          { heading: "Faturamento e crescimento", text: "Receita atual e projeções ajudam a verificar limites e efeitos de mudança de faixa ou regime." },
          { heading: "Folha, custos e margem", text: "Empresas com o mesmo faturamento podem ter estruturas muito diferentes. Folha, despesas e margem interferem na análise." },
          { heading: "Obrigações e mudanças legais", text: "Além do valor dos tributos, é preciso considerar obrigações acessórias e alterações legislativas. A análise deve ser feita com dados atuais e acompanhamento profissional, especialmente em períodos de transição tributária." },
        ]
      },
    ]
  },
  {
    slug: "departamento-pessoal", title: "Departamento pessoal", description: "Orientações sobre rotinas trabalhistas, folha, admissões e obrigações relacionadas à equipe.",
    articles: [
      {
        slug: "admissao-de-funcionario", title: "Admissão de funcionário: o que a empresa precisa organizar?", summary: "Contratar uma pessoa envolve informações cadastrais, condições de trabalho e registros que precisam ser preparados antes do início das atividades.",
        sections: [
          { heading: "Organize os dados com antecedência", text: "A empresa deve reunir os dados necessários do trabalhador e definir cargo, remuneração, jornada e data de início. Informações incompletas ou enviadas em cima da hora aumentam o risco de retrabalho." },
          { heading: "A admissão possui prazos", text: "Os eventos trabalhistas são enviados por sistemas oficiais, como o eSocial, e determinados registros precisam ocorrer antes do início do trabalho. Por isso, a comunicação com o departamento pessoal deve acontecer antecipadamente." },
          { heading: "Condições precisam estar claras", text: "Salário, jornada, benefícios e demais condições devem refletir o que foi acordado e observar a legislação e instrumentos coletivos aplicáveis." },
          { heading: "Crie uma rotina interna", text: "Definir quem informa admissões, férias, alterações e desligamentos à contabilidade evita atrasos. Departamento pessoal funciona melhor quando empresa e escritório mantêm um fluxo de informações organizado." },
        ]
      },
      {
        slug: "folha-de-pagamento-alem-do-salario", title: "Folha de pagamento: o que o empresário precisa entender além do salário?", summary: "O custo e a rotina de um empregado não se resumem ao salário combinado. A folha reúne diferentes informações e obrigações.",
        sections: [
          { heading: "A folha registra a relação trabalhista", text: "Remuneração, adicionais, descontos, faltas, benefícios e outras ocorrências podem fazer parte do processamento mensal, conforme cada caso." },
          { heading: "Existem encargos e obrigações", text: "A empresa precisa considerar os recolhimentos e informações exigidos pela legislação, além de provisões e eventos como férias e décimo terceiro." },
          { heading: "Informação correta é essencial", text: "Horas, afastamentos, comissões e alterações precisam ser comunicados dentro da rotina definida. Dados enviados tarde podem afetar cálculos e obrigações." },
          { heading: "Folha também é informação de gestão", text: "Conhecer o custo da equipe ajuda a planejar contratações e acompanhar a estrutura da empresa. O departamento pessoal transforma ocorrências do dia a dia em registros que precisam estar consistentes." },
        ]
      },
      {
        slug: "ferias-admissoes-e-desligamentos", title: "Férias, admissões e desligamentos: por que o departamento pessoal exige planejamento?", summary: "Eventos trabalhistas têm datas, documentos e efeitos financeiros. Antecipação facilita o cumprimento das obrigações e a organização da empresa.",
        sections: [
          { heading: "Admissões começam antes do primeiro dia", text: "A contratação deve ser informada ao responsável pelo departamento pessoal com antecedência para que cadastros e eventos sejam preparados corretamente." },
          { heading: "Férias exigem programação", text: "Planejar períodos ajuda a empresa a organizar equipes, avisos, pagamentos e continuidade das atividades." },
          { heading: "Desligamentos possuem procedimentos próprios", text: "A forma e a data do desligamento influenciam documentos, cálculos e prazos. A comunicação rápida com a contabilidade é importante." },
          { heading: "Uma agenda reduz urgências", text: "Calendário interno e responsáveis definidos para comunicar movimentações tornam o processo mais previsível. Em questões específicas, também pode ser necessária orientação jurídica trabalhista." },
        ]
      },
    ]
  },
  {
    slug: "imposto-de-renda", title: "Imposto de Renda", description: "Conteúdos voltados a dúvidas frequentes sobre declaração, organização de informações e prazos.",
    articles: [
      {
        slug: "quem-precisa-declarar", title: "Quem precisa declarar Imposto de Renda? Entenda os critérios", summary: "A obrigação de apresentar a declaração é definida a cada exercício pela Receita Federal. Por isso, os critérios devem ser conferidos no ano da entrega.",
        sections: [
          { heading: "A obrigação não depende de um único fator", text: "Rendimentos tributáveis são apenas um dos critérios. Rendimentos isentos, bens, operações, ganho de capital e atividade rural, entre outras situações previstas nas regras do exercício, também podem gerar obrigação." },
          { heading: "Os limites mudam", text: "A Receita Federal publica anualmente as regras e os limites da declaração. Um valor usado em um ano não deve ser automaticamente repetido no ano seguinte." },
          { heading: "Quem não é obrigado pode ter motivos para declarar", text: "Em algumas situações, uma pessoa não obrigada pode apresentar a declaração, por exemplo para solicitar restituição de imposto retido, desde que respeitadas as regras aplicáveis." },
          { heading: "Analise o conjunto das informações", text: "Antes de concluir se precisa declarar, reúna os dados do ano-calendário e confira os critérios oficiais do exercício. A MDCon pode auxiliar nessa verificação e na preparação da declaração." },
        ]
      },
      {
        slug: "documentos-para-imposto-de-renda", title: "Quais documentos organizar para fazer a declaração do Imposto de Renda?", summary: "Uma declaração bem preparada começa com organização. Reunir documentos antes do preenchimento reduz esquecimentos e facilita a conferência.",
        sections: [
          { heading: "Rendimentos", text: "Separe informes de salários, aposentadorias, instituições financeiras, aluguéis e outras fontes de renda aplicáveis ao seu caso." },
          { heading: "Bens, direitos e dívidas", text: "Tenha documentos de imóveis, veículos, contas, investimentos, financiamentos e operações realizadas durante o ano." },
          { heading: "Despesas e informações de dependentes", text: "Quando aplicável, organize comprovantes e dados relacionados a dependentes e despesas que possam ter tratamento específico na declaração." },
          { heading: "Atividade rural e outras situações", text: "Produtores rurais, investidores, pessoas que venderam bens ou possuem operações específicas podem precisar de controles adicionais. Guarde documentos hábeis e mantenha histórico das informações declaradas." },
        ]
      },
      {
        slug: "erros-e-omissoes-na-declaracao", title: "Imposto de Renda: erros e omissões que podem gerar problemas na declaração", summary: "Muitas inconsistências surgem não por uma operação complexa, mas por informação incompleta, divergente ou esquecida.",
        sections: [
          { heading: "Rendimentos omitidos", text: "Informações recebidas de mais de uma fonte, inclusive de dependentes quando aplicável, precisam ser conferidas com atenção." },
          { heading: "Dados diferentes dos informes", text: "Valores digitados de forma diferente dos documentos fornecidos por instituições e fontes pagadoras podem gerar divergências." },
          { heading: "Bens sem histórico adequado", text: "Aquisições, vendas e saldos devem ser informados conforme as regras da declaração e a documentação disponível." },
          { heading: "Não deixe a organização para o último momento", text: "Quanto mais cedo os documentos forem reunidos, maior o tempo para esclarecer dúvidas. Caso seja identificado erro depois do envio, deve-se avaliar a necessidade de retificação conforme as regras da Receita Federal." },
        ]
      },
    ]
  },
  {
    slug: "produtor-rural", title: "Produtor rural", description: "Informações contábeis e fiscais voltadas às particularidades da atividade rural.",
    articles: [
      {
        slug: "contabilidade-para-produtor-rural", title: "Contabilidade para produtor rural: por que organizar a atividade ao longo do ano?", summary: "Na atividade rural, deixar a organização apenas para a época do Imposto de Renda pode transformar documentos e informações em um grande retrabalho.",
        sections: [
          { heading: "Registre receitas e despesas", text: "Movimentações da atividade precisam ser acompanhadas com documentação que permita identificar operação, valor, data e participantes quando exigido." },
          { heading: "Separe a atividade da vida pessoal", text: "Organização financeira facilita a compreensão do resultado rural e a preparação das informações tributárias." },
          { heading: "Acompanhe bens e investimentos", text: "Máquinas, benfeitorias, financiamentos e outras operações podem exigir tratamento e documentação próprios." },
          { heading: "Organização anual melhora a qualidade das informações", text: "Com registros feitos durante o ano, o produtor consegue acompanhar a atividade e preparar obrigações com mais segurança. A necessidade de livros, declarações e controles específicos depende da situação de cada produtor." },
        ]
      },
      {
        slug: "lcdpr-o-que-e", title: "Livro Caixa Digital do Produtor Rural (LCDPR): o que é e quem deve ficar atento?", summary: "O LCDPR é uma escrituração digital destinada à atividade rural da pessoa física em situações previstas pela Receita Federal.",
        sections: [
          { heading: "O que é o LCDPR", text: "O arquivo segue leiaute e orientações publicados pela Receita Federal e registra informações da exploração rural. Sua obrigatoriedade depende das regras e limites aplicáveis ao ano-calendário." },
          { heading: "Não confunda com o programa Livro Caixa da Atividade Rural", text: "A própria Receita Federal alerta que o programa LCAR e o LCDPR não são a mesma coisa. Cada instrumento possui finalidade e regras próprias." },
          { heading: "A qualidade dos registros importa", text: "Receitas, despesas, imóveis, contas e participantes das operações precisam ser organizados conforme o leiaute e a documentação da atividade." },
          { heading: "Verifique as regras do período", text: "Leiaute, manuais, prazos e critérios devem ser consultados nas fontes oficiais vigentes. Quem exerce atividade rural deve avaliar com antecedência se está obrigado e como manter os registros necessários." },
        ]
      },
      {
        slug: "imposto-de-renda-produtor-rural", title: "Imposto de Renda do produtor rural: quais informações precisam ser organizadas?", summary: "A declaração da atividade rural exige atenção a receitas, despesas, bens e documentação. A preparação deve acontecer durante o ano.",
        sections: [
          { heading: "Receitas da atividade", text: "Organize documentos das vendas e demais receitas rurais, identificando datas, valores e operações." },
          { heading: "Despesas e investimentos", text: "Despesas relacionadas à atividade precisam ser comprovadas e analisadas conforme as regras tributárias. Investimentos e aquisições também merecem controle." },
          { heading: "Resultado e prejuízos", text: "A apuração da atividade rural possui regras próprias, inclusive para situações de prejuízo a compensar. Os registros anteriores devem ser preservados." },
          { heading: "Obrigações podem se relacionar", text: "Dependendo da receita e da situação do produtor, podem existir controles e entregas adicionais, como o LCDPR. A análise deve considerar as regras do exercício da declaração e a realidade da exploração rural." },
        ]
      },
    ]
  },
  {
    slug: "gestao-e-decisoes-empresariais", title: "Gestão e decisões empresariais", description: "Conteúdos para ajudar empresários e empreendedores a compreender melhor seus números e sua rotina contábil.",
    articles: [
      {
        slug: "faturamento-nao-e-lucro", title: "Faturamento não é lucro: entenda a diferença e por que ela importa", summary: "Vender mais não significa necessariamente ganhar mais. Faturamento e lucro medem coisas diferentes e precisam ser acompanhados separadamente.",
        sections: [
          { heading: "Faturamento é a receita das vendas", text: "É o valor gerado pelas vendas ou serviços em determinado período, antes de considerar todos os custos e despesas do negócio." },
          { heading: "Lucro depende do que sobra", text: "Para compreender o resultado, é necessário considerar custos, despesas, tributos e demais elementos da operação. Uma empresa pode aumentar vendas e ainda assim ter margem insuficiente." },
          { heading: "Caixa também é diferente de lucro", text: "Ter dinheiro disponível em determinado dia não significa que aquele valor seja lucro. Pagamentos futuros, impostos e compromissos precisam ser considerados." },
          { heading: "Use indicadores em conjunto", text: "Acompanhar faturamento, custos, despesas, margem e caixa ajuda o empresário a entender melhor o negócio. A contabilidade pode fornecer informações importantes para essa leitura." },
        ]
      },
      {
        slug: "informacoes-contabeis-para-decisoes", title: "Como usar as informações contábeis para tomar melhores decisões na empresa", summary: "A contabilidade não precisa aparecer apenas quando chega uma guia ou uma obrigação. Informações contábeis podem apoiar decisões importantes do negócio.",
        sections: [
          { heading: "Observe a evolução dos resultados", text: "Comparar períodos ajuda a perceber mudanças em receitas, despesas e resultado, evitando decisões baseadas apenas na sensação do movimento diário." },
          { heading: "Entenda a estrutura de custos", text: "Conhecer custos e despesas auxilia na avaliação de preços, investimentos e necessidade de ajustes." },
          { heading: "Planeje antes de crescer", text: "Contratações, novos pontos, equipamentos e expansão aumentam compromissos. Projeções e informações históricas ajudam a avaliar capacidade financeira." },
          { heading: "Converse com a contabilidade", text: "Relatórios ganham valor quando são compreendidos. Perguntar, acompanhar indicadores e manter dados organizados aproxima a contabilidade da gestão da empresa." },
        ]
      },
      {
        slug: "separar-dinheiro-da-empresa-e-pessoal", title: "Misturar dinheiro da empresa com dinheiro pessoal: por que isso prejudica a gestão?", summary: "Quando recursos pessoais e empresariais se misturam, fica mais difícil saber quanto a empresa realmente gera, gasta e pode investir.",
        sections: [
          { heading: "A leitura do caixa fica distorcida", text: "Pagamentos pessoais feitos pela empresa e despesas empresariais pagas sem registro dificultam a compreensão da movimentação real." },
          { heading: "O resultado perde clareza", text: "Sem separação, o empresário pode interpretar retiradas como despesas do negócio ou imaginar que há mais dinheiro disponível do que realmente existe." },
          { heading: "Defina uma rotina de retiradas", text: "Pró-labore, distribuição de resultados e outras formas de retirada devem ser tratadas conforme a realidade e as regras aplicáveis à empresa." },
          { heading: "Organização facilita decisões e contabilidade", text: "Contas separadas, documentos identificados e disciplina financeira tornam os relatórios mais confiáveis e ajudam o empresário a enxergar o negócio com mais clareza." },
        ]
      },
    ]
  },
];

export function getCategory(slug:string){ return contentCategories.find(c=>c.slug===slug); }
export function getArticle(categorySlug:string, articleSlug:string){ return getCategory(categorySlug)?.articles.find(a=>a.slug===articleSlug); }