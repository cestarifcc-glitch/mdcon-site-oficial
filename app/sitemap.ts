import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base='https://mdcon.com.br'; return ['','/sobre','/servicos','/conteudos','/contato'].map(path=>({url:base+path,lastModified:new Date(),changeFrequency:path===''?'weekly':'monthly',priority:path===''?1:.8})); }
