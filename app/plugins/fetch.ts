export default defineNuxtPlugin({
	name: 'fetch',
	parallel: true,
	setup: nuxtApp => {
		const appFetch = $fetch.create({
			baseURL: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work',
			onRequest({ request, options, error }) {
				options.headers.append('Accept', 'application/json');
			},
		});
		return {
			provide: {
				appFetch,
			},
		};
	},
});
