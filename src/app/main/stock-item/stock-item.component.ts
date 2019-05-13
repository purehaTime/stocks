import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  @Input() stock = null;
  constructor() { }

  ngOnInit() {
  }

}
