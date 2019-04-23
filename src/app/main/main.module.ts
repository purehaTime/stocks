import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksComponent } from './stocks/stocks.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { DetailsComponent } from './details/details.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [StocksComponent, StockItemComponent, DetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [StocksComponent, StockItemComponent, DetailsComponent]
})
export class MainModule { }
