import { Component, Inject } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { CONFIG } from '../constants/config';

interface ProgressBar{
	value: number ;
}

@Component({
	selector: 'my-app',
	templateUrl: '../../assets/templates/body/progressbar.template.html',
	styleUrls: ['../../assets/styles/css/progressbar.css']
})export class AppComponent{
	pb : ProgressBar ;

	constructor() {
		this.pb = {value:0};
	}

	radioValue = false;
	
	angular = false;

	checkbox={
		"response" : "?"
	}
	

	AddVal(){
		console.log( this.pb );
		this.pb.value += 15;
	}
	
};