import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//This is a comment
@Component({
  selector: 'app-home',
  template: `
  <!-- This breaks if the description is too short, oops -->
<div class = "flow-text break-words w-xl max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-3 my-3 text-center">
  Welcome to [Name]! Check in daily to get some [Currency] from the daily chest! Use your [Currency] to buy packs of cards, which give you a random assortment of cards, based off of the pack. You can also trade these cards with other users in the 'Trade' tab, and see your collection in the 'Your Items' tab. Of course, you'll need to login to start. Make an account now by pressing the 'Login' tab!
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
