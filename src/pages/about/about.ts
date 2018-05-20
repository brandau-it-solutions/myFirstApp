import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  constructor(public alertCtrl: AlertController, public nacCtrl : NavController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Important!',
      subTitle: 'This is my message!',
      buttons: ['OK','CANCEL']
    });
    alert.present();
  }
}
