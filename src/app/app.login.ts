import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

//This is a comment
@Component({
  selector: 'app-login',
  template: `
<label for = "email" class = "border">
  E-Mail: <input id="email" type="text" />
</label>
`,
  standalone: true,
  imports: [ FormsModule ],
  styleUrl: './app.component.css'
})



export class LoginComponent {
  title = 'Login';

}
