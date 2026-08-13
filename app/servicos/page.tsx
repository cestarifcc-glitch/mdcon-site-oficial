import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços Contábeis',
  description: 'Conheça as soluções contábeis da MDCon para empresas, empreendedores e profissionais de Palmeira das Missões e região.'
};

const services = [
  {
    icon: '▦',
    title: 'Contabilidade Empresarial',
    text: 'Organização e acompanhamento das informações contábeis da empresa, apoiando a gestão com mais clareza e regularidade.'
  },
  {
    icon: '▣',
    title: 'Abertura de Empresas',
    text: 'Orientação para estruturar a abertura do negócio, organizar documentos e compreender os primeiros passos da empresa.'
  },
  {
    icon: '▤',
    title: 'Assessoria Fiscal',
    text: 'Acompanhamento das obrigações fiscais e tributárias, com atenção à rotina e às particularidades de cada empresa.'
  },
  {
    icon: '◎',
    title: 'Departamento Pessoal',
    text: 'Apoio nas rotinas trabalhistas, folha de pagamento, admissões, desligamentos e demais obrigações relacionadas à equipe.'
  },
  {
    icon: '◉',
    title: 'Imposto de Renda',
    text: 'Orientação e elaboração da declaração conforme o perfil do contribuinte e as informações apresentadas.'
  },
  {
    icon: '◫',
    title: 'Planejamento Tributário',
    text: 'Análise das possibilidades tributárias aplicáveis à realidade do negócio, buscando decisões mais organizadas e seguras.'
  },
  {
    icon: '◇',
    title: 'MEI e Pequenas Empresas',
    text: 'Orientação contábil para empreendedores e pequenos negócios que precisam de acompanhamento próximo e objetivo.'
  },
  {
    icon: '✓',
    title: 'Regularização Empresarial',
    text: 'Auxílio na organização e regularização de pendências e situações contábeis que precisam ser analisadas e encaminhadas.'
  }
];

export default function Servicos() {
  return (
    <main className="services-page">
      <section className="inner-hero services-hero">
        <div className="container narrow">
          <span className="eyebrow">SERVIÇOS</span>
          <h1>Soluções contábeis para diferentes momentos da sua empresa.</h1>
          <p>Conheça algumas das soluções da MDCon e converse com nossa equipe para entender quais serviços fazem sentido para a realidade do seu negócio.</p>
        </div>
      </section>

      <section className="services-page-section">
        <div className="container">
          <div className="services-page-grid">
            {services.map((service, index) => (
              <article className="services-page-card" key={service.title}>
                <div className="services-page-card-top">
                  <span className="services-page-number">0{index + 1}</span>
                  <span className="services-page-icon" aria-hidden="true">{service.icon}</span>
                </div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
                <a
                  className="services-page-link"
                  href={`https://wa.me/5555984522204?text=${encodeURIComponent('Olá MDCon, gostaria de informações sobre ' + service.title + '.')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Quero saber mais →
                </a>
              </article>
            ))}
          </div>

          <div className="services-page-cta">
            <div>
              <span className="eyebrow">ATENDIMENTO PERSONALIZADO</span>
              <h2>Não encontrou exatamente o que precisa?</h2>
              <p>Converse com a equipe da MDCon. Podemos entender sua necessidade e orientar o melhor caminho para sua empresa.</p>
            </div>
            <a
              className="btn btn-primary big"
              href="https://wa.me/5555984522204?text=Olá%20MDCon,%20gostaria%20de%20conversar%20sobre%20os%20serviços%20contábeis."
              target="_blank"
              rel="noreferrer"
            >
              Falar com a MDCon
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
