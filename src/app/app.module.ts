import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ItemComponent } from './components/item/item.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {ActivatedRoute, RouterModule} from "@angular/router";
import { SaveCustomerComponent } from './components/customer/save-customer/save-customer.component';
import { DeleteCustomerComponent } from './components/customer/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './components/customer/update-customer/update-customer.component';
import { SearchCustomerComponent } from './components/customer/search-customer/search-customer.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ItemComponent,
    OrdersComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    SaveCustomerComponent,
    DeleteCustomerComponent,
    UpdateCustomerComponent,
    SearchCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
