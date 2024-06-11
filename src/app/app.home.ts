import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//This is a comment
@Component({
  selector: 'app-home',
  template: `
  <!-- This breaks if the description is too short, oops -->
<div class = "flow-text break-words min-w-xl max-w-max rounded-lg border-2 border-black-500 px-4 py-2 mx-3 my-3 text-center">
  This is a description. Here is another sentence. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another. And another.
</div>
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class HomeComponent {
  title = 'Home';

}
