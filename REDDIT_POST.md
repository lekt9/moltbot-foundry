# Reddit Posts

## r/LocalLLaMA

**Title:** [P] Foundry: A self-writing AI agent that crystallizes your patterns into tools

**Text:**

We built an agent that upgrades itself based on how you work.

**The problem:** Most agents run the same logic every time. You adapt to them.

**The solution:** Foundry is a meta-extension for OpenClaw that:

- Tracks your workflows (goal → tools → outcome)
- When a pattern hits 5+ uses with 70% success → crystallizes into a dedicated tool
- Can extend its own codebase via `foundry_extend_self`

**Key insight:** Knowledge in prompts = tokens every call. Self-written code = zero tokens, always executes.

The Overseer runs hourly for autonomous self-improvement.

Based on recent research:
- Self-Improving Coding Agent (17-53% improvement from self-editing)
- HexMachina (artifact-centric learning)
- ADAS (ICLR 2025, meta-agent search)

**Open source:** https://github.com/lekt9/openclaw-foundry

Token: $FDRY on Solana (marketplace uses x402 for agent-to-agent payments)

---

## r/MachineLearning

**Title:** [P] Foundry: Operationalizing recursive self-improvement for AI agents

**Text:**

We implemented the findings from recent self-improving agent papers into an open-source system.

**Papers implemented:**

1. **Self-Improving Coding Agent** (arXiv:2504.15228) — Agents that edit their own scaffolding improve 17-53%

2. **HexMachina** (OpenReview) — Artifact-centric learning: write persistent code instead of prompt-stuffing

3. **ADAS** (ICLR 2025, arXiv:2408.08435) — Meta Agent Search outperforms hand-designed agents

**What Foundry does:**

- Observes workflows (goal → tool sequence → outcome)
- Crystallizes high-frequency patterns (5+ uses, 70%+ success) into dedicated tools
- Extends its own codebase via self-modification
- Hourly Overseer for autonomous optimization

**The key distinction:** Knowledge (text in prompts) costs tokens and can be forgotten. Behavior (self-written code) runs automatically at zero cost.

Built on OpenClaw (open-source agent framework).

GitHub: https://github.com/lekt9/openclaw-foundry

Happy to discuss the architecture decisions and how we adapted the research.

---

## r/artificial

**Title:** Foundry: An AI agent that watches how you work and writes its own upgrades

**Text:**

Built an agent that actually adapts to you instead of the other way around.

**How it works:**

1. You work normally — Foundry tracks what you do
2. Patterns emerge — "you always do X then Y then Z"
3. Pattern hits threshold — Foundry writes a tool that does X→Y→Z in one step
4. You now have a custom tool that matches YOUR workflow

**The technical bit:**

- Self-modifies via `foundry_extend_self`
- Hourly Overseer analyzes and optimizes
- Based on actual ML research (Self-Improving Coding Agent, HexMachina, ADAS)

**Why this matters:**

Traditional AI: same behavior every time
Foundry: learns your patterns, writes code to match

Open source: https://github.com/lekt9/openclaw-foundry
Token: $FDRY (Solana) for marketplace payments
