import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ListComponent } from './products/list/list.component';
import { ProductsPipe } from './products/products.pipe';

import { ProductsService} from './products/products.service';
import { RatingComponent } from './products/rating/rating.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { HomeComponent } from './layouts/home/home.component';
import { EditComponent } from './products/edit/edit.component';
import { LoginComponent } from './auth/login/login.component';

import { AuthService} from './auth/auth.service';
import { CookieService} from 'ngx-cookie-service';
import {AuthGuard} from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductsPipe,
    RatingComponent,
    NavigationComponent,
    HomeComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "list", component: ListComponent, canActivate:[AuthGuard] },
      {path: "home", component: HomeComponent, canActivate:[AuthGuard] },
      {path: "edit/:pCode", component: EditComponent, canActivate:[AuthGuard]},
      {path: "login", component:LoginComponent},
      {path: "", redirectTo: "home", pathMatch: "full" },
      {path: "**", redirectTo: "home" }
    ])
  ],
  providers: [ProductsService, AuthService, AuthGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
