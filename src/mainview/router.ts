import { createRouter } from 'sv-router';
import App from './pages/App.svelte';

// eslint-disable-next-line @typescript-eslint/unbound-method
export const { p, navigate, isActive, route } = createRouter({
	'/': App
});
