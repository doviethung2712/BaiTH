import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatebookComponent } from './books/createbook/createbook.component';
import { ListbookComponent } from './books/listbook/listbook.component';
import { UpdatebookComponent } from './books/updatebook/updatebook.component';
import { DetailbookComponent } from './books/detailbook/detailbook.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeletebookComponent } from './books/deletebook/deletebook.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatebookComponent,
    ListbookComponent,
    UpdatebookComponent,
    DetailbookComponent,
    NavbarComponent,
    DeletebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
