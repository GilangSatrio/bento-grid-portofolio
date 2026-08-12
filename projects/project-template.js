const mediaSlides = [...document.querySelectorAll('.media-slide')];
const mediaTrack = document.getElementById('mediaTrack');
const mediaDots = document.getElementById('mediaDots');
let mediaIndex = 0;
function showMedia(next){mediaIndex=(next+mediaSlides.length)%mediaSlides.length;mediaTrack.style.transform=`translateX(-${mediaIndex*100}%)`;[...mediaDots.children].forEach((dot,i)=>dot.classList.toggle('active',i===mediaIndex));}
mediaDots.innerHTML=mediaSlides.map((_,i)=>`<button class="media-dot ${i===0?'active':''}" aria-label="Show media ${i+1}"></button>`).join('');
document.getElementById('mediaPrev').onclick=()=>showMedia(mediaIndex-1);document.getElementById('mediaNext').onclick=()=>showMedia(mediaIndex+1);mediaDots.onclick=e=>{if(e.target.matches('.media-dot'))showMedia([...mediaDots.children].indexOf(e.target));};
const viewport=document.getElementById('mediaViewport');let start=0;viewport.addEventListener('pointerdown',e=>start=e.clientX);viewport.addEventListener('pointerup',e=>{if(Math.abs(e.clientX-start)>40)showMedia(mediaIndex+(e.clientX<start?1:-1));});viewport.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')showMedia(mediaIndex-1);if(e.key==='ArrowRight')showMedia(mediaIndex+1);});
document.getElementById('year').textContent=new Date().getFullYear();

const savedTheme=localStorage.getItem('gs-theme');
if(savedTheme)document.documentElement.dataset.theme=savedTheme;
else if(matchMedia('(prefers-color-scheme: light)').matches)document.documentElement.dataset.theme='light';
const themeButton=document.querySelector('.theme-toggle');
themeButton?.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('gs-theme',next);});
const languageButton=document.querySelector('.lang-toggle');
const languageLabel=languageButton?.querySelector('span');
const projectTranslations={id:{navHome:'Beranda',navAbout:'Tentang',navExperience:'Pengalaman',navSkills:'Keahlian',navProjects:'Proyek',navTraining:'Pelatihan',navResume:'Resume',navContact:'Kontak',templateLabel:'DETAIL PROYEK / TEMPLATE',projectSlot:'Slot Proyek',intro:'Halaman proyek yang mudah diedit. Tambahkan hanya konten proyek yang sudah terverifikasi sebelum dipublikasikan.',mediaLabel:'MEDIA PROYEK',mediaTitle:'Galeri Video & Foto',videoSlot:'Ganti dengan video proyek',projectVideo:'Video Proyek',videoCaption:'Ganti placeholder ini dengan video proyek yang telah terverifikasi.',systemOverview:'Gambaran Sistem',systemCaption:'Ganti dengan foto sistem atau instalasi yang telah terverifikasi.',implementationDetail:'Detail Implementasi',implementationCaption:'Ganti dengan foto pengujian atau commissioning yang telah terverifikasi.',overviewLabel:'RINGKASAN PROYEK',overviewTitle:'Dokumentasikan cerita engineering.',overviewText:'Tambahkan konteks, ruang lingkup, dan batasan proyek di sini. Template ini sengaja tidak mencantumkan hasil atau detail teknis proyek yang belum diberikan.',detailsLabel:'DETAIL YANG DITAMBAHKAN',problem:'Masalah',problemText:'Tambahkan pernyataan masalah yang telah terverifikasi.',objectives:'Tujuan',objectivesText:'Tambahkan tujuan engineering yang ditetapkan.',solution:'Solusi Engineering',solutionText:'Tambahkan narasi solusi yang disetujui.',architecture:'Arsitektur Sistem',architectureText:'Tambahkan diagram atau arsitektur saat tersedia.',technologies:'Teknologi',technologiesText:'Tambahkan hanya tools yang digunakan pada proyek ini.',results:'Hasil & Pembelajaran',resultsText:'Tambahkan hasil terukur saat terdokumentasi.',previous:'← Proyek Sebelumnya',next:'Proyek Selanjutnya →'}};
function renderLanguage(){const current=localStorage.getItem('gs-lang')||'en';document.documentElement.lang=current;if(languageLabel)languageLabel.textContent=current.toUpperCase();document.querySelectorAll('[data-project-i18n]').forEach(el=>{const key=el.dataset.projectI18n;el.textContent=current==='id'?(projectTranslations.id[key]||el.textContent):el.dataset.enText||el.textContent;});}
document.querySelectorAll('[data-project-i18n]').forEach(el=>el.dataset.enText=el.textContent);
renderLanguage();
languageButton?.addEventListener('click',()=>{localStorage.setItem('gs-lang',(localStorage.getItem('gs-lang')||'en')==='en'?'id':'en');renderLanguage();});
const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.getElementById('navLinks');
menuButton?.addEventListener('click',()=>{const isOpen=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',isOpen);});
navLinks?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>navLinks.classList.remove('open')));
