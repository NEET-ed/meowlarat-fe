<template>
    <Navbar />
  
    <!-- Hero Section -->
    <section class="catpedia-hero">
      <div class="container">
        <h1><span>Cat</span>Pedia</h1>
        <p>Pusat panduan, fakta, dan informasi untuk merawat kucing Anda.</p>
      </div>
    </section>
  
    <!-- Artikel Populer -->
    <section class="artikel-section">
      <h2 class="section-title">Artikel Populer</h2>
      <div class="artikel-populer" v-if="popularArticles.length">
        <div
          v-for="(article, index) in popularArticles"
          :key="index"
          class="artikel-card populer"
        >
          <div class="artikel-kategori">{{ article.category }}</div>
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <router-link :to="'/artikel/' + article.slug" class="readmore">
            Baca Selengkapnya →
          </router-link>
        </div>
      </div>
    </section>
  
    <!-- Artikel Terbaru -->
    <section class="artikel-section">
      <h2 class="section-title">Artikel Terbaru</h2>
      <div class="artikel-grid" v-if="latestArticles.length">
        <div
          v-for="(article, index) in latestArticles"
          :key="index"
          class="artikel-card"
          :class="article.colorClass"
        >
          <div class="artikel-kategori">{{ article.category }}</div>
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <router-link :to="'/artikel/' + article.slug" class="readmore">
            Baca Selengkapnya →
          </router-link>
        </div>
      </div>
      <button class="load-more">Lebih Banyak</button>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import Navbar from "../components/Navbar.vue";
  
  const popularArticles = ref([]);
  const latestArticles = ref([]);
  
  // Mock data sementara — bisa diganti axios call ke DB nanti
  onMounted(async () => {
    popularArticles.value = [
      {
        category: "KESEHATAN & POPULASI",
        title: "Mengapa Program TNR Penting untuk Kucing Liar?",
        description:
          "Program Trap-Neuter-Return (TNR) adalah metode yang paling manusiawi dan efektif untuk mengelola populasi kucing liar.",
        slug: "program-tnr-kucing-liar",
      },
    ];
  
    latestArticles.value = [
      {
        category: "KESEHATAN",
        title: "Mengenali Gejala Awal FIV dan Pencegahannya",
        description:
          "Virus FIV sering luput dari perhatian. Ketahui tanda-tanda yang harus diwaspadai dan langkah proaktif.",
        slug: "gejala-fiv-pencegahan",
        colorClass: "red-border",
      },
      {
        category: "PERAWATAN",
        title: "Panduan Grooming Dasar untuk Kucing Rumahan",
        description:
          "Tips mudah memandikan, menyikat bulu, dan memotong kuku kucing tanpa membuatnya stres.",
        slug: "panduan-grooming-kucing",
        colorClass: "purple-border",
      },
      {
        category: "PERILAKU",
        title: "Cara Mengatasi Agresivitas Mendadak pada Kucing",
        description:
          "Jika kucing Anda tiba-tiba menjadi agresif, itu bisa jadi pertanda masalah kesehatan atau lingkungan.",
        slug: "mengatasi-agresivitas-kucing",
        colorClass: "orange-border",
      },
      {
        category: "NUTRISI",
        title: "Memilih Makanan Basah vs. Kering: Mana yang Terbaik?",
        description:
          "Perdebatan klasik: dry food atau wet food? Kami mengupas tuntas manfaat dan kekurangan masing-masing.",
        slug: "makanan-basah-vs-kering",
        colorClass: "green-border",
      },
    ];
  });
  </script>
  
  <style scoped>
  /* General */
  body {
    font-family: "Poppins", sans-serif;
    background-color: #e5f2ff;
    color: #002b5b;
  }
  
  /* Hero Section */
  .catpedia-hero {
    color: #fffce8;
    padding: 100px 20px;
    text-align: center;
  }
  
  .catpedia-hero h1 {
    font-size: 4rem;
    margin-bottom: 10px;
  }
  
  .catpedia-hero h1 span {
    color: #ffd77a;
  }
  
  .catpedia-hero p {
    font-size: 1.3rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  /* Artikel Section */
  .artikel-section {
    background-color: #d8eaff;
    margin: 50px auto;
    border-radius: 20px;
    padding: 30px 30px;
    width: 90%;
    max-width: 1100px;
    min-width: 100px;
  }
  
  .section-title {
    color: #0b4b92;
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
  
  /* Flex section for popular */
  .artikel-populer {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    background-color: #f0f9ff;
    border-radius: 20px;
    padding: 20px;
  }
  
  /* Responsive Grid for latest articles */
  .artikel-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    width: 100%;
  }
  
  /* Card Style */
  .artikel-card {
    background: #fff;
    border-radius: 20px;
    padding: 25px 25px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .artikel-card.populer {
    background: #e8fff1;
  }
  
  .artikel-card:hover {
    transform: translateY(-5px);
  }
  
  .artikel-kategori {
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  
  .artikel-card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #1a1a1a;
  }
  
  .artikel-card p {
    font-size: 0.95rem;
    color: #444;
    margin-bottom: 10px;
  }
  
  .readmore {
    color: #0077c2;
    font-weight: 600;
    text-decoration: none;
    margin-top: auto;
  }
  
  .load-more {
    display: block;
    margin: 30px auto 0;
    background-color: #0077c2;
    color: white;
    padding: 12px 30px;
    border-radius: 12px;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
  
  .load-more:hover {
    background-color: #005b99;
  }
  
  /* Category Colors */
  .red-border {
    border-top: 4px solid #ff4d4d;
  }
  
  .purple-border {
    border-top: 4px solid #c77dff;
  }
  
  .orange-border {
    border-top: 4px solid #ffa54d;
  }
  
  .green-border {
    border-top: 4px solid #52d17a;
  }
  
  /* Responsive typography */
  @media (max-width: 900px) {
    .catpedia-hero h1 {
      font-size: 3rem;
    }
  }
  </style>
  