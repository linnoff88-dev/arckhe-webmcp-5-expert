ï»¿# WebMCP Expert ê¢â¬â FormaêÂ§êÂ£o 5

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="48" />
  <p><strong>Arckhé AI</strong></p>
</div>


FormaêÂ§êÂ£o prêÂ¡tica dedicada ao papel **WebMCP Expert**. O projeto ensina a levar uma soluêÂ§êÂ£o WebMCP êÂ  produêÂ§êÂ£o com seguranêÂ§a, arquitetura hêÂ­brida, evals, observabilidade e governanêÂ§a.

## O que estêÂ¡ incluêÂ­do

- arquitetura de 4 capêÂ­tulos Expert, cada um com seus prêÂ³prios mêÂ³dulos;
- CapêÂ­tulo 1 publicado com 4 mêÂ³dulos completos, 24 têÂ³picos e cerca de 12 horas;
- progresso, dêÂºvidas, anotaêÂ§êÂµes, temas e exportaêÂ§êÂ£o/importaêÂ§êÂ£o da jornada;
- console local para auditar contratos, risco e evidêÂªncias operacionais;
- validador avanêÂ§ado de catêÂ¡logos, tools e JSON Schemas;
- geraêÂ§êÂ£o estêÂ¡tica pronta para GitHub Pages e Vercel.

## CapêÂ­tulos e mêÂ³dulos

O menu superior navega pelos capêÂ­tulos da formaêÂ§êÂ£o Expert. A numeraêÂ§êÂ£o segue `capêÂ­tulo.mêÂ³dulo`: `1.1`, `1.2`, `2.1` e assim por diante.

O CapêÂ­tulo 1 estêÂ¡ publicado com estes mêÂ³dulos:

1. SeguranêÂ§a de agentes e tools;
2. WebMCP + backend + MCP;
3. Evals e observabilidade;
4. ProduêÂ§êÂ£o e governanêÂ§a.

Os capêÂ­tulos 2 (Threat modeling aplicado), 3 (SRE de agentes) e 4 (GovernanêÂ§a Expert) jêÂ¡ estêÂ£o mapeados no êÂ­ndice e serêÂ£o publicados progressivamente.

## Executar localmente

```bash
npm run build
npm test
npm run serve
```

Abra `http://localhost:4173`. O curso tambêÂ©m êÂ© legêÂ­vel abrindo `index.html`, mas um servidor local representa melhor o contexto de execuêÂ§êÂ£o.

## Console de risco e evals

O laboratêÂ³rio em `labs/validador-tools.html` recebe um descritor JSON auditêÂ¡vel. Ele verifica:

- unicidade, nomes, têÂ­tulos e descriêÂ§êÂµes;
- estrutura de `inputSchema`;
- coerêÂªncia de `required` e `properties`;
- annotations do draft;
- evidêÂªncia de `AbortSignal`;
- risco, confirmaêÂ§êÂ£o humana, fallback e exemplo de resultado.

O console êÂ© local, determinêÂ­stico e nêÂ£o registra nem executa tools. Campos de governanêÂ§a como `risk`, `fallback` e `resultExample` nêÂ£o pertencem ao draft WebMCP; servem para revisar prontidêÂ£o operacional.


## EspecificaêÂ§êÂ£o e limites

WebMCP permanece em evoluêÂ§êÂ£o. O conteêÂºdo foi conferido em 30 de agosto de 2026 contra o [repositêÂ³rio oficial WebMCP](https://github.com/webmachinelearning/webmcp), a [especificaêÂ§êÂ£o renderizada](https://webmachinelearning.github.io/webmcp/) e o [explainer da API declarativa](https://github.com/webmachinelearning/webmcp/blob/main/declarative-api-explainer.md).

O curso ensina `document.modelContext`, `registerTool()`, `getTools()`, `executeTool()` e ciclo de vida por `AbortSignal`. NêÂ£o trata WebMCP como substituto do backend, de autorizaêÂ§êÂ£o ou de MCP.

## ProgressêÂ£o da formaêÂ§êÂ£o

Todas as fases usam `<meta name="ARCKHÉ-course" content="webmcp-zero-expert">`. No GitHub Pages da organizaêÂ§êÂ£o, o estado local êÂ© compartilhado pela mesma origem. Para outros domêÂ­nios, o aluno pode exportar e importar a jornada em JSON com merge nêÂ£o destrutivo.

Consulte [o contrato de entrega e passagem](docs/entrega-e-progressao.md).

## LicenêÂ§a

CêÂ³digo sob licenêÂ§a MIT. ConteêÂºdo educacional êÂ© ARCKHÉ.

<!-- ARCKHÉ-backlink:v1 -->
## Mais no ARCKHÉ AI

- [Ficha completa deste curso](https://www.ARCKHÉ AI/cursos/250-formacao-webmcp-5-expert/)
- [Guia: como aprender inteligêÂªncia artificial](https://www.ARCKHÉ AI/aprender-inteligencia-artificial/)
- [Todos os cursos](https://www.ARCKHÉ AI/cursos/)
<!-- /ARCKHÉ-backlink:v1 -->

---

<div align="center">
  <img src="capa/logo.svg" alt="Arckhé AI" height="32" />
  <p><strong>Arckhé AI</strong></p>
</div>