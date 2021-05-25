import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DogecoinService } from 'src/app/services/dogecoin.service';
import { interval, Subscription } from 'rxjs'


@Component({
  selector: 'doge-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpClient) { }

  currentPrice : any
  exchange : any
  sub : Subscription;


  ngOnInit(): void {
    this.getData();
    this.sub = interval(60000).subscribe((x=>{
      this.getData();
    }))
  }

  getData()
  {
    console.log("Updating...")
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
