const { MarkovMachine, add } = require('./markov')
// console.log(MarkovMachine, 'i am line 2')

test('add should return sum', function () {
    let sum = add(2, 3);
    expect(sum).toEqual(5);
  });

  
test('MarkovMachine.makechains() should return an object with each individual word as a key and the subsequent word as value in an array. The last word should have null as the value', function () {
    sillyString = new MarkovMachine('silly string silly')
    // console.log(sillyString.makeChains())
    expect(sillyString.makeChains()).toEqual({
        silly: ['string', null], 
        string: ['silly']
    });
  });

test('MarkovMachine.words() should not return any empty strings', function () {
    sillyString = new MarkovMachine('silly     string')
    sillyStringKeys = Object.keys(sillyString.makeChains())
    console.log(sillyStringKeys, ' i am silly string keys')
    expect(sillyStringKeys).not.toContain('');
  });

// test('working description', function () {
//     sillyString = new MarkovMachine('silly string is the sauce')
//     sillyStringText = sillyString.makeText(3)
//     console.log(sillyStringText)
//     // expect.sillyStringText.length.toBeLessThanOrEqual(3) 
//   });


