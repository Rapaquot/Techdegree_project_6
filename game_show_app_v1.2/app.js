const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const reset = document.getElementsByClassName("btn__reset")[0];
let missed = 0;

const phrases = [
  'Polo likes to fight',
  'Gohan is a problem child',
  'Nala is a crybaby',
  'Shaggy likes weed',
  'Luffy is an angry dog'
];

reset.addEventListener('click', () => {
  const overlay = document.querySelector('#overlay');
  overlay.style.display=  'none';
});


function getRandomPhraseAsArray(arr){
  let randomNumber = Math.floor(Math.random() * phrases.length )
  return phrases[randomNumber];
};

getRandomPhraseAsArray(phrases);

function addPhraseToDisplay() {
  for(let i = 0; i < getRandomPhraseAsArray.length; i++){
    console.log('I love myself');
  };
};
