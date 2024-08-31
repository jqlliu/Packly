import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//MAKE THE GUI cus Idont wanna
@Component({
  selector: 'app-purchase',
  template: `
  <p class = "flex flex-col items-center align-middle px-auto py-2">Category A</p>
  <div class="overflow-x-auto break-words max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 flex space-x-4">
    <div class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center" *ngFor="let id of numberArray(25)">
      Pack {{ id + 1 }}
    </div>
  </div>
  <p class = "flex flex-col items-center align-middle px-auto py-2">Category B</p>
  <div class="overflow-x-auto break-words max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 flex space-x-4">
    <div class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center" *ngFor="let id of numberArray(5)">
      Pack {{ id + 1 }}
    </div>
  </div>
`,
  standalone: true,
  styleUrl: './app.component.css',
  imports: [ CommonModule ] 
})



export class PurchaseComponent {
  title = 'Purchase';

  //I stole this from the internet lol
  numberArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }
}
