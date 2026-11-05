# jflumbansiantar.github.io

Portfolio sekaligus resume Julia Lumbansiantar. Live di **https://jflumbansiantar.github.io**.

Satu halaman: hero kolase kertas sobek (SVG), lalu Work, Skills, Experience, Side
Projects, dan About di bawahnya. Dicetak (Print / Save as PDF), halaman yang sama menjadi
resume utuh.

## Isi repo

| Path | Isi |
|---|---|
| `index.html` | Seluruh situs: HTML, CSS, dan JS dalam satu file, tanpa build step |
| `assets/work/*.png` | Still produk untuk kartu Systems That Shipped (wide 560×400, compact 358 lebar) |
| `illustrations/` | Sumber still produk (Stageshow kit), cara memfilmkan ulang, dan catatan review |

## Mengubah isi

Semua teks ada di `index.html`:

- **Hero**: tiga slide (label, judul, kalimat, tombol) di `<div class="slides">`; kolase kertasnya adalah SVG di `<div class="hero-art">`, bentuk sobekannya adalah path SVG statis di file yang sama.
- **Work**: `<section id="work">`, satu `<article class="card">` per sistem. Tombol panah dengan `data-open="p-…"` membuka detail dari timeline; `<a class="circ" href="…">` membuka tautan luar.
- **Skills**: chip di `<section id="skills">`. Klik chip menyorot proyek di Experience yang memakainya (dicocokkan ke baris `.tech`; `data-match` untuk pola khusus, mis. `C#` → `.NET`).
- **Experience**: `<details class="job">` per perusahaan, `<div class="proj" id="p-…">` per proyek.
- **Side Projects** dan **About**: `<section id="side">` dan `<section id="about">`.

Still produk: lihat `illustrations/README.md`.

## Menjalankan lokal

Buka `index.html` langsung di browser, atau:

```bash
python3 -m http.server 8000
```

lalu buka http://localhost:8000. Font dimuat dari Google Fonts, jadi butuh internet
untuk tampilan yang sama dengan live; tanpa internet jatuh ke font sistem.

## Deploy

GitHub Pages dari branch `master`, folder root. Setiap merge ke `master` tayang
otomatis dalam 1–2 menit.

## Kredit

- Still produk dibuat dengan [Stageshow](https://github.com/benjitaylor/skills) (MIT).
- Font: Instrument Serif, Manrope, Caveat (Google Fonts); Onest dan Bricolage Grotesque
  untuk still hamora-on.
