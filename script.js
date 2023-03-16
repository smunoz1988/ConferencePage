//  Mobile Menu

const menuButton = document.querySelector('#menuButton');
const closeMenuButton = document.querySelector('#closeMenuBtn');

menuButton.addEventListener('click', () => {
  document.getElementById('menu').style.display = 'block';
  document.getElementById('blurSection').style.filter = 'blur(5px)';
});

closeMenuButton.addEventListener('click', () => {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('blurSection').style.filter = 'none';
});

//  Program cards data

const program = [
  {
    image: 'assets/programIcon1.svg',
    activity: 'Lecture',
    brief: 'Mauris non urna non neque imperdiet un mattis. Cras maximus pulvinar sagittis. Morbi euismod luctus ex quis porta.',
  },
  {
    image: 'assets/programIcon2.svg',
    activity: 'Exhibition',
    brief: 'Mauris non urna non neque imperdiet un mattis. Cras maximus pulvinar sagittis. Morbi euismod luctus ex quis porta.',
  },
  {
    image: 'assets/programIcon3.svg',
    activity: 'Forum',
    brief: 'Mauris non urna non neque imperdiet un mattis. Cras maximus pulvinar sagittis. Morbi euismod luctus ex quis porta.',
  },
  {
    image: 'assets/programIcon4.svg',
    activity: 'Workshop',
    brief: 'Mauris non urna non neque imperdiet un mattis. Cras maximus pulvinar sagittis. Morbi euismod luctus ex quis porta.',
  },
  {
    image: 'assets/programIcon5.svg',
    activity: 'Test',
    brief: 'Mauris non urna non neque imperdiet un mattis. Cras maximus pulvinar sagittis. Morbi euismod luctus ex quis porta.',
  },
];

// Program Section Card Creator

const cardContainer = document.querySelector('#programContainer');

for (let i = 0; i < program.length; i += 1) {
  const programCard = `
  <div class="programCard">
    <img src=${program[i].image} alt="#" class="programImage">
    <p class="programActivity">${program[i].activity}</p>
    <p class="programBrief">${program[i].brief}</p>
  </div>
  `;
  cardContainer.innerHTML += programCard;
}

// Speakers Info

const speakers = [
  {
    class: 'speakerCard',
    image: 'assets/speaker6.svg',
    name: 'Juan Perez',
    position: 'N.Y Firemen Security Chief',
    brief: 'Aliquam vel porta sapien, sit amet vestibulum nisl. Aliquam vel porta sapien, sit amet vestibulum nisl.',
  },
  {
    class: 'speakerCard',
    image: 'assets/speaker5.svg',
    name: 'Margareth Jones',
    position: 'N.Y Firemen Security Chief',
    brief: 'Aliquam vel porta sapien, sit amet vestibulum nisl. Aliquam vel porta sapien, sit amet vestibulum nisl.',
  },
  {
    class: 'speakerCard',
    image: 'assets/speaker4.svg',
    name: 'Chio Ming',
    position: 'N.Y Firemen Security Chief',
    brief: 'Aliquam vel porta sapien, sit amet vestibulum nisl. Aliquam vel porta sapien, sit amet vestibulum nisl.',
  },
  {
    class: 'speakerCard',
    image: 'assets/speaker3.svg',
    name: 'Ameed Dassum',
    position: 'N.Y Firemen Security Chief',
    brief: 'Aliquam vel porta sapien, sit amet vestibulum nisl. Aliquam vel porta sapien, sit amet vestibulum nisl.',
  },
  {
    class: 'speakerCard',
    image: 'assets/speaker2.svg',
    name: 'Sarah Glass',
    position: 'N.Y Firemen Security Chief',
    brief: 'Aliquam vel porta sapien, sit amet vestibulum nisl. Aliquam vel porta sapien, sit amet vestibulum nisl.',
  },
  {
    class: 'speakerCard',
    image: 'assets/speaker1.svg',
    name: 'Frank Williams',
    position: 'N.Y Firemen Security Chief',
    brief: 'Aliquam vel porta sapien, sit amet vestibulum nisl. Aliquam vel porta sapien, sit amet vestibulum nisl.',
  },
];

// Speakers Section Card Creator

const speakerContainer = document.querySelector('#speakersContainer');
const moreSpeakersContainer = document.querySelector('#moreSpeakersContainer');

for (let i = 0; i < speakers.length; i += 1) {
  const speakerCard = `
  <div class="${speakers[i].class}">
    <img src=${speakers[i].image} alt="speaker photo" class="speakerImage">
    <div class="speakerInfo">
      <h5>${speakers[i].name}</h5>
      <p class="speakerPosition">${speakers[i].position}</p>
      <hr>
      <p class="speakerBrief">${speakers[i].brief}</p>
    </div>
  </div>
  `;
  if (i < 2) {
    speakerContainer.innerHTML += speakerCard;
  } else {
    moreSpeakersContainer.innerHTML += speakerCard;
  }
}

// More speakers mobile section

const moreSpeakerBtn = document.querySelector('.moreSpeakerBtn');

moreSpeakerBtn.addEventListener('click', () => {
  const x = document.getElementById('moreSpeakersContainer');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    moreSpeakerBtn.innerHTML = 'MORE <img src="assets/arrowMore.svg" alt="arrow" class="moreBtnArrow">';
  } else {
    x.style.display = 'block';
    moreSpeakerBtn.innerHTML = 'LESS  <img src="assets/arrowMore.svg" alt="arrow" class="lessBtnArrow">';
  }
});
