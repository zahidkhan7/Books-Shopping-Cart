import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BookItems } from '../book';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  id : String;
  searchValue: String;
  books: BookItems[];

  constructor( 
    private router : Router,
    private activedRoute: ActivatedRoute,
    private searchService : SearchService
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((value: Params) => {
      this.id = value.id;
      this.searchValue = value.searchValue;
    });
    this.searchService.getBook(this.searchValue,this.id).subscribe((data) => {
      console.log('data::', data);
      this.books = data;
    });
  }

  addToCart(book: BookItems) {
    console.log('addTocart::', book);
    this.searchService.addBookToCart(book);
  }

  purchaseBook(book: BookItems) {
    console.log('purchase book', book);
    this.router.navigate(['/billing'], { state: { ...book } });
  }

}
