import type { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';
export const metadata: Metadata={title:'Contato',description:'Fale com a MDCon Assessoria Contábil em Palmeira das Missões.'};
export default function Contato(){return <section className="inner-hero"><div className="container contact-grid"><div><span className="eyebrow">CONTATO</span><h1>Fale com a MDCon</h1><p>Conte um pouco sobre o que sua empresa precisa. O formulário prepara sua mensagem e abre a conversa diretamente no WhatsApp.</p><div className="contact-box"><strong>WhatsApp</strong><a href="tel:+5555984522204">(55) 98452-2204</a><strong>Cidade</strong><span>Palmeira das Missões — RS</span></div></div><ContactForm/></div></section>}
