import { Injectable } from '@angular/core';
import { Jsonp, Http, Headers } from '@angular/http';


// http://hrsabmissdev2.nih.gov:9000/solr/select/?q=*%3A*&version=2.2&start=0&rows=10&indent=on
@Injectable()
export class Solr{
	constructor (private http: Http){}

	findClosest(long, lat){
		let headers = new Headers();

		return this.http
		.get(
			'http://hrsabmissdev2.nih.gov:9000/solr/select/?q=*:*&fq={!geofilt}&sfield=GeoLocation&pt='+lat+','+long+'&d=20&wt=json',
			{headers:headers}
		);
	}
	getLatLong(zip){
		var zipcode = zip;
		return this.http
		.get(
			"http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:"+zipcode+"&sensor=false"
		);
	}
}

/*
TODO

+ once locations have been gotten, plot new geocodes into google-map markers and display result to UI
*/