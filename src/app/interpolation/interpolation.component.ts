import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public age:number = 20;
  public name:string = "Rajesh";
  public isindian:boolean = true;
  public ages: number[] = [20,30,40,65,]

  public names: string[] = ["suresh", "varma"];

  public products: any = [
    {name:'pen', price:20},
    {name: 'phone', price:20000},
    {name: 'shirt',price: 1000},
    {name: 'book', price: 100}
  ]
  public academics: any = [
    {qualification: "B.tech", school: "JNTU", year:2019},
    {qualification: "Inter", school: "SR Jr College", year:2015},
    {qualification: "SSC", school: "SR DIGI Schhol", year:2013}
  ]
  public vehicles: any =[
    {vehicle:"Bugatti Beetle",manufacturer:"Kia",model:"V90",type:"Crew Cab Pickup",fuel:"Electric",color:"grey",image:"http://loremflickr.com/640/480/transport",id:"1"},
    {vehicle:"Smart Malibu",manufacturer:"Aston Martin",model:"Malibu",type:"Convertible",fuel:"Diesel",color:"olive",image:"http://loremflickr.com/640/480/animals",id:"2"},
    {vehicle:"Jaguar Silverado",manufacturer:"Hyundai",model:"Spyder",type:"Convertible",fuel:"Gasoline",color:"sky blue",image:"http://loremflickr.com/640/480/business",id:"3"},
    {vehicle:"Honda XTS",manufacturer:"Audi",model:"A8",type:"Wagon",fuel:"Gasoline",color:"gold",image:"http://loremflickr.com/640/480/abstract",id:"4"},
    {vehicle:"Kia 2",manufacturer:"Cadillac",model:"Alpine",type:"Sedan",fuel:"Gasoline",color:"magenta",image:"http://loremflickr.com/640/480/transport",id:"5"},
    {vehicle:"Lamborghini El Camino",manufacturer:"Jeep",model:"Spyder",type:"Hatchback",fuel:"Gasoline",color:"turquoise",image:"http://loremflickr.com/640/480/business",id:"6"},
    {vehicle:"Tesla Durango",manufacturer:"BMW",model:"2",type:"Wagon",fuel:"Diesel",color:"salmon",image:"http://loremflickr.com/640/480/cats",id:"7"},
    {vehicle:"Honda CX-9",manufacturer:"Polestar",model:"Golf",type:"Crew Cab Pickup",fuel:"Electric",color:"tan",image:"http://loremflickr.com/640/480/people",id:"8"},
    {vehicle:"Honda Focus",manufacturer:"Cadillac",model:"Civic",type:"Wagon",fuel:"Diesel",color:"orange",image:"http://loremflickr.com/640/480/nightlife",id:"9"},
    {vehicle:"Chrysler Civic",manufacturer:"Porsche",model:"XC90",type:"Coupe",fuel:"Hybrid",color:"tan",image:"http://loremflickr.com/640/480/nature",id:"10"},
    {vehicle:"Honda V90",manufacturer:"Ford",model:"Model T",type:"Cargo Van",fuel:"Gasoline",color:"plum",image:"http://loremflickr.com/640/480/business",id:"11"}]

  constructor() { }

  ngOnInit(): void {
  }

}
