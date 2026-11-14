# Dual asset selector

The shell for every two-pane asset picker (available on the left, selected on the right): Add domain and Add data product. Only the rows differ between them (a tree vs a table); everything around the rows comes from here, so the pickers can't drift apart again.

- New pickers use this shell. Don't hand-build a picker card, header, search box or type filter.
- The card has one fixed height and each list fills what its header leaves, so there is never a blank strip under the shorter pane.
- Both headers are the title plus one toolbar row, so they stay the same height. Alerts and notes go in `notice`, below the header, never in it.
- Row add/remove buttons use `GatedActionIcon` with `IconPlus` / `IconX`.
- Empty panes use `DualAssetSelectorNoMatches` / `DualAssetSelectorNothingSelected` so the copy reads the same in every picker; `DualAssetSelectorEmpty` is only for a case one picker has.
- The Type menu's styles are composed from the filter bar's multi-select menu so the two read as one control: header label, red Clear, check marks, counts (hidden at 0) and truncated labels.
- The search input blocks Enter because both pickers sit inside forms. The Type menu renders in a portal, outside the form, so its checkboxes can't submit it.
