import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any = [];

  constructor(private _bankservice:BankService) {
    
    this._bankservice.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      
      },
      (err:any)=>{
        alert("Internal Sever error");
      }
      )
   }

  ngOnInit(): void {
  }

}
