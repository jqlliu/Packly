import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { HomeComponent } from './app.home';
import { PurchaseComponent } from './app.purchase';
import {LoginComponent} from './app.login';
import { SignupComponent } from './app.signup';
//Next step add the db
export const routes: Routes = [{
    path: '',
    title: 'Home',
   component: HomeComponent
},{
    path: 'purchase',
    title: 'Purchase',
   component: PurchaseComponent
},{
    path: 'login',
    title: 'Login',
   component: LoginComponent
},{
    path: 'signup',
    title: 'Signup',
   component: SignupComponent
},];
