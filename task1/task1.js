const fs = require('fs');

if (fs.existsSync("result/task-1.txt")) {
	fs.appendFileSync("result/task-1.txt", "\nadditional line");
} else {
	fs.mkdirSync("result");
	fs.writeFileSync("result/task-1.txt", "first line");
	fs.appendFileSync("result/task-1.txt", 
		"\nline #1" +
		"\nline #2" +
		"\nline #3"
	);
	fs.appendFileSync("result/task-1.txt", "\nlast line");
}

// the result after running this script 4 times should be:
/*
first line
line #1
line #2
line #3
last line
additional line
additional line
additional line
*/