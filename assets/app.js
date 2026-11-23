const GALLERY_PHOTOS = [
  { src: 'photos/g-necklace.jpg', key: 'g0' },
  { src: 'photos/g-pendant.jpg', key: 'g1' },
  { src: 'photos/g-ring.jpg', key: 'g2' },
  { src: 'photos/g-band.jpg', key: 'g3' },
  { src: 'photos/g-earrings.jpg', key: 'g4' },
  { src: 'photos/g-gifts.jpg', key: 'g5' },
];

const COPY = {
  ar: {
    dir: 'rtl',
    brand: 'الصفوة', brandLatin: 'EL SAFWA',
    langBtn: 'EN', themeBtnDark: 'الوضع الفاتح', themeBtnLight: 'الوضع الداكن',
    heroEyebrow: 'ذهب ومجوهرات', heroTitle: 'الصفوة', heroSub: 'قطع من الذهب تُصاغ لتُروى',
    heroText: 'مختارات من أرقى المشغولات الذهبية، بصياغة متقنة وذوق يليق بأجمل لحظاتك.',
    heroCta1: 'اكتشف المجموعات', heroCta2: 'تواصل معنا',
    marquee: ['ذهب عيار ٢١', 'ذهب عيار ١٨', 'صياغة يدوية', 'تصميمات حصرية', 'هدايا ومناسبات'],
    features: [
      { t: 'ذهب مضمون', d: 'عيار ٢١ و١٨ بضمان الصفوة' },
      { t: 'صياغة يدوية', d: 'تفاصيل تُشكَّل بأيدي صُنّاع مهرة' },
      { t: 'تشكيلة متجددة', d: 'موديلات جديدة طوال الموسم' },
    ],
    aboutLabel: 'من نحن', aboutTitle: 'الصفوة… اسم يليق بالذهب',
    aboutP1: 'الصفوة محل ذهب ومجوهرات يجمع بين أصالة الصنعة وذوق العصر. نختار كل قطعة بعناية، من المشغولات اليومية الخفيفة إلى أطقم المناسبات الفخمة.',
    aboutP2: 'هنا الذهب ليس معدنًا فقط، بل ذكرى تُقتنى وهدية تُروى.',
    aboutAlt: 'امرأة ترتدي قلائد ذهبية متعددة',
    galleryLabel: 'من أعمالنا', galleryTitle: 'مجموعات مختارة',
    gallery: [
      { name: 'قلائد', alt: 'قلادة ذهبية داخل كأس كريستال على خلفية داكنة' },
      { name: 'تعليقات', alt: 'تعليقة ذهبية على خلفية سوداء' },
      { name: 'خواتم', alt: 'خاتم ذهب على خلفية سوداء' },
      { name: 'دبل وخطوبة', alt: 'خاتم ذهب بجوار علبته على طاولة خشبية' },
      { name: 'أقراط', alt: 'زوج أقراط ذهبية على سطح عاكس داكن' },
      { name: 'هدايا', alt: 'أقراط ذهبية فاخرة فوق علبة خشبية على حرير' },
    ],
    craftLabel: 'الصنعة', craftTitle: 'من يد الصائغ إلى يدك',
    craftP: 'كل قطعة في الصفوة تمر بمراحل دقيقة: اختيار الخامة، التشكيل، ثم التشطيب اليدوي، حتى تصل إليك كما يجب أن يكون الذهب.',
    craftPoints: ['فحص العيار والوزن أمامك', 'تشطيب يدوي لكل قطعة', 'تفصيل وتعديل حسب الطلب'],
    craftAlt: 'صائغ يشكّل قطعة مجوهرات في الورشة',
    contactLabel: 'تواصل معنا', contactTitle: 'في انتظارك',
    addressLabel: 'العنوان', address: '١٢ شارع الجمهورية، وسط البلد، القاهرة',
    phoneLabel: 'تليفون وواتساب', phone: '0100 000 0000',
    hoursLabel: 'مواعيد العمل', hours: 'يوميًا من ١٠ صباحًا حتى ١٠ مساءً',
    callBtn: 'اتصل الآن', waBtn: 'راسلنا واتساب',
    footerBrand: 'الصفوة، ذهب ومجوهرات',
    demoNote: 'نسخة عرض تجريبية: بيانات العنوان والتواصل لحين اعتمادها من المحل.',
    credit: 'الصور عبر Pexels',
    docTitle: 'الصفوة | El Safwa Gold',
  },
  en: {
    dir: 'ltr',
    brand: 'El Safwa', brandLatin: 'الصفوة',
    langBtn: 'عربي', themeBtnDark: 'Light mode', themeBtnLight: 'Dark mode',
    heroEyebrow: 'Gold & Jewelry', heroTitle: 'El Safwa', heroSub: 'Gold, crafted to be told',
    heroText: 'A curated selection of fine gold jewelry, finished with care and made for your brightest moments.',
    heroCta1: 'Explore the collections', heroCta2: 'Contact us',
    marquee: ['21k gold', '18k gold', 'Handcrafted', 'Exclusive designs', 'Gifts & occasions'],
    features: [
      { t: 'Guaranteed gold', d: '21k and 18k, backed by El Safwa' },
      { t: 'Handcrafted', d: 'Details shaped by skilled artisans' },
      { t: 'Always new', d: 'Fresh designs all season' },
    ],
    aboutLabel: 'About us', aboutTitle: 'A name worthy of gold',
    aboutP1: 'El Safwa is a gold and jewelry shop where traditional craft meets modern taste. Every piece is chosen with care, from light everyday wear to statement sets for big occasions.',
    aboutP2: 'Here, gold is not just a metal. It is a keepsake and a story.',
    aboutAlt: 'Woman wearing layered gold necklaces',
    galleryLabel: 'Our work', galleryTitle: 'Selected collections',
    gallery: [
      { name: 'Necklaces', alt: 'Gold necklace resting in a crystal glass on a dark background' },
      { name: 'Pendants', alt: 'Gold pendant against a black background' },
      { name: 'Rings', alt: 'Gold ring on a black background' },
      { name: 'Wedding bands', alt: 'Gold ring beside its box on a wooden table' },
      { name: 'Earrings', alt: 'Pair of gold earrings on a dark reflective surface' },
      { name: 'Gifts', alt: 'Ornate gold earrings over a wooden box on silk' },
    ],
    craftLabel: 'Craftsmanship', craftTitle: 'From the jeweler’s hand to yours',
    craftP: 'Every El Safwa piece passes through careful stages: selecting the material, shaping it, then hand-finishing, until it reaches you the way gold should be.',
    craftPoints: ['Purity and weight checked in front of you', 'Hand-finished, piece by piece', 'Custom orders and resizing'],
    craftAlt: 'Jeweler crafting a piece at the workbench',
    contactLabel: 'Contact', contactTitle: 'We are waiting for you',
    addressLabel: 'Address', address: '12 El Gomhoreya St, Downtown, Cairo',
    phoneLabel: 'Phone & WhatsApp', phone: '0100 000 0000',
    hoursLabel: 'Opening hours', hours: 'Daily, 10 am to 10 pm',
    callBtn: 'Call now', waBtn: 'WhatsApp us',
    footerBrand: 'El Safwa, Gold & Jewelry',
    demoNote: 'Demo preview: address and contact details are placeholders until the shop confirms them.',
    credit: 'Photos via Pexels',
    docTitle: 'El Safwa Gold | الصفوة',
  },
};

