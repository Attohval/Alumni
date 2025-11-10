/* Event gallery modal (group images by event) */
const events = {
  '20th Anniversary': {
    title: '20th Anniversary',
    images: [
      'images/2020Annivasory/anniversary1.webp',
      'images/2020Annivasory/anniversary2.webp',
      'images/2020Annivasory/anniversary3.webp',
      'images/2020Annivasory/anniversary4.webp',
      'images/2020Annivasory/anniversary5.webp',
      'images/2020Annivasory/anniversary6.webp',
      'images/2020Annivasory/anniversary7.webp',
      'images/2020Annivasory/anniversary8.webp',
      'images/2020Annivasory/anniversary9.webp',
      'images/2020Annivasory/anniversary10.webp',
      'images/2020Annivasory/anniversary11.webp',
      'images/2020Annivasory/anniversary12.webp',
      'images/2020Annivasory/anniversary13.webp',
      'images/2020Annivasory/anniversary14.webp',
      'images/2020Annivasory/anniversary15.webp',
      'images/2020Annivasory/anniversary16.webp',
      'images/2020Annivasory/anniversary17.webp',
      'images/2020Annivasory/anniversary18.webp',
      'images/2020Annivasory/anniversary19.webp',
      'images/2020Annivasory/anniversary20.webp',
      'images/2020Annivasory/anniversary21.webp',
      'images/2020Annivasory/anniversary22.webp',
      'images/2020Annivasory/anniversary23.webp',
      'images/2020Annivasory/anniversary24.webp'
    ]
  },
  'agm-reunion-2024': {
    title: 'AGM - Reunion 2024',
    images: [
      'images/2024_AGM_REUNION/reunion_01.webp',
      'images/2024_AGM_REUNION/reunion_02.webp',
      'images/2024_AGM_REUNION/reunion_03.webp',
      'images/2024_AGM_REUNION/reunion_04.webp',
      'images/2024_AGM_REUNION/reunion_05.webp',
      'images/2024_AGM_REUNION/reunion_06.webp',
      'images/2024_AGM_REUNION/reunion_07.webp',
      'images/2024_AGM_REUNION/reunion_08.webp',
      'images/2024_AGM_REUNION/reunion_09.webp',
      'images/2024_AGM_REUNION/reunion_10.webp',
      'images/2024_AGM_REUNION/reunion_11.webp',
      'images/2024_AGM_REUNION/reunion_12.webp',
      'images/2024_AGM_REUNION/reunion_13.webp',
      'images/2024_AGM_REUNION/reunion_14.webp',
      'images/2024_AGM_REUNION/reunion_15.webp',
      'images/2024_AGM_REUNION/reunion_17.webp',
    ]
  },
  'award-2024': {
    title: 'Award for excellence 2024',
    images: [
      'images/2024_Awards/Award2022-01.webp',
      'images/2024_Awards/Award2022-02.webp',
      'images/2024_Awards/Award2022-03.webp',
      'images/2024_Awards/Award2022-04.webp',
      'images/2024_Awards/Award2022-05.webp',
      'images/2024_Awards/Award2022-06.webp',
      'images/2024_Awards/Award2022-07.webp',
      'images/2024_Awards/Award2022-08.webp',
      'images/2024_Awards/Award2022-09.webp',
      'images/2024_Awards/Award2022-10.webp',
      'images/2024_Awards/Award2022-11.webp',
      'images/2024_Awards/Award2022-12.webp',
      'images/2024_Awards/Award2022-13.webp',
      'images/2024_Awards/Award2022-14.webp',
      'images/2024_Awards/Award2022-15.webp',
      'images/2024_Awards/Award2022-16.webp',
    ]
  },
  'reunion-2023': {
    title: 'Reunion 2023',
    images: [
      'images/2023_AGM_REUNION/reunion_01.webp',
      'images/2023_AGM_REUNION/reunion_02.webp',
      'images/2023_AGM_REUNION/reunion_03.webp',
      'images/2023_AGM_REUNION/reunion_04.webp',
      'images/2023_AGM_REUNION/reunion_05.webp',
      'images/2023_AGM_REUNION/reunion_06.webp',
      'images/2023_AGM_REUNION/reunion_07.webp',
      'images/2023_AGM_REUNION/reunion_08.webp',
      'images/2023_AGM_REUNION/reunion_09.webp',
      'images/2023_AGM_REUNION/reunion_10.webp',
      'images/2023_AGM_REUNION/reunion_11.webp',
      'images/2023_AGM_REUNION/reunion_12.webp',
      'images/2023_AGM_REUNION/reunion_13.webp',
      'images/2023_AGM_REUNION/reunion_14.webp',
      'images/2023_AGM_REUNION/reunion_15.webp',
      'images/2023_AGM_REUNION/reunion_16.webp',
      'images/2023_AGM_REUNION/reunion_17.webp',
      'images/2023_AGM_REUNION/reunion_18.webp',
      'images/2023_AGM_REUNION/reunion_19.webp',
      'images/2023_AGM_REUNION/reunion_20.webp',
      'images/2023_AGM_REUNION/reunion_21.webp',
      'images/2023_AGM_REUNION/reunion_22.webp',
      'images/2023_AGM_REUNION/reunion_23.webp',
      'images/2023_AGM_REUNION/reunion_24.webp',
      'images/2023_AGM_REUNION/reunion_25.webp',
      'images/2023_AGM_REUNION/reunion_26.webp',
      'images/2023_AGM_REUNION/reunion_27.webp',
      'images/2023_AGM_REUNION/reunion_28.webp',
      'images/2023_AGM_REUNION/reunion_29.webp',
      'images/2023_AGM_REUNION/reunion_30.webp',
      'images/2023_AGM_REUNION/reunion_31.webp',
    ]
  },
  'award-2023': {
    title: 'Award for excellence 2023',
    images: [
      'images/2023_Awards/Award2023-01.webp',
      'images/2023_Awards/Award2023-02.webp',
      'images/2023_Awards/Award2023-03.webp',
      'images/2023_Awards/Award2023-04.webp',
      'images/2023_Awards/Award2023-05.webp',
      'images/2023_Awards/Award2023-06.webp',
      'images/2023_Awards/Award2023-07.webp',
      'images/2023_Awards/Award2023-08.webp',
      'images/2023_Awards/Award2023-09.webp',
      'images/2023_Awards/Award2023-10.webp',
      'images/2023_Awards/Award2023-11.webp',
      'images/2023_Awards/Award2023-12.webp',
      'images/2023_Awards/Award2023-13.webp',
      'images/2023_Awards/Award2023-14.webp',
      'images/2023_Awards/Award2023-15.webp',
      'images/2023_Awards/Award2023-16.webp',
    ]
  },
  'reunion-2022': {
    title: 'Reunion 2022',
    images: [
      'images/2022_AGM_REUNION/2022Reunion-01.webp',
      'images/2022_AGM_REUNION/2022Reunion-02.webp',
      'images/2022_AGM_REUNION/2022Reunion-03.webp',
      'images/2022_AGM_REUNION/2022Reunion-04.webp',
      'images/2022_AGM_REUNION/2022Reunion-05.webp',
      'images/2022_AGM_REUNION/2022Reunion-06.webp',
      'images/2022_AGM_REUNION/2022Reunion-07.webp',
      'images/2022_AGM_REUNION/2022Reunion-08.webp',
      'images/2022_AGM_REUNION/2022Reunion-09.webp',
      'images/2022_AGM_REUNION/2022Reunion-10.webp',
      'images/2022_AGM_REUNION/2022Reunion-11.webp',
      'images/2022_AGM_REUNION/2022Reunion-12.webp',
      'images/2022_AGM_REUNION/2022Reunion-13.webp',
      'images/2022_AGM_REUNION/2022Reunion-14.webp',
      'images/2022_AGM_REUNION/2022Reunion-15.webp',
      'images/2022_AGM_REUNION/2022Reunion-17.webp',
    ]
  },
  'award-2022': {
    title: 'Award for excellence 2022',
    images: [
      'images/2022_Award/Award2022-01.webp',
      'images/2022_Award/Award2022-02.webp',
      'images/2022_Award/Award2022-03.webp',
      'images/2022_Award/Award2022-04.webp',
      'images/2022_Award/Award2022-05.webp',
      'images/2022_Award/Award2022-06.webp',
      'images/2022_Award/Award2022-07.webp',
      'images/2022_Award/Award2022-08.webp',
      'images/2022_Award/Award2022-09.webp',
      'images/2022_Award/Award2022-10.webp',
      'images/2022_Award/Award2022-11.webp',
      'images/2022_Award/Award2022-12.webp',
      'images/2022_Award/Award2022-13.webp',
      'images/2022_Award/Award2022-14.webp',
      'images/2022_Award/Award2022-15.webp',
      'images/2022_Award/Award2022-16.webp',
      'images/2022_Award/Award2022-17.webp',
      'images/2022_Award/Award2022-18.webp',
      'images/2022_Award/Award2022-19.webp',
      'images/2022_Award/Award2022-20.webp',
      'images/2022_Award/Award2022-21.webp',
      'images/2022_Award/Award2022-22.webp',
      'images/2022_Award/Award2022-23.webp',
      'images/2022_Award/Award2022-24.webp',
      'images/2022_Award/Award2022-25.webp',
      'images/2022_Award/Award2022-26.webp',
    ]
  },
  'reunion-2018': {
    title: 'Alumni AGM reunion and basketball court project commissioning',
    images: [
      'images/2018Reunion/basketball_court_project1.webp',
      'images/2018Reunion/basketball_court_project2.webp',
      'images/2018Reunion/basketball_court_project3.webp',
      'images/2018Reunion/basketball_court_project4.webp',
      'images/2018Reunion/basketball_court_project8.webp',
      'images/2018Reunion/basketball_court_project6.webp',
      'images/2018Reunion/basketball_court_project7.webp',
      'images/2018Reunion/basketball_court_project5.webp',
    ]
  },
  'uzezi-mother-burial': {
    title: 'Uzezi Mother\'s Burial',
    images: [
      'images/UzeziMotherBurial/burial-img-1.webp',
      'images/UzeziMotherBurial/burial-img-2.webp',
      'images/UzeziMotherBurial/burial-img-3.webp',
      'images/UzeziMotherBurial/burial-img-4.webp',
      'images/UzeziMotherBurial/burial-img-5.webp',
      'images/UzeziMotherBurial/burial-img-6.webp',
      'images/UzeziMotherBurial/burial-img-7.webp',
      'images/UzeziMotherBurial/burial-img-8.webp',
      'images/UzeziMotherBurial/burial-img-9.webp',
      'images/UzeziMotherBurial/burial-img-10.webp',
      'images/UzeziMotherBurial/burial-img-11.webp',
      'images/UzeziMotherBurial/burial-img-12.webp',
      'images/UzeziMotherBurial/burial-img-13.webp',
      'images/UzeziMotherBurial/burial-img-14.webp',
      'images/UzeziMotherBurial/burial-img-15.webp',
      'images/UzeziMotherBurial/burial-img-16.webp'
    ]
  },
};

