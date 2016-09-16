import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthData } from '../../providers/auth-data/auth-data';
import { LoginPage } from '../login/login';
import {ProfilePage} from '../profile/profile';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [AuthData]
})
export class HomePage {
  constructor(public nav: NavController, public authData: AuthData) {

  }

	goToProfile(){
    this.nav.push(ProfilePage);
  }
}