let lang = 'ar';
let theme = 'dark';
const safwa = document.getElementById('safwa');

function renderDynamic(c, revealed) {
  const vis = revealed ? ' in' : '';
  const marquee = document.getElementById('marquee');
  marquee.innerHTML = '';
  for (let n = 0; n < 2; n++) {
    const run = document.createElement('span');
    run.className = 'safwa-marquee-run';
    c.marquee.forEach((w) => {
      const item = document.createElement('span');
      item.className = 'safwa-marquee-item';
      item.textContent = w;
      const dot = document.createElement('i');
      dot.className = 'safwa-dot';
      item.appendChild(dot);
      run.appendChild(item);
    });
    marquee.appendChild(run);
  }

  const features = document.getElementById('features');
  features.innerHTML = '';
  c.features.forEach((f, i) => {
    const div = document.createElement('div');
    div.className = 'safwa-feature reveal' + vis;
    div.style.transitionDelay = (i * 0.12) + 's';
    const gem = document.createElement('span');
    gem.className = 'safwa-feature-gem';
    const h = document.createElement('h3');
    h.textContent = f.t;
    const p = document.createElement('p');
    p.textContent = f.d;
    div.append(gem, h, p);
    features.appendChild(div);
  });

  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  GALLERY_PHOTOS.forEach((g, i) => {
    const info = c.gallery[i];
    const fig = document.createElement('figure');
    fig.className = 'safwa-piece reveal' + vis;
    fig.style.transitionDelay = ((i % 3) * 0.12) + 's';
    const img = document.createElement('img');
    img.src = g.src;
    img.alt = info.alt;
    img.loading = 'lazy';
    const cap = document.createElement('figcaption');
    const span = document.createElement('span');
    span.textContent = info.name;
    cap.appendChild(span);
    fig.append(img, cap);
    grid.appendChild(fig);
  });

  const list = document.getElementById('craftList');
  list.innerHTML = '';
  c.craftPoints.forEach((p) => {
    const li = document.createElement('li');
    li.textContent = p;
    list.appendChild(li);
  });
}

function applyLang() {
  const c = COPY[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = c.dir;
  safwa.dir = c.dir;
  safwa.lang = lang;
  document.title = c.docTitle;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (c[key] !== undefined) el.textContent = c[key];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (c[key] !== undefined) el.alt = c[key];
  });
  renderDynamic(c, true);
  applyThemeLabel();
}

function applyThemeLabel() {
  const c = COPY[lang];
  document.getElementById('themeBtn').textContent = theme === 'dark' ? c.themeBtnDark : c.themeBtnLight;
}

document.getElementById('langBtn').addEventListener('click', () => {
  lang = lang === 'ar' ? 'en' : 'ar';
  applyLang();
});

document.getElementById('themeBtn').addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  safwa.setAttribute('data-theme', theme);
  applyThemeLabel();
});

function observeReveals() {
  document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
}

// Scroll reveal
safwa.classList.add('js');
renderDynamic(COPY.ar, false);
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
observeReveals();

// Safety net: if IO has not revealed something already in view, show it.
setTimeout(() => {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) el.classList.add('in');
  });
}, 1600);
