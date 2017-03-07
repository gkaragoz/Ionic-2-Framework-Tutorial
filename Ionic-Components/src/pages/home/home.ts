import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ActionSheetPage } from '../action-sheet/action-sheet';

import { AlertsPage } from '../alerts/alerts';

import { BadgesPage } from '../badges/badges';

import { ButtonsPage } from '../buttons/buttons';

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

  openBadgesPage() {
    this.nav.push(BadgesPage);
  }
  
  openButtonsPage() {
    this.nav.push(ButtonsPage);
  }
}