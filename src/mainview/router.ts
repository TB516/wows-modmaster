import { createRouter } from 'sv-router';
import Home from './pages/Home.svelte';

export const { p, navigate, isActive, route } = createRouter({
	'/': Home
});
