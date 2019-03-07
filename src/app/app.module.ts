import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PJSComponent } from './pjs/pjs.component';
import { PJComponent } from './pjs/pj/pj.component';
import { PJListComponent } from './pjs/pj-list/pj-list.component';
import { PJService } from './shared/pj.service';

@NgModule({
  declarations: [
    AppComponent,
    PJSComponent,
    PJComponent,
    PJListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PJService],
  bootstrap: [AppComponent]
})
export class AppModule { }