const eventModal = document.getElementById('eventModal');
const eventCarousel = document.getElementById('eventCarousel');
const closeEventModal = document.getElementById('closeEventModal');
const prevEvent = document.getElementById('prevEvent');
const nextEvent = document.getElementById('nextEvent');
const eventCounter = document.getElementById('eventCounter');
let currentEventId = null;
let currentIndex = 0;

function openEvent(eventId) {
  const ev = events[eventId];
  if (!ev) return;
  currentEventId = eventId;
  currentIndex = 0;
  document.getElementById('eventModalTitle').textContent = ev.title;
  renderEventImages(ev.images);
  eventModal.classList.remove('hidden');
  eventModal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeEvent() {
  eventModal.classList.add('hidden');
  eventModal.classList.remove('flex');
  eventCarousel.innerHTML = '';
  document.body.style.overflow = '';
  currentEventId = null;
}

function renderEventImages(images) {
  eventCarousel.innerHTML = '';
  images.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'rounded overflow-hidden';
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.className = 'w-full h-56 object-cover rounded';
    // img.loading = 'lazy';
    img.decoding = 'async';

    // click to activate image (keeps scroll/counter behavior)
    img.addEventListener('click', () => showIndex(i));
    div.appendChild(img);
    eventCarousel.appendChild(div);
  });
  updateCounter();
}

