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

## Apa yang bergerak

- **Hero**: kolase kertas ikut gerakan mouse (parallax, mati di HP dan saat
  `prefers-reduced-motion`); dua tiket kertas berisi stack dan lama pengalaman.
- **Work**: tombol panah membuka dialog detail proyek; isinya diambil dari timeline, jadi
  satu sumber. Kartu hamora-on membuka tautan luar.
- **Skills**: klik chip menyorot proyek di Experience yang memakainya.
- **Experience**: peta karier, garis berkelok SVG yang menggambar dirinya saat masuk layar,
  lima perhentian yang membuka perusahaan itu di akordeon. Di HP dan saat print, peta
  disembunyikan dan akordeon berdiri sendiri.
- Bagian-bagian muncul saat di-scroll (IntersectionObserver); nav menandai bagian aktif.

## Mengubah isi

Semua teks ada di `index.html`:

- **Hero**: label, judul, kalimat, dan tombol di `<div class="hero-text">`; tiket di
  `<div class="ticket …">`; kolase kertasnya SVG di `<div class="hero-art">`, bentuk
  sobekannya path SVG statis di file yang sama.
- **Work**: `<section id="work">`, satu `<article class="card">` per sistem. Tombol panah
  dengan `data-open="p-…"` membuka detail dari timeline; `<a class="circ" href="…">`
  membuka tautan luar.
- **Skills**: chip di `<section id="skills">`, dicocokkan ke baris `.tech` tiap proyek;
  `data-match` untuk pola khusus, mis. `C#` → `.NET`.
- **Experience**: perhentian peta di `<div class="journey">` (`<a class="stop" href="#job-…">`,
  posisi dalam persen; garisnya `<path>` di viewBox 1000×420, satu ruas per perhentian agar
  tidak melintasi label). Perusahaan di `<details class="job" id="job-…">`, proyek di
  `<div class="proj" id="p-…">`.
- **Side Projects** dan **About**: `<section id="side">` dan `<section id="about">`.

Setelah mengubah markup, buka halaman dan cek konsol browser: skrip di bagian bawah
mengandaikan elemen-elemen di atas ada; satu elemen yang dihapus bisa menghentikan skrip
sebelum sempat menyalakan bagian lain.

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
