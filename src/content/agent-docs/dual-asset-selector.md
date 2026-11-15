# Dual Asset Selector

## Purpose

Defines the shared layout and interaction patterns for two-pane asset selectors, including Add Domain and Add Data Product.

Both selectors use the same structural components. Only the available-item representation differs: a hierarchical tree or a table.

## Rules

- Use the shared selector shell for all two-pane asset selection workflows.
- Maintain a fixed container height. Each pane fills the available space beneath its header.
- Keep both pane headers the same height, with a title and a single toolbar row.
- Place alerts and supporting information in the `notice` region below the header.
- Reuse existing search, filter, selection, and empty-state components.

## Implementation

- **Row actions:** Use `GatedActionIcon` with `IconPlus` or `IconX` for adding/removing assets.
- **Empty states:** Use `DualAssetSelectorNoMatches` or `DualAssetSelectorNothingSelected`.
- **Exceptions:** Reserve `DualAssetSelectorEmpty` for selector-specific cases.
- **Type filter:** Follow the shared multi-select pattern: counts, checkmarks, Clear action, and truncated labels.
- **Forms:** Prevent search inputs from submitting parent forms on Enter. Render filter menus in a portal to isolate their interactions.

## Avoid

- Creating custom picker headers or filters.
- Allowing pane heights to change independently.
- Introducing inconsistent empty-state messaging.
- Duplicating shared selector behavior.
