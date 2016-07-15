import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Solr } from '../services/solr.service';
import { DisplayResults } from '../services/display.service';

@Component({
	selector: 'form',
	templateUrl: '../../assets/templates/body/form.template.html',
	providers: [Solr, DisplayResults]
}) export class Form{
	constructor(private mysolr:Solr, private myresults:DisplayResults){}

	@Input() zip:any;
	@Output() name:string = "Hello";

	search(){
		// this.mysolr.findClosest()
		// .subscribe(function(res){
		// 	console.log( JSON.parse(res._body).response.docs );
		// });

		// console.log(this.zip);
	}
	onComplete(event){
		
		if(event.length >4)
			this.myresults.displayResults(event);
	}
}