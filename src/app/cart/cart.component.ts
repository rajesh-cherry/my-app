import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name: string ="";
  public price: number =0;
  public quantity: number=0;
  
  public carts: any=[
    {name:"pen",price:10,quantity:10},
    {name: "phone",price:"20000",quantity:1}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  addtocart(){
    let cart ={
      name: this.name,
      price: this.price,
      quantity:this.quantity
    }

    this.carts.push(cart)
  }

  delete(i:number){
    this.carts.splice(i,1)
  }

}
