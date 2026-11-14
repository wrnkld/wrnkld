The one way the app shows what happened to something: every change log and activity feed is a list of `ChangeLogEntry`. When and who sit in the left column; what happened, and its details, on the right. The order is a design decision: when and who are the only things every entry shares (settings edits, comments, alert events), so they form a column a reader can scan.

- **One save is one entry.** Rows from the same author at the same moment group into one entry with a line per setting (`ChangeLogChange`), so when and who aren't repeated per field.
- **A full log** (a drawer or page) is `ChangeLogCard`: one card, every entry with its full date. No day headings, so a log reads the same as an activity feed.
- **Mixed feeds** (monitor Activity, alert activity, exception activity) use the same entry for comments and events. A comment's right side is just its text; an event starts with what happened ("Alerts merged into this incident"). A comment's edit/delete menu goes in the entry's `action` slot.
- **Narrow containers stack.** Each entry is its own size container and drops to one column, with "when · who" on one line, below 400px. The alert page's side panel relies on this at laptop widths; it widens on large screens so two columns fit there too.
- **A page summary** is `LastChangedNote` ("Last changed … by …", optionally with "View change log"), under the page's summary.
- **Older changes** load through `ChangeLogLoadMore` under the log, appending to it.
- **A paged log** with loading, error and empty states and "Show older changes" is `PagedChangeLog` + `useLoadMore`, fed by a cursor-paged query whose type policy merges pages.
- **A setting's own attribution** is `ChangeNote` ("Set … by …"), under the control it describes. It is not a duplicate of the page summary: the page note names the latest change to anything, this names who set the value in force, which can be months older. Both render the same footnote.

Loading states are `ChangeLogSkeleton` and `LastChangedNoteSkeleton`. Their bars wrap real placeholder text in the same layout, so they have the loaded content's line heights and the log lands without moving anything. Long values wrap inside their column (`overflow-wrap: anywhere`) rather than running past the card.

Consumers map their audit entries into `ChangeLogRowData` in the control's own words. Raw backend field names and Python values (`True`, `None`) never reach the row: relabel them, and map nullish values to `NO_VALUE`, which `ChangeLogChange` reads as "Set to …" or "Cleared (was …)" instead of a dash. A save that changed a field to the value it already had is dropped. A value that doesn't fit inline (a JSON policy, a list of added objects) goes in `change.value`, e.g. a "View changes" link to the diff modal.

Monitor and asset audit entries map through `routes/app/monitors/detail/tabs/change-log/audit-entry-to-rows.tsx`, which keeps the monitor-only rules (drafts, out-of-the-box replacements, switching back to an auto threshold) in one place.
