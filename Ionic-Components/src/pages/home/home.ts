import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ActionSheetPage } from '../action-sheet/action-sheet';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {}

  openActionSheetPage() {
    this.nav.push(ActionSheetPage);
  }
}