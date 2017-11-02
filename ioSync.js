var fs = require('fs')

var file = fs.readFileSync(process.argv[2], 'utf-8')
var counter = 0
for(var i = 0; i<file.length;i++){
	if(file[i] == '\n'){
		counter+= 1
	}
}
console.log(counter)