# 🚀 Portofolio Pribadi - Safrust

Website portofolio pribadi modern dan responsif yang dibangun dengan HTML, Tailwind CSS, dan JavaScript.

## ✨ Fitur

- 🎨 Desain modern dengan gradient dan animasi
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark theme yang elegan
- 🎭 Animasi smooth dan interaktif
- 📧 Form kontak
- 🔗 Integrasi social media
- ⚡ Fast loading dengan CDN

## 🛠️ Teknologi

- **HTML5** - Struktur website
- **Tailwind CSS** - Styling modern
- **JavaScript** - Interaktivitas
- **Font Awesome** - Icons

## 📂 Struktur Proyek

```
safrust/
│
├── index.html          # Halaman utama
├── script.js           # JavaScript functionality
└── README.md           # Dokumentasi
```

## 🚀 Cara Menggunakan

1. Clone repository ini
2. Buka `index.html` di browser Anda
3. Customize konten sesuai kebutuhan Anda:
   - Ganti foto profil
   - Update informasi pribadi
   - Tambahkan proyek Anda
   - Sesuaikan link social media

## 📝 Customization

### Mengganti Foto Profil

Ganti URL di bagian hero section:

```html
<img src="URL_FOTO_ANDA" alt="Profile" />
```

### Menambah Proyek

Duplicate dan edit card proyek di section `#projects`

### Mengubah Warna

Edit konfigurasi Tailwind di `<head>`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#8b5cf6",
      },
    },
  },
};
```

## 🌐 Deployment

Website ini dapat di-deploy ke:

- **Netlify** (Recommended) - Gratis, mudah, auto-deploy dari GitHub
- **Vercel** - Alternatif yang bagus
- **GitHub Pages** - Gratis hosting dari GitHub
- **Firebase Hosting** - Dari Google

## 📧 Contact Form Integration

Untuk mengaktifkan form kontak, Anda bisa menggunakan:

1. **Netlify Forms** (Termudah untuk Netlify):

   ```html
   <form name="contact" method="POST" data-netlify="true"></form>
   ```

2. **Formspree** (Universal):

   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST"></form>
   ```

3. **EmailJS** (Client-side):
   - Daftar di EmailJS.com
   - Tambahkan SDK
   - Konfigurasi service

## 📄 License

MIT License - Bebas digunakan untuk proyek pribadi dan komersial

## 👨‍💻 Author

**Safrust**

- GitHub: [@Safrust](https://github.com/Safrust)
- Website: [Coming Soon]

---

Made with ❤️ and ☕
