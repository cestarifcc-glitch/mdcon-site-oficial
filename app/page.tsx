import Image from 'next/image';
import Link from 'next/link';

type IconName = 'briefcase'|'building'|'calculator'|'users'|'user'|'chart'|'store'|'shield'|'handshake'|'target'|'sliders'|'check';

function Icon({name}:{name:IconName}){
  const common={width:24,height:24,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.9,strokeLinecap:'round' as const,strokeLinejoin:'round' as const,'aria-hidden':true};
  const paths:Record<IconName,React.ReactNode>={
    briefcase:<><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></>,
    building:<><path d="M4 21V5l8-2v18M12 8h8v13M8 7h.01M8 11h.01M8 15h.01M16 11h.01M16 15h.01M3 21h18"/></>,
    calculator:<><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8v4H8zM8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></>,
    users:<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    user:<><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    chart:<><path d="M4 19V9M10 19V5M16 19v-7M22 19V3M2 21h22"/></>,
    store:<><path d="M3 9l2-5h14l2 5M5 13v8h14v-8M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/></>,
    shield:<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></>,
    handshake:<><path d="M8 11l3 3a2 2 0 0 0 3 0l4-4M2 12l4-4 4 4M22 12l-4-4-4 4M6 8l3-3h4l3 3M7 15l2 2M10 17l2 2M13 17l2 2"/></>,
    target:<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
    sliders:<><path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h6M14 18h6"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="12" cy="18" r="2"/></>,
    check:<><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
}

const services:[IconName,string,string][] = [
  ['building','Contabilidade Empresarial','Organização e acompanhamento das informações contábeis da empresa.'],
  ['briefcase','Abertura de Empresas','Orientação para iniciar uma empresa de forma organizada.'],
  ['calculator','Assessoria Fiscal','Acompanhamento das obrigações fiscais e tributárias.'],
  ['users','Departamento Pessoal','Soluções relacionadas à folha e às rotinas trabalhistas.'],
  ['user','Imposto de Renda','Orientação e elaboração de declarações conforme cada perfil.'],
  ['chart','Planejamento Tributário','Análise das possibilidades tributárias aplicáveis à empresa.'],
  ['store','MEI e Pequenas Empresas','Orientação contábil para empreendedores e pequenos negócios.'],
  ['shield','Regularização Empresarial','Auxílio na organização e regularização de situações empresariais.']
];

const featuredServices:[IconName,string,string][] = [
  ['briefcase','Contabilidade Completa','Gestão contábil com organização, acompanhamento e clareza para a empresa.'],
  ['users','Departamento Pessoal','Apoio nas rotinas de folha, encargos e obrigações trabalhistas.'],
  ['calculator','Fiscal e Tributário','Acompanhamento fiscal e análise tributária com foco em organização e segurança.'],
  ['chart','Consultoria Empresarial','Informações e análises contábeis para apoiar decisões do negócio.']
];

const faqs=[
  ['A MDCon atende MEI?','A MDCon pode orientar empreendedores conforme os serviços contratados e a necessidade de cada negócio.'],
  ['Como trocar de contador?','A troca pode ser organizada de forma segura, com levantamento das informações necessárias e transição dos documentos contábeis.'],
  ['Quanto custa contratar uma contabilidade?','O valor depende do perfil da empresa, regime tributário, movimentação e serviços necessários. A MDCon avalia cada caso antes da proposta.'],
  ['A MDCon atende empresas de Palmeira das Missões?','Sim. A MDCon atua em Palmeira das Missões — RS.'],
  ['Posso falar com a MDCon pelo WhatsApp?','Sim. O atendimento pelo WhatsApp está disponível no número (55) 98452-2204.'],
  ['A MDCon pode ajudar na abertura de uma empresa?','Entre em contato para que a equipe entenda o seu caso e confirme a solução adequada.']
];

export default function Home(){return <>
  <section className="hero hero-v2">
    <div className="container hero-grid">
      <div className="hero-copy">
        <span className="eyebrow">ASSESSORIA CONTÁBIL EM PALMEIRA DAS MISSÕES</span>
        <h1>Sua empresa cresce.<br/>A contabilidade <em>acompanha.</em></h1>
        <p>Contabilidade próxima, organizada e preparada para acompanhar as decisões da sua empresa.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="https://wa.me/5555984522204?text=Olá%20MDCon,%20gostaria%20de%20solicitar%20um%20atendimento." target="_blank" rel="noreferrer">Solicitar atendimento</a>
          <a className="btn btn-outline" href="https://wa.me/5555984522204" target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
        </div>
        <div className="hero-proof"><span>Atendimento próximo</span><span>Soluções para empresas</span><span>Palmeira das Missões/RS</span></div>
      </div>
      <div className="hero-photo-wrap">
        <div className="hero-photo-card">
          <Image src="/mdcon-fachada.png" alt="Equipe da MDCon Assessoria Contábil em Palmeira das Missões" fill priority sizes="(max-width: 900px) 100vw, 48vw" className="hero-photo" />
          <div className="photo-badge"><strong>Equipe MDCon</strong><span>Atendimento próximo e profissional</span></div>
        </div>
      </div>
    </div>
  </section>

  <section className="trust"><div className="container"><h2>Contabilidade para quem leva o negócio a sério.</h2><div className="trust-grid">{
    ([['briefcase','Assessoria contábil','Acompanhamento das principais necessidades contábeis da empresa.'],['target','Orientação empresarial','Informações para ajudar o empresário a tomar decisões com mais segurança.'],['handshake','Atendimento próximo','Uma relação profissional baseada em comunicação e acompanhamento.']] as [IconName,string,string][]).map(x=><article className="trust-card" key={x[1]}><i><Icon name={x[0]}/></i><div><h3>{x[1]}</h3><p>{x[2]}</p></div></article>)}
  </div></div></section>

  <section className="section services-premium"><div className="container"><div className="section-head"><span className="eyebrow">COMO PODEMOS AJUDAR</span><h2>Soluções completas para o seu negócio</h2><p>Uma estrutura contábil próxima e organizada para acompanhar diferentes necessidades da sua empresa.</p></div><div className="services-grid featured-services">{featuredServices.map(s=><article className="service-card featured-card" key={s[1]}><i><Icon name={s[0]}/></i><div><h3>{s[1]}</h3><p>{s[2]}</p></div></article>)}</div><div className="center"><Link className="text-link" href="/servicos">Ver todos os serviços →</Link></div></div></section>

  <section className="dark-section"><div className="container"><div className="section-head light"><span className="eyebrow">MDCon</span><h2>Por que escolher a MDCon?</h2></div><div className="benefits-grid">{
    ([['handshake','Atendimento próximo','Você fala com pessoas que conhecem a realidade da sua empresa.'],['target','Orientação profissional','Informações contábeis para ajudar nas decisões do dia a dia.'],['sliders','Soluções personalizadas','Cada empresa possui necessidades diferentes.'],['shield','Experiência e responsabilidade','Um escritório preparado para cuidar das rotinas contábeis da sua empresa.']] as [IconName,string,string][]).map(x=><article key={x[1]}><i><Icon name={x[0]}/></i><h3>{x[1]}</h3><p>{x[2]}</p></article>)}
  </div></div></section>

  <section className="section split-section"><div className="container split-grid"><div><span className="eyebrow">PARA QUEM É</span><h2>A MDCon atende diferentes tipos de negócios</h2><div className="tags">{['Pequenas empresas','MEIs','Prestadores de serviços','Profissionais liberais','Comércio','Simples Nacional','Empresas em crescimento','Empreendedores'].map(t=><span key={t}>{t}</span>)}</div><a className="text-link" href="https://wa.me/5555984522204" target="_blank" rel="noreferrer">Converse com a MDCon →</a></div><div><span className="eyebrow">COMO FUNCIONA</span><h2>Um atendimento simples e próximo</h2><div className="steps">{[['01','Você entra em contato'],['02','Entendemos sua necessidade'],['03','Apresentamos a solução'],['04','A MDCon cuida da contabilidade']].map(s=><div className="step" key={s[0]}><b>{s[0]}</b><span>{s[1]}</span></div>)}</div></div></div></section>

  <section className="local-section"><div className="container local-grid"><div className="local-photo"><Image src="/equipe-mdcon.png" alt="Equipe MDCon em seu escritório" fill sizes="(max-width: 900px) 100vw, 48vw" className="local-photo-img" /></div><div><span className="eyebrow">PRESENÇA LOCAL</span><h2>Assessoria contábil em Palmeira das Missões</h2><p>A MDCon Assessoria Contábil atua em Palmeira das Missões, oferecendo serviços de contabilidade e assessoria para empresas e empreendedores que buscam organização, orientação e segurança para administrar seus negócios.</p><Link className="btn btn-primary" href="/sobre">Conheça a MDCon</Link></div></div></section>

  <section className="section compact"><div className="container"><div className="section-head"><span className="eyebrow">DÚVIDAS</span><h2>Perguntas frequentes</h2></div><div className="faq-grid">{faqs.map(f=><details key={f[0]}><summary>{f[0]}<span>+</span></summary><p>{f[1]}</p></details>)}</div></div></section>

  <section className="cta-section"><div className="container"><div className="cta-box"><div><h2>Sua empresa merece uma contabilidade que esteja ao seu lado.</h2><p>Converse com a MDCon Assessoria Contábil e descubra como podemos ajudar sua empresa.</p></div><a className="btn btn-primary big" href="https://wa.me/5555984522204?text=Olá%20MDCon,%20gostaria%20de%20conversar%20sobre%20a%20contabilidade%20da%20minha%20empresa." target="_blank" rel="noreferrer">Falar com a MDCon</a></div></div></section>
</>}
