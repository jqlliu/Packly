import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//MAKE THE GUI cus Idont wanna
@Component({
  selector: 'app-purchase',
  template: `
  <p class = "flex flex-col items-center align-middle px-auto py-2">Category A</p>
<div class = "flow-text break-words w-xl max-w-max rounded-lg border-2 border-black-500 px-4 py-1 mx-3 my-3 text-center">
  <div class = "flex items-center justify-center py-2 mx-2">
    <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 1
    </div>
    <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 2
    </div>
    <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 3
    </div>
    <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 4
    </div>
    <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 5
    </div>
    <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 6
    </div>
  </div>
</div>
<p class = "flex flex-col items-center align-middle px-auto py-2">Category B</p>
<div class = "flow-text break-words w-xl max-w-max rounded-lg border-2 border-black-500 px-4 py-1 mx-3 my-3 text-center">
  <div class = "flex items-center justify-center py-2 mx-2">
    <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 1
    </div>
    <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 2
    </div>
    <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 3
    </div>
    <div class = "inline-block flow-text break-words w-md max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-2 text-center">
      Item 4
    </div>
  </div>
</div>
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class PurchaseComponent {
  title = 'Purchase';

}
