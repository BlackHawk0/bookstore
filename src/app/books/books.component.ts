import { Component } from '@angular/core';
import { Book } from '../interface/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  books:Book[] =[
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      amount: 41.86
    },
    {
      name: 'The Pragmatic Programmer',
      author: ' David Thomas ',
      image: "https://m.media-amazon.com/images/I/51IA4hT6jrL._SX380_BO1,204,203,200_.jpg",
      amount: 39
    }
  ]

  cart:Book[]= [];

  iShowing:boolean = true

  addToCart(bookng: Book){
    console.log(bookng)
  }

}
