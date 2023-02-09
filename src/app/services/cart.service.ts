import { Injectable } from '@angular/core';
import { Book } from '../interface/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart: Book[] = []

  add(book:Book){
    this.cart.push(book)
  }

  getCart(){
    return this.cart
  }

  remove(book: Book){
    this.cart = this.cart.filter((b) => b !== book)
  }



}
