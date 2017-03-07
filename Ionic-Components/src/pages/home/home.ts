import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ActionSheetPage } from '../action-sheet/action-sheet';

import { AlertsPage } from '../alerts/alerts';

import { BadgesPage } from '../badges/badges';

import { ButtonsPage } from '../buttons/buttons';

import { CardsPage } from '../cards/cards';

import { CheckboxPage } from '../checkbox/checkbox';

import { DateTimePage } from '../datetime/datetime';

import { FabsPage } from '../fabs/fabs';

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

  openCardsPage() {
    this.nav.push(CardsPage);
  }

  openCheckboxPage() {
    this.nav.push(CheckboxPage);
  }

  openDateTimePage() {
    this.nav.push(DateTimePage);
  }

  openFabsPage() {
    this.nav.push(FabsPage);
  }
}