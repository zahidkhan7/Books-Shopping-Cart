import { Component, OnInit } from '@angular/core';
import { BookItems } from '../book';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {
  books: BookItems[];

  constructor() { }

  ngOnInit(): void {
  }

}
