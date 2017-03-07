import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgesPage } from '../pages/badges/badges';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertsPage,
    BadgesPage,
    ButtonsPage,
    CardsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertsPage,
    BadgesPage,
    ButtonsPage,
    CardsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
