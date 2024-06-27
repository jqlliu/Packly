import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';

//This is a comment
@Component({
  selector: 'app-account',
  template: `
  <p class = "mx-5 my-5">Username: {{username}}</p>
  <p class = "mx-5 my-5">E-Mail: {{email}}</p>
`,
  standalone: true,
  styleUrl: './app.component.css'
})



export class AccountComponent implements OnInit {
  title = 'Account';
  constructor(private api: ApiService){
  }
  ngOnInit(): void {
    this.api.get().subscribe(data => {
      console.log(data);
    });
    this.api.getAccountInfo({id: 1}).subscribe(data => {
      console.log(data);
    })
  }
  username = 'TestGuy';
  email = 'TestGuy@Test.Com';
}
