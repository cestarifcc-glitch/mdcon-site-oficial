import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conteúdos | MDCon Assessoria Contábil',
  description:
    'Conteúdos da MDCon sobre contabilidade, empresas, impostos, gestão e empreendedorismo.',
};

const YELLOW = '#FFC400';
const YELLOW_DARK = '#B78A00';

const topics = [
  {
    title: 'Abertura e organização de empresas',
    text: 'Conteúdos para quem está começando um negócio ou quer organizar melhor a estrutura da empresa.',
  },
  {
    title: 'Impostos e planejamento tributário',
    text: 'Informações para compreender melhor obrigações tributárias, regimes e decisões fiscais.',
  },
  {
    title: 'Departamento pessoal',
    text: 'Orientações sobre rotinas trabalhistas, folha, admissões e obrigações relacionadas à equipe.',
  },
  {
    title: 'Imposto de Renda',
    text: 'Conteúdos voltados a dúvidas frequentes sobre declaração, organização de informações e prazos.',
  },
  {
    title: 'Produtor rural',
    text: 'Informações contábeis e fiscais voltadas às particularidades da atividade rural.',
  },
  {
    title: 'Gestão e decisões empresariais',
    text: 'Conteúdos para ajudar empresários e empreendedores a compreender melhor seus números e sua rotina contábil.',
  },
];

const upcoming = [
  'Como escolher uma contabilidade para sua empresa?',
  'O que avaliar antes de abrir uma empresa?',
  'Quando vale a pena revisar o enquadramento tributário?',
  'Quais informações organizar para o Imposto de Renda?',
  'Quais rotinas do departamento pessoal merecem atenção?',
  'Como a contabilidade pode apoiar o produtor rural?',
];

