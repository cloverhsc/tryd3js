import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanamaPaperNetworkDirective } from './panama-paper-network.directive';
import { Home2Component } from './home2/home2.component';
import { MylineComponent } from './myline/myline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanamaPaperNetworkDirective,
    Home2Component,
    MylineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
