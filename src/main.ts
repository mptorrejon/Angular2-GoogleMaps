/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Google } from './components/googlemap.component';
// import { AppComponent } from './components/header.component';
// import { CONFIG } from './constants/config';
import { provideLazyMapsAPILoaderConfig, GOOGLE_MAPS_PROVIDERS } from 'googlemaps';

import {JSONP_PROVIDERS, HTTP_PROVIDERS } from '@angular/http';
import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';
bootstrap(
			// AppComponent,
			Google,
			[
				// CONFIG, 
				GOOGLE_MAPS_PROVIDERS,
				JSONP_PROVIDERS,
				HTTP_PROVIDERS,
				// MODAL_DIRECTIVES,
				//if key not used, it thows a warning to use a key
				provideLazyMapsAPILoaderConfig({ apiKey: 'AIzaSyD9eGQnxk3xZysIUfZeBL5c95TcBvqC_N8' })
			] 
);