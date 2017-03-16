import { Component } from '@angular/core';
import { CarouselModule } from 'ng2-bootstrap';
import { CarouselConfig } from 'ng2-bootstrap';
import {BookService} from './book.service';
@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css'],
    providers: [{provide: CarouselConfig, useValue: {interval: 2000, noPause: true}}]
})
export class HomeComponent {
  data;
	constructor(private _bookservice: BookService){
  }
  ngOnInit() {
    this.getQuotes();
  }
  getQuotes() {
    this._bookservice.getQuotes()
                          .subscribe(
                            data => this.data = data
                          );
  }
}