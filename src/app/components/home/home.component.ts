import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DogecoinService } from 'src/app/services/dogecoin.service';

@Component({
  selector: 'doge-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpClient) { }

  currentPrice : any
  exchange : any

  ngOnInit(): void {
    this.getData()
  }

  getData()
  {
    const url : string = 'https://sochain.com//api/v2/get_price/DOGE/USD';
    this.http.get(url).subscribe((res)=>{
      console.log(res)
      let data = JSON.stringify(res);
      let jsonData = JSON.parse(data);
      this.currentPrice = jsonData.data.prices[0].price;
      this.exchange = jsonData.data.prices[0].exchange;
    })
  }

}
