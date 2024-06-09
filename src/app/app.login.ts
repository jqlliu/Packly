import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

//This is a comment
@Component({
  selector: 'app-login',
  template: `
<label>
 <p>E-Mail: <input id="email" type="email" class = "border"/></p>
 <p>Username: <input id="username" type="username" class = "border"/></p>
 <p>Password: <input id="password" type="password" class = "border"/></p>
 <button class = "border">Login</button>
</label>
`,
  standalone: true,
  imports: [ FormsModule ],
  styleUrl: './app.component.css'
})

export class LoginComponent {
  title = 'Login';
}
