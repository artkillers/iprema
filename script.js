// Toggle Panel Settings
const settingsToggle = document.getElementById("settingsToggle");
const settingsPanel = document.getElementById("settingsPanel");

settingsToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  settingsPanel.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!settingsPanel.contains(e.target) && !settingsToggle.contains(e.target)) {
    settingsPanel.classList.add("hidden");
  }
});

document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    settingsPanel.classList.add('hidden');
  });
});

// Theme Toggle
const themeSelector = document.getElementById("themeSelector");
themeSelector.addEventListener("change", () => {
  const theme = themeSelector.value;
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
});

// Font Toggle
const fontSelector = document.getElementById("fontSelector");
fontSelector.addEventListener("change", () => {
  const font = fontSelector.value;
  document.documentElement.style.setProperty("--font-main", font);
});

// Menu Scroll
const menuSelector = document.getElementById('menuSelector');
menuSelector.addEventListener('change', () => {
  const section = menuSelector.value;
  const target = document.getElementById(section);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

// Color Swatch Toggle
document.querySelectorAll('.color-swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    const colorClass = swatch.getAttribute("data-color");
    const colorValue = getComputedStyle(document.documentElement).getPropertyValue(`--${colorClass}`);
    document.documentElement.style.setProperty("--theme-color", colorValue.trim());

    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
  });
});

// Neumorphic press effect
document.querySelectorAll('.neumorphic').forEach(el => {
  el.addEventListener('mousedown', () => el.classList.add('pressed'));
  el.addEventListener('mouseup', () => el.classList.remove('pressed'));
  el.addEventListener('mouseleave', () => el.classList.remove('pressed'));
});

document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("Preloader");
  const secretLoader = document.getElementById("secretLoader");

  secretLoader.addEventListener("click", () => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 300);
  });
});

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("copy", e => e.preventDefault());

const members = [
  // DEWAN SENIOR
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Ustad Iskandar", role: "Dewan Senior", status: "Pembina" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Hasrudi Arsyad", role: "Dewan Senior", status: "Pembina" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Ramdani Tajjuddin", role: "Dewan Senior", status: "Pembina" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Andi Fachmi Azis", role: "Dewan Senior", status: "Pembina" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Muhaemin", role: "Dewan Senior", status: "Pembina" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Andi Fachri Azis", role: "Dewan Senior", status: "Pembina" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Asfar Ukkas", role: "Dewan Senior", status: "Pembina" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Muh Irfandi Anas", role: "Dewan Senior", status: "Pembina" },

  // PENGURUS INTI
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Alief Fadel Muhammad", role: "Ketua Umum", status: "Pengurus" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Muh Rifky", role: "Ketua I", status: "Pengurus" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Ayyubi Rabbani Aziz", role: "Ketua II", status: "Pengurus" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Hadriani Rizky Amalia", role: "Sekretaris Umum", status: "Pengurus" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Arina Rezky Juniastari", role: "Sekretaris I", status: "Pengurus" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Muh. Rafliyansyah", role: "Sekretaris II", status: "Pengurus" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Anisa Kalista Nur", role: "Bendahara", status: "Pengurus" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "St. Nur Azizah", role: "Wakil Bendahara", status: "Pengurus" },

  // BIDANG DAKWAH
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Andi Agung Sulo", role: "Dakwah", status: "Koordinator" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Agil Fauzan", role: "Dakwah", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Al Mudatsir", role: "Dakwah", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Muh Syaiful Iskandar", role: "Dakwah", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "M Iqbal Irwan", role: "Dakwah", status: "Anggota" },

  // BIDANG PENDIDIKAN
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Sitti Latifah N", role: "Pendidikan", status: "Koordinator" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Muh Aidil Bintang", role: "Pendidikan", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Fahri Husaini", role: "Pendidikan", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Haryati Rina", role: "Pendidikan", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Nur Irma Sari", role: "Pendidikan", status: "Anggota" },

  // BIDANG KEWIRAUSAHAAN
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Nurul Zaskia Azizah", role: "Kewirausahaan", status: "Koordinator" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Fauzan Ofansyah", role: "Kewirausahaan", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Dian Almahri", role: "Kewirausahaan", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Aqilah Syahrani", role: "Kewirausahaan", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Nawal Majida", role: "Kewirausahaan", status: "Anggota" },

  // BIDANG HUMAS
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Muhammad Arsy Firdaus", role: "Humas", status: "Koordinator" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Andi Rahman", role: "Humas", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Iswandi Ajis Baco S.E", role: "Humas", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Abdul Wahab Kemal", role: "Humas", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Febriadi Bachtiar", role: "Humas", status: "Anggota" },

  // BIDANG PDD
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Arman Maulana", role: "PDD", status: "Koordinator" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Am Fadel Aziz", role: "PDD", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Takdir Haris", role: "PDD", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Andas Abbas", role: "PDD", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Andi Nur Indah Sulo", role: "PDD", status: "Anggota" },

  // BIDANG OLAHRAGA DAN SENI
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Muhammad Iman Syahudi", role: "Olahraga & Seni", status: "Koordinator" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Muh Ricky", role: "Olahraga & Seni", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Sulkifli", role: "Olahraga & Seni", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Syafiradi", role: "Olahraga & Seni", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Safaruddin", role: "Olahraga & Seni", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Muh Yusril Aksan", role: "Olahraga & Seni", status: "Anggota" },

  // BIDANG PENANGGULANGAN BENCANA
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Sunaryo", role: "Penanggulangan Bencana", status: "Koordinator" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Siti Wahyuni", role: "Penanggulangan Bencana", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Yusuf Saputra", role: "Penanggulangan Bencana", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Andy Aksyal Nurdiansyah", role: "Penanggulangan Bencana", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Agus Salim", role: "Penanggulangan Bencana", status: "Anggota" },
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Ismail (Abay)", role: "Penanggulangan Bencana", status: "Anggota" },
  // BIDANG SAINS & TEKNOLOGI 
  { photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png", name: "Art Man", role: "Sains & Teknologi", status: "Enthusiast Arts" }
];

