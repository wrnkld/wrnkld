# Button Sizing

## Purpose

Defines approved button sizes and their intended usage across the application.

Button sizes control the complete geometry of the component: height, padding, typography, and internal spacing.

## Size Specifications

| Property | Compact | Standard | Large |
|----------|---------|----------|-------|
| Height | 24px | 32px | 48px |
| Font size | 12px | 14px | 18px |
| Horizontal padding | 8px | 12px | 24px |
| Section gap | 4px | 8px | 12px |

## Usage

### Compact (`size="compact"`)

Use for dense interfaces, including table actions, inline controls, and constrained toolbars.

### Standard (default)

Use for most application actions, including page-header buttons, forms, dialogs, and toolbars.

### Large (`size="large"`)

Use for onboarding flows and intentionally spacious action layouts.

## Rules

- Omit `size` when using the standard size.
- Use approved variants without overriding geometry.
- Select sizes based on interaction context, not the number of adjacent actions.
- Use specialized primitives for icon-only, text-like, full-card, or full-cell interactions.

## Avoid

- Custom height or padding overrides.
- Additional sizes for individual screens.
- Compact page-header buttons solely to fit more actions.
- Recreating specialized controls using generic buttons.
