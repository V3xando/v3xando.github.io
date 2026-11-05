# Rehearsal: work-card stills

Four stills (no motion), wide 560 × 400 and compact 358 × 300, look `jl-look/look.css`
(site tokens: paper well, cream canvas, ink text, terracotta accent, Manrope).

## jl-reins
Gold: static-card (kept: stage recipe, sidebar + list + satellite over the sidebar, bars
on filler rows, real words on the selected row, its neighbors and the total; changed:
sizes for the 560 slot, a Validated badge under the card's name, compact drops the
card's avatar so the name fits, window moved left so the names clear the crop).
Captured: 1280 and 390, light only.
Gate: rehearsal passed (both widths).
Film: `lopsided: div.ss-row "Property Quota Share" 14px left / 8px right` → same line the
gold prints on its own selected row (the row's negative margin); stands.
`layout: rn-main leaves -12px below its last child` (390) → the list runs off the
bottom by design (bleed); stands.

## jl-sales
Gold: device-pair (kept: window pinned top-left off the bottom, phone straddling its
right edge over margin and placeholder rows, lock-screen notification from the product;
changed: the metric is response time with a falling chart, phone 220 wide, sidebar 96 so
the figure and badge clear the phone, compact drops the phone and the sidebar).
Captured: 1280 and 390.
Gate: rehearsal passed (both widths).
Film: `layout: sl-main leaves -36.8px / -132.8px below its last child` → the window runs
off the bottom (the gold prints the same line); stands.

## jl-mig
Gold: static-card's recipe with a terminal hero (`Window chrome="terminal"`, Prompt lines)
and the result card as the satellite on the right. Compact is a second composition:
the terminal runs off the right, fewer lines, the card straddles its bottom edge.
Captured: 1280 and 390.
Gate: rehearsal passed, no issues (both widths).
Film: first pass printed `uneven gutters` (the card's center sat past the terminal's
edge) and `framing: narrower than tall` at 390 → terminal widened to 420 / compact
recomposed; cleared.

## jl-credit
Gold: close-up (kept: whole window at 1.4x inset top and sides, off the bottom, one real
row between filler rows; changed: a fourth row so the pane runs off the crop, the score
as five discs plus an Approved badge, compact at 1.25x with the score in the loan line).
Captured: 1280 and 390.
Gate: rehearsal passed, no issues (both widths).
Film: `clipped: "Dewi Anggraini" clipped top by 1px` → Manrope's ascenders in the kit's
16px row line; set the row's own `--ss-row-line` tokens to 18px; cleared.

Review: fresh-eye review (review.md) requested; findings and responses appended below
when it returns.
Assumptions: the stills sit on the site's paper card at 1:1 (wide) and 358 (compact);
the page is the ground, so the stage carries no plate of its own.
Not checked: dark theme (the site has none), motion (stills only), the host page at
widths between 572 and 999px, where the wide still is shown at 540–560px (0.96–1.0).
