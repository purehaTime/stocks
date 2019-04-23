import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  @HostBinding('class') class = 'stocks';
  constructor() { }

  ngOnInit() {
  }

}
