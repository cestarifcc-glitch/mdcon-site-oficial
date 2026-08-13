'use client';
import { FormEvent, useState } from 'react';
export default function ContactForm(){
  const [status,setStatus]=useState('');
  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const f=new FormData(e.currentTarget);
    const nome=f.get('nome'); const empresa=f.get('empresa'); const assunto=f.get('assunto'); const mensagem=f.get('mensagem');
    const text=`Olá MDCon! Meu nome é ${nome}.${empresa ? ` Empresa: ${empresa}.` : ''}${assunto ? ` Assunto: ${assunto}.` : ''}${mensagem ? ` Mensagem: ${mensagem}` : ''}`;
    window.open(`https://wa.me/5555984522204?text=${encodeURIComponent(text)}`,'_blank');
    setStatus('Sua mensagem foi preparada e aberta no WhatsApp.');
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-grid"><label>Nome<input required name="nome" /></label><label>Empresa<input name="empresa" /></label><label>WhatsApp<input name="whatsapp" /></label><label>E-mail<input type="email" name="email" /></label></div>
    <label>Assunto<input name="assunto" /></label><label>Mensagem<textarea name="mensagem" rows={5} /></label>
    <button className="btn btn-primary" type="submit">Enviar pelo WhatsApp</button>{status && <p className="form-status">{status}</p>}
  </form>
}
