import { Component, OnInit, HostBinding } from '@angular/core';
import { Constants } from '../constants.class';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  @HostBinding('class') class = 'stocks';

  public stocksList: string[] = [];

  constructor() { }

  ngOnInit() {
    this.stocksList = JSON.parse(localStorage.getItem('stocks')) || Constants.defaultStockList;
  }

}
