import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//MAKE THE GUI cus Idont wanna
@Component({
  selector: 'app-purchase',
  template: `
  <p class = "flex flex-col items-center align-middle px-auto py-2">Category A</p>
  <ul class="flow-text break-words w-xl max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-3 my-3 text-center flex flex-col sm:flex-row">
    <li class="inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 1
    </li>
    <li class="inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 2
    </li>
    <li class="inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 3
    </li>
    <li class="inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 4
    </li>
    <li class="inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 5
    </li>
    <li class="inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 6
    </li>
  </ul>
  <p class = "flex flex-col items-center align-middle px-auto py-2">Category B</p>
  <ul class="flow-text break-words w-xl max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-3 my-3 text-center flex flex-col sm:flex-row">
    <li class="inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 1
    </li>
    <li class="inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 2
    </li>
    <li class="inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 3
    </li>
  </ul>
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class PurchaseComponent {
  title = 'Purchase';

}