document.getElementById("totalAnggota").textContent = `( ${members.length} )`;

const membersPerPage = 6;
let currentPage = 0;

function renderMembers() {
  const container = document.getElementById('member-container');
  container.innerHTML = "";

  const start = currentPage * membersPerPage;
  const end = start + membersPerPage;
  const currentMembers = members.slice(start, end);
  const defaultPhoto = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  currentMembers.forEach(member => {
    const card = document.createElement('div');
    card.className = 'member-card box';
    card.innerHTML = `
      <img src="${member.photo || defaultPhoto}" alt="${member.name}" class="member-photo" />
      <h3 class="member-name">${member.name}</h3>
      <p class="member-role">${member.role}</p>
      <span class="member-status">${member.status}</span>
    `;
    container.appendChild(card);
  });

  document.getElementById('prev-btn').disabled = currentPage === 0;
  document.getElementById('next-btn').disabled = end >= members.length;
}

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    renderMembers();
  }
});

document.getElementById('next-btn').addEventListener('click', () => {
  if ((currentPage + 1) * membersPerPage < members.length) {
    currentPage++;
    renderMembers();
  }
});

document.addEventListener('DOMContentLoaded', renderMembers);

const fallbackHadist = [
  { text: "Barangsiapa menempuh jalan untuk mencari ilmu, Allah akan mudahkan baginya jalan ke surga.", source: "HR. Muslim" },
  { text: "Amal itu tergantung pada niatnya.", source: "HR. Bukhari & Muslim" },
  { text: "Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah.", source: "HR. Muslim" },
  { text: "Sebaik-baik kalian adalah yang belajar Al-Qur'an dan mengajarkannya.", source: "HR. Bukhari" },
  { text: "Sampaikan dariku walau satu ayat.", source: "HR. Bukhari" },
  { text: "Agama adalah nasihat.", source: "HR. Muslim" },
  { text: "Tidak beriman seseorang sampai ia mencintai saudaranya seperti mencintai dirinya sendiri.", source: "HR. Bukhari & Muslim" },
  { text: "Sesungguhnya Allah tidak melihat rupa dan harta kalian, tetapi melihat hati dan amal kalian.", source: "HR. Muslim" },
  { text: "Orang yang paling dicintai Allah adalah yang paling bermanfaat bagi manusia.", source: "HR. Thabrani" },
  { text: "Tebarkanlah salam di antara kalian.", source: "HR. Muslim" },
  { text: "Tangan di atas lebih baik daripada tangan di bawah.", source: "HR. Bukhari & Muslim" },
  { text: "Allah tidak akan menyayangi orang yang tidak menyayangi sesama manusia.", source: "HR. Bukhari & Muslim" },
  { text: "Orang yang menunjuki kepada kebaikan seperti orang yang melakukannya.", source: "HR. Muslim" },
  { text: "Barang siapa beriman kepada Allah dan hari akhir, hendaklah berkata baik atau diam.", source: "HR. Bukhari & Muslim" },
  { text: "Sesungguhnya dunia itu manis dan hijau, dan Allah menjadikan kalian khalifah di dalamnya.", source: "HR. Muslim" },
  { text: "Cintailah orang lain seperti engkau mencintai dirimu sendiri.", source: "HR. Bukhari" },
  { text: "Barangsiapa tidak menyayangi, maka tidak akan disayangi.", source: "HR. Bukhari & Muslim" },
  { text: "Sedekah tidak akan mengurangi harta.", source: "HR. Muslim" },
  { text: "Orang kuat bukanlah yang pandai bergulat, melainkan yang dapat menahan amarahnya.", source: "HR. Bukhari & Muslim" },
  { text: "Sesungguhnya Allah mencintai jika salah seorang dari kalian melakukan sesuatu, ia menyempurnakannya.", source: "HR. Thabrani" },
  { text: "Senyumanmu untuk saudaramu adalah sedekah.", source: "HR. Tirmidzi" },
  { text: "Shalat adalah tiang agama.", source: "HR. Baihaqi" },
  { text: "Permudahlah, jangan mempersulit. Berilah kabar gembira, jangan membuat orang lari.", source: "HR. Bukhari & Muslim" },
  { text: "Hendaklah engkau mengatakan yang benar walaupun pahit.", source: "HR. Ahmad" },
  { text: "Allah Maha Indah dan menyukai keindahan.", source: "HR. Muslim" },
  { text: "Berpuasalah, niscaya kamu akan sehat.", source: "HR. Thabrani" },
  { text: "Sesungguhnya shalat dapat mencegah perbuatan keji dan mungkar.", source: "QS. Al-Ankabut: 45" },
  { text: "Tiada suatu amalan yang lebih dicintai Allah pada hari Idul Adha selain menyembelih hewan kurban.", source: "HR. Tirmidzi" },
  { text: "Tolonglah saudaramu yang zalim dan yang dizalimi.", source: "HR. Bukhari" },
  { text: "Wahai sekalian manusia, tebarkanlah salam, berilah makan, sambunglah silaturahmi, shalatlah saat malam, niscaya kalian masuk surga dengan selamat.", source: "HR. Tirmidzi" },
  { text: "Jangan marah.", source: "HR. Bukhari" },
  { text: "Seseorang akan dikumpulkan bersama orang yang ia cintai.", source: "HR. Bukhari & Muslim" },
  { text: "Sesungguhnya di surga ada pintu bernama Ar-Rayyan, yang dimasuki oleh orang-orang yang berpuasa.", source: "HR. Bukhari & Muslim" },
  { text: "Harta tidak akan berkurang karena sedekah.", source: "HR. Muslim" },
  { text: "Tidak akan masuk surga orang yang dalam hatinya terdapat kesombongan sebesar biji sawi.", source: "HR. Muslim" },
  { text: "Kebersihan adalah sebagian dari iman.", source: "HR. Muslim" },
  { text: "Satu dirham yang kamu infakkan di jalan Allah lebih utama daripada seratus ribu dirham.", source: "HR. Bukhari" },
  { text: "Tiap sendi dari tubuh harus disedekahi setiap hari.", source: "HR. Bukhari & Muslim" },
  { text: "Yang paling sempurna imannya adalah yang paling baik akhlaknya.", source: "HR. Tirmidzi" },
  { text: "Barang siapa memberi kemudahan bagi orang lain, Allah akan mudahkan urusannya di dunia dan akhirat.", source: "HR. Muslim" },
  { text: "Tidak halal darah seorang Muslim kecuali karena tiga hal: zina, pembunuhan, dan murtad.", source: "HR. Bukhari & Muslim" },
  { text: "Orang yang menipu bukan golongan kami.", source: "HR. Muslim" },
  { text: "Menuntut ilmu itu wajib bagi setiap Muslim.", source: "HR. Ibnu Majah" },
  { text: "Setiap kebaikan adalah sedekah.", source: "HR. Bukhari & Muslim" },
  { text: "Hindarilah prasangka, karena prasangka adalah perkataan paling dusta.", source: "HR. Bukhari & Muslim" },
  { text: "Jangan kamu saling mendengki, membenci, dan memutuskan hubungan.", source: "HR. Bukhari & Muslim" },
  { text: "Janganlah kamu masuk surga sehingga kamu beriman, dan janganlah kamu beriman sampai kamu saling mencintai.", source: "HR. Muslim" },
  { text: "Ketakwaan itu di sini (sambil menunjuk ke dada).", source: "HR. Muslim" },
  { text: "Orang yang berjalan untuk menolong saudaranya lebih aku cintai daripada beri’tikaf di masjid ini selama sebulan.", source: "HR. Thabrani" }
];
/*
function showRandomHadist() {
  const index = Math.floor(Math.random() * fallbackHadist.length);
  const hadist = fallbackHadist[index];

  document.getElementById("hadist-text").textContent = hadist.text;
  document.getElementById("hadist-source").textContent = hadist.source;
}

document.getElementById("random-hadist").addEventListener("click", showRandomHadist);

// Tampilkan satu hadist saat pertama kali halaman dimuat
document.addEventListener("DOMContentLoaded", showRandomHadist);
*/
async function loadHadist() {
  try {
    const res = await fetch("#", {
      headers: {
        "Authorization": "Bearer YOUR_API_KEY_HERE"
      }
    });
    const data = await res.json();
    const hadiths = data.data.hadiths;
    const random = hadiths[Math.floor(Math.random() * hadiths.length)];

    document.getElementById("hadist-text").textContent = random.arab ?? random.id;
    document.getElementById("hadist-source").textContent = data.data.name ?? "HR. Muslim";
  } catch (error) {
    const random = fallbackHadist[Math.floor(Math.random() * fallbackHadist.length)];
    document.getElementById("hadist-text").textContent = random.text;
    document.getElementById("hadist-source").textContent = random.source;
  }
}

// === Fungsi ambil cuaca dari Open-Meteo ===
async function fetchWeather() {
  try {
    const lat = -6.2, lon = 106.8; // Jakarta
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode&timezone=auto`);
    const data = await res.json();

    const temp = Math.round(data.current.temperature_2m);
    const weatherInfo = document.getElementById("weather-info");

    // Icon default sementara
    weatherInfo.innerHTML = ` ${temp}°C `;
  } catch (e) {
    document.getElementById("weather-info").textContent = "Gagal memuat cuaca.";
  }
}

// === Fungsi untuk update waktu secara real-time ===
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('id-ID', options);
  const timeStr = now.toLocaleTimeString('id-ID');

  const dateTime = document.getElementById("date-time");
  dateTime.innerHTML = ` ${dateStr} `;
}

setInterval(updateDateTime, 1000);

// Jalankan saat halaman dimuat
loadHadist();
fetchWeather();
updateDateTime();

