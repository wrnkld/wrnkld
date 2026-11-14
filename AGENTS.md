# Architecture rules

- Keep case-study Sankey datasets separate from the reusable d3-sankey SVG renderer so customer counts can be tested without rendering a page.
- Derive research summary totals from the full research dataset, separately from representative table rows, so presentation changes cannot alter reported totals.