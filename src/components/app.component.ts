import { Component, Inject } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { CONFIG } from '../constants/config';

//PRODUCTION USE ONLY
// enableProdMode()

@Component({
	selector: 'my-app',
	templateUrl: '../../templates/header/app.header.html'
})export class AppComponent{
	constructor(){}
};