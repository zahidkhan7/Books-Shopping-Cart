import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';

import { BillingOrder } from '../billingOrder';
import { Book, BookItems } from '../book';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  booksUrl: string = 'https://www.googleapis.com/books/v1/volumes?q=';

  billingOrder: BillingOrder[] = [];

  cartItems: BookItems[] = [];
  public cartCountSubject = new BehaviorSubject(0);
  public cartItemsSubject: BehaviorSubject<BookItems[]> = new BehaviorSubject([]);

  collectionItems: BookItems[] = [];
  public collectionCountSubject = new BehaviorSubject(0);
  public myCollectionSubject : BehaviorSubject<BookItems[]> = new BehaviorSubject([]);

  cartCount = this.cartCountSubject.asObservable();
  cartBook = this.cartItemsSubject.asObservable();

  myCollectionCount = this.collectionCountSubject.asObservable();

  public billingOdrerSubject: BehaviorSubject<
  BillingOrder[]
> = new BehaviorSubject([]);
 
  constructor(private http: HttpClient) {
 
  }

  getAllBooks(value:string): Observable<Book> {
      return this.http.get<Book>(this.booksUrl + value);
  }

  getBook(value: String, id: String): Observable<BookItems[]> {
    return this.http.get<Book>(this.booksUrl + value).pipe(
      map((books) =>
        books.items.filter((item) => {
          if (item.id === id) {
            return true;
          }
        })
      )
    );
  }

  public addBookToCart(book: BookItems) {
    this.cartItems.push(book);
    this.cartCountSubject.next(this.cartItems.length);
    this.cartItemsSubject.next(this.cartItems);
    return;
  }

  public addBookToMyCollection(book: BookItems) {
    this.collectionItems.push(book);
    this.collectionCountSubject.next(this.collectionItems.length);
    this.myCollectionSubject.next(this.collectionItems);
    return;
  }

  public deleteFromCart(id: string) {
      this.cartItems = this.cartItems.filter((item) => item.id !==id);
      this.cartCountSubject.next(this.cartItems.length);
      this.cartItemsSubject.next(this.cartItems);
  }

  public addToMyCollection(billingOrder: BillingOrder , book: BookItems) {
    this.collectionItems.push(book);
    this.collectionCountSubject.next(this.collectionItems.length);
    this.myCollectionSubject.next(this.collectionItems);
    this.billingOrder.push(billingOrder);
    this.billingOdrerSubject.next(this.billingOrder);
  }

 

}
