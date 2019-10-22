import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiFolderService } from './api-folder.service';

@Component({
	selector: 'oo-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	fileUrl: any;
	files: any;
	afuConfig = {
		uploadAPI: {
			url: 'http://localhost:8080/api/items',
		},
	};
	constructor(private sanitizer: DomSanitizer,
		private folderService: ApiFolderService) {}

	ngOnInit() {
		const data = 'some text';
		const blob = new Blob([data], { type: 'application/octet-stream' });
		this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

		this.folderService.getFiles().subscribe(
				(files) => {
					this.files = files;
					// tslint:disable-next-line: no-console
					
				});
	}
	onItemClick(id: string) {
		this.folderService.getFiles(id).subscribe((files: any) => {
			this.files.items.forEach((element: any) => {
				if (element.id === id) {
					element.items = files.items;
					console.log(element.items);
					
				}
			});
			// tslint:disable-next-line: no-console
			console.log(this.files);
		});
	}
}
