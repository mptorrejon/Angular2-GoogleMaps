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

// just an interface for type safety.
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
}