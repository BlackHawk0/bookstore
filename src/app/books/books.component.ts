import { Component } from '@angular/core';
import { Book } from '../interface/Book';
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: Book[] = [];

  constructor(private booksService: BookService){ }
  ngOnInit(): void {
    this.books = this.booksService.getBooks()
  }


  cart: Book[] = [];

  iShowing: boolean = true

  addToCart(bookng: Book){
    console.log(bookng)
  }

}
