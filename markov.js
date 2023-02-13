/** Textual markov chain generator */

const { type } = require('os');

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */



  makeChains() {
    const chain = {}

    const map1 = this.words.map((word,index) => {
      // console.log('next value:', this.words[index + 1])
      let nextValue = this.words[index + 1]
      if (nextValue === undefined) {
        nextValue = null
      }
      if (!chain[word]) {
        // console.log('i am next value', nextValue)
        chain[word] = [nextValue];
      }
      else {
       chain[word].push(nextValue)
      }
    });
    return chain
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    const chain = this.makeChains()
    const keys = Object.keys(chain)
    // console.log(chain)

// randomly select a starting word
    let randoFirstWord = keys[Math.floor(Math.random() * keys.length)]

    let randoWord = chain[randoFirstWord][Math.floor(Math.random() * chain[randoFirstWord].length)]

    let newText = randoFirstWord + ' ' + randoWord
    // console.log(newText)


    for (let i = 0; i < numWords; i++) {
      let nextWord = chain[randoWord][Math.floor(Math.random() * chain[randoWord].length)]
      // console.log(nextWord, 'i am next word')
      // console.log(i)
      if (nextWord !== null) {
        newText = newText.concat(' ', nextWord)
        randoWord = nextWord
      }
      else {
        break
      }
      
    }
    // console.log(newText, 'line 86')
    return newText
    }
  }

function add(x, y) {
    return x + y;
}

module.exports = {
  MarkovMachine,add
};