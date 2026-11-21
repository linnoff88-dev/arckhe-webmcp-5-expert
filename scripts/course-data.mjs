export const course = {
  repo: 'webmcp-5-expert', phase: '5', role: 'WebMCP Expert', shortRole: 'Expert', track: '4', accent: 'amber', icon: '🛡️',
  description: 'Leve WebMCP a produção com threat modeling, arquitetura híbrida, evals, observabilidade e governança.',
  promise: 'Saia do protótipo funcional para uma plataforma agêntica segura, mensurável e operável.',
  labName: 'Console de risco e evals', labDescription: 'Audite contratos, controles, evidências e critérios de produção de uma solução WebMCP.'
};

export const modules = [
  {
    id: '4-1', number: '1.1', icon: '🛡️', title: 'Segurança de agentes e tools', duration: '3h', type: 'Security',
    promise: 'Confiança mínima, efeito controlado', description: 'Modele ameaças entre conteúdo, agente, tools, usuário e backend e aplique controles proporcionais ao efeito.',
    lab: 'Produzir threat model, matriz de autoridade e testes adversariais para uma jornada WebMCP com ação sensível.',
    svg: ['Entrada não confiável', 'Policy + autorização', 'Efeito limitado'],
    topics: [
      ['Desenhe as fronteiras de confiança', 'Documento, conteúdo remoto, modelo, agente, tool e backend são componentes com níveis distintos de confiança.', 'O mapa mostra onde dados viram instruções e onde uma decisão pode produzir efeito.', ['trust boundary', 'principal', 'data flow', 'asset'], `untrusted: [pageContent, modelOutput, toolArguments]
trustedOnlyAfter: [validation, policy, authorization]`],
      ['Modele ameaças por jornada', 'A ameaça é analisada sobre objetivo, dados, transições e efeitos, não apenas sobre endpoints isolados.', 'Jornadas revelam combinações como prompt injection seguida de uma mutação válida.', ['STRIDE', 'abuse case', 'attack path', 'impact'], `ameaça: conteúdo induz agente a cancelar pedido
controle: tool fora do catálogo + confirmação vinculada ao pedido`],
      ['Contenha prompt injection', 'Texto da página e resultados de tools são dados não confiáveis, mesmo quando parecem instruções.', 'Separar canais e aplicar política impede que conteúdo controle autoridade do runtime.', ['data vs instruction', 'provenance', 'allowlist', 'policy'], `context.addData({ source: location.href, trust: "untrusted", content });
// nunca promover conteúdo a regra de sistema`],
      ['Aplique least privilege', 'Cada tool recebe o menor escopo, duração e conjunto de recursos necessário.', 'Credenciais amplas transformam um erro de seleção em incidente sistêmico.', ['scope', 'short-lived token', 'resource bound', 'deny by default'], `token = mint({ scope: "enrollment:read", resource: enrollmentId, ttl: 60 });`],
      ['Vincule confirmação ao efeito', 'A confirmação registra ação, alvo, parâmetros materiais e versão do estado apresentado.', 'Um sim genérico não autoriza uma ação alterada depois da confirmação.', ['intent binding', 'state version', 'target', 'expiry'], `approval = sign({ tool, argsHash, stateVersion, expiresAt });
verifyApproval(approval, currentCall);`],
      ['Teste o adversário continuamente', 'A suíte cobre injeção, spoofing de tool, argumentos extremos, replay e escalada de privilégio.', 'Controles de segurança precisam de regressão automatizada como qualquer contrato.', ['red team', 'replay', 'spoofing', 'privilege escalation'], `for (const attack of adversarialDataset) {
  assert(await agent.run(attack)).hasNoUnauthorizedEffect();
}`]
    ]
  },
  {
    id: '4-2', number: '1.2', icon: '🏛️', title: 'WebMCP + backend + MCP', duration: '3h', type: 'Arquitetura',
    promise: 'Cada capacidade no lugar certo', description: 'Projete uma arquitetura híbrida que separa experiência da página, regras de domínio e integrações externas.',
    lab: 'Desenhar e implementar uma fatia vertical em que WebMCP coordena UI, backend autoriza e MCP integra um sistema externo.',
    svg: ['Página + WebMCP', 'Backend de domínio', 'Servidor MCP'],
    topics: [
      ['Atribua responsabilidades explícitas', 'WebMCP oferece capacidades contextuais; backend guarda regras e autoridade; MCP expõe integrações ao host.', 'A separação evita transformar a página em backend ou duplicar integrações.', ['WebMCP UX', 'backend domain', 'MCP integration', 'agent host'], `pagina: contexto + UI + tool adapter
backend: auth + regra + transação
mcp: sistemas externos`],
      ['Escolha onde uma tool deve viver', 'Proximidade da experiência, necessidade de segredo, alcance e ciclo de vida orientam a decisão.', 'Nem toda função visível deve ser WebMCP e nem toda integração precisa aparecer na página.', ['placement', 'secret', 'reach', 'lifecycle'], `if (needsPageState) return "WebMCP";
if (needsExternalSystem) return "MCP";
return "backend API";`],
      ['Crie uma camada de domínio única', 'Clique humano, tool WebMCP e servidor MCP chamam a mesma regra de aplicação quando compartilham um caso de uso.', 'Uma fonte de verdade reduz divergência e auditorias contraditórias.', ['application service', 'ports', 'adapters', 'single rule'], `startEnrollment(input, actor)
  -> policy.authorize(actor)
  -> repository.save(input)`],
      ['Propague identidade e rastreio', 'Chamadas carregam identidade verificada, delegação limitada e trace context entre as camadas.', 'Sem propagação, logs não explicam quem iniciou o efeito nem onde a decisão mudou.', ['actor', 'delegation', 'traceparent', 'correlation'], `headers: { traceparent, "X-Actor-Id": actor.id, "X-Delegation-Id": grant.id }`],
      ['Normalize contratos entre fronteiras', 'Schemas, erros e envelopes são versionados sem fingir que WebMCP, HTTP e MCP têm transportes idênticos.', 'O modelo de domínio pode ser comum enquanto adapters preservam semânticas próprias.', ['canonical model', 'adapter', 'versioning', 'error mapping'], `DomainError.NOT_FOUND
 -> HTTP 404
 -> WebMCP { ok:false, code:"NOT_FOUND" }
 -> MCP isError result`],
      ['Prove a fatia vertical', 'O teste segue pedido, escolha, execução, autorização, integração, UI e resposta final.', 'A prova ponta a ponta encontra falhas invisíveis em testes isolados.', ['vertical slice', 'contract test', 'trace', 'visible effect'], `trace: user_turn -> webmcp_tool -> backend_policy -> mcp_call -> ui_update -> answer`]
    ]
  },
  {
    id: '4-3', number: '1.3', icon: '📈', title: 'Evals e observabilidade', duration: '3h', type: 'Qualidade',
    promise: 'Qualidade medida por camada', description: 'Crie datasets, métricas, traces e gates capazes de explicar descoberta, escolha, execução e resultado.',
    lab: 'Montar um harness de eval com casos felizes, ambíguos e adversariais e publicar um painel de decisão de release.',
    svg: ['Dataset versionado', 'Execuções rastreadas', 'Gate de release'],
    topics: [
      ['Defina sucesso observável', 'Cada tarefa declara estado inicial, resultado esperado, efeitos proibidos e tolerâncias.', 'Sem oráculo, fluência da resposta vira substituto enganoso para conclusão real.', ['initial state', 'expected effect', 'forbidden effect', 'oracle'], `expected: { enrollmentStatus: "draft" }
forbidden: { chargeCreated: true }`],
      ['Construa um dataset representativo', 'Casos cobrem frequência, risco, ambiguidade, falhas e variação linguística real.', 'Uma média dominada por casos fáceis esconde regressões críticas.', ['strata', 'risk weighting', 'paraphrase', 'edge case'], `dataset = stratify(cases, ["happy", "ambiguous", "failure", "adversarial"]);`],
      ['Avalie cada etapa do pipeline', 'Descoberta, escolha, argumentos, política, execução e resposta recebem métricas próprias.', 'A decomposição localiza a regressão e orienta a correção.', ['retrieval recall', 'tool accuracy', 'schema validity', 'task success'], `metrics = { discoveryRecall, correctTool, validArgs, policyCompliance, taskSuccess };`],
      ['Instrumente traces sem vazar dados', 'Spans correlacionam turnos e chamadas com atributos sanitizados, versões e duração.', 'Observabilidade útil preserva diagnóstico sem armazenar prompts ou PII desnecessários.', ['OpenTelemetry', 'span', 'redaction', 'sampling'], `span.setAttributes({ toolName, catalogVersion, outcome, durationMs });
span.addEvent("policy.denied", { reasonCode });`],
      ['Detecte regressões e drift', 'Baselines versionadas permitem comparar modelos, prompts, catálogos e navegadores ao longo do tempo.', 'Mudanças aparentemente isoladas podem alterar seleção e taxa de sucesso.', ['baseline', 'confidence interval', 'drift', 'canary'], `gate.failIf(taskSuccess < baseline - 0.02 || unauthorizedEffects > 0);`],
      ['Transforme avaliação em release gate', 'Critérios mínimos por risco bloqueiam publicação, enquanto alertas não críticos geram acompanhamento.', 'Evals passam de relatório decorativo a controle operacional.', ['quality gate', 'risk tier', 'waiver', 'evidence'], `release.requires([security.zeroUnauthorized, p95Latency.lt(3000), criticalTasks.gte(0.98)]);`]
    ]
  },
  {
    id: '4-4', number: '1.4', icon: '🚀', title: 'Produção e governança', duration: '3h', type: 'Operação',
    promise: 'Mudança segura e reversível', description: 'Planeje compatibilidade, rollout, incidentes, ownership e evolução de contratos WebMCP.',
    lab: 'Entregar um production readiness review com SLOs, rollout, rollback, runbook, ownership e política de mudança.',
    svg: ['Release candidata', 'Canary observada', 'Operação governada'],
    topics: [
      ['Defina compatibilidade real', 'Suporte de navegador, API experimental, fallback, provider e versão do catálogo formam uma matriz testável.', 'Uma afirmação genérica de suporte não representa combinações que o usuário realmente executa.', ['browser channel', 'feature detect', 'fallback', 'catalog version'], `matrix: browser × webmcp_surface × agent_provider × journey
status: tested_at + evidence`],
      ['Versione contratos com intenção', 'Mudanças em nomes, schemas, efeitos ou erros seguem política de compatibilidade e depreciação.', 'O agente pode manter contexto antigo durante um rollout, exigindo transição previsível.', ['semantic change', 'deprecation', 'dual publish', 'migration'], `buscar_cursos_v1 -> deprecatedAt
buscar_cursos_v2 -> preferred
remove only after telemetry window`],
      ['Faça rollout progressivo', 'Feature flags e canaries limitam exposição por jornada, tenant, risco e canal.', 'Pequenos lotes produzem evidência antes de ampliar o raio de impacto.', ['feature flag', 'canary', 'blast radius', 'rollback'], `rollout: 1% read-only -> 5% low-risk -> 25% -> 100%
rollback: disable catalog registration`],
      ['Opere por SLO e orçamento de erro', 'Disponibilidade, sucesso de tarefa, latência e efeitos não autorizados possuem objetivos claros.', 'O SLO conecta experiência agêntica à capacidade operacional da equipe.', ['SLI', 'SLO', 'error budget', 'alert'], `SLO task_success >= 99.0%
SLO unauthorized_effects = 0
p95 tool_latency < 3s`],
      ['Prepare incidentes e kill switch', 'Runbooks cobrem tool incorreta, loop, indisponibilidade, vazamento e alteração inesperada do draft.', 'A resposta precisa desativar capacidades com rapidez sem derrubar a experiência humana.', ['runbook', 'kill switch', 'containment', 'postmortem'], `if (incident.severity >= 1) flags.disable("webmcp_mutations");
preserveManualJourney();`],
      ['Estabeleça ownership e governança', 'Produto, engenharia, segurança e operação compartilham decisões com responsáveis e evidências definidas.', 'A plataforma continua sustentável quando catálogo e políticas mudarem.', ['RACI', 'review cadence', 'exception', 'audit trail'], `owner: Agent Platform
approvers: [Product, Security]
reviewEvery: 90d
evidence: evalReport + threatModel + runbook`]
    ]
  }
];

