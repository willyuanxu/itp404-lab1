import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		let url = 'https://www.reddit.com/r/javascript.json';
		return $.getJSON(url);
	}
});
