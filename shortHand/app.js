// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		link: 'http://google.com'
	},
	methods: {
		changeLink: function() {
			this.link = 'http://apple.com'
		}
	}
});