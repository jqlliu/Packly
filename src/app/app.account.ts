import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//This is a comment
@Component({
  selector: 'app-account',
  template: `
  <p class = "mx-5 my-5">Username: {{username}}</p>
  <p class = "mx-5 my-5">E-Mail: {{email}}</p>
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class AccountComponent {
  title = 'Account';
  username = 'TestGuy';
  email = 'TestGuy@Test.Com';
}
