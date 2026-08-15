import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre a MDCon | Assessoria Contábil',
  description:
    'Conheça a MDCon Assessoria Contábil, sua equipe e a forma de atendimento em Palmeira das Missões.',
};

const YELLOW = '#FFC400';
const YELLOW_DARK = '#FFC400';

export default function Sobre() {
  return (
    <main className="about-page">
      <style>{`
        .about-page{
          background:#fff;
          color:#161616;
        }

        .about-wrap{
          width:min(1120px,calc(100% - 40px));
          margin:0 auto;
        }

        .about-hero{
          padding:72px 0 62px;
          background:linear-gradient(180deg,#fff 0%,#fbfbf8 100%);
          border-bottom:1px solid #efefec;
        }

        .about-eyebrow{
          display:inline-block;
          margin-bottom:16px;
          color:${YELLOW_DARK};
          font-size:12px;
          font-weight:900;
          letter-spacing:1.5px;
        }

        .about-hero-grid{
          display:grid;
          grid-template-columns:.95fr 1.05fr;
          gap:48px;
          align-items:center;
        }

        .about-hero h1{
          margin:0 0 22px;
          max-width:560px;
          font-size:clamp(40px,4.1vw,54px);
          line-height:1.03;
          letter-spacing:-2.4px;
        }

        .about-hero p{
          margin:0;
          max-width:610px;
          color:#5f5f5f;
          font-size:17px;
          line-height:1.75;
        }

        .about-photo{
          position:relative;
          min-height:430px;
          overflow:hidden;
          border-radius:22px;
          background:#f4f4f1;
          box-shadow:0 20px 50px rgba(0,0,0,.08);
        }

        .about-photo img{
          object-fit:contain;
        }

        .about-section{
          padding:72px 0;
        }

        .about-intro{
          display:grid;
          grid-template-columns:.95fr 1.05fr;
          gap:60px;
          align-items:start;
        }

        .about-intro h2{
          margin:0;
          max-width:460px;
          font-size:clamp(30px,3.2vw,42px);
          line-height:1.08;
          letter-spacing:-1.8px;
        }

        .about-intro-copy p{
          margin:0 0 18px;
          color:#585858;
          font-size:17px;
          line-height:1.75;
        }

        .about-values{
          padding:72px 0;
          background:#fafaf8;
          border-top:1px solid #efefec;
          border-bottom:1px solid #efefec;
        }

        .about-values-head{
          max-width:720px;
          margin:0 auto 36px;
          text-align:center;
        }

        .about-values-head h2{
          margin:0 0 14px;
          font-size:clamp(30px,3.2vw,42px);
          line-height:1.08;
          letter-spacing:-1.8px;
        }

        .about-values-head p{
          margin:0;
          color:#636363;
          line-height:1.7;
          font-size:16px;
        }

        .about-grid{
          display:grid;
          grid-template-columns:repeat(4,minmax(0,1fr));
          gap:18px;
        }

        .about-card{
          min-height:220px;
          padding:26px 24px;
          border:1px solid #e5e5e1;
          border-radius:20px;
          background:#fff;
          transition:.2s ease;
        }

        .about-card:hover{
          transform:translateY(-5px);
          box-shadow:0 18px 42px rgba(0,0,0,.07);
        }

        .about-icon{
          width:48px;
          height:48px;
          display:grid;
          place-items:center;
          margin-bottom:22px;
          border-radius:15px;
          background:#fff3bd;
          color:${YELLOW_DARK};
          font-size:22px;
          font-weight:900;
        }

        .about-card h3{
          margin:0 0 10px;
          font-size:20px;
          letter-spacing:-.3px;
        }

        .about-card p{
          margin:0;
          color:#666;
          font-size:14px;
          line-height:1.65;
        }

        .about-process{
          padding:72px 0;
        }

        .about-process-grid{
          display:grid;
          grid-template-columns:.85fr 1.15fr;
          gap:60px;
          align-items:start;
        }

        .about-process h2{
          margin:0;
          font-size:clamp(30px,3.2vw,42px);
          line-height:1.08;
          letter-spacing:-1.8px;
        }

        .about-steps{
          display:grid;
          gap:14px;
        }

        .about-step{
          display:grid;
          grid-template-columns:54px 1fr;
          gap:16px;
          align-items:start;
          padding:20px 0;
          border-bottom:1px solid #ecece8;
        }

        .about-step b{
          width:48px;
          height:48px;
          display:grid;
          place-items:center;
          border-radius:50%;
          background:${YELLOW};
          font-size:13px;
        }

        .about-step h3{
          margin:3px 0 7px;
          font-size:19px;
        }

        .about-step p{
          margin:0;
          color:#666;
          line-height:1.65;
          font-size:15px;
        }

        .about-cta{
          padding:20px 0 72px;
        }

        .about-cta-box{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:34px;
          padding:36px 40px;
          border-radius:26px;
          background:#181818;
          color:#fff;
        }

        .about-cta-box h2{
          margin:0 0 10px;
          max-width:690px;
          font-size:32px;
          line-height:1.1;
          letter-spacing:-1.2px;
        }

        .about-cta-box p{
          margin:0;
          max-width:700px;
          color:#cfcfcf;
          line-height:1.65;
        }

        .about-btn{
          flex:none;
          padding:17px 24px;
          border-radius:12px;
          background:${YELLOW};
          color:#111;
          font-weight:900;
          text-decoration:none;
          transition:.2s ease;
        }

        .about-btn:hover{
          transform:translateY(-2px);
        }

        @media(max-width:900px){
          .about-hero-grid,
          .about-intro,
          .about-process-grid{
            grid-template-columns:1fr;
          }

          .about-hero-grid{
            gap:36px;
          }

          .about-intro,
          .about-process-grid{
            gap:38px;
          }

          .about-grid{
            grid-template-columns:1fr 1fr;
          }

          .about-photo{
            min-height:380px;
          }

          .about-cta-box{
            flex-direction:column;
            align-items:flex-start;
          }
        }

        @media(max-width:620px){
          .about-wrap{
            width:min(100% - 24px,1120px);
          }

          .about-hero{
            padding:44px 0 46px;
          }

          .about-hero h1{
            font-size:36px;
            line-height:1.05;
            letter-spacing:-1.5px;
          }

          .about-hero p{
            font-size:16px;
            line-height:1.65;
          }

          .about-photo{
            min-height:280px;
            border-radius:18px;
          }

          .about-section,
          .about-values,
          .about-process{
            padding:52px 0;
          }

          .about-grid{
            grid-template-columns:1fr;
            gap:14px;
          }

          .about-values-head{
            margin-bottom:30px;
          }

          .about-card{
            min-height:auto;
            padding:22px 20px;
          }

          .about-cta-box{
            padding:26px 22px;
            gap:24px;
          }

          .about-cta-box h2{
            font-size:28px;
          }

          .about-btn{
            width:100%;
            text-align:center;
            box-sizing:border-box;
          }
        }
      `}</style>

      <section className="about-hero">
        <div className="about-wrap about-hero-grid">
          <div>
            <span className="about-eyebrow">SOBRE A MDCON</span>
            <h1>Contabilidade próxima para acompanhar a realidade da sua empresa.</h1>
            <p>
              A MDCon Assessoria Contábil, liderada pelo contador Diego Mafalda,
              atua em Palmeira das Missões oferecendo soluções contábeis para empresas,
              empreendedores, produtores rurais e pessoas físicas.
            </p>
          </div>

          <div className="about-photo">
            <Image
              src="/equipe-mdcon.png"
              alt="Equipe da MDCon Assessoria Contábil"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-wrap about-intro">
          <div>
            <span className="about-eyebrow">NOSSA FORMA DE TRABALHAR</span>
            <h2>Mais do que cumprir obrigações, estar ao lado do cliente.</h2>
          </div>

          <div className="about-intro-copy">
            <p>
              A contabilidade faz parte da rotina e das decisões de uma empresa.
              Por isso, a MDCon busca manter uma relação profissional baseada em
              comunicação, acompanhamento e responsabilidade.
            </p>
            <p>
              Cada empresa possui uma realidade diferente. O atendimento parte
              dessa compreensão para orientar os serviços e as soluções de forma
              adequada ao perfil e às necessidades do cliente.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-wrap">
          <div className="about-values-head">
            <span className="about-eyebrow">O QUE VALORIZAMOS</span>
            <h2>Uma relação contábil baseada em confiança e proximidade.</h2>
            <p>
              Princípios que orientam a forma como a MDCon se relaciona com empresas
              e empreendedores.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-card">
              <span className="about-icon">01</span>
              <h3>Atendimento próximo</h3>
              <p>Comunicação clara e acompanhamento das necessidades do cliente.</p>
            </article>

            <article className="about-card">
              <span className="about-icon">02</span>
              <h3>Organização</h3>
              <p>Rotinas conduzidas com atenção às informações e obrigações da empresa.</p>
            </article>

            <article className="about-card">
              <span className="about-icon">03</span>
              <h3>Responsabilidade</h3>
              <p>Seriedade no tratamento das informações e nas orientações contábeis.</p>
            </article>

            <article className="about-card">
              <span className="about-icon">04</span>
              <h3>Soluções adequadas</h3>
              <p>Cada negócio é analisado conforme sua realidade e suas necessidades.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-process">
        <div className="about-wrap about-process-grid">
          <div>
            <span className="about-eyebrow">COMO ATENDEMOS</span>
            <h2>Um processo simples, próximo e organizado.</h2>
          </div>

          <div className="about-steps">
            <div className="about-step">
              <b>01</b>
              <div>
                <h3>Entendemos sua necessidade</h3>
                <p>O primeiro passo é conhecer a realidade da empresa e o que você precisa.</p>
              </div>
            </div>

            <div className="about-step">
              <b>02</b>
              <div>
                <h3>Orientamos a melhor solução</h3>
                <p>Apresentamos os serviços adequados ao perfil e às necessidades do negócio.</p>
              </div>
            </div>

            <div className="about-step">
              <b>03</b>
              <div>
                <h3>Acompanhamos sua empresa</h3>
                <p>Mantemos uma relação de atendimento, comunicação e acompanhamento das rotinas contratadas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-wrap">
          <div className="about-cta-box">
            <div>
              <h2>Quer conhecer melhor a forma de atendimento da MDCon?</h2>
              <p>Converse com nossa equipe e conte um pouco sobre sua empresa.</p>
            </div>

            <a
              className="about-btn"
              href="https://wa.me/5555984522204?text=Olá%20MDCon,%20gostaria%20de%20conhecer%20melhor%20a%20forma%20de%20atendimento."
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