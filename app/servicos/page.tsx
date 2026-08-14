import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços Contábeis | MDCon',
  description:
    'Conheça os serviços da MDCon em contabilidade, abertura de empresas, escrituração fiscal, departamento pessoal, IRPF, planejamento tributário, produtor rural e certificado digital.',
};

const YELLOW = '#FFC400';
const YELLOW_DARK = '#FFC400';

type Service = {
  title: string;
  text: string;
  icon: 'building' | 'briefcase' | 'calculator' | 'users' | 'user' | 'chart' | 'store' | 'shield';
};

const services: Service[] = [
  {
    icon: 'building',
    title: 'Contabilidade Empresarial',
    text: 'Escrituração e acompanhamento contábil para manter a empresa organizada e com informações adequadas à sua rotina.'
  },
  {
    icon: 'briefcase',
    title: 'Constituição e Abertura de Empresas',
    text: 'Orientação para estruturar a abertura do negócio, organizar documentos e conduzir os primeiros passos da empresa.'
  },
  {
    icon: 'calculator',
    title: 'Escrituração Fiscal',
    text: 'Acompanhamento das obrigações fiscais, apuração de tributos e organização das informações tributárias da empresa.'
  },
  {
    icon: 'users',
    title: 'Departamento Pessoal',
    text: 'Apoio nas rotinas de folha de pagamento, admissões, desligamentos e demais obrigações trabalhistas.'
  },
  {
    icon: 'user',
    title: 'Imposto de Renda Pessoa Física',
    text: 'Orientação e elaboração da declaração conforme o perfil do contribuinte e as informações apresentadas.'
  },
  {
    icon: 'chart',
    title: 'Planejamento Tributário',
    text: 'Análise das possibilidades tributárias aplicáveis ao negócio, buscando maior organização e segurança nas decisões.'
  },
  {
    icon: 'store',
    title: 'Assessoria ao Produtor Rural',
    text: 'Orientação contábil e apoio nas obrigações do produtor rural, considerando as particularidades de sua atividade.'
  },
  {
    icon: 'shield',
    title: 'Certificado Digital',
    text: 'Emissão de certificado digital para pessoas físicas e empresas, facilitando assinaturas e acessos eletrônicos com segurança.'
  }
];

