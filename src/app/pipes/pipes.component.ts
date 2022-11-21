import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name:string = 'hello world';
  public city:string = "HYD";
  public dob:string = '07-28-1997';
  public today:Date = new Date ();

  // pipes
  public age:number = 20;
  public price: number = 1000;
  public marks: number = 100;

  public user:any = {name:"Abc", phone:98480}
  

  constructor() { }

  ngOnInit(): void {
  }

}
