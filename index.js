function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  for (var i = 0; i < musicians.length; i++) {
    var sentence = musicians[i] + ' plays ' + instruments[i]
    sentences.push(sentence)
  }
  return sentences
}

function johnLennonFacts(facts) {
  var index = 0;
  while (index < facts.length) {
    facts[index] = facts[index] + '!!!'
    index +=1
  }
  return facts
}

function iLoveTheBeatles(number) {
  var beatleLove = [];
  var i = 0;
  do {
    beatleLove.push('I love the Beatles!')
    i++
  }
  while (i < number);
  return beatleLove
}
