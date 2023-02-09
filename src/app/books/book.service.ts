import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  constructor() { }

  getBooks(){
    return [
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
      },
      {
        name: 'Beyond the Phoenix Project: The Origins and Evolution of DevOps',
        author: ' David Thomas ',
        image: "https://m.media-amazon.com/images/I/51H4PPcRWeL.jpg",
        amount: 8
      },
      {
        name: 'Python for Everybody: Exploring Data in Python 3 Kindle Edition',
        author: ' Charles R. Severance',
        image: "https://m.media-amazon.com/images/I/51lpFL7BFZL.jpg",
        amount: 9.9
      },
      {
        name: "lean Architecture: A Craftsman's Guide to Software Structure and Design",
        author: ' Robert C. Martin  ',
        image: "https://m.media-amazon.com/images/I/51ev4PLtsML.jpg",
        amount: 34.19
      },
      {
        name: "The Kubernetes Book",
        author: ' Nigel Poulton  ',
        image: "https://m.media-amazon.com/images/I/41sovme3JIL.jpg",
        amount: 31.62
      }
    ]
  }
}
