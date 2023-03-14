//  Mobile Menu

const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', () => {
  document.getElementById('menu').style.display = 'block';
});

//  Program cards data

const program = [
  {
    image: 'assets/programIcon1.svg',
    activity: 'Lecture',
    brief: 'Mauris non urna non neque imperdiet un mattis. Cras maximus pulvinar sagittis. Morbi euismod luctus ex quis porta.',
  },
  {
    image: 'assets/programIcon1.svg',
    activity: 'Exhibition',
    brief: 'Mauris non urna non neque imperdiet un mattis. Cras maximus pulvinar sagittis. Morbi euismod luctus ex quis porta.',
  },
  {
    image: 'assets/programIcon1.svg',
    activity: 'Forum',
    brief: 'Mauris non urna non neque imperdiet un mattis. Cras maximus pulvinar sagittis. Morbi euismod luctus ex quis porta.',
  },
  {
    image: 'assets/programIcon1.svg',
    activity: 'Workshop',
    brief: 'Mauris non urna non neque imperdiet un mattis. Cras maximus pulvinar sagittis. Morbi euismod luctus ex quis porta.',
  },
  {
    image: 'assets/programIcon1.svg',
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
};
