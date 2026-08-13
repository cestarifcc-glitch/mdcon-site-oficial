'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link href="/" className="brand brand-logo" aria-label="MDCon - início">
          <Image
            src="/logo-mdcon-aprovada.png"
            alt="MDCon Assessoria Contábil"
            width={190}
            height={105}
            priority
            className="brand-logo-img"
          />
        </Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menu">☰</button>
        <nav className={open ? 'nav open' : 'nav'}>
          <Link href="/" onClick={() => setOpen(false)}>Início</Link>
          <Link href="/sobre" onClick={() => setOpen(false)}>Sobre</Link>
          <Link href="/servicos" onClick={() => setOpen(false)}>Serviços</Link>
          <Link href="/conteudos" onClick={() => setOpen(false)}>Conteúdos</Link>
          <Link href="/contato" onClick={() => setOpen(false)}>Contato</Link>
          <a className="btn btn-primary nav-cta" href="https://wa.me/5555984522204?text=Olá%20MDCon,%20gostaria%20de%20solicitar%20um%20atendimento." target="_blank" rel="noreferrer">Fale com a MDCon</a>
        </nav>
      </div>
    </header>
  );
}
