import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

//This is a comment
@Component({
  selector: 'app-login',
  template: `
<form class="flex flex-col items-center" [formGroup]="submissionForm">
 <p>E-Mail: <input id="email" type="email" class = "border" formControlName = "email" name = "email"/></p>
 <p>Username: <input id="username" type="username" class = "border" formControlName = "username" name = "username"/></p>
 <p>Password: <input id="password" type="password" class = "border" formControlName = "password" name = "password"/></p>
 <button type="submit" class = "border" [disabled]="!submissionForm.valid"> Login </button>
</form>
`,
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule],
  styleUrl: './app.component.css'
})

export class LoginComponent {
  title = 'Login';
  submissionForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
}
