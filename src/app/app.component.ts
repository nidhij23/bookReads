import { Component } from '@angular/core';
import {AboutusComponent} from './aboutus.component';
import {SignupComponent} from './signup.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer.component';
import {BookService} from './book.service';
import {LoginComponent} from './login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [BookService]
})
export class AppComponent {
 loggedIn=true;
}
