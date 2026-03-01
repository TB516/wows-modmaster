import type { ElectrobunConfig } from 'electrobun';

export default {
	app: {
		name: 'Dockyard Mod Manager',
		identifier: 'io.github.dockyardmods.DockyardModManager',
		version: '0.0.1'
	},
	build: {
		// Vite builds to dist/, we copy from there
		copy: {
			'dist/index.html': 'views/mainview/index.html',
			'dist/assets': 'views/mainview/assets'
		},
		mac: {
			bundleCEF: false
		},
		linux: {
			bundleCEF: true
		},
		win: {
			bundleCEF: true
		}
	}
} satisfies ElectrobunConfig;
