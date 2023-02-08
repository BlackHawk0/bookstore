import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  name:string = 'Clean Code';
  author:string = 'Robert C Martin';
  image:string = "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg";


  isDisabled:boolean = false

  handleClick(){
    this.isDisabled = true
    alert('yeepy')
  }
  myName:string = ''
  handleInput(event: any){
    this.myName = event.target.value
  }

}
