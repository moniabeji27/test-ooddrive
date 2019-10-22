import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'fl-tree',
	templateUrl: './tree.component.html',
	styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {

	@Input() items: any;
	@Output() itemClick: EventEmitter<string> = new EventEmitter<string>();

	// tslint:disable-next-line: no-empty
	constructor() { }

	// tslint:disable-next-line: no-empty
	ngOnInit() {
	}

	getChildren(id: string) {
		this.itemClick.emit(id);
	}

  onItemClick(event: any){
	  console.log(event);
	  

  }

}
