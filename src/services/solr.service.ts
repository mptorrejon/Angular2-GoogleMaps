import { Injectable } from '@angular/core';
import { Jsonp, Http, Headers } from '@angular/http';


// http://hrsabmissdev2.nih.gov:9000/solr/select/?q=*%3A*&version=2.2&start=0&rows=10&indent=on
@Injectable()
export class Solr{
	constructor (private http: Http){}

	findZip(){
		let headers = new Headers();

		return this.http
					.get('http://hrsabmissdev2.nih.gov:9000/solr/select/?q=*%3A*&version=2.2&start=0&rows=10&indent=on&wt=json', {headers:headers});
	}

	
}