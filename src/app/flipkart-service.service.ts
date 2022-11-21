import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlipkartServiceService {

  constructor(private _httpClient:HttpClient) {}
  getflipkart(){
    return this._httpClient.get("https://fakestoreapi.com/products");
  }
   
}
