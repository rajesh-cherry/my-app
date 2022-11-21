import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostApiService } from '../post-api.service';

@Component({
  selector: 'app-facebook-posts',
  templateUrl: './facebook-posts.component.html',
  styleUrls: ['./facebook-posts.component.css']
})
export class FacebookPostsComponent implements OnInit {

  public facebooks:any = [];

  constructor(private _postapiservice:PostApiService) {
    this._postapiservice.getfacebook().subscribe(
      (data:any)=>{
        this.facebooks = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
   }

  ngOnInit(): void {
  }

}