function showIndex(idx) {
  const images = events[currentEventId].images;
  currentIndex = (idx + images.length) % images.length;
  Array.from(eventCarousel.children).forEach((child, i) => {
    if (i === currentIndex) {
      // scroll active image into view within the modal
      child.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  });
  updateCounter();
}

function updateCounter() {
  const images = events[currentEventId].images;
  if (!images) return;
  eventCounter.textContent = `${currentIndex + 1} / ${images.length}`;
}

// Use event delegation so taps on mobile (and keyboard) reliably open the modal
const eventsGrid = document.getElementById('eventsGrid');
eventsGrid.addEventListener('click', (e) => {
  const card = e.target.closest('[data-event-id]');
  if (!card) return;
  const id = card.getAttribute('data-event-id');
  openEvent(id);
});
// keyboard support (Enter/Space)
eventsGrid.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    const card = e.target.closest('[data-event-id]');
    if (!card) return;
    e.preventDefault();
    openEvent(card.getAttribute('data-event-id'));
  }
});

closeEventModal.addEventListener('click', closeEvent);
eventModal.addEventListener('click', (e)=>{ if (e.target === eventModal) closeEvent(); });

// keyboard navigation
document.addEventListener('keydown', (e)=>{
  if (!currentEventId) return;
  if (e.key === 'Escape') closeEvent();
  if (e.key === 'ArrowLeft') showIndex(currentIndex - 1);
  if (e.key === 'ArrowRight') showIndex(currentIndex + 1);
});