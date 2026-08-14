import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato | MDCon Assessoria Contábil',
  description:
    'Fale com a MDCon Assessoria Contábil em Palmeira das Missões. Consulte endereço, telefone, WhatsApp e horários de atendimento.',
};

const YELLOW = '#FFC400';
const YELLOW_DARK = '#FFC400';

export default function Contato() {
  return (
    <main className="contact-page">
      <style>{`
        .contact-page{
          background:#fff;
          color:#161616;
        }

        .contact-wrap{
          width:min(1120px,calc(100% - 40px));
          margin:0 auto;
        }

        .contact-hero{
          padding:86px 0 66px;
          background:linear-gradient(180deg,#fff 0%,#fbfbf8 100%);
          border-bottom:1px solid #efefec;
        }

        .contact-eyebrow{
          display:inline-block;
          margin-bottom:16px;
          color:${YELLOW_DARK};
          font-size:12px;
          font-weight:900;
          letter-spacing:1.5px;
        }

        .contact-hero h1{
          margin:0 0 22px;
          max-width:850px;
          font-size:clamp(42px,4.7vw,60px);
          line-height:1.02;
          letter-spacing:-3px;
        }

        .contact-hero p{
          margin:0;
          max-width:760px;
          color:#606060;
          font-size:18px;
          line-height:1.7;
        }

        .contact-section{
          padding:74px 0 94px;
        }

        .contact-grid{
          display:grid;
          grid-template-columns:.9fr 1.1fr;
          gap:34px;
          align-items:stretch;
        }

        .contact-info{
          display:grid;
          gap:18px;
        }

        .contact-card{
          padding:26px 28px;
          border:1px solid #e5e5e1;
          border-radius:20px;
          background:#fff;
        }

        .contact-card h2{
          margin:0 0 12px;
          font-size:22px;
          letter-spacing:-.4px;
        }

        .contact-card p,
        .contact-card a,
        .contact-card span{
          color:#5f5f5f;
          font-size:15px;
          line-height:1.7;
        }

        .contact-card a{
          color:${YELLOW_DARK};
          font-weight:900;
          text-decoration:none;
        }

        .contact-card a:hover{
          color:${YELLOW};
        }

        .contact-label{
          display:inline-block;
          margin-bottom:10px;
          color:${YELLOW_DARK};
          font-size:11px;
          font-weight:900;
          letter-spacing:1.2px;
        }

        .contact-actions{
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          margin-top:18px;
        }

        .contact-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:15px 20px;
          border-radius:11px;
          background:${YELLOW};
          color:#111 !important;
          font-weight:900 !important;
          text-decoration:none;
          transition:.2s ease;
        }

        .contact-btn:hover{
          transform:translateY(-2px);
        }

        .contact-btn.secondary{
          background:#fff;
          border:1px solid #d6d6d2;
        }

        .hours{
          display:grid;
          gap:8px;
          margin-top:12px;
        }

        .hours-row{
          display:flex;
          justify-content:space-between;
          gap:18px;
          padding:8px 0;
          border-bottom:1px solid #efefec;
        }

        .hours-row:last-child{
          border-bottom:0;
        }

        .hours-row strong{
          font-size:14px;
        }

        .hours-row span{
          text-align:right;
          font-size:14px;
        }

        .map-card{
          overflow:hidden;
          border-radius:22px;
          border:1px solid #e5e5e1;
          background:#f7f7f4;
          min-height:100%;
        }

        .map-card iframe{
          display:block;
          width:100%;
          min-height:620px;
          border:0;
        }

        .contact-cta{
          padding:0 0 86px;
        }

        .contact-cta-box{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:34px;
          padding:40px 44px;
          border-radius:26px;
          background:#181818;
          color:#fff;
        }

        .contact-cta-box h2{
          margin:0 0 10px;
          max-width:680px;
          font-size:34px;
          line-height:1.1;
          letter-spacing:-1.2px;
        }

        .contact-cta-box p{
          margin:0;
          max-width:700px;
          color:#cfcfcf;
          line-height:1.65;
        }

        .contact-cta-box .contact-btn{
          flex:none;
        }

        @media(max-width:900px){
          .contact-grid{
            grid-template-columns:1fr;
          }

          .map-card iframe{
            min-height:430px;
          }

          .contact-cta-box{
            flex-direction:column;
            align-items:flex-start;
          }
        }

        @media(max-width:620px){
          .contact-wrap{
            width:min(100% - 28px,1120px);
          }

          .contact-hero{
            padding:58px 0 46px;
          }

          .contact-hero h1{
            font-size:38px;
            letter-spacing:-2px;
          }

          .contact-section{
            padding:52px 0 68px;
          }

          .contact-card{
            padding:22px;
          }

          .hours-row{
            flex-direction:column;
            gap:2px;
          }

          .hours-row span{
            text-align:left;
          }

          .map-card iframe{
            min-height:320px;
          }

          .contact-cta-box{
            padding:28px;
          }

          .contact-cta-box h2{
            font-size:30px;
          }
        }
      `}</style>

      <section className="contact-hero">
        <div className="contact-wrap">
          <span className="contact-eyebrow">CONTATO</span>
          <h1>Fale com a MDCon.</h1>
          <p>
            Estamos em Palmeira das Missões e prontos para entender sua necessidade.
            Escolha o melhor canal para falar com nossa equipe.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-wrap contact-grid">
          <div className="contact-info">
            <article className="contact-card">
              <span className="contact-label">ENDEREÇO</span>
              <h2>MDCon Assessoria Contábil</h2>
              <p>
                Rua 7 de Setembro, 441<br />
                Palmeira das Missões – RS<br />
                CEP 98300-000
              </p>

              <div className="contact-actions">
                <a
                  className="contact-btn secondary"
                  href="https://www.google.com/maps/search/?api=1&query=Rua+7+de+Setembro+441+Palmeira+das+Miss%C3%B5es+RS"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir no Google Maps
                </a>
              </div>
            </article>

            <article className="contact-card">
              <span className="contact-label">TELEFONES</span>
              <h2>Entre em contato</h2>

              <p>
                Telefone fixo:<br />
                <a href="tel:+555537422778">(55) 3742-2778</a>
              </p>

              <p>
                WhatsApp:<br />
                <a
                  href="https://wa.me/5555984522204"
                  target="_blank"
                  rel="noreferrer"
                >
                  (55) 98452-2204
                </a>
              </p>

              <div className="contact-actions">
                <a
                  className="contact-btn"
                  href="https://wa.me/5555984522204?text=Ol%C3%A1%20MDCon,%20gostaria%20de%20falar%20com%20a%20equipe."
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar pelo WhatsApp
                </a>
              </div>
            </article>

            <article className="contact-card">
              <span className="contact-label">HORÁRIO DE ATENDIMENTO</span>
              <h2>Quando estamos atendendo</h2>

              <div className="hours">
                <div className="hours-row">
                  <strong>Segunda a sexta-feira</strong>
                  <span>08:00–12:00<br />13:30–18:00</span>
                </div>
                <div className="hours-row">
                  <strong>Sábado</strong>
                  <span>Fechado</span>
                </div>
                <div className="hours-row">
                  <strong>Domingo</strong>
                  <span>Fechado</span>
                </div>
              </div>
            </article>
          </div>

          <div className="map-card">
            <iframe
              title="Localização da MDCon Assessoria Contábil"
              src="https://www.google.com/maps?q=Rua%207%20de%20Setembro%20441%20Palmeira%20das%20Miss%C3%B5es%20RS&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-wrap">
          <div className="contact-cta-box">
            <div>
              <h2>Quer conversar sobre a contabilidade da sua empresa?</h2>
              <p>
                Fale com a MDCon e conte um pouco sobre sua necessidade.
              </p>
            </div>

            <a
              className="contact-btn"
              href="https://wa.me/5555984522204?text=Ol%C3%A1%20MDCon,%20gostaria%20de%20conversar%20sobre%20a%20contabilidade%20da%20minha%20empresa."
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
