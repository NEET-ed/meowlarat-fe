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

    <!-- 🔹 Bagian kanan: Nama + Foto Profil -->
    <div class="profile-section">
      <span class="username">Mudrik Ganteng</span>
      <router-link to="/profil">
        <img src="/cat.png" alt="User Profile" class="profile-avatar" />
      </router-link>
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

/* 🔹 Avatar profil + nama user */
.profile-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.username {
  font-weight: 600;
  font-size: 1rem;
  color: #fffce8;
}

.profile-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid #fffce8;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.profile-avatar:hover {
  transform: scale(1.08);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
</style>
