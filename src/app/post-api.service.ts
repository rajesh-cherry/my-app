import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private _httpclient:HttpClient) { }

  getfacebook():Observable<any>{
    return this._httpclient.get("https://jsonplaceholder.typicode.com/posts");
  }
}
