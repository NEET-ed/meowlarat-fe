<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/logo.png" alt="Logo" /> <span>MeowLarat</span>
    </div>
    <ul class="nav-links">
      <router-link to="/" class="nav-item">Beranda</router-link>
      <router-link to="/adopsi" class="nav-item">Adopsi</router-link>
      <router-link to="/lapor" class="nav-item">Lapor</router-link>
      <router-link to="/catpedia" class="nav-item">CatPedia</router-link>
      <router-link to="/findplace" class="nav-item">FindPlace</router-link>
      <router-link to="/forum" class="nav-item">Forum</router-link>
      <router-link to="/profil" class="nav-item">Profil</router-link>
    </ul>
    <div>
      <router-link to="/login" class="login-daftar">login</router-link>
      <router-link to="/daftar" class="login-daftar">Daftar</router-link>
    </div>
  </nav>

</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  color: #fffce8;
  background: linear-gradient(to bottom, #004c80 40%, #007ac2 100%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.4rem;
  gap: 8px;
}

.logo span {
  color: #fff;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 45px;
  font-weight: 600;
}

.nav-item {
  color: #fffce8;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.nav-item:hover {
  opacity: 0.7;
}

.auth-buttons {
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  margin-left: 8px;
  font-weight: bold;
  cursor: pointer;
}

.login-daftar {
  background-color: #fffce8;
  color: #005b99;
  border: none;
  border-radius: 10px;
  padding: 8px 26px;
  margin-left: 18px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

.login-daftar:hover {
  background-color: #f0f0d8;
}

.router-link-exact-active {
  border-bottom: 3px solid #fffce8; /* garis bawah sebagai tanda aktif */
  padding-bottom: 4px;
}

.router-link-exact-active.nav-item {
  color: #ffeb99; /* warna teks sedikit berbeda untuk halaman aktif */
}
</style>