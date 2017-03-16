import { Component } from '@angular/core';
import {BookService} from './book.service';


@Component({
  selector: 'bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls:['./bookdetail.component.css'],
  providers: [BookService]
})
export class BookdetailComponent {
}