import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ActionSheetPage } from '../action-sheet/action-sheet';

import { AlertsPage } from '../alerts/alerts';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) { }

  openActionSheetPage() {
    this.nav.push(ActionSheetPage);
  }

  openAlertsPage() {
    this.nav.push(AlertsPage);
  }
}