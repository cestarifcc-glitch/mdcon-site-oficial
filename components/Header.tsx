'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link
          href="/"
          className="brand brand-logo"
          aria-label="MDCon - início"
          onClick={closeMenu}
        >
          <Image
            src="/logo-mdcon-aprovada.png"
            alt="MDCon Assessoria Contábil"
            width={190}
            height={105}
            priority
            className="brand-logo-img"
          />
        </Link>

        <button
          className="menu-btn"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-principal"
        >
          {open ? '✕' : '☰'}
        </button>

        <nav
          id="menu-principal"
          className={open ? 'nav open' : 'nav'}
          aria-label="Navegação principal"
        >
          <Link href="/" onClick={closeMenu}>
            Início
          </Link>

          <Link href="/sobre" onClick={closeMenu}>
            Sobre
          </Link>

          <Link href="/servicos" onClick={closeMenu}>
            Serviços
          </Link>

          <Link href="/conteudos" onClick={closeMenu}>
            Conteúdos
          </Link>

          <Link href="/contato" onClick={closeMenu}>
            Contato
          </Link>

          <a
            className="btn btn-primary nav-cta"
            href="https://wa.me/5555984522204?text=Olá%20MDCon,%20gostaria%20de%20solicitar%20um%20atendimento."
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Fale com a MDCon
          </a>
        </nav>
      </div>
    </header>
  );
}
