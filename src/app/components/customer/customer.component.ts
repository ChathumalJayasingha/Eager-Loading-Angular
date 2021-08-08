import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  selectedId: any;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  loadCustomerPage(link: string) {

    if(link=="delete-customer"){
      this._router.navigate(['/customer/'+link,this.selectedId]).then();
      return;
    }

      this._router.navigate(['/customer/'+link]).then();
  }
}
