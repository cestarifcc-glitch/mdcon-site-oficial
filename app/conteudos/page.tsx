import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conteúdos | MDCon Assessoria Contábil',
  description:
    'Conteúdos da MDCon sobre contabilidade, empresas, impostos, gestão e empreendedorismo.',
};

const YELLOW = '#FFC400';
const YELLOW_DARK = '#FFC400';

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
          padding:68px 0 58px;
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
          max-width:780px;
          margin:0 0 20px;
          font-size:clamp(40px,4.2vw,54px);
          line-height:1.04;
          letter-spacing:-2.4px;
        }

        .content-hero p{
          max-width:740px;
          margin:0;
          color:#606060;
          font-size:17px;
          line-height:1.68;
        }

        .content-section{
          padding:64px 0 36px;
        }

        .content-head{
          max-width:700px;
          margin-bottom:34px;
        }

        .content-head h2{
          margin:0 0 12px;
          font-size:clamp(30px,3.1vw,40px);
          line-height:1.08;
          letter-spacing:-1.6px;
        }

        .content-head p{
          margin:0;
          color:#666;
          line-height:1.68;
        }

        .topic-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:18px;
        }

        .topic-card{
          min-height:205px;
          padding:24px 22px;
          border:1px solid #e5e5e1;
          border-radius:18px;
          background:#fff;
          transition:transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }

        .topic-card:hover{
          transform:translateY(-4px);
          border-color:#dcdcd6;
          box-shadow:0 16px 36px rgba(0,0,0,.06);
        }

        .topic-number{
          width:44px;
          height:44px;
          display:grid;
          place-items:center;
          margin-bottom:18px;
          border-radius:13px;
          background:#fff3bd;
          color:${YELLOW_DARK};
          font-size:13px;
          font-weight:900;
        }

        .topic-card h3{
          margin:0 0 9px;
          font-size:20px;
          line-height:1.25;
          letter-spacing:-.35px;
        }

        .topic-card p{
          margin:0;
          color:#666;
          font-size:14px;
          line-height:1.62;
        }

        .content-cta{
          padding:24px 0 72px;
        }

        .content-cta-box{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:32px;
          padding:34px 38px;
          border-radius:24px;
          background:#181818;
          color:#fff;
        }

        .content-cta-box h2{
          margin:0 0 10px;
          font-size:32px;
          line-height:1.1;
          letter-spacing:-1.1px;
        }

        .content-cta-box p{
          margin:0;
          max-width:660px;
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

          .content-cta-box{
            flex-direction:column;
            align-items:flex-start;
            gap:24px;
          }
        }

        @media(max-width:620px){
          .content-wrap{
            width:min(100% - 24px,1120px);
          }

          .content-hero{
            padding:44px 0 40px;
          }

          .content-hero h1{
            font-size:36px;
            line-height:1.05;
            letter-spacing:-1.5px;
          }

          .content-hero p{
            font-size:16px;
            line-height:1.65;
          }

          .content-section{
            padding:46px 0 28px;
          }

          .content-head{
            margin-bottom:28px;
          }

          .topic-grid{
            grid-template-columns:1fr;
            gap:14px;
          }

          .topic-card{
            min-height:auto;
            padding:22px 20px;
          }

          .content-cta{
            padding:18px 0 56px;
          }

          .content-cta-box{
            padding:26px 22px;
          }

          .content-cta-box h2{
            font-size:28px;
          }

          .content-btn{
            width:100%;
            box-sizing:border-box;
            text-align:center;
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

      <section className="content-cta">
        <div className="content-wrap">
          <div className="content-cta-box">
            <div>
              <h2>Precisa de orientação para o seu negócio?</h2>
              <p>
                Converse com a equipe da MDCon, explique sua necessidade e veja como podemos orientar o próximo passo.
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
