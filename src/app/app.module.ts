import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/alert';
import { CarouselModule } from 'ng2-bootstrap';
import { RatingModule } from 'ng2-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {NavComponent} from './nav.component';
import {BookshelfComponent} from './bookshelf.component';
import {MyBooksComponent} from './mybooks.component';
import {AboutusComponent} from './aboutus.component';
import {SignupComponent} from './signup.component';
import {HomeComponent} from './home.component';
import {AppRoutingModule} from './app-routing.module';
import {MyReviewsComponent} from './my-reviews.component';
import {BookdetailComponent} from './bookdetail.component';
import {FooterComponent} from './footer.component';
import {LoginComponent} from './login.component';
import {pagenotfoundComponent} from './pagenotfound.component';
import { ModalModule } from 'ng2-bootstrap';
 
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BookshelfComponent,
    MyBooksComponent,
    AboutusComponent,
    SignupComponent,
    HomeComponent,
    MyReviewsComponent,
    BookdetailComponent,
    FooterComponent,
    LoginComponent,
    pagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot() ,
    CarouselModule.forRoot(),
    RatingModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
