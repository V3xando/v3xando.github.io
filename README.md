# jflumbansiantar.github.io

Portfolio sekaligus resume Julia Lumbansiantar. Live di **https://jflumbansiantar.github.io**.

Satu halaman: dinding polaroid dari ilustrasi sendiri. Lima polaroid membawa catatan
(Work, Skills, Experience, Side Projects, About) dan membuka bagian itu sebagai lembar
di atas halaman. Dicetak (Print / Save as PDF), halaman yang sama menjadi resume utuh.

## Isi repo

| Path | Isi |
|---|---|
| `index.html` | Seluruh situs: HTML, CSS, dan JS dalam satu file, tanpa build step |
| `assets/avatar.webp` | Ilustrasi hero, dipotong jadi 20 polaroid lewat CSS sprite |
| `assets/work/*.png` | Still produk untuk kartu Systems That Shipped (wide 560×400, compact 358 lebar) |
| `illustrations/` | Sumber still produk (Stageshow kit), cara memfilmkan ulang, dan catatan review |

## Mengubah isi

Semua teks ada di `index.html`:

- **Hero**: nama, jabatan, satu kalimat di `<div class="hero-text">`. Polaroid ada di `<nav class="mosaic">`; tile bercatatan adalah `<a class="tile hot" href="#…">`, posisi potongan gambarnya dari `--px`/`--py`.
- **Work**: `<section id="work">`, satu `<article class="card">` per sistem. Tombol panah dengan `data-open="p-…"` membuka detail dari timeline; `<a class="circ" href="…">` membuka tautan luar.
- **Skills**: chip di `<section id="skills">`. Klik chip menyorot proyek di Experience yang memakainya (dicocokkan ke baris `.tech`; `data-match` untuk pola khusus, mis. `C#` → `.NET`).
- **Experience**: `<details class="job">` per perusahaan, `<div class="proj" id="p-…">` per proyek.
- **Side Projects** dan **About**: `<section id="side">` dan `<section id="about">`.

Ganti ilustrasi hero: siapkan gambar 4:5 dengan latar krem (`#F3EEE5`), simpan sebagai
`assets/avatar.webp`, dan sesuaikan `--px`/`--py` kalau jumlah kolom/baris berubah
(`background-size` di `.tile i` adalah `kolom×100% baris×100%`).

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