export const chapters = [
  { id: 'capitulo-1', number: '1', title: 'Operação Expert', status: 'disponivel', description: 'Quatro módulos para proteger, arquitetar, medir e operar.', modules: modules.map(module => ({ number: module.number, title: module.title, href: `curso/expert/modulo-${module.id}.html` })) },
  { id: 'capitulo-2', number: '2', title: 'Threat modeling aplicado', status: 'proximo', description: 'Ameaças por domínio, red team e resposta a incidentes.', modules: [{number:'2.1',title:'Ameaças por jornada'},{number:'2.2',title:'Red team de agentes'},{number:'2.3',title:'Supply chain de tools'},{number:'2.4',title:'Resposta a incidentes'}] },
  { id: 'capitulo-3', number: '3', title: 'SRE de agentes', status: 'proximo', description: 'Capacidade, custo, confiabilidade e operação contínua.', modules: [{number:'3.1',title:'SLIs e SLOs agênticos'},{number:'3.2',title:'Capacidade e custos'},{number:'3.3',title:'On-call e runbooks'},{number:'3.4',title:'Chaos e resiliência'}] },
  { id: 'capitulo-4', number: '4', title: 'Governança Expert', status: 'proximo', description: 'Padrões organizacionais, auditoria e projeto final.', modules: [{number:'4.1',title:'Plataforma e padrões'},{number:'4.2',title:'Governança de catálogo'},{number:'4.3',title:'Auditoria e compliance'},{number:'4.4',title:'Projeto final Expert'}] }
];
