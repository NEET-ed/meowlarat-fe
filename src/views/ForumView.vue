<template>
  <div class="forum-page-wrapper">

    <Navbar /> 

    <main class="forum-layout-container">

      <aside class="forum-sidebar">
        <nav>
          <ul class="sidebar-menu">
            <li 
              v-for="item in sidebarItems" 
              :key="item.path" 
              :class="{ 'active': $route.path === item.path }"
            >
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
          </ul>
        </nav>
      </aside>

      <section class="forum-main-content">
        <h1 class="main-title">{{ activeCategoryTitle }}</h1>

        <div class="topic-list">
          <div 
            v-for="(topic, index) in activeTopics" 
            :key="index" 
            class="discussion-card"
            @click="openTopicDetail(topic)" 
          >
            <h2>{{ topic.title }}</h2>
            <div class="topic-meta">
              <span>{{ topic.author }}</span>
              <span class="meta-dot"> • </span>
              <span class="time-ago">{{ topic.time }}</span>
            </div>
            <p class="topic-excerpt">"{{ topic.excerpt }}"</p>
            <button class="response-btn">Add response</button> 
          </div>
          
          <div v-if="activeTopics.length === 0" class="no-topic-message">
            Belum ada topik diskusi di kategori ini. Jadilah yang pertama memulai!
          </div>

        </div>
        
        <button class="add-topic-btn" @click="openNewTopicModal">+</button>
        
      </section>
    </main>

    <div v-if="showNewTopicModal" class="modal-overlay" @click.self="closeNewTopicModal">
      <div class="modal-container">
        
        <div class="modal-header">
          <h2>Buat Topik Baru</h2>
          <button class="close-btn" @click="closeNewTopicModal">&times;</button>
        </div>

        <form @submit.prevent="submitNewTopic">
          
          <div class="form-group">
            <label for="forum-type">Jenis Forum</label>
            <select id="forum-type" v-model="newTopic.forum_type" required>
              <option value="" disabled>Pilih Kategori</option>
              <option 
                v-for="item in sidebarItems" 
                :key="item.path" 
                :value="item.name"
              >
                {{ item.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="title">Judul Topik</label>
            <input 
              type="text" 
              id="title" 
              v-model="newTopic.title" 
              placeholder="Contoh: Kucing saya tidak mau makan" 
              required
            >
          </div>

          <div class="form-group">
            <label for="description">Deskripsi Lengkap</label>
            <textarea 
              id="description" 
              v-model="newTopic.excerpt" 
              rows="4" 
              placeholder="Jelaskan masalah, pertanyaan, atau topik diskusi Anda secara detail..." 
              required
            ></textarea>
          </div>

          <div class="modal-footer">
            <button type="submit" class="submit-modal-btn">Submit</button>
          </div>

        </form>
      </div>
    </div>

    <div v-if="showDetailModal" class="modal-overlay" @click.self="closeDetailModal">
      <div class="modal-container detail-modal">
        
        <div class="modal-header">
          <h2>{{ selectedTopic.title }}</h2>
          <button class="close-btn" @click="closeDetailModal">&times;</button>
        </div>

        <div class="topic-detail-content">
          <p class="detail-meta">
            Oleh <strong>{{ selectedTopic.author }}</strong> • {{ selectedTopic.time }}
          </p>
          
          <p class="detail-excerpt">
            {{ selectedTopic.excerpt }}
            <br><br>
          </p>

          <hr>

          <h3 class="replies-title">Balasan (1)</h3>
          <div class="reply-card">
              <p><strong>Bambang S:</strong> Wah, kasusnya mirip kucing saya. Coba ganti jenis mangkuk makannya, kadang itu membantu!</p>
              <span class="reply-time">1 mnt lalu</span>
          </div>

          <div class="form-group add-reply">
              <textarea placeholder="Tulis balasan Anda di sini..." rows="2"></textarea>
              <button class="submit-modal-btn small-btn">Kirim Balasan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';

const route = useRoute();

// =================================================================
// 📌 DUMMY DATA UNTUK SEMUA KATEGORI
// =================================================================

const sidebarItems = ref([
  { name: 'Lost & Found Cats', path: '/forum/lost-found' },
  { name: 'Adoption Stories', path: '/forum/stories' },
  { name: 'Cat Health & Care', path: '/forum/health' },
  { name: 'Food & Nutrition', path: '/forum/nutrition' }, 
  { name: 'Rescue & Volunteering', path: '/forum/rescue' },
]);

const allDummyTopics = {
  '/forum/nutrition': [
    {
      title: 'Makanan kering vs basah, mana lebih baik?',
      author: 'Andi P',
      time: '5 mnt yang lalu',
      excerpt: 'Halo semuanya, aku masih bingung mau kasih makanan kering atau basah untuk kucingku. Ada yang bisa jelasin kelebihan dan kekurangannya?'
    },
    {
      title: 'Resep makanan rumahan untuk kucing',
      author: 'Rina M',
      time: '2 jam lalu',
      excerpt: 'Ada yang pernah bikin makanan kucing sendiri di rumah? Aku ingin coba buat yang sehat dan aman, biar nggak terus beli makanan kemasan.'
    }
  ],
  '/forum/lost-found': [
    { title: 'Kucing Oren hilang di daerah Bandung', author: 'Budi H', time: '1 hari yang lalu', excerpt: 'Kucing saya warna oren dengan kalung biru hilang sejak kemarin. Mohon bantuannya.' },
  ],
  '/forum/stories': [
    { title: 'Akhirnya Meong menemukan rumah permanen!', author: 'Lisa D', time: '2 hari yang lalu', excerpt: 'Setelah 6 bulan menunggu, Meong diadopsi oleh keluarga yang sangat menyayanginya! Terimakasih Meowlarat!' }
  ],
  '/forum/health': [
    { title: 'Tips Pertolongan Pertama untuk Kucing Muntah', author: 'Dr. Hewan', time: '1 minggu lalu', excerpt: 'Muntah adalah hal umum, tapi kapan kita harus panik? Berikut tips pertolongan pertama...' }
  ],
  '/forum/rescue': [
    { title: 'Butuh relawan untuk memberi makan kucing liar di Jakarta Timur', author: 'Komunitas CatCare', time: '4 jam lalu', excerpt: 'Kami membutuhkan 3 relawan lagi untuk membantu feeding day besok pagi.' }
  ],
};

// =================================================================
// LOGIKA MODAL & DINAMIS
// =================================================================

// MODAL 1: Buat Topik Baru
const showNewTopicModal = ref(false);

const openNewTopicModal = () => {
  showNewTopicModal.value = true;
};

const closeNewTopicModal = () => {
  showNewTopicModal.value = false;
  // Reset form
  newTopic.value = { forum_type: '', title: '', excerpt: '', author: 'Pengguna Baru', time: 'Baru saja' };
};

const newTopic = ref({
  forum_type: '',
  title: '',
  excerpt: '',
  author: 'Pengguna Baru', 
  time: 'Baru saja',
});

const submitNewTopic = () => {
  // Logic untuk menentukan path target
  const selectedItem = sidebarItems.value.find(item => item.name === newTopic.value.forum_type);
  const targetPath = selectedItem ? selectedItem.path : '/forum/nutrition'; 
  
  // Logic DUMMY: Tambahkan topik ke array data yang sesuai
  if (allDummyTopics[targetPath]) {
      allDummyTopics[targetPath].unshift({ 
          title: newTopic.value.title,
          author: newTopic.value.author,
          time: newTopic.value.time,
          excerpt: newTopic.value.excerpt,
      });
      alert(`Topik baru berhasil ditambahkan ke kategori ${newTopic.value.forum_type}!`);
  } else {
      alert('Gagal menemukan kategori tujuan.');
  }

  closeNewTopicModal();
};

// MODAL 2: Detail Topik (BARU)
const showDetailModal = ref(false);
const selectedTopic = ref({}); // Untuk menyimpan data topik yang sedang dilihat

const openTopicDetail = (topic) => {
  selectedTopic.value = topic; // Isi data topik
  showDetailModal.value = true; // Tampilkan modal
};

const closeDetailModal = () => {
  showDetailModal.value = false;
  selectedTopic.value = {}; // Bersihkan data
};


// LOGIKA KOMPUTASI
const activeTopics = computed(() => {
  return allDummyTopics[route.path] || []; 
});

const activeCategoryTitle = computed(() => {
    const activeItem = sidebarItems.value.find(item => item.path === route.path);
    return activeItem ? activeItem.name : 'Forum Diskusi';
});
</script>

<style scoped>
/* =================================================================
 GAYA UMUM & LAYOUT
 ================================================================= */

.forum-layout-container {
display: flex;
max-width: 1200px; 
margin: 0 auto;
min-height: calc(100vh - 80px);
padding: 30px 20px;
}

.forum-sidebar, .forum-main-content {
background-color: #DEF1FF; 
border-radius: 30px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
min-height: 700px;
}

/* =================================================================
 GAYA SIDEBAR
 ================================================================= */
.forum-sidebar {
max-width: 280px; 
min-width: 280px;
padding: 30px 0;
margin-right: 20px;
border-top-right-radius: 0;
border-bottom-right-radius: 0;
}

.sidebar-menu {
list-style: none;
padding: 0;
margin: 0;
}

.sidebar-menu li a {
display: block;
padding: 12px 30px;
color: #333;
text-decoration: none;
font-size: 1.1em;
font-weight: 500;
transition: background-color 0.2s, color 0.2s;
}

.sidebar-menu li a.router-link-active, .sidebar-menu li.active a {
background-color: #0077c2; 
color: white;
font-weight: 600; 
border-radius: 10px;
margin: 10px;
}

.sidebar-menu li:hover a:not(.router-link-active) {
background-color: white; 
}

/* =================================================================
 GAYA KONTEN UTAMA
 ================================================================= */
.forum-main-content {
flex-grow: 1; 
padding: 30px 40px;
position: relative;
border-top-left-radius: 0;
border-bottom-left-radius: 0;
}

.main-title {
font-size: 2.5rem;
color: #0077c2;
margin-bottom: 30px;
}

.discussion-card {
background-color: #f7f9fc; 
border-radius: 10px;
padding: 20px;
margin-bottom: 20px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  /* PENTING: Tambahkan kursor agar terlihat bisa diklik */
  cursor: pointer;
}

.discussion-card h2 {
font-size: 1.5rem;
color: #333;
margin: 0 0 10px 0;
}

.topic-meta {
font-size: 0.9em;
color: #666;
margin-bottom: 10px;
}

.meta-dot {
 margin: 0 5px;
}

.topic-excerpt {
color: #444;
margin: 10px 0;
font-style: italic;
border-left: 3px solid #ccc;
padding-left: 10px;
}

.response-btn {
background: none;
border: none;
color: #0077c2;
cursor: pointer;
padding: 5px 0;
font-weight: 600;
}

.add-topic-btn {
position: absolute;
bottom: 30px;
right: 40px;
width: 50px;
height: 50px;
background-color: #0077c2;
color: white;
border: none;
border-radius: 50%;
font-size: 2.5rem;
line-height: 1;
text-align: center;
cursor: pointer;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
transition: background-color 0.2s;
}

.add-topic-btn:hover {
background-color: #005b99;
}

.no-topic-message {
 padding: 20px;
 text-align: center;
 color: #666;
 font-style: italic;
}

/* =================================================================
 GAYA MODAL UMUM
 ================================================================= */

.modal-overlay {
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.5); 
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 1000;
}

.modal-container {
 background-color: white;
 padding: 30px;
 border-radius: 15px;
 box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
 width: 90%;
 max-width: 600px;
 position: relative;
}

.modal-header {
 display: flex;
 justify-content: space-between;
 align-items: center;
 border-bottom: 1px solid #eee;
 padding-bottom: 15px;
 margin-bottom: 20px;
}

.modal-header h2 {
  color: #0077c2;
  margin: 0;
}

.close-btn {
 background: none;
 border: none;
 font-size: 2rem;
 cursor: pointer;
 color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #444;
}

input[type="text"], select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.modal-footer {
  text-align: right;
  padding-top: 15px;
}

.submit-modal-btn {
  background-color: #0077c2;
  color: white;
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
}

/* =================================================================
   GAYA MODAL DETAIL KHUSUS
   ================================================================= */
.topic-detail-content {
    padding-top: 10px;
}

.detail-meta {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 20px;
}

.detail-excerpt {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 30px;
}

hr {
    border: 0;
    border-top: 1px solid #ddd;
    margin: 25px 0;
}

.replies-title {
    color: #0077c2;
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.reply-card {
    background-color: #f0f8ff;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    border-left: 3px solid #0077c2;
}

.reply-card p {
    margin: 0 0 5px 0;
    line-height: 1.4;
}

.reply-time {
    font-size: 0.8em;
    color: #999;
    display: block;
    text-align: right;
}

.add-reply {
    margin-top: 30px;
    display: flex;
    gap: 10px;
    align-items: flex-end;
}

.add-reply textarea {
    flex-grow: 1;
    resize: vertical;
}

.small-btn {
    padding: 8px 15px;
    white-space: nowrap;
}
</style>