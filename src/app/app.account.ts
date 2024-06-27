import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';

//This is a comment
@Component({
  selector: 'app-account',
  template: `
  <p class = "mx-5 my-3">General Info</p>
  <p class = "mx-5 my-3">Username: {{username}}</p>
  <p class = "mx-5 my-3">E-Mail: {{email}}</p>
  <p class = "mx-5 my-3">Current Balance: {{username}}</p>
  <p class = "mx-5 my-3">Account Creation Date: {{username}}</p>

  <p class = "mx-5 my-3 mt-10">Trades</p>
  <p class = "mx-5 my-3">Outgoing Trades: {{username}}</p>
  <p class = "mx-5 my-3">Ingoing Trades: {{username}}</p>

  <p class = "mx-5 my-3 mt-10">Account Stats</p>
  <p class = "mx-5 my-3">Total Cards Owned: {{username}} / {{username}}</p>
  <p class = "mx-5 my-3">Total Cards Collected: {{username}} / {{username}}</p>
  <p class = "mx-5 my-3">Rarity 1 Cards Collected: {{username}} / {{username}}</p>
  <p class = "mx-5 my-3">Rarity 2 Cards Collected: {{username}} / {{username}}</p>
  <p class = "mx-5 my-3">Rarity 3 Cards Collected: {{username}} / {{username}}</p>
  <p class = "mx-5 my-3">Chests Opened: {{username}}</p>
  <p class = "mx-5 my-3">Packs Opened: {{username}}</p>
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class AccountComponent implements OnInit {
  title = 'Account';
  username = '';
  email = '';
  constructor(private api: ApiService){
  }
  ngOnInit(): void {
    this.api.getAccountInfo(1).subscribe( (data: any) => {
      console.log(data.username);
      console.log(data);
      this.username = data.username;
      this.email = data.email;
    })
  }
}
