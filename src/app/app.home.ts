import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//This is a comment
@Component({
  selector: 'app-home',
  template: `
  <!-- This breaks if the description is too short, oops -->
<div class = "flow-text break-words w-xl max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-3 my-3 text-center">
  Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description
</div>
<div class = "flex items-center justify-center py-2 mx-2">
  <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
    Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals Daily Deals
  </div>
  <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
    Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest Daily Chest
  </div>
</div>
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class HomeComponent {
  title = 'Home';

}
