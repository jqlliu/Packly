import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//This is a comment
@Component({
  selector: 'app-items',
  template: `
  <p class = "flex flex-col items-center align-middle px-auto py-2">Your Collection</p>
  <div class="flex items-center mb-4 mx-4">
  <label class = "block pr-4 text-right">Sort By:</label>
  <div class="w-2/3"> 
  <select id="sortby" class = "rounded border-2" name="sortby">
    <option value="volvo"></option>
    <option value="saab">Option 1</option>
    <option value="fiat">Option 2</option>
    <option value="audi">Option 3</option>
  </select>
  </div>
  </div>
  <ul class="overflow-x-auto break-words w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 flex space-x-4 grid gap-4 grid-cols-3 md:grid-cols-5 lg:grid-cols-8">
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 1
    </li>
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 2
    </li>
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 3
    </li>
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 4
    </li>
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 5
    </li>
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 6
    </li>
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 7
    </li>
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 8
    </li>
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 9
    </li>
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 10
    </li>
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 11
    </li>
    <li class="inline-block flow-text break-words rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 12
    </li>
  </ul>
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class ItemsComponent {
  title = 'Items';

}
