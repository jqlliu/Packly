import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';

//This is a comment
@Component({
  selector: 'app-trade',
  template: `
  <div class = "flex flex-col items-center align-middle px-auto py-12">
  <form class="w-full max-w-sm" [formGroup]="submissionForm">
  <div class="flex items-center mb-4">
  <div class = "w-1/3">
  <label class = "block pr-4 text-right">Username:</label>
  </div> 
  <div class="w-2/3"> 
  <input id="username" type="username" class = "rounded border-2" formControlName = "username" name = "username"/>
  </div>
  </div>
  <div class="flex items-center mb-4">
  <div class = "w-1/3"> 
  <label class = "block pr-4 text-right">Trade Key:</label></div>
  <div class="w-2/3"> <input id="tradekey" class = "border-2 rounded" formControlName = "tradekey" name = "tradekey"/></div>
  </div>
  <div class = "flex item-center mb-6">
  <div class = "w-1/3"></div>
  <div class = "w-2/3">
  <button type="submit" class = "border-2 rounded items-right px-4 py-2" [disabled]="!submissionForm.valid"> Start Trade </button>
  </div>
  </div>
  </form>
  <label class = "block pr-4 text-right text-xs">Note: A Trade Key is a number in everybody's account, needed to be sent a trade offer.</label>
 </div>
`,
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, RouterLink],
  styleUrl: './app.component.css'
})



export class TradeComponent {
  title = 'Trade';
  submissionForm = new FormGroup({
    username: new FormControl('', Validators.required),
    tradekey: new FormControl('', Validators.required),
  })
}
