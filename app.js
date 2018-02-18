Vue.component('greeting', {
	template: '<p>Hello, {{ name }} <button v-on:click="changeName">Change Name</button></p>',
	data: function(){
		return {
			name: 'Angger',
		}
	},
	methods: {
		changeName: function(){
			this.name = 'Alien';
		}
	}
});

var one = new Vue({
	el: '#vue-app-one',
	data: {
		input: '',
	},
	methods: {
		submit: function(){
			console.log(this.$refs);
			this.input = this.$refs.input.value;
		}
	},
	computed: {
	}
});

var two = new Vue({
	el: '#vue-app-two',
	data: {
		title: 'App Two',
	},
	methods: {
		changeTitle: function(){
			one.title = 'Title changed!';
		}
	},
	computed: {
		greet: function(){
			return 'Hello from App Two';
		}
	}
});
