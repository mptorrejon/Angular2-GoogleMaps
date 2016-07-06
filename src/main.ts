/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/header.component';
import { CONFIG } from './constants/config';

bootstrap( AppComponent, [CONFIG] );