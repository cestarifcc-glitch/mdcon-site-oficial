import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mdcon.com.br';
  const paths = [
  "",
  "/sobre",
  "/servicos",
  "/servicos/contabilidade-empresarial",
  "/servicos/abertura-de-empresas",
  "/servicos/escrituracao-fiscal",
  "/servicos/departamento-pessoal",
  "/servicos/imposto-de-renda-pessoa-fisica",
  "/servicos/planejamento-tributario",
  "/servicos/assessoria-ao-produtor-rural",
  "/servicos/certificado-digital",
  "/conteudos",
  "/conteudos/abertura-e-organizacao-de-empresas",
  "/conteudos/abertura-e-organizacao-de-empresas/como-abrir-uma-empresa",
  "/conteudos/abertura-e-organizacao-de-empresas/mei-microempresa-ou-epp",
  "/conteudos/abertura-e-organizacao-de-empresas/sete-decisoes-antes-do-cnpj",
  "/conteudos/impostos-e-planejamento-tributario",
  "/conteudos/impostos-e-planejamento-tributario/simples-lucro-presumido-ou-real",
  "/conteudos/impostos-e-planejamento-tributario/o-que-e-planejamento-tributario",
  "/conteudos/impostos-e-planejamento-tributario/regime-tributario-adequado",
  "/conteudos/departamento-pessoal",
  "/conteudos/departamento-pessoal/admissao-de-funcionario",
  "/conteudos/departamento-pessoal/folha-de-pagamento-alem-do-salario",
  "/conteudos/departamento-pessoal/ferias-admissoes-e-desligamentos",
  "/conteudos/imposto-de-renda",
  "/conteudos/imposto-de-renda/quem-precisa-declarar",
  "/conteudos/imposto-de-renda/documentos-para-imposto-de-renda",
  "/conteudos/imposto-de-renda/erros-e-omissoes-na-declaracao",
  "/conteudos/produtor-rural",
  "/conteudos/produtor-rural/contabilidade-para-produtor-rural",
  "/conteudos/produtor-rural/lcdpr-o-que-e",
  "/conteudos/produtor-rural/imposto-de-renda-produtor-rural",
  "/conteudos/gestao-e-decisoes-empresariais",
  "/conteudos/gestao-e-decisoes-empresariais/faturamento-nao-e-lucro",
  "/conteudos/gestao-e-decisoes-empresariais/informacoes-contabeis-para-decisoes",
  "/conteudos/gestao-e-decisoes-empresariais/separar-dinheiro-da-empresa-e-pessoal",
  "/contato"
];
  return paths.map(path => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: path.startsWith('/conteudos/') ? 'monthly' : (path === '' ? 'weekly' : 'monthly'),
    priority: path === '' ? 1 : path.startsWith('/servicos/') ? .85 : path.startsWith('/conteudos/') ? .75 : .8,
  }));
}
