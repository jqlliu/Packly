import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { HomeComponent } from './app.home';
import { PurchaseComponent } from './app.purchase';
import {LoginComponent} from './app.login';
import { SignupComponent } from './app.signup';
import { ItemsComponent } from './app.items';
import { TradeComponent } from './app.trade';
import { AccountComponent } from './app.account';
import { canActivate } from './api.routeguard';
//Next step add the db
export const routes: Routes = [{
    path: '',
    title: 'Home',
    component: HomeComponent
},{
    path: 'purchase',
    title: 'Purchase',
    component: PurchaseComponent,
    canActivate: [canActivate],
    data: { needsLogin: true }
},{
    path: 'login',
    title: 'Login',
    component: LoginComponent,
    canActivate: [canActivate],
    data: { needsLogout: true }
},{
    path: 'signup',
    title: 'Signup',
    component: SignupComponent,
    canActivate: [canActivate],
    data: { needsLogout: true }
},{
    path: 'items',
    title: 'Items',
    component: ItemsComponent,
    canActivate: [canActivate],
    data: { needsLogin: true }
},{
    path: 'trade',
    title: 'Trade',
    component: TradeComponent,
    canActivate: [canActivate],
    data: { needsLogin: true }
},{
    path: 'account',
    title: 'Account',
    component: AccountComponent,
    canActivate: [canActivate],
    data: { needsLogin: true }
},];
