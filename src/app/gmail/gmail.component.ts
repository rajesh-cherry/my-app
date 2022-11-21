import { Component, OnInit } from '@angular/core';
import { GmailService } from '../gmail.service';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
export class GmailComponent implements OnInit {

  public mails:any = []

  constructor(private _gmailservice:GmailService) {
    this._gmailservice.getgmail().subscribe(
      (data:any)=>
      {
        this.mails = data;
      },
      (err:any)=>{
        alert ("internal server error")
      }
      
    )
   }

  ngOnInit(): void {
  }

}