export default function Conteudos() {
  return (
    <main className="content-page">
      <style>{`
        .content-page{
          background:#fff;
          color:#161616;
        }

        .content-wrap{
          width:min(1120px,calc(100% - 40px));
          margin:0 auto;
        }

        .content-hero{
          padding:86px 0 68px;
          background:linear-gradient(180deg,#fff 0%,#fbfbf8 100%);
          border-bottom:1px solid #efefec;
        }

        .content-eyebrow{
          display:inline-block;
          margin-bottom:16px;
          color:${YELLOW_DARK};
          font-size:12px;
          font-weight:900;
          letter-spacing:1.5px;
        }

        .content-hero h1{
          max-width:860px;
          margin:0 0 22px;
          font-size:clamp(48px,6vw,76px);
          line-height:1.02;
          letter-spacing:-3px;
        }

        .content-hero p{
          max-width:770px;
          margin:0;
          color:#606060;
          font-size:18px;
          line-height:1.7;
        }

        .content-section{
          padding:78px 0 88px;
        }

        .content-head{
          max-width:720px;
          margin-bottom:40px;
        }

        .content-head h2{
          margin:0 0 12px;
          font-size:clamp(34px,4vw,48px);
          line-height:1.08;
          letter-spacing:-1.7px;
        }

        .content-head p{
          margin:0;
          color:#666;
          line-height:1.7;
        }

        .topic-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:20px;
        }

        .topic-card{
          min-height:220px;
          padding:26px 24px;
          border:1px solid #e5e5e1;
          border-radius:20px;
          background:#fff;
          transition:.2s ease;
        }

        .topic-card:hover{
          transform:translateY(-5px);
          box-shadow:0 18px 42px rgba(0,0,0,.07);
        }

        .topic-number{
          width:46px;
          height:46px;
          display:grid;
          place-items:center;
          margin-bottom:22px;
          border-radius:14px;
          background:#fff3bd;
          color:${YELLOW_DARK};
          font-size:13px;
          font-weight:900;
        }

        .topic-card h3{
          margin:0 0 10px;
          font-size:21px;
          line-height:1.25;
          letter-spacing:-.4px;
        }

        .topic-card p{
          margin:0;
          color:#666;
          font-size:14px;
          line-height:1.65;
        }

        .content-upcoming{
          padding:78px 0;
          background:#fafaf8;
          border-top:1px solid #efefec;
          border-bottom:1px solid #efefec;
        }

        .upcoming-grid{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:14px;
        }

        .upcoming-item{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          padding:20px 22px;
          border:1px solid #e5e5e1;
          border-radius:16px;
          background:#fff;
        }

        .upcoming-item strong{
          font-size:16px;
          line-height:1.35;
        }

        .upcoming-item span{
          flex:none;
          color:${YELLOW_DARK};
          font-size:12px;
          font-weight:900;
          letter-spacing:.6px;
        }

        .content-note{
          margin-top:30px;
          padding:18px 20px;
          border-left:4px solid ${YELLOW};
          background:#fffbea;
          color:#5f5a42;
          line-height:1.65;
          font-size:14px;
        }

        .content-cta{
          padding:82px 0;
        }

        .content-cta-box{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:34px;
          padding:40px 44px;
          border-radius:26px;
          background:#181818;
          color:#fff;
        }

        .content-cta-box h2{
          margin:0 0 10px;
          font-size:34px;
          line-height:1.1;
          letter-spacing:-1.2px;
        }

        .content-cta-box p{
          margin:0;
          max-width:680px;
          color:#cfcfcf;
          line-height:1.65;
        }

        .content-btn{
          flex:none;
          padding:17px 24px;
          border-radius:12px;
          background:${YELLOW};
          color:#111;
          font-weight:900;
          text-decoration:none;
          transition:.2s ease;
        }

        .content-btn:hover{
          transform:translateY(-2px);
        }

        @media(max-width:900px){
          .topic-grid{
            grid-template-columns:1fr 1fr;
          }

          .upcoming-grid{
            grid-template-columns:1fr;
          }

          .content-cta-box{
            flex-direction:column;
            align-items:flex-start;
          }
        }

        @media(max-width:620px){
          .content-wrap{
            width:min(100% - 28px,1120px);
          }

          .content-hero{
            padding:58px 0 46px;
          }

          .content-hero h1{
            font-size:44px;
            letter-spacing:-2px;
          }

          .content-section,
          .content-upcoming,
          .content-cta{
            padding:60px 0;
          }

          .topic-grid{
            grid-template-columns:1fr;
          }

          .content-cta-box{
            padding:28px;
          }

          .content-cta-box h2{
            font-size:30px;
          }
        }
      `}</style>

      <section className="content-hero">
        <div className="content-wrap">
          <span className="content-eyebrow">CONTEÚDOS</span>
          <h1>Informação para quem cuida de um negócio.</h1>
          <p>
            Uma área preparada para compartilhar orientações sobre contabilidade,
            impostos, empresas e gestão de forma clara e útil.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-wrap">
          <div className="content-head">
            <span className="content-eyebrow">TEMAS</span>
            <h2>Assuntos que fazem parte da rotina de empresas e empreendedores.</h2>
            <p>
              A MDCon poderá usar este espaço para publicar conteúdos educativos
              e responder dúvidas frequentes dos clientes.
            </p>
          </div>

          <div className="topic-grid">
            {topics.map((topic, index) => (
              <article className="topic-card" key={topic.title}>
                <span className="topic-number">0{index + 1}</span>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-upcoming">
        <div className="content-wrap">
          <div className="content-head">
            <span className="content-eyebrow">PRÓXIMOS CONTEÚDOS</span>
            <h2>Ideias para começar a construir essa biblioteca.</h2>
            <p>
              Estes títulos são sugestões editoriais. Nenhum deles está apresentado
              como artigo já publicado.
            </p>
          </div>

          <div className="upcoming-grid">
            {upcoming.map((item, index) => (
              <div className="upcoming-item" key={item}>
                <strong>{item}</strong>
                <span>IDEIA {String(index + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>

          <div className="content-note">
            Os conteúdos devem ser revisados antes da publicação para garantir
            que as informações estejam atualizadas e adequadas ao tema abordado.
          </div>
        </div>
      </section>

      <section className="content-cta">
        <div className="content-wrap">
          <div className="content-cta-box">
            <div>
              <h2>Tem uma dúvida contábil e quer falar diretamente com a equipe?</h2>
              <p>
                Entre em contato com a MDCon. Podemos entender sua necessidade
                e orientar o próximo passo.
              </p>
            </div>

            <a
              className="content-btn"
              href="https://wa.me/5555984522204?text=Ol%C3%A1%20MDCon,%20tenho%20uma%20d%C3%BAvida%20e%20gostaria%20de%20falar%20com%20a%20equipe."
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
