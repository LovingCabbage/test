import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient, private  _router: Router, private _cookieServise: CookieService) { }

  login(user) {
    this._http.post('http://localhost:2000/authenticate', user).subscribe((data:any) =>{
      if(data.isLoggedIn){
        this._cookieServise.set('token', data.isLoggedIn);
        this._router.navigate(['/home']);
      }
    });
    console.log(user);
  }

  checkLogin() {
    return this._cookieServise.get('token');
  }

}
