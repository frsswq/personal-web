import * as stylex from "@stylexjs/stylex";

// Warm "stone" grey palette (matches the Tailwind stone scale).
export const colors = stylex.defineVars({
  // white page surface, so the grey cards read against it
  background: "#ffffff",
  // light-grey card surface (visitors.now bg-2)
  card: "#f6f6f5",
  // hairline card border
  cardBorder: "rgb(0 0 0 / 0.06)",
  // stone-200, hairline rules
  divider: "#e7e5e4",
  // links read as normal text (stone-900)
  link: "#1c1917",
  // stone-300, the soft link underline
  linkUnderline: "#d6d3d1",
  // stone-400, link underline on hover
  linkUnderlineHover: "#a8a29e",
  // stone-400, secondary text
  muted: "#a8a29e",
  // stone-900, near-black body text
  text: "#1c1917",
});

export const fonts = stylex.defineVars({
  sans: '"Open Runde", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
});

export const space = stylex.defineVars({
  // tight gap inside a group (name + role)
  block: "0.125rem",
  // side padding on mobile
  pageInline: "1.25rem",
  // side padding on wide screens
  pageInlineLarge: "2.5rem",
  // top and bottom padding
  pageTop: "4rem",
  // gap between stacked cards
  stack: "0.625rem",
});
