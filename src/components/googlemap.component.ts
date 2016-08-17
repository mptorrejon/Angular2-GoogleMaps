import {Component, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  GOOGLE_MAPS_PROVIDERS,
  GOOGLE_MAPS_DIRECTIVES,
  GoogleMapsAPIWrapper,
  SebmGoogleMapInfoWindow
} from 'googlemaps';

// import { Form } from './form.component';
// import {Solr} from '../services/solr.service';
// import {SearchResults} from './results.component';

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable?: boolean;
	phone?: any;
	jobs: Array<string>;
}

@Component({
  selector: 'googleapi',
  directives: [GOOGLE_MAPS_DIRECTIVES/*, Form, SearchResults*/, MODAL_DIRECTIVES, SebmGoogleMapInfoWindow],
  // providers: [Solr],
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
  templateUrl: '../../assets/templates/body/googlemap.template.html'
})export class Google {
	@ViewChild('modal')
	modal: ModalComponent;

	markerObj = {
		phone: "",
		opportunities: []
	}
	// constructor(private solr:Solr){}
	// google maps zoom level
	zoom: number = 8;
	// initial center position for the map
	lat: number = 51.673858;
	lng: number = 7.815982;

	markers: marker[] = [
		{
			lat: 51.673858,
			lng: 7.815982,
			label: '5',
			draggable: true,
			phone: "571-969-8528",
			jobs: ["job1", "job2", "job3"]
		},
		{
			lat: 51.373858,
			lng: 7.215982,
			label: '1',
			draggable: false,
			phone: "571-969-8528",
			jobs: ["job1", "job2", "job3"]
		},
		{
			jobs: ["job1", "job2", "job3"],
			lat: 51.723858,
			lng: 7.895982,
			label: '3',
			draggable: true,
			phone: "571-969-8528"
		}
	];
	clickedMarker(label: string, index: number) {
		console.log(label);
		// console.log(index);
		this.markerObj.phone = label.phone;
		this.markerObj.opportunities = label.jobs;
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
	showDialog(){
		this.markers[0].label = "5";
		// this.modal.open();
	}
}