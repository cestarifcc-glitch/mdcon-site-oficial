import type { Metadata } from 'next';
import './globals.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'MDCon Assessoria Contábil | Palmeira das Missões',
    template: '%s | MDCon',
  },

  description:
    'Assessoria contábil em Palmeira das Missões para empresas, empreendedores, produtores rurais e pessoas físicas. Contabilidade, fiscal, departamento pessoal, IRPF, planejamento tributário e certificado digital.',

  metadataBase: new URL('https://mdcon-site-oficial.vercel.app'),

  keywords: [
    'contabilidade em Palmeira das Missões',
    'contador em Palmeira das Missões',
    'MDCon',
    'MDCon Assessoria Contábil',
    'Diego Mafalda',
    'abertura de empresas',
    'planejamento tributário',
    'departamento pessoal',
    'Imposto de Renda',
    'produtor rural',
    'certificado digital',
  ],

  openGraph: {
    title: 'MDCon Assessoria Contábil',
    description:
      'Sua empresa cresce. A contabilidade acompanha. Assessoria contábil próxima e organizada em Palmeira das Missões.',
    url: 'https://mdcon-site-oficial.vercel.app',
    siteName: 'MDCon Assessoria Contábil',
    locale: 'pt_BR',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}
