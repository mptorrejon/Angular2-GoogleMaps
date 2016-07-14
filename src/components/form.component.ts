import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Solr } from '../services/solr.service';

@Component({
	selector: 'form',
	templateUrl: '../../assets/templates/body/form.template.html',
	providers: [Solr]
}) export class Form{
	constructor(private mysolr:Solr){}
	zipReady:any = "";

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
		
		if(!isNaN(event)){
			
			//IF WE CAN DETERMINE IF INPUT IS zIP, ADD PROPERTY TO INPUT FIELD TO SET
			// MAXLENGHT TO BE 5
			if(event.length <=4){
				
			}else{
				this.zipReady = event.substring(0,5);
				this.mysolr.getLatLong(this.zipReady).subscribe(res=>{
					var resp = JSON.parse(res._body).results[0].geometry.location;
					var long = resp.lng;
					var lat = resp.lat;
					console.log(long+" - "+lat);
					//AFTER GEOCODES HAD BEEN GOTTEN, THEN CALL SOLR SEARCH
					this.mysolr.findClosest(long, lat)
					.subscribe( res=>{
						console.log( JSON.parse(res._body).response.docs );
					});
				});
			}

		}else{
			console.log('It\'s a state | city ');
		}

		

		
	}
}