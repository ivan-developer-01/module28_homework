const https = require('node:https');

https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
	let data = "";

	res.on("data", (chunk) => {
		data += chunk;
	});

	res.on("end", () => {
		console.log(JSON.parse(data).filter(post => post.userId === 1).length);
	});
});