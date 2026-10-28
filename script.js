document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('aspirasiForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = document.getElementById('nama').value;
      const pesan = document.getElementById('pesan').value;

      if (nama.trim() === '' || pesan.trim() === '') {
        alert('Harap masukkan nama dan pesan Anda!');
        return;
      }

      alert(`Terima kasih, ${nama}! Pesan aspirasi Anda berhasil dikirim ke pengurus organisasi.`);
      form.reset();
    });
  }
});