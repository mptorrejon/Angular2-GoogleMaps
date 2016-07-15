import {Injectable} from '@angular/core';
import {Solr} from './solr.service';
import * as rx from 'rxjs'; 

@Injectable()
export class DisplayResults{
	constructor(private mysolr:Solr){}
	zipReady:any = "";
	//resp: Array<any> = [1, 2];

	resp : Array<any> = [2];

	displayResults(zip){
		let that = this;
		
		if(!isNaN(zip)){	
			//IF WE CAN DETERMINE IF INPUT IS zIP, ADD PROPERTY TO INPUT FIELD TO SET
			// MAXLENGHT TO BE 5
			if(zip.length <=4){
			}else{
				this.zipReady = zip.substring(0,5);

				console.log(this.mysolr);
				
				this.mysolr.getLatLong(this.zipReady).subscribe(function(res){
					var resp = JSON.parse(res._body).results[0].geometry.location;
					var long = resp.lng;
					var lat = resp.lat;
					console.log(long+" - "+lat);
					//AFTER GEOCODES HAD BEEN GOTTEN, THEN CALL SOLR SEARCH
					that.mysolr.findClosest(long, lat)
					.subscribe( function(myres){
						console.log( JSON.parse(myres._body).response.docs );
						console.log( that.resp );

						that.resp = 	JSON.parse(myres._body).response.docs;

						console.log( that.resp );
						that.resp = [1, 4, 3, 2];

					});
				});
			}

		}else{
			console.log('It\'s a state | city ');
		}
	}
}