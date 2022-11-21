import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GmailService {

  constructor(private _httpclient:HttpClient) { }
  getgmail():Observable<any>{
    return this._httpclient.get("https://jsonplaceholder.typicode.com/todos")
  }
}
