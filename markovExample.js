var rita = require('rita') 

var markov = new rita.RiMarkov(3)

markov.loadFrom('dracula.txt', function(){
	console.log(markov.generateSentences(3))

})

