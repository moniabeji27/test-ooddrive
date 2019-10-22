import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root',
})
export class ApiFolderService {

	constructor(private http: HttpClient) { }

	getFiles(id?: string): Observable<any[]> {
		if (id) {
			return this.http.get<any[]>('/api/items?parentId=' + id);
		} else {
			return this.http.get<any[]>('/api/items/');
		}
	}
}
