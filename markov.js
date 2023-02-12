/** Textual markov chain generator */


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
    console.log('this words', this.words)
    const chain = {}

    const map1 = this.words.map((word,index) => {
      console.log('next value:', this.words[index + 1])
      let nextValue = this.words[index + 1]
      if (nextValue === undefined) {
        nextValue = null
      }
      if (!chain[word]) {
        console.log('i am next value', nextValue)
        chain[word] = [nextValue];
      }
      else {
        console.log(chain[word].push(nextValue))
      }
    });
    console.log(chain)
    return chain
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

// console.log('nodemon is cool')

const silly = new MarkovMachine('silly little hamster who is also dirty and is mean')
const sillyChain = silly.makeChains()
console.log(sillyChain.silly, 'line 55')

console.log(`the silly instance of markovemachines makechains(): ${sillyChain.silly}`)
