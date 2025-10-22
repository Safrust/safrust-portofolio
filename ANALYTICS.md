# 📊 Cara Menambahkan Google Analytics

## Langkah-langkah:

1. **Daftar Google Analytics**

   - Kunjungi: https://analytics.google.com/
   - Buat akun dan property baru
   - Pilih "Web" sebagai platform

2. **Dapatkan Tracking ID**

   - Setelah setup, Anda akan mendapat Measurement ID (format: G-XXXXXXXXXX)

3. **Tambahkan ke Website**
   - Buka file `index.html`
   - Tambahkan kode berikut di dalam tag `<head>`, sebelum `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

4. **Ganti G-XXXXXXXXXX** dengan Measurement ID Anda

5. **Push ke GitHub**

   ```bash
   git add .
   git commit -m "Add Google Analytics"
   git push
   ```

6. **Verifikasi**
   - Buka Google Analytics dashboard
   - Tunggu 24-48 jam untuk data mulai muncul
   - Atau buka website Anda untuk test real-time tracking

## Fitur yang Bisa Dipantau:

- 📈 Jumlah pengunjung
- 🌍 Lokasi pengunjung
- 📱 Device yang digunakan (mobile/desktop)
- ⏱️ Durasi kunjungan
- 📄 Halaman yang paling banyak dikunjungi
