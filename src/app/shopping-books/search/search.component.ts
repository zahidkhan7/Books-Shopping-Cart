import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookItems} from '../book';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  books: BookItems[];
  searchvalue: string;

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
  }

  onSearchBook(){
    console.log(this.searchvalue);
    this.searchService.getAllBooks(this.searchvalue)
    .subscribe( (data) => (this.books = data.items));
  }

  bookSelected(id: String) {
    let searchString = this.searchvalue;
    this.router.navigate(['/book-details',id, searchString]);

  }

}
