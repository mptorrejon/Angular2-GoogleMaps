import {Injectable} from '@angular/core';
import { provideLazyMapsAPILoaderConfig, GOOGLE_MAPS_PROVIDERS } from 'googlemaps';

@Injectable()
export class ClosestZipcode{
	//Solr query
	// http://hrsabmissdev2.nih.gov:9000/solr/select/?q=*:*&fq={!geofilt}&sfield=GeoLocation&pt=44.82907500,-66.99274000&d=125&wt=json

	// https://www.zipcodeapi.com/rest/8zskm0NdS9O9KaDqBj4svhaM5DE2pnZxWsSjtGwlPluAv807s5AXnKKsnovNMulJ/radius.json/22150/10/mile
}