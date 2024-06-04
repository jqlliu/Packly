import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  template: `
Welcome to brazail
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class HomeComponent {
  title = 'Home';

}
