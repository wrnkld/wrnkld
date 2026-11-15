# Table Lists

## Purpose

Defines the standard presentation and interaction rules for pages where a table is the primary content. List pages prioritize information density, predictable navigation, and consistent actions.

## Rules

- Use `Table` with `variant="muted"` for primary list views.
- Render the table edge-to-edge within the page.
- Use tinted, small-uppercase column headers.
- Place primary actions in the page header.
- Place row-specific actions in an overflow menu.

## Layout

- Do not wrap the table in `Card` or `Paper`.
- Do not repeat the page title inside the table.
- Render alerts and banners in separate cards above the table.
- Maintain consistent column alignment.

## Interaction

- Use `getRowHref` for navigable rows rather than attaching custom click handlers.
- Preserve native link behavior, including keyboard navigation and opening in new tabs.
- Use the table's `loading` prop for loading states.

## Avoid

- Unnecessary card containers around tables.
- Custom row navigation behavior.
- Primary page actions inside table rows.
- Separate loading skeletons outside the table.

## Related Guidance

See `.claude/rules/table-row-links.md` for row navigation behavior.
