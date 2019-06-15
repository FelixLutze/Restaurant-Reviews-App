
if ('serviceWorker' in navigator) {
	console.log('starting sw registration.')
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('sw registration complete.');
	})
	.catch(function() {
		console.log('sw registration failed.');
	});
} else {
	console.log('sw not supported.')
}