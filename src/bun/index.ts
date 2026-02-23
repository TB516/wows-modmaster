import { BrowserWindow, Utils } from 'electrobun/bun';
import getMainViewUrl from './get-view-url';

// Create the main application window
const mainWindow = new BrowserWindow({
	title: 'WoWs Modmaster',
	url: await getMainViewUrl(),
	frame: {
		width: 900,
		height: 700,
		x: 200,
		y: 200
	},
	renderer: 'cef'
});

// Quit the app when the main window is closed
mainWindow.on('close', () => {
	Utils.quit();
});

console.log('Svelte app started!');
