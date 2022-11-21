import { Component, OnInit } from '@angular/core';
import { FlipkartServiceService } from '../flipkart-service.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {

  public products:any = []

  constructor(private _flipkartserviceservice:FlipkartServiceService) {
    this._flipkartserviceservice.getflipkart().subscribe(
      (data:any)=>{
        this.products = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
   }

  ngOnInit(): void {
  }

}
