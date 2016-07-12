import {Component} from '@angular/core';
import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  GOOGLE_MAPS_PROVIDERS,
  GOOGLE_MAPS_DIRECTIVES,

  GoogleMapsAPIWrapper
} from 'googlemaps';

import { Form } from './form.component';
import {Solr} from '../services/solr.service';


interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable?: boolean;
}

@Component({
  selector: 'googleapi',
  directives: [GOOGLE_MAPS_DIRECTIVES, Form],
  providers: [Solr],
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
  templateUrl: '../../assets/templates/body/googlemap.template.html'
})export class Google {
	constructor(private solr:Solr){}

	// google maps zoom level
	zoom: number = 8;
	// initial center position for the map
	lat: number = 51.673858;
	lng: number = 7.815982;

	markers: marker[] = [
		{
			lat: 51.673858,
			lng: 7.815982,
			label: 'A',
			draggable: true
		},
		{
			lat: 51.373858,
			lng: 7.215982,
			label: 'B',
			draggable: false
		},
		{
			lat: 51.723858,
			lng: 7.895982,
			label: 'C',
			draggable: true
		}
	];
	clickedMarker(label: string, index: number) {
		console.log(label);
		console.log(index);
		// console.log(`clicked the marker: ${label || index}`)
	}
  
	mapClicked($event: MouseEvent) {
		console.log( $event ); 
		this.markers.push({
			lat: $event.coords.lat,
			lng: $event.coords.lng
		});
	}
  
	markerDragEnd(m: marker, $event: MouseEvent) {
		console.log('dragEnd', m, $event);
	}

	centerChange($event){
		console.log($event);
	}
	search(){
		this.solr.findZip()
		.subscribe(function(res	){
			console.log( JSON.parse(res._body).response.docs );
		});
	}
	
	getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
		var R = 6371; // Radius of the earth in km
		var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
		var dLon = this.deg2rad(lon2-lon1); 
		var a = 
			Math.sin(dLat/2) * Math.sin(dLat/2) +
			Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
			Math.sin(dLon/2) * Math.sin(dLon/2)
		; 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km
		return d;
	}

	deg2rad(deg) {
	  return deg * (Math.PI/180)
	}
}
// just an interface for type safety.