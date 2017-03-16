import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent {
  public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  public show_Signup=false;
  public  show_Login=true;
  constructor(public fb: FormBuilder) {}
  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);
     
  }
  doSignup(event){
    this.show_Signup=true;
  }
  showSignupForm(event){
    this.show_Signup=true;
    this.show_Login=false;
  }
  showLoginForm(event){
    this.show_Login=true;
    this.show_Signup=false;
    
  }

}
