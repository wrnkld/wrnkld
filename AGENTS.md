# Architecture rules

- Keep case-study Sankey datasets separate from the reusable d3-sankey SVG renderer so customer counts can be tested without rendering a page.
- Keep confirmed full-research summary totals separate from the partial research matrix and representative rows so presentation changes cannot alter reported totals.
- Keep PR count provenance in the PR dataset (illustrative flags) without inventing GitHub identifiers; identifiers and counts come from the user's research screenshot.
- Homepage case-study features reuse existing case-study screenshots rather than duplicate media, keeping previews consistent with the linked work.
- Keep optional homepage section dates separate from heading text and allow their shared heading row to wrap, preserving semantic hierarchy on narrow screens.
