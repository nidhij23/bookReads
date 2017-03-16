import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls:['./my-reviews.component.css']
})
export class MyReviewsComponent {
  userdata;
	constructor(private _bookservice: BookService){
  }
  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this._bookservice.getUser()
                          .subscribe(
                            data => this.userdata = data
                          );
}
  //id:string="nj12";
  //user=JSON.parse(this.userdata);
  

        
}