import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule,  NoopAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import {MaterialModule}  from './material/material.module';
import { SearchComponent } from './shopping-books/search/search.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BookDetailsComponent } from './shopping-books/book-details/book-details.component';
import { ShoppingCartComponent } from './shopping-books/shopping-cart/shopping-cart.component';
import { MyCollectionComponent } from './shopping-books/my-collection/my-collection.component';
import { BillingComponent } from './shopping-books/billing/billing.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SearchComponent,
    BookDetailsComponent,
    ShoppingCartComponent,
    MyCollectionComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent,LayoutComponent]
})
export class AppModule { }
