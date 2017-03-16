import { Component } from '@angular/core';


@Component({
  selector: 'pagenotfound',
 
  template: `
  <style>
      button{
        float:right;
        border:0px;
        border-radius:2px;
        background-color:#F67F20;
      }
  </style>
  <div class="container mt50 mb100">
    <img src="assets/images/404.jpg" class="img-responsive">
    <button class="btn btn-danger" routerLink='/home'>Go back to home page</button>
  </div>
  `

})
export class pagenotfoundComponent {
}