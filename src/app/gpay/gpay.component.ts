import { Component, OnInit } from '@angular/core';
import { IciciService } from '../icici.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GpayComponent implements OnInit {

  public amount:number = 0;


  constructor(private _iciciService:IciciService) { }

  ngOnInit(): void {
  }

  withdraw(){
    this._iciciService.withdraw(this.amount);

  }

  deposit(){
    this._iciciService.deposit(this.amount);
    
  }

  balance(){
    alert(this._iciciService.getBalance())
    
  }

}
