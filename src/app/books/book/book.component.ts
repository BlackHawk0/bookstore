import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../interface/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book = {} as Book;
  @Output() bookEmiter = new EventEmitter<Book>()

  constructor(private cartService: CartService) { }
  inCart: boolean = false;
  addToCart(){
    // this.bookEmiter.emit(this.book)
    this.inCart = true
    this.cartService.add(this.book)
  }

  removeFromCart(){
    this.inCart = false
    this.cartService.remove(this.book)

  }

}
