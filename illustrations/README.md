# Work-card illustrations

The four product shots in `assets/work/` are authored illustrations, not
screenshots: faux UI of each system, built with the
[Stageshow](https://github.com/benjitaylor/skills) React kit (MIT) and filmed
to PNG. Each folder here is a Stageshow example. `jl-look/look.css` maps this
site's palette and type to the kit's tokens so the stills read as one family;
`jl-look/hamora.css` is hamora-on's own look, read from pwmora.com.

| Folder | System | Layout (gold example it follows) |
|---|---|---|
| `jl-hamora` | hamora-on (PortfolioOS) | corner chip (`corner-chip`), the product's own look, realistic fidelity |
| `jl-roster` | Security Roster System (freelance) | phone hero (`phone-touch`) with a satellite card |
| `jl-reins` | Core Reinsurance System | pinned bottom bleed + satellite (`static-card`) |
| `jl-credit` | Credit Policy System | close-up of one row (`close-up`) |

Every still ships twice: the wide design (560 × 400, shown 1:1 in the 2-column
grid) and a compact redesign for the phone column (358 × 300), switched with
`<picture>` at 571px. Stills for Sales4U and the Database Migration were built
too and then dropped from the page; they are in the git history (`work-stills-2`).

## Re-film

```sh
git clone https://github.com/benjitaylor/skills
cp -r illustrations/jl-* skills/stageshow/examples/
cd skills/stageshow && npm install --include=optional && npm run dev
```

Then, with the dev server up (the playground serves `?capture=<name>`):

```sh
for n in hamora roster reins credit; do
  node scripts/film.mjs "http://127.0.0.1:5173/?capture=jl-$n" --select ".jl-$n .ss-stage" --still --gate --pad 0 --width 1280 --out ../../assets/work/$n-wide.png
  node scripts/film.mjs "http://127.0.0.1:5173/?capture=jl-$n" --select ".jl-$n .ss-stage" --still --gate --pad 0 --width 390  --out ../../assets/work/$n-compact.png
done
```

`--gate` must end `rehearsal passed` for every still. `REHEARSAL.md` records
the last pass and the fresh-eye reviews.
