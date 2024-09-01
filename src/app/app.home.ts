import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { firstValueFrom } from 'rxjs';

//This is a comment
@Component({
  selector: 'app-home',
  template: `
  <!-- This breaks if the description is too short, oops -->
  <div class = "flow-text break-words w-xl max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-3 my-3 text-center">
    Welcome to Packly! Check in daily to get some Coins from the daily chest! Use your Coins to buy packs of cards, which give you a random assortment of cards, based off of the pack. You can also trade these cards with other users in the 'Trade' tab, and see your collection in the 'Your Items' tab. Of course, you'll need to login to start. Make an account now by pressing the 'Login' tab!
  </div>
  <div *ngIf="serverTime">Server Time: {{ serverTime }}</div>
  <div class = "flex w-full">
    <div class="overflow-x-auto break-words w-1/2 rounded-lg border-2 border-black-500 px-4 py-2 mx-2 flex space-x-4">
      <div class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center" *ngFor="let id of numberArray(12)">
        Daily Deal {{ id + 1 }}
      </div>
    </div>
    <div class = "inline-block flow-text break-words w-1/2 rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      <img Src="../img/Chest.png" alt="Daily Chest" width = "500" height = "500" class = "mx-auto">
    </div>
  </div>
`,
  standalone: true,
  styleUrl: './app.component.css',
  imports: [ CommonModule ] 
})



export class HomeComponent {
  title = 'Home';
  serverTime: string | undefined;

  constructor(private apiService: ApiService) {
    this.getServerTime();
  }

  //I stole this from the internet lol
  numberArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }

  getServerTime() {
    this.apiService.getTime().subscribe((data: any) => {
      this.serverTime = data.time;
    });
  }
}
