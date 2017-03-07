import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgesPage } from '../pages/badges/badges';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { DateTimePage } from '../pages/datetime/datetime';
import { FabsPage } from '../pages/fabs/fabs';
import { GesturesPage } from '../pages/gestures/gestures';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertsPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    CheckboxPage,
    DateTimePage,
    FabsPage,
    GesturesPage
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
    CardsPage,
    CheckboxPage,
    DateTimePage,
    FabsPage,
    GesturesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
