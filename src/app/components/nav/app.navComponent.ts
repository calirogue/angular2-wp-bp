import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'ct-navbar',
  templateUrl: `./nav.html`,
  styleUrls: ['./app.navComponent.css'],
})
export class NavComponent  { 

  constructor(
    public af:AngularFire,
    public flashMessage:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  login(){
    this.af.auth.login();
  }

  logout(){
    this.af.auth.logout();
    this.flashMessage.show('You are logged out',
    {cssClass: 'alert-success', timeout: 3000});
  }

    isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
}



