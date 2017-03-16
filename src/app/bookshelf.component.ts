import { Component } from '@angular/core';
import {BookService} from './book.service';
import { RatingModule } from 'ng2-bootstrap';
import {AuthorFilterPipe} from './authorFilter.pipe';

@Component({
  selector: 'bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls:['./bookshelf.component.css'],
  
  providers: [BookService],
  
})
export class BookshelfComponent {
  data;
	constructor(private _bookservice: BookService){
  }
  ngOnInit() {
    this.getBook();
  }
  getBook() {
    this._bookservice.getBook()
                          .subscribe(
                            data => this.data = data
                          );
  }
  public max: number = 5;
 
  public isReadonly: boolean = true;
}