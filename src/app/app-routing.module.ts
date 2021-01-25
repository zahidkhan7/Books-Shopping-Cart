import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material.module';
import { BillingComponent } from './shopping-books/billing/billing.component';
import { BookDetailsComponent } from './shopping-books/book-details/book-details.component';
import { MyCollectionComponent } from './shopping-books/my-collection/my-collection.component';
import { SearchComponent } from './shopping-books/search/search.component';
import { ShoppingCartComponent } from './shopping-books/shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'myCollection', component: MyCollectionComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'book-details/:id/:searchValue', component: BookDetailsComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
