import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid footer-grid-v2">
        <div className="footer-about">
          <Link href="/" className="footer-logo" aria-label="MDCon - início">
            <Image
              src="/logo-mdcon-aprovada.png"
              alt="MDCon Assessoria Contábil"
              width={190}
              height={105}
              className="footer-logo-img"
            />
          </Link>
          <p>
            Assessoria contábil com organização, proximidade e orientação
            para empresas, empreendedores, produtores rurais e pessoas físicas.
          </p>
          <span className="footer-address">
            Rua 7 de Setembro, 441<br />
            Palmeira das Missões – RS<br />
            CEP 98300-000
          </span>
        </div>

        <div>
          <h4>Navegação</h4>
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/conteudos">Conteúdos</Link>
          <Link href="/contato">Contato</Link>
        </div>

        <div>
          <h4>Serviços</h4>
          <Link href="/servicos">Contabilidade empresarial</Link>
          <Link href="/servicos">Abertura de empresas</Link>
          <Link href="/servicos">Escrituração fiscal</Link>
          <Link href="/servicos">Departamento pessoal</Link>
          <Link href="/servicos">Imposto de Renda Pessoa Física</Link>
          <Link href="/servicos">Planejamento tributário</Link>
          <Link href="/servicos">Assessoria ao produtor rural</Link>
          <Link href="/servicos">Certificado digital</Link>
        </div>

        <div>
          <h4>Contato</h4>
          <span>Telefone fixo</span>
          <a href="tel:+555537422778">(55) 3742-2778</a>

          <span className="footer-contact-label">WhatsApp</span>
          <a
            href="https://wa.me/5555984522204"
            target="_blank"
            rel="noreferrer"
          >
            (55) 98452-2204
          </a>

          <span className="footer-contact-label">Horário</span>
          <span>Seg. a sex. · 08h–12h</span>
          <span>13h30–18h</span>

          <a
            className="footer-map-link"
            href="https://www.google.com/maps/search/?api=1&query=Rua+7+de+Setembro+441+Palmeira+das+Miss%C3%B5es+RS"
            target="_blank"
            rel="noreferrer"
          >
            Ver localização →
          </a>
        </div>
      </div>

      <div className="container footer-bottom footer-bottom-v2">
        <span>© 2026 MDCon Assessoria Contábil.</span>
        <span>Privacidade · LGPD</span>
      </div>
    </footer>
  );
}
