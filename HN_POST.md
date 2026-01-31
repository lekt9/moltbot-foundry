# Hacker News Submission

**URL:** https://news.ycombinator.com/submit

---

## Title

Show HN: Foundry – A self-writing AI agent that learns how you work and upgrades itself

## URL

https://github.com/lekt9/openclaw-foundry

## Text (if text post)

Most AI agents run the same logic every time. We wanted one that adapts.

Foundry is a self-writing meta-extension for OpenClaw (open-source agent framework) that:

1. **Observes** your workflows — tracks goal → tool sequence → outcome

2. **Researches** — queries docs, reads arXiv papers, writes code

3. **Crystallizes** patterns into tools — when you've done something 5+ times with 70%+ success, it becomes a single command

4. **Upgrades itself** — `foundry_extend_self` lets it write new capabilities into its own codebase

The key insight: knowledge (text in prompts) costs tokens every call and can be forgotten. Behavior (self-written code) runs automatically, zero tokens.

The Overseer runs hourly to auto-crystallize patterns, prune stale ones, and track tool fitness (ADAS-style evolution).

This is operationalized recursive self-improvement — the system that writes the code IS the code being written.

Papers that back this up:
- Self-editing agents improve 17-53% (arxiv.org/abs/2504.15228)
- HexMachina: artifact-centric learning beats prompt-stuffing
- ADAS (ICLR 2025): meta-agents outperform hand-designed ones

Open source: https://github.com/lekt9/openclaw-foundry

$FDRY token for marketplace payments (x402 protocol — HTTP 402 + Solana USDC)

Happy to answer questions about the architecture.
