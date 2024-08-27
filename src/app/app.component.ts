import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ApiService } from './api.service';
import { OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
//MODULES:
//Front: Angular 18, Tailwind, ngx-cookie-service
//Back: Node.js with: express, express-session, path,
//DB: PGSQL


//Yoinked
//Main area
@Component({
  selector: 'app-root',
  template: `   
    <nav class = "bg-gray-500 py-2">
    <div class = "container flex mx-auto justify-around items-center">
      <a href = "" class = "flex basis-1/12 text-white text-2xl font-semibold items-center">
      <img ngSrc="../img/logoNew.png" alt="image" width = "48" height = "48">Packly</a>
      <ul class = "flex space-x-4 content-left basis-8/12">
        <li class = "text-white hover:text-gray-200"><a routerLink="/">Home</a></li>
        <li class = "text-white hover:text-gray-200"><a routerLink="/purchase">Purchase</a></li>
        <li class = "text-white hover:text-gray-200"><a routerLink="/trade">Trade</a></li>
        <li class = "text-white hover:text-gray-200"><a routerLink="/items">Your items</a></li>
        <li class = "text-white hover:text-gray-200"><a routerLink="/account">Your Account</a></li>
        <li class = "text-white hover:text-gray-200"><a routerLink="/login">Login</a></li>
      </ul>
    </div>
</nav>
<router-outlet />
`,
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgOptimizedImage],
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(private api: ApiService){
  }
  ngOnInit(): void {
    
    // this.api.getAccountInfo(1).subscribe(data => {
    //   console.log(data);
    // })
  }
}
