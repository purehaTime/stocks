import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  @Input() stocksList = [];

  constructor() { }

  ngOnInit() {
  }

}
