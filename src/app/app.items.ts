import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

//This is a comment
@Component({
  selector: 'app-items',
  template: `
  <p class = "flex flex-col items-center align-middle px-auto py-2">Your Collection</p>
  <div class="flex items-center mb-4 mx-4">
  <label class = "block pr-4 text-right">Sort By:</label>
  <div class="w-2/3"> 
  <select id="sortby" class = "rounded border-2" name="sortby">
    <option value="none"></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  </div>
  </div>
  <div class="rounded-lg border-2 border-black-500 mx-4">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-6 p-4" *ngIf="loaded">
      <div class="bg-white border-2 rounded-lg overflow-hidden relative group" *ngFor="let id of nonZeroIds"
      [ngClass]="{
        'border-gray-500': cardData[id].rarity == 1,
        'border-orange-500': cardData[id].rarity == 2,
        'border-yellow-500': cardData[id].rarity == 3,
        'border-red-500': cardData[id].rarity == 4,
        'border-pink-500': cardData[id].rarity == 5
      }">
        <img [src]="cardImages[id]">
        <div>
          <div class = "text-center opacity-0 group-hover:opacity-100">
            {{ cardData[id].name }} x{{ cardCount[id] }}
          </div>
        </div>
      </div>
    </div>
</div>
`,
  standalone: true,
  styleUrl: './app.component.css',
  imports: [ CommonModule ] 
})



export class ItemsComponent {
  title = 'Items';
  cardCount = [0, 0, 0, 0, 0, 0, 0, 0];
  cardData: any[] = [];
  cardImages: any[] = [];
  nonZeroIds: any[] = [];
  i = 0
  loaded = false;

  constructor(private cookieService: CookieService, private apiService: ApiService) {
    this.getCardCounts();
    this.setNonZeroIds();
    this.setAllCardData();
  }

  getCardCounts() {
    this.apiService.getInventory(this.cookieService.get('sessionKey')).subscribe((data: any) => {
      this.cardCount = data;
    });
  }

  fetchImage(name: string) {
    this.apiService.getImage(name).subscribe((data: Blob) => {
      const reader = new FileReader();
      reader.onload = (load) => {
        return load.target?.result;
      };
      reader.readAsDataURL(data);
    });
  }

  //Set card Image
  setCardImage(name: string) {
    return firstValueFrom(this.apiService.getImage(name)).then((data: Blob) => {
      const reader = new FileReader();
      reader.onload = (load) => {
        this.cardImages.push(load.target?.result);
      };
      reader.readAsDataURL(data);
    });
  }

  //Set card data
  setCardData(id: string) {
    return firstValueFrom(this.apiService.getCardData(id)).then((data: any) => {
      this.cardData.push(data);
    });
  }

  //setAllCardData
  async setAllCardData() {
    for (this.i = 0; this.i < this.cardCount.length; this.i++) {
      await this.setCardData(this.i.toString());
      await this.setCardImage(this.cardData[this.i].image);
    }
    this.loaded = true;
  }

  //I stole this from the internet lol
  numberArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }

  //Code which is mine now
  setNonZeroIds() {
    this.nonZeroIds = this.numberArray(this.cardCount.length).filter(id => this.cardCount[id] > 0);
  }
}
