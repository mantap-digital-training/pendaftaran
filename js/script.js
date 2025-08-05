//fungsi ambil data pelatihan dan tanggal
  function simpanDataPelatihan(pelatihan, tanggal) {
  // Simpan ke localStorage
  localStorage.setItem("pelatihan", pelatihan);
  localStorage.setItem("tanggal", tanggal);

  // Arahkan ke halaman pendaftaran dengan parameter query
  window.location.href = "daftar_pelatihan.html?pelatihan=" + encodeURIComponent(pelatihan) + "&tanggal=" + encodeURIComponent(tanggal);
}


// Autoisi pelatihan & tanggal jika ada di URL

    function kirimData() {
      const nama = document.getElementById('namaLengkap').value;
      const email = document.getElementById('email').value;
      const hp = document.getElementById('nomorHP').value;
      const instansi = document.getElementById('instansi').value;
      const pelatihan = document.getElementById('pelatihan').value;
      const tanggal = document.getElementById('tanggal').value;

      const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
      const hpPattern = /^[0-9]{10,}$/;

      if (!nama || !email || !hp || !instansi || !pelatihan || !tanggal) {
        alert("Harap lengkapi semua isian formulir!");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Format email tidak valid!");
        return;
      }

      if (!hpPattern.test(hp)) {
        alert("Nomor HP harus berupa angka dan minimal 10 digit!");
        return;
      }

      const url = `hasil_pendaftaran.html?nama=${encodeURIComponent(nama)}&email=${encodeURIComponent(email)}&hp=${encodeURIComponent(hp)}&instansi=${encodeURIComponent(instansi)}&pelatihan=${encodeURIComponent(pelatihan)}&tanggal=${encodeURIComponent(tanggal)}`;
      window.location.href = url;
    }

    
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const pelatihan = params.get("pelatihan");
    const tanggal = params.get("tanggal");

    if (pelatihan) {
      document.getElementById("pelatihan").value = decodeURIComponent(pelatihan);
    }

    if (tanggal) {
      document.getElementById("tanggal").value = decodeURIComponent(tanggal);
    }
}



//fungsi hasil pendaftaran
    const params = new URLSearchParams(window.location.search);
    document.getElementById("nama").textContent = params.get("nama") || "-";
    document.getElementById("email").textContent = params.get("email") || "-";
    document.getElementById("hp").textContent = params.get("hp") || "-";
    document.getElementById("instansi").textContent = params.get("instansi") || "-";
    document.getElementById("pelatihan").textContent = params.get("pelatihan") || "-";
    document.getElementById("tanggal").textContent = params.get("tanggal") || "-";
 
