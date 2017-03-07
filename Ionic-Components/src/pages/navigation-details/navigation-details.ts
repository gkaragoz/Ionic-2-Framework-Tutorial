import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'navigation-details.html',
})
export class NavigationDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}