(function searchSystem() {
  const input = document.getElementById("searchInput");
  const notFound = document.getElementById("searchNotFound");

  if (!input) return;

  input.addEventListener("input", (event) => {
    const keyword = event.target.value.trim().toLowerCase();
    const filtered = products.filter((item) => item.nama.toLowerCase().includes(keyword));

    renderProducts(filtered);

    if (notFound) {
      notFound.hidden = filtered.length !== 0;
    }
  });
})();
