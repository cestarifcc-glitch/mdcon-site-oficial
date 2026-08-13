import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-logo" aria-label="MDCon - início">
            <Image src="/logo-mdcon-aprovada.png" alt="MDCon Assessoria Contábil" width={190} height={105} className="footer-logo-img" />
          </Link>
          <p>Assessoria contábil com organização, proximidade e orientação para empresas e empreendedores.</p>
        </div>
        <div><h4>Navegação</h4><Link href="/">Início</Link><Link href="/sobre">Sobre</Link><Link href="/servicos">Serviços</Link><Link href="/conteudos">Conteúdos</Link><Link href="/contato">Contato</Link></div>
        <div><h4>Serviços</h4><span>Contabilidade empresarial</span><span>Abertura de empresas</span><span>Assessoria fiscal</span><span>Departamento pessoal</span><span>Planejamento tributário</span></div>
        <div><h4>Contato</h4><a href="tel:+5555984522204">(55) 98452-2204</a><span>Palmeira das Missões — RS</span><a href="https://wa.me/5555984522204" target="_blank" rel="noreferrer">Atendimento via WhatsApp</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 MDCon Assessoria Contábil.</span><span>Privacidade · LGPD</span></div>
    </footer>
  );
}
