import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';

//TODO: Implement routeguard for this page so that it's only accessable when logged in, otherwise direct to login
@Component({
  selector: 'app-account',
  template: `
  <p class = "mx-5 my-3">General Info</p>
  <p class = "mx-5 my-3">Username: {{username}}</p>
  <p class = "mx-5 my-3">E-Mail: {{email}}</p>
  <p class = "mx-5 my-3">Current Balance: {{points}}</p>
  <p class = "mx-5 my-3">Account Creation Date: </p>

  <p class = "mx-5 my-3 mt-10">Trades</p>
  <p class = "mx-5 my-3">Outgoing Trades: </p>
  <p class = "mx-5 my-3">Ingoing Trades: </p>

  <p class = "mx-5 my-3 mt-10">Account Stats</p>
  <p class = "mx-5 my-3">Total Cards Owned:  / </p>
  <p class = "mx-5 my-3">Total Cards Collected:  / </p>
  <p class = "mx-5 my-3">Rarity 1 Cards Collected:  / </p>
  <p class = "mx-5 my-3">Rarity 2 Cards Collected:  / </p>
  <p class = "mx-5 my-3">Rarity 3 Cards Collected:  / </p>
  <p class = "mx-5 my-3">Chests Opened: </p>
  <p class = "mx-5 my-3">Packs Opened: </p>
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class AccountComponent implements OnInit {
  title = 'Account';
  username = 'INIT';
  email = 'INIT';
  points = 0;
  constructor(private cookieService: CookieService, private apiService: ApiService){
  }
  ngOnInit(): void {
    this.apiService.getAccountInfo(1).subscribe( (data: any) => {
      console.log(data.username);
      console.log(data);
      this.username = data.username;
      this.email = data.email;
    })
    this.getPoints();
  }

  getPoints() {
    this.apiService.getPoints(this.cookieService.get('sessionKey')).subscribe((data: any) => { this.points = data.points });
  }
}
