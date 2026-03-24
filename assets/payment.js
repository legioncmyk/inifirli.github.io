(function paymentFlow() {
  const selectedEl = document.getElementById("selectedProduct");
  const waOrderBtn = document.getElementById("waOrderBtn");
  const waQrisBtn = document.getElementById("waQrisBtn");

  const data = localStorage.getItem("selectedProduct");
  let product = null;

  if (data) {
    product = JSON.parse(data);
  }

  if (selectedEl) {
    selectedEl.innerHTML = product
      ? `<p><strong>Produk:</strong> ${product.nama}</p><p><strong>Harga:</strong> ${formatRupiah(product.harga)}</p><p><strong>Status:</strong> ${product.status}</p>`
      : "<p>Belum ada produk dipilih. Kembali ke beranda untuk memilih produk.</p>";
  }

  if (waOrderBtn) {
    waOrderBtn.addEventListener("click", () => {
      const nama = product?.nama || "Belum memilih produk";
      const harga = product ? formatRupiah(product.harga) : "-";
      const msg = encodeURIComponent(`Halo admin, saya ingin order.\nProduk: ${nama}\nHarga: ${harga}`);
      window.open(`https://wa.me/6285143041255?text=${msg}`, "_blank");
    });
  }

  if (waQrisBtn) {
    waQrisBtn.addEventListener("click", () => {
      const msg = encodeURIComponent("Halo admin, saya ingin pembayaran via QRIS.");
      window.open(`https://wa.me/6285169307731?text=${msg}`, "_blank");
    });
  }
})();
