import {Injectable} from '@angular/core';
import {Book} from './book';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BookService{
    constructor(private http:Http){}
    data;
    getBook(){
        return this.http.get('books.json')
        .map(res =>this.data =res.json().books);
    }
    user_data;
    getUser(){
        return this.http.get('books.json')
        .map(res =>this.user_data =res.json().users);
    }
    quotes_data;
    getQuotes(){
        return this.http.get('quotes.json')
            .map(res =>this.user_data =res.json().quotes);
    }
}

