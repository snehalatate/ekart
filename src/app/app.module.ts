import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenet/header/header.component';
import { ProductComponent } from './componenet/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './componenet/cart/cart.component';
import { LoginComponent } from './componenet/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
