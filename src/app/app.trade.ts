import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//This is a comment
@Component({
  selector: 'app-trade',
  template: `
This page will be used to launch trade offers with other players, as well as accept incoming trade offers.
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class TradeComponent {
  title = 'Trade';

}
