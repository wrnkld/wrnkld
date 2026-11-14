# Table

## List pages

A page whose main content is a list renders `Table` with `variant="muted"` (tinted, small uppercase header), running edge to edge:

- No `Card` / `Paper` wrapper, and no title card repeating the page title.
- Primary actions (Add) go in the page header; row actions go in a … menu.
- A callout or banner above the table keeps its own card; the table does not.
- Rows that navigate use `getRowHref`, not a click handler (see `.claude/rules/table-row-links.md`).
- Loading uses the `loading` prop, not a skeleton beside the table.
