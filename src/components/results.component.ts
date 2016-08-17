import {Component, Injectable} from '@angular/core';
import {DisplayResults} from '../services/display.service';
import {Solr} from '../services/solr.service';

@Component({
	selector: 'search-results',
	templateUrl: '../../assets/templates/body/results.template.html',
	providers: [DisplayResults, Solr]
}) export class SearchResults{
	results: Array<any>;

	constructor(mydisplay:DisplayResults, mysolr:Solr){
		this.results = mydisplay.resp.data;
		console.log('=================');
		console.log(this.results);
	}



}

