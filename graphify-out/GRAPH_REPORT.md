# Graph Report - .  (2026-08-08)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 21 nodes · 19 edges · 4 communities (2 shown, 2 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- app.js
- experience.js
- nav.js
- auto

## God Nodes (most connected - your core abstractions)
1. `go()` - 2 edges
2. `auto()` - 2 edges
3. `tools` - 1 edges
4. `projects` - 1 edges
5. `translations` - 1 edges
6. `carousel` - 1 edges
7. `storedTheme` - 1 edges
8. `observer` - 1 edges
9. `experienceEntries` - 1 edges
10. `experienceDetail` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (4 total, 2 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.20
Nodes (6): carousel, observer, projects, storedTheme, tools, translations

### Community 1 - "experience.js"
Cohesion: 0.40
Nodes (3): experienceDetail, experienceEntries, experienceOptions

## Knowledge Gaps
- **11 isolated node(s):** `tools`, `projects`, `translations`, `carousel`, `storedTheme` (+6 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `tools`, `projects`, `translations` to the rest of the system?**
  _11 weakly-connected nodes found - possible documentation gaps or missing edges._