import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';

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
  <div class="rounded-lg border-2 border-black-500">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-6 p-4" *ngIf="loaded">
      <div class="bg-white border-2 rounded-lg overflow-hidden relative group" *ngFor="let id of numberArray(8)"
      [ngClass]="{
        'border-gray-500': cardData[id].rarity == 1,
        'border-orange-500': cardData[id].rarity == 2,
        'border-yellow-500': cardData[id].rarity == 3,
        'border-red-500': cardData[id].rarity == 4,
        'border-pink-500': cardData[id].rarity == 5
      }">
        <img [src]="image">
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
  image: string | ArrayBuffer | null | undefined = null;
  cardCount = [3, 4, 5, 2, 1, 2, 5, 1];
  cardData: any[] = [];
  i = 0
  loaded = false;

  constructor(private apiService: ApiService) {
    this.fetchImage("bambooTP.jpg");
    this.setAllCardData();
  }

  fetchImage(name: string) {
    this.apiService.getImage(name).subscribe((data: Blob) => {
      const reader = new FileReader();
      reader.onload = (load) => {
        this.image = load.target?.result;
      };
      reader.readAsDataURL(data);
    });
  }

  //Set card data
  setCardData(id: string) {
    return firstValueFrom(this.apiService.getCardData(id)).then((data) => {
      this.cardData.push(data);
    });
  }

  //setAllCardData
  async setAllCardData() {
    for (this.i = 0; this.i < this.cardCount.length; this.i++) {
      await this.setCardData(this.i.toString());
    }
    this.loaded = true;
  }

  //I stole this from the internet lol
  numberArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }
}
