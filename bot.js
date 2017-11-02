var Twit = require('twit')
var Rita = require('rita')
 
var T = new Twit({
  consumer_key:         '8DZQis9C40VHxP4pRIqJoz3b9',
  consumer_secret:      'v3OUP3E4eTHB7SlcmbCx785pWeDWeEhAThEk5VyHgoQ4ryWg2S',
  access_token:         '925892187098963968-A6eK1fgpMkeTdfJojlj0BwfhbnpDnRe',
  access_token_secret:  'QpXIbTLMMBKPF5TQFTrj0Dix20HJMOifAXj9lKjAla7dp'
})

var markov =  new Rita.RiMarkov(2)

markov.loadFrom("http://www.gutenberg.org/cache/epub/345/pg345.txt",function(){
	markov.loadFrom("http://www.gutenberg.org/cache/epub/26/pg26.txt", function(){
		setInterval(function(){
			var myStatus = markov.generateSentences(2)
			myStatus = myStatus[0] + " " + myStatus[1]
			T.post('statuses/update', { status: myStatus }, function(err, data, response) {
	  			console.log(data.text)
			})
		}, 30 * 1000)
	})
})


