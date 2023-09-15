// This Googleshet start By Github Levi Nunnink
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Konfirmasi kehadiran berhasil terkirim!");
    })
  });
});
// end.

// Fungsi untuk mengunci scroll
function lockScroll() {
  document.body.style.overflow = "hidden";
}
// Fungsi untuk membuka kunci scroll
function enableScroll() {
  document.body.style.overflow = "auto";
}

// Fungsi untuk mengatur kembali ke halaman "LIHAT UNDANGAN" saat halaman dimuat kembali 
function redirectToUndangan() {
  lockScroll();
  const UndanganClicked = localStorage.getItem("undanganClicked") === "true";
  if (UndanganClicked) {
    window.location.hash = "hero"; // Ganti "hero" dengan ID elemen yang ingin dituju
    enableScroll();
  } 
}

// Ketika bagian class HERO (Undangan) diklik maka scroll terkunci, jika bukan bagian class HERO tidak terkunci
const links = document.querySelectorAll(".navbar-nav a");
links.forEach(link => {
  link.onclick = () => {
    if (link.getAttribute("href") === "#hero") {
      lockScroll();
    } else {
      enableScroll();
    }
    // Mengihilangkan navbar ketika diklik bagian Atribut href
    if (link.getAttribute ('href') === '#home') {
      navbarNav.classList.remove('active');
       stickyTop.style.overflow = 'hidden';
    } else if (link.getAttribute ('href') === '#info') {
      navbarNav.classList.remove('active');
      stickyTop.style.overflow = 'hidden';
    } else if (link.getAttribute('href') === '#story') {
      navbarNav.classList.remove('active');
      stickyTop.style.overflow = 'hidden';
    }  else if (link.getAttribute('href') == '#gallery') {
      navbarNav.classList.remove('active');
      stickyTop.style.overflow = 'hidden';
    }  else if (link.getAttribute('href') === '#rsvp') {
      navbarNav.classList.remove('active'); 
      stickyTop.style.overflow = 'hidden';
    } else if (link.getAttribute('href') === '#gifts') {
      navbarNav.classList.remove('active');
      stickyTop.style.overflow = 'hidden';
     } else if (link.getAttribute('href') === '#') {
      stickyTop.style.overflow = 'hidden';
     }
     
    }
});

// Ketika MENU-LINK diklik NAVBAR akan muncul
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu-link').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
}

// Klik diluar sidebar atau diELEMEN manapun untuk menghilangkan nav
const menuLink = document.querySelector('#menu-link');
document.addEventListener('click', function(e) {
if(!menuLink.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
        stickyTop.style.overflow = 'hidden';
    }
});

// Merapikan/Menghilangkan bagian nav yang berlebihan
const stickyTop = document.querySelector('.sticky-top');
menuLink.addEventListener('click', function() {
  stickyTop.style.overflow = 'visible';
});

// Menggunakan Event Listener untuk mendeteksi klik pada tombol "Lihat Undangan"
const audioIcon = document.querySelector('.audioIcon');
const audioIcons = document.querySelector('.audioIcon i');
let audioPlay = false;
const audioElement = document.querySelector("audio");
const tombolUndangan = document.getElementById("undangan");
const homeSection = document.getElementById("home");
const offCanvas = document.querySelector(".offcanvas");
tombolUndangan.addEventListener("click", function (event) {
  homeSection.scrollIntoView({ behavior: "smooth" });
  audioElement.play();
  audioElement.volume = 0.3;
  audioPlay = true;
  audioIcon.style.display = 'flex';
  event.preventDefault();
  enableScroll()
});

// mematikan audio dan menyalakan
audioIcon.onclick = function () {
  if(audioPlay) {
    audioElement.pause();
    audioIcons.classList.remove('bi-disc');
    audioIcons.classList.add('bi-pause-circle');
  } else {
    audioElement.play();
    audioIcons.classList.add('bi-disc');
    audioIcons.classList.remove('bi-pause-circle');
  }
  audioPlay = !audioPlay;
}

// Untuk membuat nama undangan di URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama') || '';
const pronoum = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';
console.log(nama);
const namaUndangan = document.querySelector('.hero h4 span');
namaUndangan.innerText = `${pronoum} ${nama},`.replace(/ ,$/, ',');
document.querySelector('#nama').value = nama;


// Kode Video
const videoComponent = document.querySelector('video');
function play() {
  console.log('play');
  videoComponent.play();
}

function pause() {
  videoComponent.pause();
}

function minimize() {
  videoComponent.requestPictureInPicture();
}

// Panggil fungsi untuk mengalihkan kembali ke halaman "LIHAT UNDANGAN" saat halaman dimuat kembali
redirectToUndangan(); 
