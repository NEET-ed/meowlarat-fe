<template>
    <Navbar/>
    <div class="profile-page">
    <!-- Header Profil -->
    <div class="profile-header">
      <img class="profile-photo" src="/cat.png" alt="Foto Profil" />
      <div class="profile-info">
        <h2 class="name">Mudrik Ganteng</h2>
        <p class="bio">
          This is bio. This is bio. This is bio. This is bio. This is bio. This is bio. This is bio. This is bio.
        </p>
        <div class="buttons">
          <button class="edit">Edit Profile</button>
          <button class="share">Share Profile</button>
        </div>
      </div>
      <div class="adoption-count">
        <p>Hitung Adopsi</p>
        <h1>01</h1>
      </div>
    </div>

    <!-- Bagian Kucing Baru Diadopsi -->
    <h3 class="section-title">Baru Diadopsi</h3>
    <div class="adopted-card">
      <img class="cat-photo" src="/cat.png" alt="Kucing Diadopsi" />
      <div class="cat-info">
        <p><strong>Nama :</strong> abul</p>
        <p><strong>Umur :</strong> 9 Bulan</p>
        <p><strong>Tanggal Lahir :</strong> 1 December 2024</p>
        <p><strong>Diadopsi Selama :</strong> 1 Minggu</p>
      </div>
    </div>

    <button class="lainnya">Lainnya</button>
  </div>
</template>

<script setup>
    import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
.profile-page {
  font-family: 'Poppins', sans-serif;
  background-color: #0077c2;
  background-image: url(/background.png);
  color: white;
  min-height: 100vh;
  padding: 30px 200px 200px;
}

.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #005fa3;
  padding: 20px 30px;
  border-radius: 15px;
  margin-bottom: 30px;
}

.profile-photo {
  width: 280px;
  height: 280px;
  border-radius: 20px;
  object-fit: cover;
  background-color: #d7ecff;
}

.profile-info {
  flex: 1;
  margin-left: 20px;
  margin-bottom: 45px;
}

.name {
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 0px;
}

.bio {
  font-size: 18px;
  margin: 10px 0;
  max-width: 500px;
}

.buttons {
  display: flex;
  gap: 15px;
  margin-top: 90px;
  margin-bottom: -80px;
}

.edit, .share {
  background-color: #006bb8;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
}

.edit:hover, .share:hover {
  background-color: #005c9a;
}

.adoption-count {
  text-align: center;
  margin-right: 50px;
  font-size: 30px;
}

.adoption-count p {
  font-weight: 600;
}

.adoption-count h1 {
  font-size: 60px;
  margin-top: 5px;
  color: #ffeb99;
}

/* Bagian Baru Diadopsi */
.section-title {
  font-weight: 600;
  margin-bottom: 10px;
}

.adopted-card {
  display: flex;
  align-items: center;
  background-color: #d7ecff;
  border-radius: 20px;
  padding: 15px;
  color: #004d80;
}

.cat-photo {
  width: 130px;
  height: 130px;
  border-radius: 15px;
  object-fit: cover;
  margin-right: 20px;
}

.cat-info p {
  margin: 5px 0;
}

.lainnya {
  margin-top: 20px;
  background-color: #f5eec0;
  border: none;
  padding: 10px 40px;
  border-radius: 30px;
  font-weight: 700;
  color: #004d80;
  cursor: pointer;
}
</style>