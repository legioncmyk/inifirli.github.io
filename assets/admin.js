(function adminSystem() {
  const loginForm = document.getElementById("loginForm");
  const loginMsg = document.getElementById("loginMsg");
  const statusEl = document.getElementById("adminStatus");
  const logoutBtn = document.getElementById("logoutBtn");
  const statsEl = document.getElementById("dashboardStats");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("username")?.value;
      const password = document.getElementById("password")?.value;

      if (username === "admin" && password === "admin123") {
        localStorage.setItem("isAdminLoggedIn", "true");
        if (loginMsg) loginMsg.textContent = "Login berhasil, mengalihkan ke dashboard...";
        window.location.href = "./dashboard.html";
      } else if (loginMsg) {
        loginMsg.textContent = "Username/password salah.";
      }
    });
  }

  if (statusEl) {
    const loggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    statusEl.textContent = loggedIn ? "Admin sedang login." : "Belum login, silakan login dahulu.";
  }

  if (statsEl) {
    const stats = [
      { label: "Total Produk", value: products.length },
      { label: "Pesanan Hari Ini", value: 18 },
      { label: "Pelanggan Aktif", value: 126 },
      { label: "Pesanan Selesai", value: 320 },
      { label: "Chat Masuk", value: 11 },
      { label: "Stok Ready", value: products.filter((p) => p.status === "Ready").length }
    ];

    statsEl.innerHTML = stats.map((s) => `<div class="stat"><strong>${s.value}</strong><p>${s.label}</p></div>`).join("");
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("isAdminLoggedIn");
      window.location.href = "./login.html";
    });
  }
})();
