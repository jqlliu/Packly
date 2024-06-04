import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { HomeComponent } from './app.home';
import { PurchaseComponent } from './app.purchase';
export const routes: Routes = [{
    path: '',
    title: 'Home',
   component: HomeComponent
},{
    path: 'purchase',
    title: 'Purchase',
   component: PurchaseComponent
},];
