import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../interface/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book = {} as Book;
  @Output() bookEmiter = new EventEmitter<Book>()

  addToCart(){
    this.bookEmiter.emit(this.book)
  }
}
