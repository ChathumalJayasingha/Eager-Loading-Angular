import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./components/customer/customer.component";
import {ItemComponent} from "./components/item/item.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {OrderGuard} from "./guards/order.guard";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {SaveCustomerComponent} from "./components/customer/save-customer/save-customer.component";
import {UpdateCustomerComponent} from "./components/customer/update-customer/update-customer.component";
import {DeleteCustomerComponent} from "./components/customer/delete-customer/delete-customer.component";
import {SearchCustomerComponent} from "./components/customer/search-customer/search-customer.component";

const routes: Routes = [
  {path:"", redirectTo:"/login" ,pathMatch:"full" },
  {path:"customer" ,component:CustomerComponent ,children:[
      {path:"", redirectTo:"/customer/save-customer" ,pathMatch:"full" },
      {path:'save-customer', component:SaveCustomerComponent},
      {path:'update-customer', component:UpdateCustomerComponent},
      {path:'delete-customer/:id', component:DeleteCustomerComponent},
      {path:'search-customer', component:SearchCustomerComponent}
    ]},
  {path:"item",component:ItemComponent},
  {path:"orders",component:OrdersComponent,canActivate:[OrderGuard]},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
