import { Plugin } from 'obsidian';


const timeNow = () => {
	let d = new Date();
	let ye:any = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
	let mo:any = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
	let da:any = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
	let hh:any = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: false }).format(d);
	hh = hh % 24;
	let mm:any = parseInt(new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(d));
	mm = mm > 9 ? mm : `0${mm}`
	let ss:any = parseInt(new Intl.DateTimeFormat('en', { second: 'numeric', hour12: false }).format(d));
	ss = ss > 9 ? ss : `0${ss}`
	return (`${mo} ${da} ${ye} ${hh}:${mm}:${ss}`);
}

export default class MyPlugin extends Plugin {

	async onload() {

		this.addRibbonIcon('clock', 'Add', async () => {
			//add text to markdown
			let data = await this.app.vault.adapter.read(this.app.workspace.getActiveFile().path);
			this.app.vault.adapter.write(this.app.workspace.getActiveFile().path, `${data}\n\n ${timeNow()}: `);
		});


		this.addStatusBarItem().setText('Status Bar Text');
	}

}

