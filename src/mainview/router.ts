import { createRouter } from 'sv-router';
import App from './pages/App.svelte';

export const { p, navigate, isActive, route } = createRouter({
	'/': App
});
