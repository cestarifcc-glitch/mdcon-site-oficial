import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata: Metadata = {
  title: { default: 'MDCon Assessoria Contábil | Palmeira das Missões', template: '%s | MDCon' },
  description: 'Assessoria contábil para empresas e empreendedores em Palmeira das Missões, com atendimento próximo e orientação profissional.',
  metadataBase: new URL('https://mdcon.com.br'),
  openGraph: {
    title: 'MDCon Assessoria Contábil',
    description: 'Sua empresa cresce. A contabilidade acompanha.',
    locale: 'pt_BR',
    type: 'website'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#FFFFFF'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" style={{ colorScheme: 'light' }}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
