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

// === Fungsi untuk update waktu secara real-time ===
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('id-ID', options);
  const timeStr = now.toLocaleTimeString('id-ID');

  const dateTime = document.getElementById("date-time");
  dateTime.innerHTML = `<i class="fas fa-calendar-alt"></i> ${dateStr}`;
}

setInterval(updateDateTime, 1000);

// === Fungsi ambil cuaca dari Open-Meteo ===
async function fetchWeather() {
  try {
    const lat = -6.2, lon = 106.8; // Jakarta
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode&timezone=auto`);
    const data = await res.json();

    const temp = Math.round(data.current.temperature_2m);
    const weatherInfo = document.getElementById("weather-info");

    // Icon default sementara
    weatherInfo.innerHTML = `<i class="fas fa-cloud-sun"></i> ${temp}°C`;
  } catch (e) {
    document.getElementById("weather-info").textContent = "Gagal memuat cuaca.";
  }
}

// Random Hadist dengan Fallback
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

// Jalankan saat halaman dimuat
loadHadist();
fetchWeather();
updateDateTime();