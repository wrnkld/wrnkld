# Button sizing

`Button` exposes three product sizes. The size owns the complete geometry contract: height,
horizontal padding, font size, and the gap between the label and left/right sections.

| Size       | Height | Font size | Horizontal padding | Section gap | Intended use                                       |
| ---------- | ------ | --------- | ------------------ | ----------- | -------------------------------------------------- |
| `compact`  | 24px   | 12px      | 8px                | 4px         | Dense tables, inline actions, constrained toolbars |
| `standard` | 32px   | 14px      | 12px               | 8px         | Default application action                         |
| `large`    | 48px   | 18px      | 24px               | 12px        | Onboarding and other spacious action layouts       |

Omit `size` for `standard`. Do not add padding or height props to adjust an approved size. If a
control is intentionally text-like, icon-only, a full-card target, or a full-cell target, use the
appropriate specialized primitive instead of introducing another `Button` size.

Page-header actions use `standard` unless design explicitly approves an exception. Use `compact`
for dense in-content actions such as table rows and constrained toolbars, not simply because a
header contains several actions.
