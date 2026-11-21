# WebMCP Expert â€” FormaÃ§Ã£o 5

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="48" />
  <p><strong>Arckhé AI</strong></p>
</div>


FormaÃ§Ã£o prÃ¡tica dedicada ao papel **WebMCP Expert**. O projeto ensina a levar uma soluÃ§Ã£o WebMCP Ã  produÃ§Ã£o com seguranÃ§a, arquitetura hÃ­brida, evals, observabilidade e governanÃ§a.

## O que estÃ¡ incluÃ­do

- arquitetura de 4 capÃ­tulos Expert, cada um com seus prÃ³prios mÃ³dulos;
- CapÃ­tulo 1 publicado com 4 mÃ³dulos completos, 24 tÃ³picos e cerca de 12 horas;
- progresso, dÃºvidas, anotaÃ§Ãµes, temas e exportaÃ§Ã£o/importaÃ§Ã£o da jornada;
- console local para auditar contratos, risco e evidÃªncias operacionais;
- validador avanÃ§ado de catÃ¡logos, tools e JSON Schemas;
- geraÃ§Ã£o estÃ¡tica pronta para GitHub Pages e Vercel.

## CapÃ­tulos e mÃ³dulos

O menu superior navega pelos capÃ­tulos da formaÃ§Ã£o Expert. A numeraÃ§Ã£o segue `capÃ­tulo.mÃ³dulo`: `1.1`, `1.2`, `2.1` e assim por diante.

O CapÃ­tulo 1 estÃ¡ publicado com estes mÃ³dulos:

1. SeguranÃ§a de agentes e tools;
2. WebMCP + backend + MCP;
3. Evals e observabilidade;
4. ProduÃ§Ã£o e governanÃ§a.

Os capÃ­tulos 2 (Threat modeling aplicado), 3 (SRE de agentes) e 4 (GovernanÃ§a Expert) jÃ¡ estÃ£o mapeados no Ã­ndice e serÃ£o publicados progressivamente.

## Executar localmente

```bash
npm run build
npm test
npm run serve
```

Abra `http://localhost:4173`. O curso tambÃ©m Ã© legÃ­vel abrindo `index.html`, mas um servidor local representa melhor o contexto de execuÃ§Ã£o.

## Console de risco e evals

O laboratÃ³rio em `labs/validador-tools.html` recebe um descritor JSON auditÃ¡vel. Ele verifica:

- unicidade, nomes, tÃ­tulos e descriÃ§Ãµes;
- estrutura de `inputSchema`;
- coerÃªncia de `required` e `properties`;
- annotations do draft;
- evidÃªncia de `AbortSignal`;
- risco, confirmaÃ§Ã£o humana, fallback e exemplo de resultado.

O console Ã© local, determinÃ­stico e nÃ£o registra nem executa tools. Campos de governanÃ§a como `risk`, `fallback` e `resultExample` nÃ£o pertencem ao draft WebMCP; servem para revisar prontidÃ£o operacional.


## EspecificaÃ§Ã£o e limites

WebMCP permanece em evoluÃ§Ã£o. O conteÃºdo foi conferido em 30 de agosto de 2026 contra o [repositÃ³rio oficial WebMCP](https://github.com/webmachinelearning/webmcp), a [especificaÃ§Ã£o renderizada](https://webmachinelearning.github.io/webmcp/) e o [explainer da API declarativa](https://github.com/webmachinelearning/webmcp/blob/main/declarative-api-explainer.md).

O curso ensina `document.modelContext`, `registerTool()`, `getTools()`, `executeTool()` e ciclo de vida por `AbortSignal`. NÃ£o trata WebMCP como substituto do backend, de autorizaÃ§Ã£o ou de MCP.

## ProgressÃ£o da formaÃ§Ã£o

Todas as fases usam `<meta name="inema-course" content="webmcp-zero-expert">`. No GitHub Pages da organizaÃ§Ã£o, o estado local Ã© compartilhado pela mesma origem. Para outros domÃ­nios, o aluno pode exportar e importar a jornada em JSON com merge nÃ£o destrutivo.

Consulte [o contrato de entrega e passagem](docs/entrega-e-progressao.md).

## LicenÃ§a

CÃ³digo sob licenÃ§a MIT. ConteÃºdo educacional Â© INEMA.

<!-- inema-backlink:v1 -->
## Mais no INEMA.CLUB

- [Ficha completa deste curso](https://www.inema.club/cursos/250-formacao-webmcp-5-expert/)
- [Guia: como aprender inteligÃªncia artificial](https://www.inema.club/aprender-inteligencia-artificial/)
- [Todos os cursos](https://www.inema.club/cursos/)
<!-- /inema-backlink:v1 -->

---

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="32" />
  <p><strong>Arckhé AI</strong></p>
</div>