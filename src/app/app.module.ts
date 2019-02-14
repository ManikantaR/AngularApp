import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductModule } from './products/product.module';
import { ApprouterModule } from './approuter.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent    
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    ProductModule,
    ApprouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
