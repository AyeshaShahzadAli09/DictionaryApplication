const cardBody = document.querySelectorAll('.card-body');
const btn = document.getElementById('button2');
const input = document.getElementById('input');
const display = document.querySelector('#content');
const sound = document.getElementById('sound');
const getWord = (WordSearch) => {
    const promise = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${WordSearch}`);
    promise
    .then((response) => {
      return response.json();
    })
    .then((response) => {
    //   console.log(response); 
    h4.innerText = response[0].word;
    if(response[0].phonetic !== undefined){
      phonetic.innerText = response[0].phonetic; 
    }
    else{
    phonetic.innerText = '';}
   
    sound.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    let url = response[0].phonetics[0].audio; 
    sound.addEventListener('click',() =>{  
      // console.log(url);
      let audio = new Audio(url);
      audio.play();
    })
    partOfSpeech.innerText = response[0].meanings[0].partOfSpeech;
    definition.innerText = response[0].meanings[0].definitions[0].definition;
    if(response[0].meanings[0].synonyms[0] !== undefined){
      synonyms.innerText = "Synonyms: " + response[0].meanings[0].synonyms[0];
    }
    else{
    synonyms.innerText = '';}
    if(response[0].meanings[0].antonyms[0] !== undefined){
      antonyms.innerText = "Antonyms: " + response[0].meanings[0].antonyms[0];
    }
    else{
    antonyms.innerText = '';}
    
    link.href = response[0].sourceUrls[0];
    link.target = '_blank';
    link.innerHTML = 'Source URL';
    })
    .catch((error) => {
      h4.innerText = 'Cannot get the word you search.\n(Hint:Enter  correct input) ';
      phonetic.innerText = '';
      sound.innerHTML = '';
      partOfSpeech.innerText = '';
      definition.innerText = '';
      synonyms.innerText ='';
      antonyms.innerText = '';
      link.innerText = '';
        // console.log(error);
      })
}
btn.addEventListener("click", function(e) { 
     e.preventDefault();
    const word = input.value; 
    getWord(word);
  }); 

//create a h5 for word
const h4   = document.createElement('h4');
//append to display-content div
display.appendChild(h4); 
//create a h5 for word
const phonetic   = document.createElement('h5');
//append to display-content div
display.appendChild(phonetic); 
//  create an element for parts of speech
const partOfSpeech = document.createElement('h5');  
//append part of speech element to dislay-content div
display.appendChild(partOfSpeech);
//create elemnt for definition of part of speech
const definition = document.createElement('p');  ;
//append part of speech element to dislay-content div
display.appendChild(definition);
//create element for synonyms
const synonyms = document.createElement('p');  
//append part of speech element to dislay-content div
display.appendChild(synonyms);
//create element for antonyms
const antonyms = document.createElement('p');  
//append part of speech element to dislay-content div
display.appendChild(antonyms);
// create link for sourceUrls
  // Step 1: Create an anchor element
const link = document.createElement('a');
//append the url to display content div
display.appendChild(link);