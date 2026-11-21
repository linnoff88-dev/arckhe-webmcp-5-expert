# Entrega e progressão — WebMCP Expert

## Resultado esperado

Ao terminar esta fase, o aluno consegue:

1. modelar ameaças e autoridade por jornada;
2. aplicar least privilege e confirmação vinculada ao efeito;
3. separar WebMCP, backend e servidores MCP;
4. instrumentar traces e evals por camada;
5. operar rollout, SLOs, incidentes e rollback;
6. governar contratos com ownership e evidências.

## Evidências obrigatórias

| Módulo | Entrega | Evidência mínima |
|---|---|---|
| 1.1 | Threat model | fronteiras, ataques, controles e testes adversariais |
| 1.2 | Arquitetura híbrida | fatia vertical WebMCP + backend + MCP |
| 1.3 | Harness de eval | dataset, métricas, traces e release gate |
| 1.4 | Production readiness review | SLO, rollout, runbook e ownership |

## Portão para a Solução 6

A fase fica elegível quando:

- 24 tópicos estão marcados como lidos;
- quatro entregas possuem evidência registrada pelo aluno;
- o catálogo final foi analisado pelo validador;
- falhas críticas do relatório foram corrigidas;
- o aluno exportou a jornada ou confirmou que continuará na mesma origem.

O conteúdo da próxima fase pode ser consultado antes do portão. A ordem é requisito de certificação, não bloqueio artificial de estudo.

## Transporte do estado

O namespace é `inema.webmcp-zero-expert.*`. As páginas usam IDs estáveis como:

```text
modulo-4-1#topico-1
modulo-4-4#topico-6
```

No GitHub Pages, os repositórios da organização são caminhos sob `inematds.github.io`, portanto compartilham a origem e o `localStorage`. Em domínio distinto, use exportação/importação JSON. Um handoff assinado por backend fica reservado para a evolução da plataforma; o estado completo nunca deve ser colocado na URL.

## Próxima fase

`webmcp-6-agent-hub` será definido em conjunto: uma solução pronta para ajustar agentes e consultar outras experiências WebMCP.
