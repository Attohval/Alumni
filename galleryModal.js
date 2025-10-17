/* Event gallery modal (group images by event) */
const events = {
  '20th Anniversary': {
    title: '20th Anniversary',
    images: [
      'images/2020Annivasory/anniversary1.jpg',
      'images/2020Annivasory/anniversary2.jpg',
      'images/2020Annivasory/anniversary3.jpg',
      'images/2020Annivasory/anniversary4.jpg',
      'images/2020Annivasory/anniversary5.jpg',
      'images/2020Annivasory/anniversary6.jpg',
      'images/2020Annivasory/anniversary7.jpg',
      'images/2020Annivasory/anniversary8.jpg',
      'images/2020Annivasory/anniversary9.jpg',
      'images/2020Annivasory/anniversary10.jpg',
      'images/2020Annivasory/anniversary11.jpg',
      'images/2020Annivasory/anniversary12.jpg',
      'images/2020Annivasory/anniversary13.jpg',
      'images/2020Annivasory/anniversary14.jpg',
      'images/2020Annivasory/anniversary15.jpg',
      'images/2020Annivasory/anniversary16.jpg',
      'images/2020Annivasory/anniversary17.jpg',
      'images/2020Annivasory/anniversary18.jpg',
      'images/2020Annivasory/anniversary19.jpg',
      'images/2020Annivasory/anniversary20.jpg',
      'images/2020Annivasory/anniversary21.jpg',
      'images/2020Annivasory/anniversary22.jpg',
      'images/2020Annivasory/anniversary23.jpg',
      'images/2020Annivasory/anniversary24.jpg'
    ]
  },
  'reunion-2018': {
    title: 'Alumni AGM reunion and basketball court project commissioning',
    images: [
      'images/2018Reunion/basketball_court_project1.jpg',
      'images/2018Reunion/basketball_court_project2.jpg',
      'images/2018Reunion/basketball_court_project3.jpg',
      'images/2018Reunion/basketball_court_project4.jpg',
      'images/2018Reunion/basketball_court_project8.jpg',
      'images/2018Reunion/basketball_court_project6.jpg',
      'images/2018Reunion/basketball_court_project7.jpg',
      'images/2018Reunion/basketball_court_project5.jpg',
    ]
  },
  'uzezi-mother-burial': {
    title: 'Uzezi Mother\'s Burial',
    images: [
      'images/UzeziMotherBurial/burial-img-1.jpg',
      'images/UzeziMotherBurial/burial-img-2.jpg',
      'images/UzeziMotherBurial/burial-img-3.jpg',
      'images/UzeziMotherBurial/burial-img-4.jpg',
      'images/UzeziMotherBurial/burial-img-5.jpg',
      'images/UzeziMotherBurial/burial-img-6.jpg',
      'images/UzeziMotherBurial/burial-img-7.jpg',
      'images/UzeziMotherBurial/burial-img-8.jpg',
      'images/UzeziMotherBurial/burial-img-9.jpg',
      'images/UzeziMotherBurial/burial-img-10.jpg',
      'images/UzeziMotherBurial/burial-img-11.jpg',
      'images/UzeziMotherBurial/burial-img-12.jpg',
      'images/UzeziMotherBurial/burial-img-13.jpg',
      'images/UzeziMotherBurial/burial-img-14.jpg',
      'images/UzeziMotherBurial/burial-img-15.jpg',
      'images/UzeziMotherBurial/burial-img-16.jpg'
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