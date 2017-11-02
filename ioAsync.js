var fs = require('fs')
fs.readFile(process.argv[2], 'utf-8', function(err, data){
	if(err){return err}
	var counter = 0
	for(var i = 0; i<data.length;i++){
		if(data[i] == '\n'){
			counter+= 1
		}
	}
	console.log(counter)
})

// readFile(){
// 	does stuff 
// 	if(badstuff){err = "some bad stuff happened"}
// 	var filecontents;
// 	callback(err, filecontents)
// }


