import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  customerId: String | null | undefined;

  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.customerId=this._activatedRoute.snapshot.paramMap.get('id'); //not update dynamic++

    this._activatedRoute.paramMap.subscribe(response=>{
      this.customerId=response.get('id');
    },error => {
      alert(error);
    });

  }

}
