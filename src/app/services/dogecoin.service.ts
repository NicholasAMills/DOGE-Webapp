import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { interval, Subscription } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DogecoinService {

  sub : Subscription;
  data : any;

  constructor(private http : HttpClient) { 
    this.sub = interval(60000).subscribe((x=>{
      this.getPrice();
    }))
  }

  getPrice(){
    const url : string = 'https://sochain.com//api/v2/get_price/DOGE/USD';
    this.http.get(url).subscribe((res)=>{
      this.data = res;
      console.log(res);

    })
  }

}
