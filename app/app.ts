import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import { SignupPage } from './pages/signup/signup';
import {LoginPage} from './pages/login/login';
import * as firebase from 'firebase';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(public platform: Platform) {

	var config = {
		apiKey: "AIzaSyBXe_xh1zf2w4an_eEekrzOIq7AVDM0EXE",
		authDomain: "tous-a-table.firebaseapp.com",
		databaseURL: "https://tous-a-table.firebaseio.com",
		storageBucket: "tous-a-table.appspot.com",
		messagingSenderId: "493483679098"
	};

	firebase.initializeApp(config);

	firebase.auth().onAuthStateChanged((user) => {
	  if (user) {
	    // If there's a user take him to the home page.
	    this.rootPage = HomePage;
	  } else {
	    // If there's no user logged in send him to the LoginPage
	    this.rootPage = LoginPage;
	  }
	});


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
