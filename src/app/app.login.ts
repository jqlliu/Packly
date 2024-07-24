import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

//This is a comment
@Component({
  selector: 'app-login',
  template: `
  <div class = "flex flex-col items-center align-middle px-auto py-12">
<form class="w-full max-w-sm" [formGroup]="submissionForm">
 <div class="flex items-center mb-4">
 <div class = "w-1/3">
 <label class = "block pr-4 text-right">Username:</label>
 </div> 
 <div class="w-2/3"> 
 <input id="username" type="username" class = "rounded border-2" formControlName = "username" name = "username"/>
 </div>
 </div>
<div class="flex items-center mb-4">
 <div class = "w-1/3"> 
 <label class = "block pr-4 text-right">Password:</label></div>
 <div class="w-2/3"> <input id="password" type="password" class = "border-2 rounded" formControlName = "password" name = "password"/></div>
 </div>
 <div class = "flex item-center mb-6">
 <div class = "w-1/3"></div>
 <div class = "w-2/3">
 <button type="submit" class = "border-2 rounded items-right px-4 py-2" [disabled]="!submissionForm.valid" (click) = "login()"> Login </button>
 </div>
 </div>
 </form>
 <label class = "block pr-4 text-right">Dont have an account? <a routerLink="/signup" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Sign up now!</a> </label>
 </div>
`,
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, RouterLink],
  providers: [CookieService],
  styleUrl: './app.component.css'
})

export class LoginComponent {
  constructor(private cookieService: CookieService) { }

  title = 'Login';
  submissionForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  login() {

  }
}
