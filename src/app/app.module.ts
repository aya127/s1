import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreService } from './dashboard/store/store.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule,
    HttpModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },StoreService]
})
export class AppModule {}
