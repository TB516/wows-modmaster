import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [svelte()],
		root: 'src/mainview',
		build: {
			outDir: '../../dist',
			emptyOutDir: true
		},
		server: {
			port: Number.parseInt(env.DEV_SERVER_PORT),
			strictPort: true
		}
	};
});
