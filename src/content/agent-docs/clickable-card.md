# Clickable Card

## Purpose

Defines the interaction pattern for cards that function as a single navigation link or action. The entire card is interactive, providing a consistent hover treatment and clear navigation affordance.

## Rules

- Use the shared clickable-card pattern whenever the entire card acts as a link or button.
- On hover, change the border to primary blue.
- Translate the trailing arrow slightly right.
- Preserve the card's position and elevation.
- Keep hover behavior consistent across cards.

## Implementation

- Reuse styles in `clickable-card.module.css`.
- Apply interaction to the full card rather than individual content regions.
- Use semantic links for navigation.
- Use buttons for actions.
- Preserve visible keyboard focus states.

## Avoid

- Hover shadows, elevation, or vertical movement.
- Custom hover animations for individual cards.
- Using this pattern for selectable cards.

## Related Patterns

**Selectable cards** represent selection or filtering rather than navigation. Their selected state already uses a blue border and must remain visually distinct from clickable-card hover behavior.
