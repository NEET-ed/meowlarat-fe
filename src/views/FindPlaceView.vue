<template>
  <Navbar />

  <!-- Hero Section -->
  <section class="findplace-hero">
    <div class="container">
      <h1><span>Find</span>Place</h1>
      <p>Cari toko dan dokter hewan terdekat!</p>
    </div>
  </section>

  <!-- Lokasi Petshop & Vet -->
  <section class="findplace-section">
    <div class="inner-container">
      <h2 class="section-title">Lokasi Petshop & Vet</h2>
      <div class="map-placeholder">
        <p>Peta akan ditampilkan di sini...</p>
      </div>
    </div>
  </section>

  <!-- Rekomendasi Petshop & Vet -->
  <section class="findplace-section">
    <div class="inner-container">
      <div class="section-header">
        <h2 class="section-title">Rekomendasi Petshop & Vet</h2>
        <div class="carousel-nav">
          <button @click="scrollCarousel('petshops', -1)">‹</button>
          <button @click="scrollCarousel('petshops', 1)">›</button>
        </div>
      </div>

      <div ref="petshopsCarousel" class="carousel-track">
        <div v-for="(shop, index) in petshops" :key="index" class="place-card">
          <img :src="shop.image" alt="Petshop Image" />
          <h3>{{ shop.name }}</h3>
          <p class="address">{{ shop.address }}</p>
          <div class="stars">
            <span v-for="star in shop.rating" :key="star">⭐</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Rekomendasi Petshop Online -->
  <section class="findplace-section">
    <div class="inner-container">
      <div class="section-header">
        <h2 class="section-title">Rekomendasi Petshop Online</h2>
        <div class="carousel-nav">
          <button @click="scrollCarousel('onlineShops', -1)">‹</button>
          <button @click="scrollCarousel('onlineShops', 1)">›</button>
        </div>
      </div>

      <div ref="onlineCarousel" class="carousel-track">
        <div v-for="(shop, index) in onlineShops" :key="index" class="place-card online">
          <div class="shop-source">{{ shop.source }}</div>
          <h3>{{ shop.name }}</h3>
          <p>{{ shop.description }}</p>
          <a :href="shop.link" target="_blank" class="visit-btn">Kunjungi Toko</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";

const petshopsCarousel = ref(null);
const onlineCarousel = ref(null);

const petshops = ref([]);
const onlineShops = ref([]);

// dummy data (bisa diganti axios nanti)
onMounted(() => {
  petshops.value = [
    {
      name: "Gerlong Petshop",
      image: "https://via.placeholder.com/250x150",
      address: "Jl. Gegerkalong Hilir, No. 51, Parongpong",
      rating: 5,
    },
    {
      name: "Klinik Hewan Ozora",
      image: "https://via.placeholder.com/250x150",
      address: "Jl. Setrasari III Ruko 2C, Sukarasa",
      rating: 5,
    },
    {
      name: "Cimu PetShop",
      image: "https://via.placeholder.com/250x150",
      address: "Jl. Ciwaruga, No. 28, Parongpong",
      rating: 5,
    },
    {
      name: "Pets & Care Bandung",
      image: "https://via.placeholder.com/250x150",
      address: "Jl. Sukajadi No. 40",
      rating: 4,
    },
  ];

  onlineShops.value = [
    {
      source: "SHOPEE.CO.ID",
      name: "Toko Kucing Gemoy",
      description:
        "Menjual perlengkapan grooming dan makanan dengan harga terjangkau dan rating tinggi.",
      link: "https://shopee.co.id",
    },
    {
      source: "PETCARE.ID",
      name: "MeongCare",
      description:
        "Dikelola oleh dokter hewan, menjual produk kesehatan dan perawatan premium.",
      link: "https://petcare.id",
    },
    {
      source: "TOKOPEDIA.COM",
      name: "CatLovers Store",
      description: "Aneka makanan dan vitamin hewan peliharaan favorit kamu!",
      link: "https://tokopedia.com",
    },
  ];
});

const scrollCarousel = (type, direction) => {
  const carousel =
    type === "petshops" ? petshopsCarousel.value : onlineCarousel.value;
  const scrollAmount = carousel.offsetWidth * 0.8;
  carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
};
</script>

<style scoped>
body {
  font-family: "Poppins", sans-serif;
  background-color: #e5f2ff;
  color: #002b5b;
}

/* Hero Section */
.findplace-hero {
  color: #fffce8;
  padding: 100px 20px;
}

.findplace-hero h1 {
  font-size: 4rem;
  margin-bottom: 10px;
}

.findplace-hero h1 span {
  color: #ffd77a;
}

.findplace-hero p {
  font-size: 1.3rem;
  max-width: 600px;
}

/* Blue Section */
.findplace-section {
  background-color: #d8eaff;
  margin: 50px auto;
  border-radius: 20px;
  padding: 50px 0;
}

/* ✅ inner-container to center blue box content */
.inner-container {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  text-align: left;
}

.section-title {
  color: #0b4b92;
  font-weight: 700;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

/* Map placeholder */
.map-placeholder {
  background: #f0f9ff;
  border-radius: 15px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 1rem;
}

/* Header with arrows */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.carousel-nav button {
  background-color: #0b4b92;
  color: white;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s;
}

.carousel-nav button:hover {
  background-color: #083b75;
}

/* Carousel track */
.carousel-track {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  padding-bottom: 5px;
  scrollbar-width: none;
}

.carousel-track::-webkit-scrollbar {
  display: none;
}

/* Card style */
.place-card {
  flex: 0 0 auto;
  width: 250px;
  background: #fff;
  border-radius: 20px;
  padding: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
}

.place-card:hover {
  transform: translateY(-5px);
}

.place-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 10px;
}

.place-card h3 {
  color: #002b5b;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.place-card .address {
  color: #444;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.stars {
  color: #f8c52c;
  font-size: 1rem;
}

/* Online cards */
.place-card.online {
  background: #f0f9ff;
}

.shop-source {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.visit-btn {
  display: inline-block;
  background-color: #0077c2;
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 10px;
}

.visit-btn:hover {
  background-color: #005b99;
}

/* Responsive */
@media (max-width: 900px) {
  .findplace-hero h1 {
    font-size: 3rem;
  }
  .inner-container {
    width: 92%;
  }
  .place-card {
    width: 220px;
  }
}

@media (max-width: 600px) {
  .findplace-hero {
    padding: 80px 15px;
  }
  .findplace-hero h1 {
    font-size: 2.5rem;
  }
  .findplace-section {
    padding: 30px 0;
  }
  .section-title {
    font-size: 1.5rem;
  }
  .place-card {
    width: 200px;
  }
}
</style>
