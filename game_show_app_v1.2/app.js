const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const reset = document.getElementsByClassName("btn__reset")[0];
let missed = 0;

const phrases = [
  'Polo likes to bites other dogs',
  'Gohan is a strong dog',
  'Nala barks a lot',
  'Shaggy plays with other dogs',
  'Luffy is an old dog'
];

reset.addEventListener('click', () => {
  const overlay = document.querySelector('#overlay');
  overlay.style.display=  'none';
});


function getRandomPhraseAsArray(arr){
  let randomNumber = Math.floor(Math.random() * phrases.length )
  return phrases[randomNumber];
};

const randomPhrase = getRandomPhraseAsArray(phrases);
const randomPhraseSplit = randomPhrase.split('');

function addPhraseToDisplay(arrayofletters){
  arrayofletters.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    phrase.append(li);
    if (element !== " "){
      li.className = "letter";
    } else {
      li.className = "space";
    }
  })
};
addPhraseToDisplay(randomPhraseSplit);

function checkLetter(button){
  let listItems = document.getElementsByTagName('li');
  let match = null;
  for(let i = 0; i < listItems[i]; i++){
    if(button === listItems.textContent){
        listItems.className = 'show';
        match = button;
    }
  }
  return match;
};

checkLetter();
