import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-core/splashScreen';
import { HomePage } from './home/home.page';
 @Component({
   selector: 'app-root',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.scss'],
 })
 export class MyApp {
  rootPage: any= HomePage
  constructor(
    plataform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
plataform.ready().then(( )=>{
statusBar.styleDefault();
splashScreen.hide();

 })
   }
 }
