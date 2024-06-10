import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//This is a comment
@Component({
  selector: 'app-home',
  template: `
This page will display account info, like username and money.
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class HomeComponent {
  title = 'Home';

}
