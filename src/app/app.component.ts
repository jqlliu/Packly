import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `AMONG Us`,
  standalone: true,
  imports: [RouterOutlet],
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'my-app';

}
