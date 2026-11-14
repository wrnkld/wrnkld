# Architecture rules

- Keep case-study Sankey datasets separate from the reusable d3-sankey SVG renderer so customer counts can be tested without rendering a page.
- Keep confirmed full-research summary totals separate from the partial research matrix and representative rows so presentation changes cannot alter reported totals.
- Keep PR count provenance in the PR dataset and label illustrative metrics without inventing GitHub identifiers so portfolio tables distinguish stored records from examples.