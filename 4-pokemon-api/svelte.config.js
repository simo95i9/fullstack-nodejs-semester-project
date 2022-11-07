import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		files: {
			assets: 'public',
			hooks: {
				client: 'svelte/hooks.client',
				server: 'svelte/hooks.server'
			},
			lib: 'svelte/lib',
			params: 'svelte/params',
			routes: 'svelte/routes',
			serviceWorker: 'svelte/service-worker',
			appTemplate: 'svelte/app.html',
			errorTemplate: 'svelte/error.html'
		}
	}
};

export default config;
