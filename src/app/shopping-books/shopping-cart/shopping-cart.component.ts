import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookItems } from '../book';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  books: BookItems[];

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.cartBook.subscribe( (result) => (this.books = result)); 
  }

  removeFromCart(id: String) {

  }

}
