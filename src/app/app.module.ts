import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
	imports: [
		BrowserModule,
		AngularFileUploaderModule,
		HttpClientModule,
	],
	declarations: [
		AppComponent,
		TreeComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
