const products = [
  { nama: "Canva Pro 1 Bulan", harga: 35000, status: "Ready" },
  { nama: "Netflix Premium 1 Profile", harga: 45000, status: "Ready" },
  { nama: "CapCut Pro 1 Bulan", harga: 25000, status: "Ready" },
  { nama: "Spotify Premium 1 Bulan", harga: 29000, status: "Ready" },
  { nama: "ChatGPT Plus Share", harga: 65000, status: "Terbatas" },
  { nama: "YouTube Premium 1 Bulan", harga: 30000, status: "Ready" },
  { nama: "Viu Premium 1 Tahun", harga: 20000, status: "Ready" },
  { nama: "Adobe Creative Cloud", harga: 85000, status: "Ready" }
];

function formatRupiah(num) {
  return `Rp ${Number(num).toLocaleString("id-ID")}`;
}

function renderProducts(productList = products) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = productList
    .map(
      (product, idx) => `
      <article class="product-card">
        <h3>${product.nama}</h3>
        <p>${formatRupiah(product.harga)}</p>
        <p class="status">Status: ${product.status}</p>
        <button type="button" data-index="${idx}" class="buy-btn">BELI</button>
      </article>
    `
    )
    .join("");
}

function handleBuyButtons() {
  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".buy-btn");
    if (!btn) return;
    const idx = Number(btn.dataset.index);
    const selectedProduct = products[idx];
    if (!selectedProduct) return;

    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    window.location.href = "./pages/payment.html";
  });
}

function showLastProduct() {
  const el = document.getElementById("lastProduct");
  if (!el) return;
  const data = localStorage.getItem("selectedProduct");
  if (!data) {
    el.textContent = "Belum ada produk dipilih.";
    return;
  }

  const product = JSON.parse(data);
  el.innerHTML = `<p>${product.nama} - ${formatRupiah(product.harga)} (${product.status})</p>`;
}

renderProducts();
handleBuyButtons();
showLastProduct();
