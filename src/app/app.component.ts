import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
<nav class = "bg-gray-500 py-2">
    <div class = "container flex mx-auto justify-between items-center">
      <a href = "" class = "text-white text-2xl font-semibold">Lmao we might have a logo here later</a>
      <ul class = "flex space-x-4 content-left basis-8/12">
        <li class = "text-white hover:text-gray-200"><a routerLink="/">Home</a></li>
        <li class = "text-white hover:text-gray-200"><a routerLink="/purchase">Purchase</a></li>
        <li class = "text-white hover:text-gray-200"><a href="#">Exchange</a></li>
        <li class = "text-white hover:text-gray-200"><a href="#">Storage</a></li>
      </ul>
    </div>
</nav>
<router-outlet />
`,
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'my-app';

}
