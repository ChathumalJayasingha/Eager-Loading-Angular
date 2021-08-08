import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, UrlTree} from '@angular/router';
import {LoginService} from "../service/login.service";

@Injectable({
  providedIn: 'root'
})
export class OrderGuard implements CanActivate {


  constructor(private _loginService:LoginService,private _router:Router) {
  }

  canActivate():boolean{

    if (this._loginService.isLogin()){
      return true;
    }else {
      // this._router.navigate(['login']);
      this._router.navigateByUrl('/login').then(
        resp=>{
          console.log(resp)
        },error=>{
          console.log(error)
        }
      )

      return false;
    }

  }

}