function Icon({ name }: { name: Service['icon'] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  const icons = {
    building: (
      <>
        <path d="M4 21V5l8-2v18" />
        <path d="M12 8h8v13" />
        <path d="M8 7h.01M8 11h.01M8 15h.01M16 11h.01M16 15h.01" />
        <path d="M3 21h18" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </>
    ),
    calculator: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M8 6h8v4H8zM8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
        <path d="M2 21h22" />
      </>
    ),
    store: (
      <>
        <path d="M3 9l2-5h14l2 5" />
        <path d="M5 13v8h14v-8" />
        <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  };

  return <svg {...common}>{icons[name]}</svg>;
}

export default function Servicos() {
  return (
    <main className="svc-page">
      <style>{`
        .svc-page {
          background: #fff;
          color: #161616;
        }

        .svc-wrap {
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .svc-hero {
          padding: 86px 0 66px;
          background: linear-gradient(180deg, #fff 0%, #fbfbf8 100%);
          border-bottom: 1px solid #efefec;
        }

        .svc-eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          color: ${YELLOW_DARK};
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .svc-hero h1 {
          max-width: 930px;
          margin: 0 0 24px;
          font-size: clamp(42px, 4.7vw, 60px);
          line-height: 1.02;
          letter-spacing: -3px;
        }

        .svc-hero p {
          max-width: 820px;
          margin: 0;
          color: #606060;
          font-size: 18px;
          line-height: 1.7;
        }

        .svc-section {
          padding: 72px 0 96px;
        }

        .svc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .svc-card {
          position: relative;
          min-height: 285px;
          padding: 28px 30px 26px;
          display: flex;
          flex-direction: column;
          border: 1px solid #e5e5e1;
          border-radius: 22px;
          background: linear-gradient(180deg, #fff 0%, #fdfdfb 100%);
          overflow: hidden;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }

        .svc-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: ${YELLOW};
          opacity: 0;
          transition: opacity .2s ease;
        }

        .svc-card:hover {
          transform: translateY(-6px);
          border-color: #dcdcd6;
          box-shadow: 0 20px 48px rgba(0,0,0,.08);
        }

        .svc-card:hover::before {
          opacity: 1;
        }

        .svc-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        .svc-number {
          color: #aaa89f;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .svc-icon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          background: #fff3bd;
          color: ${YELLOW_DARK};
        }

        .svc-card h2 {
          margin: 0 0 12px;
          font-size: 24px;
          line-height: 1.2;
          letter-spacing: -.5px;
        }

        .svc-card p {
          margin: 0 0 24px;
          color: #646464;
          font-size: 15px;
          line-height: 1.7;
        }

        .svc-link {
          width: max-content;
          margin-top: auto;
          color: ${YELLOW_DARK};
          font-size: 14px;
          font-weight: 900;
          text-decoration: none;
        }

        .svc-link:hover {
          color: ${YELLOW};
        }

        .svc-cta {
          margin-top: 58px;
          padding: 38px 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 36px;
          border-radius: 26px;
          background: #181818;
          color: #fff;
        }

        .svc-cta h2 {
          margin: 4px 0 10px;
          font-size: 34px;
          line-height: 1.1;
          letter-spacing: -1.2px;
        }

        .svc-cta p {
          max-width: 690px;
          margin: 0;
          color: #cfcfcf;
          line-height: 1.65;
        }

        .svc-btn {
          flex: none;
          padding: 17px 24px;
          border-radius: 12px;
          background: ${YELLOW};
          color: #111;
          font-weight: 900;
          text-decoration: none;
          transition: transform .2s ease;
        }

        .svc-btn:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .svc-grid {
            grid-template-columns: 1fr;
          }

          .svc-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 620px) {
          .svc-wrap {
            width: min(100% - 28px, 1120px);
          }

          .svc-hero {
            padding: 58px 0 44px;
          }

          .svc-hero h1 {
            font-size: 38px;
            letter-spacing: -2px;
          }

          .svc-section {
            padding: 50px 0 68px;
          }

          .svc-card {
            min-height: auto;
            padding: 24px;
          }

          .svc-cta {
            padding: 28px;
          }

          .svc-cta h2 {
            font-size: 30px;
          }
        }
      `}</style>

      <section className="svc-hero">
        <div className="svc-wrap">
          <span className="svc-eyebrow">SERVIÇOS</span>
          <h1>Soluções contábeis para diferentes momentos da sua empresa.</h1>
          <p>
            Conheça algumas das soluções da MDCon e converse com nossa equipe
            para entender quais serviços fazem sentido para a realidade do seu negócio.
          </p>
        </div>
      </section>

      <section className="svc-section">
        <div className="svc-wrap">
          <div className="svc-grid">
            {services.map((service, index) => (
              <article className="svc-card" key={service.title}>
                <div className="svc-top">
                  <span className="svc-number">0{index + 1}</span>
                  <span className="svc-icon">
                    <Icon name={service.icon} />
                  </span>
                </div>

                <h2>{service.title}</h2>
                <p>{service.text}</p>

                <a
                  className="svc-link"
                  href={`https://wa.me/5555984522204?text=${encodeURIComponent(
                    'Olá MDCon, gostaria de informações sobre ' + service.title + '.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Quero saber mais →
                </a>
              </article>
            ))}
          </div>

          <div className="svc-cta">
            <div>
              <span className="svc-eyebrow">ATENDIMENTO PERSONALIZADO</span>
              <h2>Não encontrou exatamente o que precisa?</h2>
              <p>
                Converse com a equipe da MDCon. Podemos entender sua necessidade
                e orientar o melhor caminho para sua empresa.
              </p>
            </div>

            <a
              className="svc-btn"
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
