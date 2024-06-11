import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  template: `
  <div class = "flex flex-col items-center align-middle px-auto py-12">
<form class="w-full max-w-sm" [formGroup]="submissionForm">
<div class="flex items-center mb-4">
 <div class = "w-1/3"> 
 <label class = "block pr-4 text-right"> E-Mail: </label> 
 </div> 
 <div class="w-2/3"> 
 <input id="email" type="email" class = "rounded border-2" formControlName = "email" name = "email"/>
 </div>
 </div> 
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
 <div class="flex items-center mb-4">
 <div class = "w-1/3"> 
 <label class = "block pr-4 text-right">Confirm Password:</label></div>
 <div class="w-2/3"> <input id="confpassword" type="password" class = "border-2 rounded" formControlName = "confpassword" name = "confpassword"/></div>
 </div>
 <div class = "flex item-center mb-6">
 <div class = "w-1/3"></div>
 <div class = "w-2/3">
 <button type="submit" class = "border-2 rounded items-right px-4 py-2" [disabled]="!submissionForm.valid"> Sign up </button>
 </div>
 </div>
 </form>
 </div>
`,
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule],
  styleUrl: './app.component.css'
})

export class SignupComponent {
  title = 'Signup';
  submissionForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confpassword: new FormControl('', Validators.required),
  })
}
